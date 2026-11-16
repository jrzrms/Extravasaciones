/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PREVENTION_CHECKLIST } from '../data/protocolsData.ts';
import { 
  ShieldCheck, 
  CheckCircle2, 
  RotateCcw, 
  AlertCircle,
  Eye,
  Syringe,
  Layers,
  HeartPulse
} from 'lucide-react';

export const PreventionView: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const resetChecks = () => {
    setCheckedIds([]);
  };

  const percent = Math.round((checkedIds.length / PREVENTION_CHECKLIST.length) * 100);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'PREPARACION':
        return <Syringe className="w-4 h-4 text-sky-600" />;
      case 'SELECCION_VIA':
        return <Layers className="w-4 h-4 text-emerald-600" />;
      case 'ADMINISTRACION':
        return <ShieldCheck className="w-4 h-4 text-amber-600" />;
      case 'MONITORIZACION':
        return <Eye className="w-4 h-4 text-purple-600" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-slate-600" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 pb-24">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
          <span>Basado en Guía CHUA 2019 · Página 4</span>
          <span>·</span>
          <span>Seguridad del Paciente · Sant Pau</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 flex items-center gap-2.5">
          <ShieldCheck className="w-7 h-7 text-teal-600 shrink-0" />
          <span>Checklist de Prevención para Enfermería</span>
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          &ldquo;La medida más importante en el manejo de la extravasación es la prevención&rdquo; (Basado en Guía CHUA).
        </p>
      </div>

      {/* Progress Box */}
      <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Verificación Previa a la Infusión
          </div>
          <div className="text-sm font-bold text-slate-900 mt-0.5">
            {checkedIds.length} de {PREVENTION_CHECKLIST.length} medidas de prevención completadas ({percent}%)
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-28 sm:w-44 bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-teal-600 h-full transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>

          {checkedIds.length > 0 && (
            <button
              onClick={resetChecks}
              className="p-1.5 text-xs text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              title="Reiniciar lista"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Checklist items */}
      <div className="space-y-3">
        {PREVENTION_CHECKLIST.map((item, idx) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                isChecked
                  ? 'bg-teal-50/70 border-teal-300 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-teal-300 shadow-xs'
              }`}
            >
              <div className="pt-0.5 shrink-0">
                <div
                  className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs transition-colors ${
                    isChecked
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-100 text-slate-600 border border-slate-300'
                  }`}
                >
                  {isChecked ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 flex items-center gap-1">
                    {getCategoryIcon(item.category)}
                    <span>{item.category.replace('_', ' ')}</span>
                  </span>
                </div>

                <h3 className={`text-base font-bold tracking-tight ${
                  isChecked ? 'text-teal-950 line-through opacity-85' : 'text-slate-900'
                }`}>
                  {item.title}
                </h3>

                <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                  isChecked ? 'text-teal-800' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Practical clinical pearls */}
      <div className="p-5 bg-slate-900 text-slate-200 rounded-2xl border border-slate-800 space-y-3">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <HeartPulse className="w-4 h-4 text-teal-400" />
          <span>Claves Prácticas en Urgencias</span>
        </h3>
        <ul className="text-xs space-y-1.5 text-slate-300 pl-4 list-disc leading-relaxed">
          <li>
            <strong>Apósito transparente:</strong> Facilita la detección antes de que el volumen extravasado supere los 5-10 ml.
          </li>
          <li>
            <strong>Preguntar por dolor o sensación de quemazón:</strong> Es el síntoma inicial más sensible de fuga perivascular.
          </li>
          <li>
            <strong>Evitar la zona antecubital y flexuras</strong> para perfusiones continuas de vasopresores o electrolitos hiperosmolares.
          </li>
        </ul>
      </div>
    </div>
  );
};
