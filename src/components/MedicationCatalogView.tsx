/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Medication, TemperatureType } from '../types/clinical.ts';
import { 
  Search, 
  Filter, 
  Snowflake, 
  Flame, 
  Syringe, 
  AlertTriangle, 
  ChevronRight, 
  BookOpen, 
  CheckCircle2,
  X
} from 'lucide-react';

interface MedicationCatalogViewProps {
  medications: Medication[];
  onSelectMedication: (medication: Medication) => void;
  initialFilter?: string;
}

type FilterCategory = 'ALL' | 'FRIO' | 'CALOR' | 'ANTIDOTO' | 'VESICANTE';

export const MedicationCatalogView: React.FC<MedicationCatalogViewProps> = ({
  medications,
  onSelectMedication,
  initialFilter = 'ALL'
}) => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterCategory>(initialFilter as FilterCategory);
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');

  useEffect(() => {
    setActiveFilter((initialFilter as FilterCategory) || 'ALL');
  }, [initialFilter]);

  // Available unique initial letters from medications
  const alphabet = useMemo(() => {
    const letters = new Set<string>();
    medications.forEach((m) => {
      letters.add(m.name.charAt(0).toUpperCase());
    });
    return Array.from(letters).sort();
  }, [medications]);

  const filteredMedications = useMemo(() => {
    const q = search.trim().toLowerCase();

    return medications.filter((m) => {
      // Search matching
      const matchesSearch = !q || (
        m.name.toLowerCase().includes(q) ||
        m.activeIngredient.toLowerCase().includes(q) ||
        m.commercialNames?.some(c => c.toLowerCase().includes(q)) ||
        m.classifications.some(cl => cl.toLowerCase().includes(q)) ||
        m.antidote.name.toLowerCase().includes(q)
      );

      // Category matching
      let matchesCategory = true;
      if (activeFilter === 'FRIO') {
        matchesCategory = m.temperature === 'FRIO' || m.temperature === 'AMBOS';
      } else if (activeFilter === 'CALOR') {
        matchesCategory = m.temperature === 'CALOR' || m.temperature === 'AMBOS';
      } else if (activeFilter === 'ANTIDOTO') {
        matchesCategory = m.antidote.hasAntidote;
      } else if (activeFilter === 'VESICANTE') {
        matchesCategory = m.classifications.some(c => 
          c.toLowerCase().includes('vesicante') || c.toLowerCase().includes('necrosante')
        );
      }

      // Letter matching
      const matchesLetter = selectedLetter === 'ALL' || m.name.charAt(0).toUpperCase() === selectedLetter;

      return matchesSearch && matchesCategory && matchesLetter;
    });
  }, [medications, search, activeFilter, selectedLetter]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <span>Basado en Guía CHUA 2019</span>
            <span>·</span>
            <span>Tablas Pág. 6 a 12</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Catálogo de Medicamentos ({medications.length})
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Fichas clínicas completas para consulta inmediata en Urgencias.
          </p>
        </div>

        {/* Filter Badges Count */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white p-1.5 rounded-xl border border-slate-200">
          <span className="px-2 py-1 bg-slate-100 rounded-lg text-slate-800">
            Mostrando {filteredMedications.length} de {medications.length}
          </span>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filtrar por nombre, principio activo, antídoto o clasificación..."
            className="w-full pl-11 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-100 outline-none transition-all text-slate-900"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
              aria-label="Borrar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Buttons (Functional Buttons) */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
          <button
            onClick={() => setActiveFilter('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              activeFilter === 'ALL'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todos ({medications.length})
          </button>

          <button
            onClick={() => setActiveFilter('FRIO')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              activeFilter === 'FRIO'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200'
            }`}
          >
            <span>❄️ Frío Local</span>
          </button>

          <button
            onClick={() => setActiveFilter('CALOR')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              activeFilter === 'CALOR'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200'
            }`}
          >
            <span>🔥 Calor Local</span>
          </button>

          <button
            onClick={() => setActiveFilter('ANTIDOTO')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              activeFilter === 'ANTIDOTO'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
            }`}
          >
            <span>💉 Requiere Antídoto</span>
          </button>

          <button
            onClick={() => setActiveFilter('VESICANTE')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              activeFilter === 'VESICANTE'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-red-50 text-red-800 hover:bg-red-100 border border-red-200'
            }`}
          >
            <span>⚠️ Vesicante / Necrosante</span>
          </button>
        </div>

        {/* Alphabet Navigation Bar */}
        <div className="flex flex-wrap items-center gap-1 pt-2 border-t border-slate-100 text-xs">
          <span className="text-slate-400 font-semibold mr-1">Letra:</span>
          <button
            onClick={() => setSelectedLetter('ALL')}
            className={`px-2 py-0.5 rounded font-bold ${
              selectedLetter === 'ALL'
                ? 'bg-slate-800 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Todas
          </button>
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`w-6 h-6 rounded flex items-center justify-center font-bold ${
                selectedLetter === letter
                  ? 'bg-sky-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Medications Grid / Cards */}
      {filteredMedications.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredMedications.map((med) => {
            const isCold = med.temperature === 'FRIO';
            const isHeat = med.temperature === 'CALOR';
            const isBoth = med.temperature === 'AMBOS';
            const isVesicant = med.classifications.some(c => 
              c.toLowerCase().includes('vesicante') || c.toLowerCase().includes('necrosante')
            );
            const isVasopressor = med.classifications.some(c => 
              c.toLowerCase().includes('vasopresor')
            );

            return (
              <button
                key={med.id}
                onClick={() => onSelectMedication(med)}
                className="bg-white p-4 rounded-xl border border-slate-200 hover:border-sky-500 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between group h-full"
              >
                <div>
                  {/* Top Metadata Bar */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                      Pág. {med.pdfPage}
                    </span>

                    {/* Temperature Pill */}
                    {isCold && (
                      <span className="text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded flex items-center gap-1">
                        ❄️ Frío local
                      </span>
                    )}
                    {isHeat && (
                      <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded flex items-center gap-1">
                        🔥 Calor local
                      </span>
                    )}
                    {isBoth && (
                      <span className="text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                        ❄️/🔥 Frío o calor
                      </span>
                    )}
                    {med.temperature === 'NO_ESPECIFICADO' && (
                      <span className="text-xs text-slate-400">
                        General
                      </span>
                    )}
                  </div>

                  {/* Medication Title */}
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {med.name}
                  </h3>

                  <div className="text-xs text-slate-600 mt-0.5 line-clamp-1">
                    <span className="font-semibold text-slate-700">Principio activo: </span>
                    <span>{med.activeIngredient}</span>
                  </div>

                  {/* Classifications */}
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {isVesicant && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">
                        Vesicante
                      </span>
                    )}
                    {isVasopressor && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                        Vasopresor
                      </span>
                    )}
                    {med.antidote.hasAntidote && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                        💉 {med.antidote.name.split(' ')[0]}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer preview */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-800">
                  <span className="text-slate-500 font-medium text-[11px] truncate max-w-[190px]">
                    {med.antidote.hasAntidote ? `Antídoto: ${med.antidote.name}` : 'Medidas generales'}
                  </span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Ver ficha</span>
                    <ChevronRight className="w-4 h-4 text-sky-600" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
          <AlertTriangle className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No se encontraron medicamentos</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Ningún medicamento coincide con los filtros seleccionados ({search ? `"${search}"` : ''} en categoría {activeFilter}).
          </p>
          <button
            onClick={() => {
              setSearch('');
              setActiveFilter('ALL');
              setSelectedLetter('ALL');
            }}
            className="px-4 py-2 text-xs font-bold text-sky-700 bg-sky-50 rounded-lg border border-sky-200 hover:bg-sky-100"
          >
            Restablecer todos los filtros
          </button>
        </div>
      )}
    </div>
  );
};
