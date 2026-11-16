/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DOCUMENT_CONTROL } from '../data/protocolsData.ts';
import { X, BookOpen, ShieldAlert, Users, Award, Calendar, FileText } from 'lucide-react';

interface DocumentControlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentControlModal: React.FC<DocumentControlModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-sky-400" />
            <div>
              <h2 className="text-base font-bold text-white">Información y Control Documental</h2>
              <p className="text-xs text-slate-400">Trazabilidad oficial de la guía clínica y autoría</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-800">
          
          {/* Institutional Alert */}
          <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-950 leading-relaxed font-medium">
              <span className="font-bold text-amber-900 block uppercase mb-0.5">Aviso de Responsabilidad Clínica</span>
              &ldquo;{DOCUMENT_CONTROL.disclaimer}&rdquo;
            </div>
          </div>

          {/* Document Source */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-700">
              Adaptación Institucional y Fuente Documental Base
            </div>
            <div className="text-base font-bold text-slate-900">
              {DOCUMENT_CONTROL.title}
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <div><strong>Centro de uso / adaptación:</strong> {DOCUMENT_CONTROL.entity}</div>
              <div><strong>Elaboración y contacto:</strong> {DOCUMENT_CONTROL.service}</div>
              <div><strong>Dirección:</strong> {DOCUMENT_CONTROL.address}</div>
              <div className="pt-1"><strong>Documento de origen:</strong> {DOCUMENT_CONTROL.sourceEntity}</div>
              <div><strong>Edición base:</strong> {DOCUMENT_CONTROL.edition}</div>
              <div><strong>ISBN base:</strong> <span className="font-mono font-bold text-slate-900">{DOCUMENT_CONTROL.isbn}</span></div>
              <div className="pt-1 text-slate-800 font-semibold">
                <strong>Nota:</strong> {DOCUMENT_CONTROL.approvalAct}
              </div>
            </div>
          </div>

          {/* Authors and Reviewers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <div className="font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-purple-600" />
                <span>Autores del Documento Base (CHUA)</span>
              </div>
              <ul className="space-y-1.5 text-slate-700">
                {DOCUMENT_CONTROL.authors.map((author, i) => (
                  <li key={i}>
                    <div className="font-bold text-slate-900">{author.name}</div>
                    <div className="text-slate-500 text-[11px]">{author.title}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <div className="font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Revisión Documento Base</span>
              </div>
              <div>
                <div className="font-bold text-slate-900">{DOCUMENT_CONTROL.reviewer.name}</div>
                <div className="text-slate-500 text-[11px]">{DOCUMENT_CONTROL.reviewer.title}</div>
                <div className="text-slate-400 text-[11px] mt-1">Basado en documento original del CHUA (Albacete)</div>
              </div>
            </div>
          </div>

          {/* App Versioning & Maintenance */}
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2 text-xs">
            <div className="font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-purple-600" />
              <span>Control de Versión de la Aplicación Web</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-700">
              <div>
                <span className="text-slate-400 block">Versión App:</span>
                <span className="font-bold font-mono text-slate-900">{DOCUMENT_CONTROL.appVersion}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Última Actualización:</span>
                <span className="font-bold text-slate-900">{DOCUMENT_CONTROL.lastAppUpdate}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Próxima Revisión:</span>
                <span className="font-bold text-slate-900">{DOCUMENT_CONTROL.nextReviewDate}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors"
          >
            Entendido y Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
