/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Medication } from '../types/clinical.ts';
import { 
  FileSpreadsheet, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  Printer, 
  Download, 
  BookOpen,
  Filter,
  ExternalLink
} from 'lucide-react';

interface ValidationTableViewProps {
  medications: Medication[];
  onSelectMedication: (medication: Medication) => void;
}

export const ValidationTableView: React.FC<ValidationTableViewProps> = ({
  medications,
  onSelectMedication
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'VALIDADO' | 'PENDIENTE'>('ALL');
  const [pageFilter, setPageFilter] = useState<string>('ALL');

  const filtered = useMemo(() => {
    return medications.filter((m) => {
      const matchSearch =
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.activeIngredient.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.antidote.name.toLowerCase().includes(searchTerm.toLowerCase());

      const matchStatus =
        statusFilter === 'ALL' ||
        (statusFilter === 'VALIDADO' && m.validationStatus === 'VALIDADO_PDF') ||
        (statusFilter === 'PENDIENTE' && m.validationStatus === 'PENDIENTE_VALIDACION_FARMACIA');

      const matchPage =
        pageFilter === 'ALL' || String(m.pdfPage) === pageFilter;

      return matchSearch && matchStatus && matchPage;
    });
  }, [medications, searchTerm, statusFilter, pageFilter]);

  const validatedCount = medications.filter(m => m.validationStatus === 'VALIDADO_PDF').length;
  const pendingCount = medications.filter(m => m.validationStatus === 'PENDIENTE_VALIDACION_FARMACIA').length;

  const handlePrint = () => {
    window.print();
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Medicamento', 'Principio Activo', 'Temperatura', 'Antidoto', 'Dosis Antidoto', 'Pagina PDF', 'Estado Validacion', 'Notas'];
    const rows = medications.map(m => [
      `"${m.id}"`,
      `"${m.name.replace(/"/g, '""')}"`,
      `"${m.activeIngredient.replace(/"/g, '""')}"`,
      `"${m.temperature}"`,
      `"${(m.antidote.hasAntidote ? m.antidote.name : 'Sin antídoto').replace(/"/g, '""')}"`,
      `"${(m.antidote.dose || m.antidote.dilution || '').replace(/"/g, '""')}"`,
      `"${m.pdfPage}"`,
      `"${m.validationStatus}"`,
      `"${(m.validationNotes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `validacion_extravasaciones_santpau_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700">
            <span>Control de Calidad Farmacéutica</span>
            <span>·</span>
            <span>Auditoría de Transcripción</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 flex items-center gap-2.5">
            <FileSpreadsheet className="w-7 h-7 text-sky-700 shrink-0" />
            <span>Tabla de Revisión y Validación Clínica</span>
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Inventario completo de los 44 medicamentos (basado en la Guía CHUA 2019, págs. 6-12) para revisión, cotejo y adaptación por el Servicio de Farmacia del Hospital de la Santa Creu i Sant Pau.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors shadow-xs"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Exportar CSV</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors shadow-xs"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir Informe</span>
          </button>
        </div>
      </div>

      {/* Validation Status Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase">Total Medicamentos</div>
            <div className="text-2xl font-black text-slate-900 mt-0.5">{medications.length}</div>
          </div>
          <BookOpen className="w-6 h-6 text-slate-400" />
        </div>

        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-emerald-800 uppercase">Validados frente a PDF</div>
            <div className="text-2xl font-black text-emerald-900 mt-0.5">{validatedCount} / {medications.length}</div>
          </div>
          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
        </div>

        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-amber-800 uppercase">Revisiones Notificadas</div>
            <div className="text-2xl font-black text-amber-900 mt-0.5">{pendingCount}</div>
            <div className="text-[10px] text-amber-700 mt-0.5 font-medium">Discrepancia tipográfica Pentamidina (F vs calor)</div>
          </div>
          <AlertTriangle className="w-6 h-6 text-amber-600" />
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por fármaco, principio activo o antídoto..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-sky-600 outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 font-semibold">Página PDF:</span>
          <select
            value={pageFilter}
            onChange={(e) => setPageFilter(e.target.value)}
            className="px-2 py-1 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 outline-none"
          >
            <option value="ALL">Todas las páginas (6-12)</option>
            <option value="6">Página 6 (Aciclovir - Anfotericina)</option>
            <option value="7">Página 7 (Arginina - Gluconato Cálcico)</option>
            <option value="8">Página 8 (Cloxacilina - Dopamina)</option>
            <option value="9">Página 9 (Doxiciclina - Inmunoglobulinas)</option>
            <option value="10">Página 10 (Lípidos - Noradrenalina)</option>
            <option value="11">Página 11 (NPT - Potásico Cloruro)</option>
            <option value="12">Página 12 (Prometazina - Vasopresina)</option>
          </select>

          <span className="text-slate-400 font-semibold ml-2">Estado:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as 'ALL' | 'VALIDADO' | 'PENDIENTE')}
            className="px-2 py-1 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 outline-none"
          >
            <option value="ALL">Todos los estados</option>
            <option value="VALIDADO">Solo Validados (43)</option>
            <option value="PENDIENTE">Con Observación (1)</option>
          </select>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-3 w-12 text-center">Pág.</th>
                <th className="py-3 px-4">Medicamento / Principio Activo</th>
                <th className="py-3 px-3">Propiedades Tisulares</th>
                <th className="py-3 px-3 text-center">Temperatura</th>
                <th className="py-3 px-4">Antídoto y Dilución Oficial</th>
                <th className="py-3 px-4">Evolución Documentada</th>
                <th className="py-3 px-3 text-center">Estado</th>
                <th className="py-3 px-3 text-center">Ficha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filtered.map((med, index) => {
                const isCold = med.temperature === 'FRIO';
                const isHeat = med.temperature === 'CALOR';
                const isBoth = med.temperature === 'AMBOS';

                return (
                  <tr 
                    key={med.id} 
                    className={`hover:bg-sky-50/50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                    }`}
                  >
                    {/* Page */}
                    <td className="py-3 px-3 text-center font-mono font-bold text-slate-500">
                      {med.pdfPage}
                    </td>

                    {/* Drug Name & Active */}
                    <td className="py-3 px-4 font-medium">
                      <div className="font-extrabold text-slate-900 text-sm">{med.name}</div>
                      <div className="text-slate-500 text-[11px]">{med.activeIngredient}</div>
                    </td>

                    {/* Classifications */}
                    <td className="py-3 px-3">
                      <div className="flex flex-wrap gap-1 max-w-[180px]">
                        {med.classifications.map((c, i) => (
                          <span 
                            key={i}
                            className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                              c.toLowerCase().includes('vesicante') || c.toLowerCase().includes('necrosante')
                                ? 'bg-red-50 text-red-700'
                                : c.toLowerCase().includes('vasopresor')
                                ? 'bg-amber-50 text-amber-800'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Temperature */}
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      {isCold && (
                        <span className="px-2 py-0.5 bg-sky-100 text-sky-800 rounded font-bold">
                          ❄️ Frío (F)
                        </span>
                      )}
                      {isHeat && (
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-bold">
                          🔥 Calor (C)
                        </span>
                      )}
                      {isBoth && (
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-800 rounded font-semibold">
                          ❄️/🔥 Ambos
                        </span>
                      )}
                      {med.temperature === 'NO_ESPECIFICADO' && (
                        <span className="text-slate-400 text-[11px]">
                          No especificado
                        </span>
                      )}
                    </td>

                    {/* Antidote */}
                    <td className="py-3 px-4">
                      {med.antidote.hasAntidote ? (
                        <div>
                          <span className="font-bold text-emerald-900">{med.antidote.name}</span>
                          {med.antidote.dose && (
                            <span className="block text-slate-600 font-mono text-[11px]">{med.antidote.dose}</span>
                          )}
                          {med.antidote.dilution && (
                            <span className="block text-slate-500 text-[10px] truncate max-w-[220px]" title={med.antidote.dilution}>
                              {med.antidote.dilution}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-slate-400 italic">Sin antídoto específico</span>
                      )}
                    </td>

                    {/* Resolution */}
                    <td className="py-3 px-4 text-[11px] text-slate-600 max-w-[200px]">
                      <div className="line-clamp-2" title={med.resolution.expectedText}>
                        {med.resolution.expectedText}
                      </div>
                      {med.resolution.complications && (
                        <span className="text-red-700 font-medium block truncate mt-0.5" title={med.resolution.complications}>
                          ⚠️ {med.resolution.complications}
                        </span>
                      )}
                    </td>

                    {/* Status */}
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      {med.validationStatus === 'VALIDADO_PDF' ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Validado</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-300 px-2 py-0.5 rounded" title={med.validationNotes}>
                          <AlertTriangle className="w-3 h-3 text-amber-600" />
                          <span>Observación</span>
                        </span>
                      )}
                    </td>

                    {/* Open Sheet */}
                    <td className="py-3 px-3 text-center">
                      <button
                        onClick={() => onSelectMedication(med)}
                        className="px-2.5 py-1 text-xs font-bold text-sky-700 hover:text-white bg-sky-50 hover:bg-sky-600 rounded-lg border border-sky-200 transition-colors"
                      >
                        Abrir
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Audit Note & Methodology */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-1.5">
        <div className="font-bold text-slate-800 uppercase tracking-wider">
          Metodología de Validación frente al PDF Original
        </div>
        <p>
          Cada uno de los 44 registros está basado en las páginas 6 a 12 de la <em>&ldquo;Guía de manejo en la extravasación de medicamentos no citostáticos&rdquo;</em> (1ª edición, 2019, ISBN 978-84-09-11230-2, Servicio de Farmacia del Complejo Hospitalario Universitario de Albacete), como punto de partida para su revisión y adaptación al Hospital de la Santa Creu i Sant Pau.
        </p>
      </div>
    </div>
  );
};
