/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GENERAL_PROTOCOL_STEPS, RISK_FACTORS } from '../data/protocolsData.ts';
import { 
  AlertOctagon, 
  CheckCircle2, 
  RotateCcw, 
  ShieldAlert, 
  Flame, 
  Snowflake,
  ChevronDown,
  ChevronUp,
  Activity
} from 'lucide-react';

interface GeneralProtocolViewProps {
  onGoToCatalog: () => void;
}

export const GeneralProtocolView: React.FC<GeneralProtocolViewProps> = ({
  onGoToCatalog
}) => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showRiskFactors, setShowRiskFactors] = useState<boolean>(false);

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepNumber)
        ? prev.filter((s) => s !== stepNumber)
        : [...prev, stepNumber]
    );
  };

  const resetChecklist = () => {
    setCompletedSteps([]);
  };

  const progressPercent = Math.round(
    (completedSteps.length / GENERAL_PROTOCOL_STEPS.length) * 100
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600">
            <span>Basado en Guía CHUA 2019 · Página 4</span>
            <span>·</span>
            <span>Adaptación Hospital Santa Creu i Sant Pau</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 flex items-center gap-2.5">
            <AlertOctagon className="w-7 h-7 text-red-600 shrink-0" />
            <span>Actuación General ante Extravasación</span>
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Protocolo de actuación secuencial para el personal de enfermería en Urgencias.
          </p>
        </div>
      </div>

      {/* CRITICAL WARNING BANNER (Section 5 prompt mandatory) */}
      <div className="p-5 bg-red-50 border-2 border-red-300 rounded-2xl shadow-xs">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
          <div className="space-y-2 text-sm text-red-950">
            <h2 className="font-extrabold text-base text-red-900 tracking-tight">
              IMPORTANTE: ELECCIÓN CRÍTICA ENTRE FRÍO O CALOR
            </h2>
            <p className="leading-relaxed">
              La elección de frío o calor depende del medicamento extravasado. <strong>No aplicar frío de forma indiscriminada.</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 bg-white/90 rounded-xl border border-sky-200">
                <div className="font-bold text-sky-900 flex items-center gap-1.5 mb-1">
                  <Snowflake className="w-4 h-4 text-sky-600" />
                  <span>Compresas Frías (Pauta Habitual)</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Preferibles en la mayoría de los casos. Aplicar durante <strong>20 minutos, 3-4 veces al día durante los primeros 2-3 días</strong> para limitar la inflamación y la difusión celular.
                </p>
              </div>

              <div className="p-3 bg-white/90 rounded-xl border border-amber-200">
                <div className="font-bold text-amber-900 flex items-center gap-1.5 mb-1">
                  <Flame className="w-4 h-4 text-amber-600" />
                  <span>Excepciones Críticas: Calor Seco</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  <strong>En VASOPRESORES (Adrenalina, Noradrenalina, Dopamina, Fenilefrina, Vasopresina) EVITAR el frío</strong>, ya que empeora la vasoconstricción y la ulceración. Las compresas calientes son preferibles para incrementar el flujo sanguíneo local (Ej. <strong>fenitoína, medios de contraste, vasopresores</strong>).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checklist Progress Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Progreso de Actuación Asistencial
          </div>
          <div className="text-sm font-bold text-slate-900 mt-0.5">
            {completedSteps.length} de {GENERAL_PROTOCOL_STEPS.length} medidas verificadas ({progressPercent}%)
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-28 sm:w-48 bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {completedSteps.length > 0 && (
            <button
              onClick={resetChecklist}
              className="p-1.5 text-xs text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              title="Reiniciar lista"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Sequential Protocol Steps */}
      <div className="space-y-3">
        {GENERAL_PROTOCOL_STEPS.map((item) => {
          const isDone = completedSteps.includes(item.step);
          return (
            <div
              key={item.step}
              onClick={() => toggleStep(item.step)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                isDone
                  ? 'bg-emerald-50/70 border-emerald-300 shadow-xs'
                  : item.critical
                  ? 'bg-white border-slate-300 hover:border-red-400 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-400 shadow-xs'
              }`}
            >
              {/* Checkbox circle */}
              <div className="pt-0.5 shrink-0">
                <div
                  className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs transition-colors ${
                    isDone
                      ? 'bg-emerald-600 text-white'
                      : item.critical
                      ? 'bg-red-100 text-red-700 border border-red-300'
                      : 'bg-slate-100 text-slate-600 border border-slate-300'
                  }`}
                >
                  {isDone ? <CheckCircle2 className="w-5 h-5" /> : item.step}
                </div>
              </div>

              {/* Step info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className={`text-base font-bold tracking-tight ${
                    isDone ? 'text-emerald-950 line-through opacity-85' : 'text-slate-900'
                  }`}>
                    {item.step}. {item.title}
                  </h3>
                  {item.critical && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-red-100 text-red-800">
                      Inmediato
                    </span>
                  )}
                </div>

                <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                  isDone ? 'text-emerald-800' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>

                {item.step === 4 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onGoToCatalog();
                    }}
                    className="mt-2 text-xs font-bold text-sky-700 hover:text-sky-900 underline flex items-center gap-1"
                  >
                    <span>Abrir catálogo de medicamentos para buscar el fármaco extravasado →</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Accordion for Risk Factors from Page 3 */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <button
          onClick={() => setShowRiskFactors(!showRiskFactors)}
          className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <Activity className="w-5 h-5 text-sky-600" />
            <div>
              <span className="text-sm font-bold text-slate-900">
                Factores de Riesgo Asociados a Extravasación (Basado en Guía CHUA Pág. 3)
              </span>
              <span className="text-xs text-slate-500 block">
                Agente químico, características del paciente y técnica del procedimiento.
              </span>
            </div>
          </div>
          {showRiskFactors ? (
            <ChevronUp className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </button>

        {showRiskFactors && (
          <div className="p-5 pt-2 border-t border-slate-100 bg-slate-50 space-y-4 text-xs sm:text-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Factores del agente */}
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span>1. Dependientes del Agente</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-slate-600 text-xs">
                  {RISK_FACTORS.agente.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              {/* Factores del paciente */}
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span>2. Relacionados con el Paciente</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-slate-600 text-xs">
                  {RISK_FACTORS.paciente.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              {/* Factores del procedimiento */}
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>3. Del Procedimiento</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-slate-600 text-xs">
                  {RISK_FACTORS.procedimiento.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
