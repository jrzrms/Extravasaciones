/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Home, 
  Pill, 
  AlertOctagon, 
  Syringe, 
  ShieldCheck, 
  ClipboardCheck, 
  FileSpreadsheet
} from 'lucide-react';

export type NavTab = 'INICIO' | 'MEDICAMENTOS' | 'ACTUACION' | 'ANTIDOTOS' | 'PREVENCION' | 'VALIDACION';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange
}) => {
  return (
    <>
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-purple-950 border-b border-purple-800/80 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-4 xl:gap-6">
          
          {/* Zone 1: Hospital Logo & Brand Wordmark */}
          <button 
            onClick={() => onTabChange('INICIO')}
            className="flex items-center gap-2 sm:gap-2.5 text-left text-white hover:text-purple-200 transition-colors whitespace-nowrap shrink-0"
            title="Hospital de la Santa Creu i Sant Pau · Inicio"
          >
            <span className="bg-white rounded-lg px-2 py-1 shadow-xs flex items-center justify-center shrink-0">
              <img
                src="/assets/aistudio/logo_HSP_afddfc38.jpg"
                alt="Hospital de la Santa Creu i Sant Pau · Campus Salut Barcelona"
                referrerPolicy="no-referrer"
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </span>
            <span className="hidden xl:flex w-8 h-8 rounded-lg bg-purple-600 items-center justify-center text-white shadow-xs shrink-0">
              <span className="text-xl font-black leading-none">+</span>
            </span>
            <span className="text-xs sm:text-base xl:text-lg font-extrabold tracking-tight">EXTRAVASACIONES</span>
          </button>

          {/* Zone 2: Concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-xs xl:text-sm font-semibold text-purple-200/80">
            <button
              onClick={() => onTabChange('INICIO')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'INICIO' ? 'text-white border-purple-400' : 'border-transparent text-purple-200/75'
              }`}
            >
              Inicio
            </button>

            <button
              onClick={() => onTabChange('MEDICAMENTOS')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'MEDICAMENTOS' ? 'text-white border-purple-400' : 'border-transparent text-purple-200/75'
              }`}
            >
              Consultar Fármacos (44)
            </button>

            <button
              onClick={() => onTabChange('ACTUACION')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'ACTUACION' ? 'text-white border-purple-400' : 'border-transparent text-purple-200/75'
              }`}
            >
              Actuación General
            </button>

            <button
              onClick={() => onTabChange('ANTIDOTOS')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'ANTIDOTOS' ? 'text-white border-purple-400' : 'border-transparent text-purple-200/75'
              }`}
            >
              Antídotos (6)
            </button>

            <button
              onClick={() => onTabChange('PREVENCION')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'PREVENCION' ? 'text-white border-purple-400' : 'border-transparent text-purple-200/75'
              }`}
            >
              Prevención
            </button>

            <button
              onClick={() => onTabChange('VALIDACION')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'VALIDACION' ? 'text-white border-purple-400' : 'border-transparent text-purple-200/75'
              }`}
            >
              Revisión Farmacia
            </button>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onTabChange('ACTUACION')}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0"
            >
              <AlertOctagon className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">Protocolo Urgente</span>
              <span className="sm:hidden">Urgente</span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Ergonomic Bottom Tab Bar (thumb reach zone) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-purple-950/95 backdrop-blur-md border-t border-purple-800/80 text-purple-300/75">
        <div className="grid grid-cols-5 items-center h-16 max-w-lg mx-auto px-2">
          <button
            onClick={() => onTabChange('INICIO')}
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              activeTab === 'INICIO' ? 'text-purple-300 font-bold' : 'hover:text-white'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] mt-1 tracking-tight">Inicio</span>
          </button>

          <button
            onClick={() => onTabChange('MEDICAMENTOS')}
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              activeTab === 'MEDICAMENTOS' ? 'text-purple-300 font-bold' : 'hover:text-white'
            }`}
          >
            <Pill className="w-5 h-5" />
            <span className="text-[10px] mt-1 tracking-tight">Fármacos</span>
          </button>

          <button
            onClick={() => onTabChange('ACTUACION')}
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              activeTab === 'ACTUACION' ? 'text-red-400 font-bold' : 'hover:text-white'
            }`}
          >
            <AlertOctagon className="w-5 h-5 text-red-500" />
            <span className="text-[10px] mt-1 tracking-tight">Actuación</span>
          </button>

          <button
            onClick={() => onTabChange('ANTIDOTOS')}
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              activeTab === 'ANTIDOTOS' ? 'text-purple-300 font-bold' : 'hover:text-white'
            }`}
          >
            <Syringe className="w-5 h-5" />
            <span className="text-[10px] mt-1 tracking-tight">Antídotos</span>
          </button>

          <button
            onClick={() => onTabChange('VALIDACION')}
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              activeTab === 'VALIDACION' ? 'text-purple-300 font-bold' : 'hover:text-white'
            }`}
          >
            <FileSpreadsheet className="w-5 h-5" />
            <span className="text-[10px] mt-1 tracking-tight">Revisión</span>
          </button>
        </div>
      </div>
    </>
  );
};
