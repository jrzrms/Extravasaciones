/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Medication } from '../types/clinical.ts';
import { 
  X, 
  ArrowLeft, 
  Clock, 
  AlertTriangle, 
  ShieldAlert, 
  FileText, 
  Syringe, 
  Sparkles,
  BookOpen,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface MedicationDetailModalProps {
  medication: Medication | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectAntidote?: (antidoteName: string) => void;
}

export const MedicationDetailModal: React.FC<MedicationDetailModalProps> = ({
  medication,
  isOpen,
  onClose,
  onSelectAntidote
}) => {
  if (!isOpen || !medication) return null;

  const isCold = medication.temperature === 'FRIO';
  const isHeat = medication.temperature === 'CALOR';
  const isBoth = medication.temperature === 'AMBOS';
  const isUnspecified = medication.temperature === 'NO_ESPECIFICADO';

  const isVasopressor = medication.classifications.some(c => 
    c.toLowerCase().includes('vasopresor')
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl my-6 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Sticky Clinical Header */}
        <div className="sticky top-0 z-20 px-5 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Volver a resultados"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-sky-400">
                  Ficha Clínica Individual
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs text-slate-300 font-mono">
                  Basado en Guía CHUA 2019 · Pág. {medication.pdfPage}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                {medication.name}
              </h1>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Cerrar ficha"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-800">

          {/* SECTION A: IDENTIFICACIÓN */}
          <section className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200/80">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                A. Identificación del Fármaco
              </span>
              <span className="text-xs font-mono text-slate-400">
                ID: {medication.id}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-semibold text-slate-500">Principio Activo</div>
                <div className="text-base font-bold text-slate-900">{medication.activeIngredient}</div>
              </div>

              {medication.pharmacologicalGroup && (
                <div>
                  <div className="text-xs font-semibold text-slate-500">Grupo Farmacológico</div>
                  <div className="text-sm font-medium text-slate-800">{medication.pharmacologicalGroup}</div>
                </div>
              )}

              {medication.commercialNames && medication.commercialNames.length > 0 && (
                <div className="sm:col-span-2">
                  <div className="text-xs font-semibold text-slate-500 mb-1">Nombres Comerciales / Presentaciones</div>
                  <div className="flex flex-wrap gap-1.5">
                    {medication.commercialNames.map((cn, i) => (
                      <span key={i} className="text-xs bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-700 font-medium">
                        {cn}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="sm:col-span-2">
                <div className="text-xs font-semibold text-slate-500 mb-1">Clasificación del Daño Tisular (Basado en Guía CHUA)</div>
                <div className="flex flex-wrap gap-1.5">
                  {medication.classifications.map((cls, idx) => (
                    <span 
                      key={idx}
                      className={`text-xs px-2.5 py-1 rounded-md font-semibold ${
                        cls.toLowerCase().includes('vesicante') || cls.toLowerCase().includes('necrosante')
                          ? 'bg-red-50 text-red-700 border border-red-200'
                          : cls.toLowerCase().includes('vasopresor')
                          ? 'bg-amber-50 text-amber-800 border border-amber-200'
                          : cls.toLowerCase().includes('hiperosmolar') || cls.toLowerCase().includes('ph')
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : 'bg-slate-200/80 text-slate-800'
                      }`}
                    >
                      {cls}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION B: MEDIDAS INMEDIATAS */}
          <section className="bg-red-50/70 border border-red-200 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-3 text-red-800">
              <ShieldAlert className="w-5 h-5 text-red-600 shrink-0" />
              <h2 className="text-sm font-bold uppercase tracking-wider">
                B. Medidas Inmediatas tras la Extravasación
              </h2>
            </div>

            <ol className="space-y-2 text-sm text-slate-800 font-medium list-decimal pl-5">
              {medication.immediateMeasures.map((measure, idx) => (
                <li key={idx} className="leading-snug">
                  {measure.startsWith('CRÍTICO:') || measure.startsWith('AVISO') || measure.startsWith('URGENCIA') ? (
                    <span className="font-bold text-red-700 block mt-1 bg-red-100/70 p-1.5 rounded-lg border border-red-200">
                      ⚠️ {measure}
                    </span>
                  ) : (
                    <span>{measure}</span>
                  )}
                </li>
              ))}
            </ol>
          </section>

          {/* SECTION C: TRATAMIENTO LOCAL (FRÍO O CALOR) */}
          <section className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  C. Tratamiento Local Físico
                </span>
              </div>
            </div>

            {/* Temperature Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <div className={`p-4 rounded-xl border flex items-center gap-3 ${
                isCold 
                  ? 'bg-sky-50 border-sky-300 ring-2 ring-sky-400' 
                  : 'bg-slate-50 border-slate-200 opacity-60'
              }`}>
                <div className="text-3xl">❄️</div>
                <div>
                  <div className="text-xs font-bold uppercase text-sky-900">Frío Local</div>
                  <div className="text-xs text-sky-700">
                    {isCold ? 'Indicado en la guía' : isBoth ? 'Alternativa válida' : 'No indicado'}
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-xl border flex items-center gap-3 ${
                isHeat 
                  ? 'bg-amber-50 border-amber-300 ring-2 ring-amber-400' 
                  : 'bg-slate-50 border-slate-200 opacity-60'
              }`}>
                <div className="text-3xl">🔥</div>
                <div>
                  <div className="text-xs font-bold uppercase text-amber-900">Calor Local</div>
                  <div className="text-xs text-amber-700">
                    {isHeat ? 'Indicado en la guía' : isBoth ? 'Alternativa válida' : 'No indicado'}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-center">
                <div className="text-xs font-bold text-slate-700 uppercase">Pauta Estándar (Basado en Guía CHUA)</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  20 minutos, 3-4 veces/día durante los primeros 2-3 días.
                </div>
              </div>
            </div>

            {/* Specific temperature details from guide */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm">
              <span className="font-bold text-slate-800">Detalle de referencia (Basado en Guía CHUA): </span>
              <span className="text-slate-700">{medication.temperatureDetails}</span>
            </div>

            {isVasopressor && (
              <div className="mt-3 p-3 bg-red-100/80 border border-red-300 rounded-xl text-xs text-red-900 font-semibold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-700 shrink-0" />
                <span>
                  ALERTA EN VASOPRESORES: Evitar compresas frías porque provocan vasoconstricción local que acelera la necrosis isquémica.
                </span>
              </div>
            )}
          </section>

          {/* SECTION D: ANTÍDOTO O TRATAMIENTO ESPECÍFICO */}
          <section className={`rounded-xl p-5 border ${
            medication.antidote.hasAntidote 
              ? 'bg-emerald-50/60 border-emerald-300 shadow-xs' 
              : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Syringe className={`w-5 h-5 ${medication.antidote.hasAntidote ? 'text-emerald-700' : 'text-slate-500'}`} />
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  D. Antídoto o Tratamiento Específico
                </h2>
              </div>

              {medication.antidote.hasAntidote && (
                <span className="text-xs font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-md border border-emerald-300">
                  Antídoto Disponible
                </span>
              )}
            </div>

            {medication.antidote.hasAntidote ? (
              <div className="space-y-4">
                <div className="p-3.5 bg-white rounded-xl border border-emerald-200">
                  <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider">Antídoto Recomendado</div>
                  <div className="text-lg font-bold text-emerald-950 mt-0.5 flex items-center justify-between">
                    <span>{medication.antidote.name}</span>
                    {onSelectAntidote && (
                      <button
                        onClick={() => onSelectAntidote(medication.antidote.name)}
                        className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline"
                      >
                        Ver ficha de antídoto →
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {medication.antidote.dose && (
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-xs font-semibold text-slate-500">Dosis / Concentración</div>
                      <div className="font-bold text-slate-900 mt-0.5">{medication.antidote.dose}</div>
                    </div>
                  )}

                  {medication.antidote.route && (
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-xs font-semibold text-slate-500">Vía de Administración</div>
                      <div className="font-semibold text-slate-800 mt-0.5">{medication.antidote.route}</div>
                    </div>
                  )}

                  {medication.antidote.dilution && (
                    <div className="sm:col-span-2 p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-xs font-semibold text-slate-500">Dilución y Preparación</div>
                      <div className="font-medium text-slate-800 mt-0.5">{medication.antidote.dilution}</div>
                    </div>
                  )}

                  {medication.antidote.technique && (
                    <div className="sm:col-span-2 p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-xs font-semibold text-slate-500">Técnica y Lugar de Inyección</div>
                      <div className="font-medium text-slate-800 mt-0.5">{medication.antidote.technique}</div>
                    </div>
                  )}

                  {(medication.antidote.alternatives || medication.antidote.alternativas) && (
                    <div className="sm:col-span-2 p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-xs font-semibold text-slate-500">Alternativas Terapéuticas</div>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-xs text-slate-700">
                        {(medication.antidote.alternatives || medication.antidote.alternativas || []).map((alt: string, i: number) => (
                          <li key={i}>{alt}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {medication.antidote.contraindicationsOrAvoid && medication.antidote.contraindicationsOrAvoid.length > 0 && (
                    <div className="sm:col-span-2 p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="text-xs font-bold text-red-800 uppercase">Contraindicado / Evitar</div>
                      <ul className="list-disc pl-5 mt-1 space-y-0.5 text-xs text-red-700 font-semibold">
                        {medication.antidote.contraindicationsOrAvoid.map((avoid, i) => (
                          <li key={i}>{avoid}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {medication.antidote.observations && (
                    <div className="sm:col-span-2 p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-xs font-semibold text-slate-500">Observaciones Clínicas del Antídoto</div>
                      <div className="text-xs text-slate-700 mt-0.5 leading-relaxed">{medication.antidote.observations}</div>
                    </div>
                  )}
                </div>

                {medication.ageSpecificActions && (
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Manejo Específico por Grupo de Edad (Basado en Guía CHUA)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {medication.ageSpecificActions.neonatos && (
                        <div className="p-2 bg-slate-50 rounded border border-slate-200">
                          <span className="font-bold text-slate-700">Neonatos: </span>
                          <span className="text-slate-800">{medication.ageSpecificActions.neonatos}</span>
                        </div>
                      )}
                      {medication.ageSpecificActions.ninos && (
                        <div className="p-2 bg-slate-50 rounded border border-slate-200">
                          <span className="font-bold text-slate-700">Niños: </span>
                          <span className="text-slate-800">{medication.ageSpecificActions.ninos}</span>
                        </div>
                      )}
                      {medication.ageSpecificActions.adolescentes && (
                        <div className="p-2 bg-slate-50 rounded border border-slate-200">
                          <span className="font-bold text-slate-700">Adolescentes: </span>
                          <span className="text-slate-800">{medication.ageSpecificActions.adolescentes}</span>
                        </div>
                      )}
                      {medication.ageSpecificActions.adultos && (
                        <div className="p-2 bg-slate-50 rounded border border-slate-200">
                          <span className="font-bold text-slate-700">Adultos: </span>
                          <span className="text-slate-800">{medication.ageSpecificActions.adultos}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-4 bg-white rounded-xl border border-slate-200 text-sm text-slate-600">
                <p className="font-medium">Sin antídoto específico recogido en la guía de referencia (Basado en Guía CHUA).</p>
                <p className="text-xs text-slate-500 mt-1">
                  Manejo conservador estricto basado en medidas generales, elevación de la extremidad, control de la compresión física y vigilancia activa de la evolución tisular.
                </p>
                {medication.antidote.observations && (
                  <p className="text-xs text-slate-700 mt-2 font-medium bg-slate-50 p-2 rounded border border-slate-200">
                    {medication.antidote.observations}
                  </p>
                )}
              </div>
            )}
          </section>

          {/* SECTION E: EVOLUCIÓN Y SEGUIMIENTO */}
          <section className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <div className="flex items-center gap-2 mb-3 text-slate-800">
              <Clock className="w-5 h-5 text-slate-600" />
              <h2 className="text-sm font-bold uppercase tracking-wider">
                E. Evolución, Resolución y Complicaciones
              </h2>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-sm">
                <div className="text-xs font-semibold text-slate-500">Resolución Esperada en Guía</div>
                <div className="font-medium text-slate-900 mt-0.5">{medication.resolution.expectedText}</div>
              </div>

              {(medication.resolution.neonatos || medication.resolution.ninos || medication.resolution.adolescentes || medication.resolution.adultos) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {medication.resolution.neonatos && (
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                      <span className="font-bold text-slate-700">Neonatos: </span>
                      <span className="text-slate-800">{medication.resolution.neonatos}</span>
                    </div>
                  )}
                  {medication.resolution.ninos && (
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                      <span className="font-bold text-slate-700">Niños: </span>
                      <span className="text-slate-800">{medication.resolution.ninos}</span>
                    </div>
                  )}
                  {medication.resolution.adolescentes && (
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                      <span className="font-bold text-slate-700">Adolescentes: </span>
                      <span className="text-slate-800">{medication.resolution.adolescentes}</span>
                    </div>
                  )}
                  {medication.resolution.adultos && (
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                      <span className="font-bold text-slate-700">Adultos: </span>
                      <span className="text-slate-800">{medication.resolution.adultos}</span>
                    </div>
                  )}
                </div>
              )}

              {medication.resolution.complications && (
                <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                  <div className="font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1 text-amber-800">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    Posibles Complicaciones Documentadas
                  </div>
                  <div className="font-medium leading-relaxed">{medication.resolution.complications}</div>
                </div>
              )}
            </div>
          </section>

          {/* SECTION F: OBSERVACIONES IMPORTANTES Y ADVERTENCIAS */}
          <section className="bg-slate-900 text-slate-100 rounded-xl p-5 border border-slate-800">
            <div className="flex items-center gap-2 mb-3 text-amber-400">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <h2 className="text-sm font-bold uppercase tracking-wider">
                F. Observaciones Importantes y Advertencias Específicas
              </h2>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pl-4 list-disc">
              {medication.warnings.map((warn, i) => (
                <li key={i} className="leading-relaxed">
                  <span className="text-white font-medium">{warn}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-sky-400" />
                <span>Basado en Guía CHUA 2019 · Página {medication.pdfPage}</span>
              </div>
              <div>
                <span>Citas Bibliográficas originales: [{medication.bibliography}]</span>
              </div>
            </div>
          </section>

          {medication.validationStatus === 'PENDIENTE_VALIDACION_FARMACIA' && (
            <div className="p-3 bg-amber-100/90 border border-amber-300 rounded-xl text-xs text-amber-900 font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
              <div>
                <span className="font-bold">PENDIENTE DE VALIDACIÓN POR FARMACIA: </span>
                <span>{medication.validationNotes || 'Revisar transcripción frente al PDF original.'}</span>
              </div>
            </div>
          )}

        </div>

        {/* Footer sticky bar */}
        <div className="sticky bottom-0 z-20 px-5 py-3.5 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors shadow-xs"
          >
            ← Volver a Búsqueda
          </button>
        </div>
      </div>
    </div>
  );
};
