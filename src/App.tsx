/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, Component, ErrorInfo, ReactNode } from 'react';
import { MEDICATIONS } from './data/medicationsData.ts';
import { DOCUMENT_CONTROL } from './data/protocolsData.ts';
import { Medication } from './types/clinical.ts';
import { Navbar, NavTab } from './components/Navbar.tsx';
import { HomeView } from './components/HomeView.tsx';
import { MedicationCatalogView } from './components/MedicationCatalogView.tsx';
import { GeneralProtocolView } from './components/GeneralProtocolView.tsx';
import { AntidotesView } from './components/AntidotesView.tsx';
import { PreventionView } from './components/PreventionView.tsx';
import { ValidationTableView } from './components/ValidationTableView.tsx';
import { MedicationDetailModal } from './components/MedicationDetailModal.tsx';
import { DocumentControlModal } from './components/DocumentControlModal.tsx';

const RECENT_STORAGE_KEY = 'extravasaciones_recent_ids_v1';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Error en la aplicación clínica:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
          <div className="max-w-md bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h1 className="text-lg font-extrabold text-slate-900">Error al cargar la vista</h1>
            <p className="text-sm text-slate-600">
              Se ha producido un fallo inesperado en la interfaz. Recargue la página para continuar.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 rounded-lg transition-colors"
            >
              Recargar aplicación
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('INICIO');
  const [catalogFilter, setCatalogFilter] = useState<'ALL' | 'FRIO' | 'CALOR' | 'ANTIDOTO' | 'VESICANTE'>('ALL');
  const [selectedAntidoteName, setSelectedAntidoteName] = useState<string | undefined>(undefined);
  const [selectedMedication, setSelectedMedication] = useState<Medication | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);

  // Document Control Modal State
  const [isDocModalOpen, setIsDocModalOpen] = useState<boolean>(false);

  // Recently viewed medications
  const [recentMedicationIds, setRecentMedicationIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(RECENT_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const navigateToTab = (tab: NavTab) => {
    if (tab === 'MEDICAMENTOS') {
      setCatalogFilter('ALL');
    }
    if (tab === 'ANTIDOTOS') {
      setSelectedAntidoteName(undefined);
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickFilter = (filter: 'ALL' | 'FRIO' | 'CALOR' | 'ANTIDOTO' | 'VESICANTE') => {
    setCatalogFilter(filter);
    setActiveTab('MEDICAMENTOS');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectMedication = (medication: Medication) => {
    setSelectedMedication(medication);
    setIsDetailOpen(true);

    // Save to recents
    setRecentMedicationIds((prev) => {
      const updated = [medication.id, ...prev.filter((id) => id !== medication.id)].slice(0, 10);
      try {
        localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // localStorage full or restricted
      }
      return updated;
    });
  };

  const handleClearRecent = () => {
    setRecentMedicationIds([]);
    try {
      localStorage.removeItem(RECENT_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const handleSelectAntidoteFromDrug = (antidoteName: string) => {
    setIsDetailOpen(false);
    setSelectedAntidoteName(antidoteName);
    setActiveTab('ANTIDOTOS');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
        {/* Top Bar Navigation */}
        <Navbar
          activeTab={activeTab}
          onTabChange={navigateToTab}
        />

        {/* Main View Router */}
        <main className="flex-1 w-full max-w-7xl mx-auto pt-4 sm:pt-6">
          {activeTab === 'INICIO' && (
            <HomeView
              medications={MEDICATIONS}
              onSelectMedication={handleSelectMedication}
              onTabChange={navigateToTab}
              onQuickFilter={handleQuickFilter}
              recentMedicationIds={recentMedicationIds}
              onClearRecent={handleClearRecent}
              onOpenDocumentInfo={() => setIsDocModalOpen(true)}
            />
          )}

          {activeTab === 'MEDICAMENTOS' && (
            <MedicationCatalogView
              medications={MEDICATIONS}
              onSelectMedication={handleSelectMedication}
              initialFilter={catalogFilter}
            />
          )}

          {activeTab === 'ACTUACION' && (
            <GeneralProtocolView
              onGoToCatalog={() => navigateToTab('MEDICAMENTOS')}
            />
          )}

          {activeTab === 'ANTIDOTOS' && (
            <AntidotesView
              medications={MEDICATIONS}
              onSelectMedication={handleSelectMedication}
              initialAntidoteName={selectedAntidoteName}
            />
          )}

          {activeTab === 'PREVENCION' && (
            <PreventionView />
          )}

          {activeTab === 'VALIDACION' && (
            <ValidationTableView
              medications={MEDICATIONS}
              onSelectMedication={handleSelectMedication}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="mt-auto border-t border-slate-200 bg-white py-6 px-4 text-center text-xs text-slate-500 pb-24 lg:pb-6">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left space-y-1">
              <span className="font-bold text-slate-800 block">EXTRAVASACIONES: Guía Rápida de Actuación</span>
              <span className="block text-xs font-medium text-slate-700">
                Elaborado por Servicio de Farmacia. Hospital Santa Creu i Sant Pau. Mail:{' '}
                <a href="mailto:jruizr@santpau.cat" className="text-purple-700 hover:text-purple-900 underline font-semibold">
                  jruizr@santpau.cat
                </a>
              </span>
              <span className="block text-[11px] text-slate-500">
                Basado en la Guía de Farmacia del CHUA (1ª edición, 2019) · ISBN {DOCUMENT_CONTROL.isbn}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold shrink-0">
              <button
                onClick={() => setIsDocModalOpen(true)}
                className="text-purple-700 hover:text-purple-900 underline"
              >
                Control Documental y Créditos
              </button>
              <span>·</span>
              <button
                onClick={() => navigateToTab('VALIDACION')}
                className="text-slate-600 hover:text-slate-900"
              >
                Tabla de Validación
              </button>
            </div>
          </div>
        </footer>

        {/* Modals */}
        <MedicationDetailModal
          medication={selectedMedication}
          isOpen={isDetailOpen}
          onClose={() => setIsDetailOpen(false)}
          onSelectAntidote={handleSelectAntidoteFromDrug}
        />

        <DocumentControlModal
          isOpen={isDocModalOpen}
          onClose={() => setIsDocModalOpen(false)}
        />
      </div>
    </ErrorBoundary>
  );
}
