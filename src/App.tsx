/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MEDICATIONS } from './data/medicationsData.ts';
import { MASTER_ANTIDOTES } from './data/antidotesData.ts';
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

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('INICIO');
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
    setActiveTab('ANTIDOTOS');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full max-w-7xl mx-auto pt-4 sm:pt-6">
        {activeTab === 'INICIO' && (
          <HomeView
            medications={MEDICATIONS}
            onSelectMedication={handleSelectMedication}
            onTabChange={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            recentMedicationIds={recentMedicationIds}
            onClearRecent={handleClearRecent}
            onOpenDocumentInfo={() => setIsDocModalOpen(true)}
          />
        )}

        {activeTab === 'MEDICAMENTOS' && (
          <MedicationCatalogView
            medications={MEDICATIONS}
            onSelectMedication={handleSelectMedication}
          />
        )}

        {activeTab === 'ACTUACION' && (
          <GeneralProtocolView
            onGoToCatalog={() => setActiveTab('MEDICAMENTOS')}
          />
        )}

        {activeTab === 'ANTIDOTOS' && (
          <AntidotesView
            medications={MEDICATIONS}
            onSelectMedication={handleSelectMedication}
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
              onClick={() => setActiveTab('VALIDACION')}
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
  );
}
