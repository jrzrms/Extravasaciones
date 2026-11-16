/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type TemperatureType = 'FRIO' | 'CALOR' | 'AMBOS' | 'NO_ESPECIFICADO';

export interface AntidoteDetails {
  name: string;
  hasAntidote: boolean;
  dose?: string;
  concentration?: string;
  dilution?: string;
  route?: string;
  location?: string;
  technique?: string;
  alternatives?: string[];
  alternativas?: string[];
  contraindicationsOrAvoid?: string[];
  observations?: string;
}

export interface AgeSpecificAction {
  neonatos?: string;
  ninos?: string;
  adolescentes?: string;
  adultos?: string;
  edadInespecifica?: string;
}

export interface MedicationResolution {
  expectedText: string;
  neonatos?: string;
  ninos?: string;
  adolescentes?: string;
  adultos?: string;
  edadInespecifica?: string;
  complications?: string;
}

export interface Medication {
  id: string;
  name: string;
  activeIngredient: string;
  commercialNames?: string[];
  pharmacologicalGroup?: string;
  classifications: string[];
  temperature: TemperatureType;
  temperatureDetails: string;
  immediateMeasures: string[];
  generalMeasuresSummary: string;
  antidote: AntidoteDetails;
  ageSpecificActions?: AgeSpecificAction;
  resolution: MedicationResolution;
  warnings: string[];
  pdfPage: number;
  bibliography: string;
  validationStatus: 'VALIDADO_PDF' | 'PENDIENTE_VALIDACION_FARMACIA';
  validationNotes?: string;
}

export interface MasterAntidote {
  id: string;
  name: string;
  presentation: string;
  dose: string;
  preparation: string;
  route: string;
  technique: string;
  mechanism: string;
  indicatedMedications: string[]; // Medication IDs
  pdfPage: number;
  availabilityNotice?: string;
}

export interface GeneralStep {
  step: number;
  title: string;
  description: string;
  critical?: boolean;
}

export interface PreventionItem {
  id: string;
  title: string;
  description: string;
  category: 'PREPARACION' | 'SELECCION_VIA' | 'ADMINISTRACION' | 'MONITORIZACION';
}
