/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeneralStep, PreventionItem } from '../types/clinical.ts';

export const GENERAL_PROTOCOL_STEPS: GeneralStep[] = [
  {
    step: 1,
    title: 'DETENER inmediatamente la infusión',
    description: 'Parar de forma inmediata la bomba o el sistema de goteo intravenoso. No desconectar el catéter de forma precipitada.',
    critical: true
  },
  {
    step: 2,
    title: 'Aspirar 5-10 ml de sangre',
    description: 'Aspirar a través de la vía venosa 5-10 ml de sangre para extraer la máxima cantidad posible de fármaco extravasado en el tejido. CRÍTICO: Evitar la presión manual sobre la zona extravasada.',
    critical: true
  },
  {
    step: 3,
    title: 'Retirar la vía o aguja (salvo indicación)',
    description: 'Retirar la vía o la aguja sólo si NO es necesario administrar un antídoto por vía intravenosa a través de la misma.',
    critical: false
  },
  {
    step: 4,
    title: 'Aplicar las medidas específicas del medicamento',
    description: 'Consultar de inmediato la ficha específica del fármaco para determinar si requiere antídoto local, neutralizante o medidas especiales por grupo de edad.',
    critical: true
  },
  {
    step: 5,
    title: 'Elevar la extremidad por encima del corazón',
    description: 'Mantener la extremidad afectada elevada a un nivel superior al del corazón para favorecer el drenaje linfático y reducir el edema tisular.',
    critical: false
  },
  {
    step: 6,
    title: 'Aplicar compresas calientes o frías según proceda',
    description: 'En la mayoría de casos es preferible usar compresas frías: 20 min 3-4 veces al día durante los primeros 2-3 días. EXCEPCIÓN CRÍTICA: En vasopresores (Adrenalina, Noradrenalina, Dopamina, Vasopresina, Fenilefrina) EVITAR el frío porque agrava la isquemia y necrosis. Compresas calientes preferibles en vasopresores, fenitoína y medios de contraste.',
    critical: true
  },
  {
    step: 7,
    title: 'Informar e instruir al paciente y familiares',
    description: 'Instruir al paciente y su familia sobre signos de alarma (dolor creciente, cambios de coloración, frialdad distal, entumecimiento) y cuidados de la piel.',
    critical: false
  },
  {
    step: 8,
    title: 'Evitar la fotoexposición de la zona afectada',
    description: 'Proteger rigurosamente el área lesionada de la luz solar directa y rayos UV durante todo el periodo de cicatrización.',
    critical: false
  }
];

export const PREVENTION_CHECKLIST: PreventionItem[] = [
  {
    id: 'prev-1',
    category: 'PREPARACION',
    title: 'Identificación y etiquetado previo a dispensación',
    description: 'Identificar y etiquetar claramente los agentes vesicantes no citotóxicos antes de su salida de Farmacia o dispensación en planta/Urgencias.'
  },
  {
    id: 'prev-2',
    category: 'PREPARACION',
    title: 'Dilución y ritmo de infusión correctos',
    description: 'Asegurar la dilución adecuada en el vehículo compatible recomendado y verificar la velocidad o ritmo de infusión según ficha técnica.'
  },
  {
    id: 'prev-3',
    category: 'SELECCION_VIA',
    title: 'Lugar adecuado de administración intravenosa',
    description: 'Seleccionar un trayecto venoso de buen calibre con flujo adecuado. Evitar extremidades con escasa circulación venosa o linfedema previo.'
  },
  {
    id: 'prev-4',
    category: 'ADMINISTRACION',
    title: 'Colocación e inmovilización sin constricción',
    description: 'Canular con técnica atraumática, inmovilizando la extremidad sin constricción para prevenir desgarros y lesiones de la pared del vaso.'
  },
  {
    id: 'prev-5',
    category: 'MONITORIZACION',
    title: 'Apósito transparente para inspección visual continua',
    description: 'Fijar el catéter con apósito transparente estéril para permitir la inspección directa frecuente del punto de inserción y tejidos adyacentes.'
  },
  {
    id: 'prev-6',
    category: 'MONITORIZACION',
    title: 'Valoración activa del dolor y resistencia al flujo',
    description: 'Preguntar activamente por dolor, ardor o escozor al paciente durante la infusión y después de la misma. Comprobar retorno venoso periódico.'
  }
];

export const RISK_FACTORS = {
  agente: [
    'Alta osmolaridad (>600 mOsm/L genera deshidratación y necrosis osmótica)',
    'pH extremo (<5 ácido o >9 básico con causticidad química directa)',
    'Actividad vasoconstrictora intrínseca (vasoespasmo isquémico capilar)',
    'Propiedades hiperosmolares del diluyente o vehículo farmacológico'
  ],
  paciente: [
    'Edades extremas: neonatos, pacientes pediátricos muy jóvenes o ancianos frágiles',
    'Presencia de enfermedad vascular periférica o presión venosa central/periférica elevada',
    'Circulación anormal o antecedentes de cirugía/linfadenectomía en la extremidad',
    'Antecedentes de radiación en el sitio de inyección venosa',
    'Pacientes en coma, sedación profunda, anestesia general o post-reanimación cardiopulmonar (RCP)'
  ],
  procedimiento: [
    'Sitio de inyección en flexuras articulares o venas periféricas frágiles',
    'Tipo de cánula o calibre excesivo para el vaso seleccionado',
    'Uso de bombas de infusión a presión positiva sin detección precoz de resistencia',
    'Concentración elevada de agentes vesicantes y electrolitos hiperosmolares',
    'Duración prolongada de la infusión continua y volumen extravasado',
    'Duración de la exposición tisular antes del inicio del tratamiento'
  ]
};

export const DOCUMENT_CONTROL = {
  title: 'Guía de manejo en la extravasación de medicamentos no citostáticos',
  edition: 'Basado en: 1ª edición, Febrero 2019 (CHUA)',
  entity: 'Hospital de la Santa Creu i Sant Pau (Adaptación clínica)',
  service: 'Servicio de Farmacia · Hospital de la Santa Creu i Sant Pau (jruizr@santpau.cat)',
  sourceEntity: 'Basado en: Servicio de Farmacia Hospitalaria - CIM, Complejo Hospitalario Universitario de Albacete (CHUA)',
  address: 'Sant Quintí, 89. 08041 Barcelona',
  isbn: '978-84-09-11230-2',
  approvalAct: 'Contenido base basado en el documento aprobado por la Comisión de Farmacia y Terapéutica del CHUA (ACTA 02/2019), en adaptación para el Hospital de la Santa Creu i Sant Pau',
  authors: [
    { name: 'María Rosa Garrigues Sebastiá', title: 'F.E.A. Farmacia Hospitalaria (Documento base)' },
    { name: 'Francisca Sánchez Rubio', title: 'Residente Farmacia Hospitalaria (Documento base)' },
    { name: 'Cristina García Gómez', title: 'Jefe de Sección Farmacia Hospitalaria (Documento base)' }
  ],
  reviewer: { name: 'Ana Valladolid Walsh', title: 'Jefa de Servicio de Farmacia Hospitalaria (Documento base)' },
  appVersion: '1.2.0 (Adaptación Hospital de la Santa Creu i Sant Pau)',
  lastAppUpdate: '16 de Noviembre de 2026',
  nextReviewDate: 'Febrero 2027',
  disclaimer: 'Herramienta de apoyo a la consulta clínica rápida para personal de enfermería y facultativos del Hospital de la Santa Creu i Sant Pau, basada en la Guía de Farmacia del CHUA (2019) y pendiente de adaptación institucional completa.'
};
