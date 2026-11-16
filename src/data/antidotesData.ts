/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MasterAntidote } from '../types/clinical.ts';

export const MASTER_ANTIDOTES: MasterAntidote[] = [
  {
    id: 'hialuronidasa',
    name: 'Hialuronidasa',
    presentation: 'Ampolla de 150 unidades (1 mL)',
    dose: '15 - 25 UI (en adultos y pediatría según pauta de la tabla)',
    preparation: 'Diluir la ampolla 1:10 (0,1 mL de hialuronidasa + 0,9 mL de SF 0,9%).',
    route: 'Infiltración subcutánea / intradérmica',
    technique: 'Administrar mediante inyecciones de 0,2 mL en el sitio de extravasación (alrededor de la lesión, técnica en abanico circular con aguja de fino calibre).',
    mechanism: 'Actúa modificando la permeabilidad del tejido conectivo por la hidrólisis del ácido hialurónico, aumentando tanto la distribución como la absorción y aclaramiento de las sustancias que se inyecten localmente.',
    indicatedMedications: [
      'aciclovir',
      'aminofilina',
      'amiodarona',
      'ampicilina',
      'arginina',
      'bicarbonato-sodico',
      'calcico-gluconato',
      'dextrosa',
      'diazepam',
      'digoxina',
      'doxiciclina',
      'etomidato',
      'fenitoina',
      'lorazepam',
      'manitol-20',
      'nitroglicerina-infusion',
      'nutricion-parenteral-total',
      'pentamidina',
      'potasio-en-solucion',
      'potasico-cloruro',
      'prometazina',
      'tiopental-de-sodio',
      'vancomicina'
    ],
    pdfPage: 5
  },
  {
    id: 'fentolamina',
    name: 'Fentolamina',
    presentation: '5 mg disueltos en 10 mL de NaCl 0,9%',
    dose: '0,1 - 0,2 mg/kg en pediatría (máximo total de 5 mg) o 5-10 mg en 10-20 mL SF según tabla',
    preparation: 'Disolver 5 mg en 10 mL de SF 0,9% (o 5-10 mg en 10-20 mL SF según indicación en ficha).',
    route: 'Subcutánea / Intradérmica local',
    technique: 'Mediante inyecciones subcutáneas en el sitio de extravasación inmediatamente tras el cese de la infusión.',
    mechanism: 'Bloquea competitivamente los receptores alfa-adrenérgicos, produciendo un breve y potente antagonismo de la vasoconstricción producida por la adrenalina y noradrenalina circulante.',
    indicatedMedications: [
      'adrenalina',
      'dopamina',
      'fenilefrina',
      'noradrenalina',
      'vasopresina'
    ],
    pdfPage: 5
  },
  {
    id: 'terbutalina',
    name: 'Terbutalina',
    presentation: '1 mg en 10 mL de NaCl 0,9%',
    dose: '1 mg disuelto en 10 mL de SF 0,9%',
    preparation: 'Dilución de 1 mg de terbutalina en 10 mL de Suero Fisiológico al 0,9%.',
    route: 'Subcutánea / Intradérmica en el sitio de extravasación',
    technique: 'Inyecciones subcutáneas múltiples en abanico en el lecho isquémico.',
    mechanism: 'Es un agonista adrenérgico beta-2 que relaja el músculo liso arteriolar y revierte el vasoespasmo cutáneo severo.',
    indicatedMedications: [
      'adrenalina',
      'dopamina',
      'noradrenalina',
      'vasopresina'
    ],
    pdfPage: 5,
    availabilityNotice: 'No disponible en el hospital, consultar al servicio de farmacia'
  },
  {
    id: 'nitroglicerina-topica',
    name: 'Nitroglicerina tópica al 2%',
    presentation: 'Pomada dérmica al 2% o parche transdérmico de 5 mg/día',
    dose: 'Pomada tópica cada 8 horas o parche de 5 mg/día',
    preparation: 'Aplicación tópica directa sobre la piel intacta circundante a la zona isquémica.',
    route: 'Tópica dérmica',
    technique: 'Extender suavemente sobre el área isquémica sin frotar con fuerza. Monitorizar presión arterial sistémica.',
    mechanism: 'Es vasodilatadora de los capilares precapilares y venas, reduciendo la isquemia y restableciendo la perfusión tisular.',
    indicatedMedications: [
      'adrenalina',
      'dopamina',
      'fenilefrina',
      'fenitoina',
      'noradrenalina',
      'nutricion-parenteral-total',
      'prometazina',
      'vasopresina'
    ],
    pdfPage: 5
  },
  {
    id: 'hidrocortisona-crema',
    name: 'Hidrocortisona crema 1%',
    presentation: 'Crema tópica al 1%',
    dose: 'Aplicación dérmica tópica cada 12 - 24 horas',
    preparation: 'Formulación tópica lista para uso dermatológico.',
    route: 'Tópica cutánea',
    technique: 'Aplicar una fina capa en la zona eritematosa o inflamada, habitualmente a partir del día 2.',
    mechanism: 'De naturaleza corticosteroide con marcadas propiedades antiinflamatorias locales para limitar el daño dérmico y edema tisular.',
    indicatedMedications: [
      'oxacilina',
      'fenitoina'
    ],
    pdfPage: 5
  },
  {
    id: 'tiosulfato-sodico',
    name: 'Tiosulfato sódico 1/6 M',
    presentation: 'Solución intravenosa 1/6 Molar',
    dose: '12,5 g IV durante 30 minutos; se puede incrementar gradualmente a 25 g IV 3 veces al día',
    preparation: 'Solución lista o diluida para perfusión intravenosa estricta.',
    route: 'Intravenosa (IV)',
    technique: 'Infusión IV en 30 minutos. Monitorizar equilibrio electrolítico.',
    mechanism: 'Agente quelante químico del calcio. Forma tiosulfato de calcio, sal sumamente soluble que disuelve las calcificaciones ectópicas y previene la calcinosis cutis tras extravasación tardía de sales cálcicas.',
    indicatedMedications: [
      'calcico-gluconato'
    ],
    pdfPage: 5
  }
];
