/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Medication } from '../types/clinical.ts';
import { NavTab } from './Navbar.tsx';
import { 
  Search, 
  Pill, 
  AlertOctagon, 
  Syringe, 
  ShieldCheck, 
  History, 
  Trash2, 
  ChevronRight,
  Flame,
  Snowflake,
  Info,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

interface HomeViewProps {
  medications: Medication[];
  onSelectMedication: (medication: Medication) => void;
  onTabChange: (tab: NavTab) => void;
  recentMedicationIds: string[];
  onClearRecent: () => void;
  onOpenDocumentInfo: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  medications,
  onSelectMedication,
  onTabChange,
  recentMedicationIds,
  onClearRecent,
  onOpenDocumentInfo
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Real-time as-you-type search
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];

    return medications.filter((m) => {
      const matchName = m.name.toLowerCase().includes(q);
      const matchActive = m.activeIngredient.toLowerCase().includes(q);
      const matchCommercial = m.commercialNames?.some(c => c.toLowerCase().includes(q));
      const matchClass = m.classifications.some(cl => cl.toLowerCase().includes(q));
      return matchName || matchActive || matchCommercial || matchClass;
    });
  }, [searchQuery, medications]);

  // Retrieve full medication objects for recently consulted
  const recentMedications = useMemo(() => {
    return recentMedicationIds
      .map((id) => medications.find((m) => m.id === id))
      .filter((m): m is Medication => Boolean(m))
      .slice(0, 6);
  }, [recentMedicationIds, medications]);

  // Counts for quick badges
  const coldCount = useMemo(() => medications.filter(m => m.temperature === 'FRIO').length, [medications]);
  const heatCount = useMemo(() => medications.filter(m => m.temperature === 'CALOR').length, [medications]);
  const antidoteCount = useMemo(() => medications.filter(m => m.antidote.hasAntidote).length, [medications]);
  const vesicantCount = useMemo(() => medications.filter(m => m.classifications.some(c => c.toLowerCase().includes('vesicante'))).length, [medications]);

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Section with Clinical Authority */}
      <section className="text-center pt-4 sm:pt-8 max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-900 rounded-lg text-xs font-bold tracking-wide uppercase mb-3">
          <span>Hospital Santa Creu i Sant Pau · Basado en Guía CHUA (2019)</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          EXTRAVASACIONES
        </h1>
        <p className="mt-2 text-base sm:text-lg text-slate-600 font-medium max-w-xl mx-auto text-balance">
          Consulta rápida de medicamentos no citostáticos para personal de enfermería en Urgencias.
        </p>

        {/* Central Prominent Search Bar */}
        <div className="relative mt-6 sm:mt-8 max-w-2xl mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-6 h-6 text-purple-500 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar medicamento por nombre o principio activo..."
              className="w-full pl-12 pr-10 py-4 text-base sm:text-lg bg-white border-2 border-slate-300 rounded-2xl shadow-lg focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full w-6 h-6 flex items-center justify-center transition-colors"
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>

          {/* Real-time search dropdown results */}
          {searchQuery.trim().length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-30 max-h-80 overflow-y-auto text-left">
              <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span>{searchResults.length} resultados encontrados</span>
                <span>Clic para ver ficha clínica completa</span>
              </div>

              {searchResults.length > 0 ? (
                <div className="divide-y divide-slate-100">
                  {searchResults.map((med) => {
                    const isCold = med.temperature === 'FRIO';
                    const isHeat = med.temperature === 'CALOR';
                    return (
                      <button
                        key={med.id}
                        onClick={() => {
                          onSelectMedication(med);
                          setSearchQuery('');
                        }}
                        className="w-full px-4 py-3.5 hover:bg-sky-50/80 flex items-center justify-between gap-3 text-left transition-colors group"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 group-hover:text-sky-700 text-base">
                              {med.name}
                            </span>
                            <span className="text-xs text-slate-500">
                              (pág. {med.pdfPage})
                            </span>
                          </div>
                          <div className="text-xs text-slate-600 truncate mt-0.5">
                            <span className="font-medium text-slate-700">{med.activeIngredient}</span>
                            {med.commercialNames && med.commercialNames.length > 0 && (
                              <span className="text-slate-400"> · {med.commercialNames.join(', ')}</span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {isCold && (
                            <span className="px-2 py-0.5 text-xs font-bold bg-sky-100 text-sky-800 rounded-md">
                              ❄️ Frío
                            </span>
                          )}
                          {isHeat && (
                            <span className="px-2 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 rounded-md">
                              🔥 Calor
                            </span>
                          )}
                          {med.antidote.hasAntidote && (
                            <span className="px-2 py-0.5 text-xs font-bold bg-emerald-100 text-emerald-800 rounded-md">
                              Antídoto
                            </span>
                          )}
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="p-6 text-center text-sm text-slate-500">
                  No se encontraron medicamentos para &ldquo;{searchQuery}&rdquo;.
                </div>
              )}
            </div>
          )}
        </div>

        {/* 4 Quick Category Shortcuts / Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs font-medium">
          <span className="text-slate-500">Accesos rápidos:</span>
          <button
            onClick={() => onTabChange('MEDICAMENTOS')}
            className="px-3 py-1 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 text-slate-700 transition-colors"
          >
            ❄️ Necesidad de Frío ({coldCount})
          </button>
          <button
            onClick={() => onTabChange('MEDICAMENTOS')}
            className="px-3 py-1 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 text-slate-700 transition-colors"
          >
            🔥 Necesidad de Calor ({heatCount})
          </button>
          <button
            onClick={() => onTabChange('MEDICAMENTOS')}
            className="px-3 py-1 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 text-slate-700 transition-colors"
          >
            💉 Con Antídoto ({antidoteCount})
          </button>
          <button
            onClick={() => onTabChange('MEDICAMENTOS')}
            className="px-3 py-1 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 text-slate-700 transition-colors"
          >
            ⚠️ Vesicantes ({vesicantCount})
          </button>
        </div>
      </section>

      {/* 4 Main Action Cards */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* 1. Consultar Medicamento */}
          <button
            onClick={() => onTabChange('MEDICAMENTOS')}
            className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-purple-500 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group h-full"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Pill className="w-6 h-6 text-purple-700" />
              </div>
              <div className="text-xs font-bold text-purple-700 uppercase tracking-wider">Catálogo Completo</div>
              <h2 className="text-lg font-bold text-slate-900 mt-1">1. Consultar Medicamento</h2>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                44 fármacos basados en las tablas de la guía CHUA con pautas de frío/calor, antídotos y evolución.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-800">
              <span>Explorar medicamentos</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* 2. Actuación General */}
          <button
            onClick={() => onTabChange('ACTUACION')}
            className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-red-400 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group h-full"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <AlertOctagon className="w-6 h-6 text-red-700" />
              </div>
              <div className="text-xs font-bold text-red-700 uppercase tracking-wider">Protocolo Urgente</div>
              <h2 className="text-lg font-bold text-slate-900 mt-1">2. Actuación General</h2>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Protocolo secuencial de 8 pasos con checklist interactivo para atención inmediata.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-red-700">
              <span>Ver pasos inmediatos</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* 3. Antídotos */}
          <button
            onClick={() => onTabChange('ANTIDOTOS')}
            className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-emerald-400 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group h-full"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Syringe className="w-6 h-6 text-emerald-700" />
              </div>
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Guía Farmacológica</div>
              <h2 className="text-lg font-bold text-slate-900 mt-1">3. Antídotos</h2>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Fichas de los 6 antídotos principales (Hialuronidasa, Fentolamina, Terbutalina, etc.) con dosis exactas.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>Consultar antídotos</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* 4. Medidas de Prevención */}
          <button
            onClick={() => onTabChange('PREVENCION')}
            className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-teal-400 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group h-full"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6 text-teal-700" />
              </div>
              <div className="text-xs font-bold text-teal-700 uppercase tracking-wider">Seguridad del Paciente</div>
              <h2 className="text-lg font-bold text-slate-900 mt-1">4. Medidas Prevención</h2>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Checklist para enfermería: selección de vaso, técnica de canulación, dilución y apósito transparente.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700">
              <span>Checklist prevención</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

        </div>
      </section>

      {/* Recently Consulted Section (Stored in localStorage) */}
      {recentMedications.length > 0 && (
        <section className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                <History className="w-4 h-4 text-sky-600" />
                <span>Medicamentos Consultados Recientemente</span>
              </div>
              <button
                onClick={onClearRecent}
                className="text-xs text-slate-400 hover:text-red-600 flex items-center gap-1 transition-colors"
                title="Borrar historial"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Borrar historial</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {recentMedications.map((med) => (
                <button
                  key={med.id}
                  onClick={() => onSelectMedication(med)}
                  className="p-3 bg-slate-50 hover:bg-sky-50 rounded-xl border border-slate-200 text-left transition-colors flex items-center justify-between group"
                >
                  <div className="min-w-0 pr-2">
                    <div className="font-bold text-xs text-slate-900 group-hover:text-sky-700 truncate">
                      {med.name}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      {med.activeIngredient}
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-1.5">
                    {med.temperature === 'FRIO' && <span className="text-xs">❄️</span>}
                    {med.temperature === 'CALOR' && <span className="text-xs">🔥</span>}
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Institutional Document Control & Source Banner */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="p-4 bg-slate-900 text-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 text-sky-400" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-white">Hospital de la Santa Creu i Sant Pau · Servicio de Farmacia</div>
              <div className="text-slate-400">
                Contenido basado en la Guía del CHUA (2019) · ISBN 978-84-09-11230-2 · En adaptación institucional
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenDocumentInfo}
              className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Control Documental
            </button>
            <button
              onClick={() => onTabChange('VALIDACION')}
              className="px-3 py-1.5 text-xs font-semibold text-sky-300 hover:text-sky-200 bg-sky-950/80 border border-sky-800 rounded-lg transition-colors"
            >
              Revisión Farmacia (44)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
