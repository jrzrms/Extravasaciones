/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MASTER_ANTIDOTES } from '../data/antidotesData.ts';
import { Medication } from '../types/clinical.ts';
import { 
  Syringe, 
  ChevronRight, 
  AlertCircle, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Search
} from 'lucide-react';

interface AntidotesViewProps {
  medications: Medication[];
  onSelectMedication: (medication: Medication) => void;
}

export const AntidotesView: React.FC<AntidotesViewProps> = ({
  medications,
  onSelectMedication
}) => {
  const [selectedAntidoteId, setSelectedAntidoteId] = useState<string>('all');
  const [searchAntidote, setSearchAntidote] = useState<string>('');

  const filteredAntidotes = MASTER_ANTIDOTES.filter((ant) => {
    if (selectedAntidoteId !== 'all' && ant.id !== selectedAntidoteId) return false;
    if (!searchAntidote) return true;
    const q = searchAntidote.toLowerCase();
    return (
      ant.name.toLowerCase().includes(q) ||
      ant.mechanism.toLowerCase().includes(q) ||
      ant.indicatedMedications.some(mId => mId.includes(q))
    );
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6 pb-24">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
          <span>Basado en Guía CHUA 2019 · Página 5</span>
          <span>·</span>
          <span>Servicio de Farmacia · Sant Pau</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 flex items-center gap-2.5">
          <Syringe className="w-7 h-7 text-emerald-600 shrink-0" />
          <span>Principales Antídotos para Extravasaciones</span>
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Dosis, dilución, vías de administración y medicamentos indicados (basado en la guía de referencia, adaptado para Hospital Santa Creu i Sant Pau).
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setSelectedAntidoteId('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
            selectedAntidoteId === 'all'
              ? 'bg-slate-900 text-white'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Todos ({MASTER_ANTIDOTES.length})
        </button>

        {MASTER_ANTIDOTES.map((ant) => (
          <button
            key={ant.id}
            onClick={() => setSelectedAntidoteId(ant.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              selectedAntidoteId === ant.id
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-emerald-50 border border-slate-200'
            }`}
          >
            {ant.name}
          </button>
        ))}
      </div>

      {/* Antidote Cards */}
      <div className="space-y-6">
        {filteredAntidotes.map((antidote) => {
          // Resolve indicated medications objects
          const relatedMeds = antidote.indicatedMedications
            .map((mId) => medications.find((m) => m.id === mId))
            .filter((m): m is Medication => Boolean(m));

          return (
            <div
              key={antidote.id}
              className="bg-white rounded-2xl border-2 border-slate-200 shadow-sm overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-5 bg-gradient-to-r from-emerald-900 to-teal-900 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Syringe className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-white">
                      {antidote.name}
                    </h2>
                    <span className="text-xs text-emerald-200">
                      Presentación: {antidote.presentation}
                    </span>
                  </div>
                </div>

                <span className="self-start sm:self-center px-2.5 py-1 bg-white/20 rounded-md text-xs font-mono font-medium">
                  Basado en Guía CHUA Pág. {antidote.pdfPage}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-5">
                {antidote.availabilityNotice && (
                  <div className="p-4 bg-amber-50 border-2 border-amber-300 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-amber-950">
                    <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold uppercase tracking-wide text-amber-900 block text-xs">
                        Aviso de Disponibilidad Hospitalaria
                      </span>
                      <span className="font-bold text-amber-950">
                        {antidote.availabilityNotice}
                      </span>
                    </div>
                  </div>
                )}

                {/* Mechanism Box */}
                <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-950">
                  <span className="font-bold uppercase tracking-wider text-emerald-900 block text-xs mb-1">
                    Mecanismo de Acción
                  </span>
                  <p className="leading-relaxed">{antidote.mechanism}</p>
                </div>

                {/* Technical Specs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Dosis Oficial
                    </span>
                    <span className="font-bold text-slate-900">{antidote.dose}</span>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Vía de Administración
                    </span>
                    <span className="font-bold text-slate-900">{antidote.route}</span>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Preparación y Dilución
                    </span>
                    <span className="font-medium text-slate-800 leading-relaxed">{antidote.preparation}</span>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Técnica de Aplicación
                    </span>
                    <span className="font-medium text-slate-800 leading-relaxed">{antidote.technique}</span>
                  </div>
                </div>

                {/* Indicated Medications List with click to open */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Medicamentos Indicados en la Guía ({relatedMeds.length})
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Clic en un fármaco para consultar su ficha
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {relatedMeds.map((med) => (
                      <button
                        key={med.id}
                        onClick={() => onSelectMedication(med)}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-emerald-100 text-slate-800 hover:text-emerald-900 border border-slate-200 hover:border-emerald-300 transition-colors flex items-center gap-1.5 group"
                      >
                        <span>{med.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
