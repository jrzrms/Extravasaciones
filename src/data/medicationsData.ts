/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Medication } from '../types/clinical.ts';

export const MEDICATIONS: Medication[] = [
  {
    id: 'aciclovir',
    name: 'ACICLOVIR',
    activeIngredient: 'Aciclovir',
    commercialNames: ['Zovirax', 'Aciclovir Genérico IV'],
    pharmacologicalGroup: 'Antivírico sistémico',
    classifications: ['Agente vesicante', 'Agente necrosante', 'pH extremo (11)'],
    temperature: 'CALOR',
    temperatureDetails: 'Calor seco y elevación del miembro afectado.',
    immediateMeasures: [
      'Detener de inmediato la infusión intravenosa',
      'Aspirar a través de la vía 5-10 ml de sangre para retirar medicamento. Evitar presión manual',
      'Elevar el miembro afectado',
      'Aplicar calor seco local',
      'AVISO CLÍNICO: Evitar neutralizar el pH'
    ],
    generalMeasuresSummary: 'Medidas generales: calor seco y elevación del miembro afectado. Evitar neutralizar el pH.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      technique: 'Administrar en inyecciones intradérmicas de 0,2 ml alrededor de la lesión',
      route: 'Intradérmica (alrededor de la lesión)',
      observations: 'Actúa facilitando la dispersión y reabsorción tisular del fármaco extravasado.'
    },
    resolution: {
      expectedText: 'No documentada en la literatura de referencia.',
      complications: 'Riesgo de necrosis por pH marcadamente alcalino (pH 11) y naturaleza vesicante.'
    },
    warnings: [
      'pH extremo alcalino (11): No intentar neutralizar químicamente el pH local con ácidos ni soluciones tampón.',
      'Riesgo vesicante y necrosante significativo si se demora el tratamiento.'
    ],
    pdfPage: 6,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'adrenalina',
    name: 'ADRENALINA / EPINEFRINA',
    activeIngredient: 'Adrenalina (Epinefrina)',
    commercialNames: ['Adrenalina B. Braun', 'Epinefrina genérica'],
    pharmacologicalGroup: 'Agonista adrenérgico / Vasopresor',
    classifications: ['Agente vasopresor', 'Agente irritante', 'Agente necrosante'],
    temperature: 'CALOR',
    temperatureDetails: 'Calor seco y elevación del miembro afectado. Compresión con calor.',
    immediateMeasures: [
      'Detener inmediatamente la infusión de adrenalina',
      'Aspirar 5-10 ml de sangre por la vía antes de retirarla',
      'Elevar el miembro por encima del corazón',
      'Aplicar compresión con calor seco',
      'CRÍTICO: CONTRAINDICADO EL FRÍO LOCAL (empeora la vasoconstricción y necrosis isquémica)',
      'CRÍTICO: EVITAR HIALURONIDASA (basado en guía CHUA)'
    ],
    generalMeasuresSummary: 'Medidas generales: calor seco y elevación del miembro afectado. Compresión con calor. Evitar frío local y hialuronidasa.',
    antidote: {
      name: 'Fentolamina',
      hasAntidote: true,
      dose: '5-10 mg en 10-20 ml de SF',
      route: 'Infiltración subcutánea / intradérmica en el sitio de extravasación',
      technique: 'Inyecciones en abanico alrededor de la zona isquémica (máx 0,1-0,2 mg/kg en niños, máx 5 mg)',
      alternatives: [
        'Nitroglicerina 2% tópica cada 8 horas',
        'Terbutalina 1 mg en 10 ml de SF mediante inyecciones intradérmicas (No disponible en el hospital, consultar al servicio de farmacia)'
      ],
      contraindicationsOrAvoid: [
        'FRÍO LOCAL (empeora la vasoconstricción y la isquemia tisular)',
        'Hialuronidasa (desaconsejada en vasopresores según guía)'
      ],
      observations: 'Antagonista alfa-adrenérgico competitivo que revierte el vasoespasmo severo inducido por la adrenalina.'
    },
    resolution: {
      expectedText: 'Adolescentes: recuperación total. Adultos: recuperación rápida o en 5 meses.',
      adolescentes: 'Recuperación total documentada.',
      adultos: 'Recuperación rápida o en 5 meses.',
      complications: 'Desbridamiento quirúrgico, injerto de piel y riesgo de amputación por isquemia grave.'
    },
    warnings: [
      'ALERTA VASOPRESOR: Las compresas frías están terminantemente contraindicadas porque potencian el vasoespasmo isquémico.',
      'Vigilar perfusión capilar distal, coloración de dedos y pulso periférico.',
      'Si se produce extravasación grave, valorar interconsulta urgente con Cirugía Plástica/Vascular.'
    ],
    pdfPage: 6,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'albumina',
    name: 'ALBÚMINA',
    activeIngredient: 'Albúmina humana',
    commercialNames: ['Albúmina Humana 20%', 'Albúmina Grifols'],
    pharmacologicalGroup: 'Coloide / Expansor plasmático',
    classifications: ['No riesgo documentado'],
    temperature: 'NO_ESPECIFICADO',
    temperatureDetails: 'No especificado en la guía. Aplicar medidas generales estándar.',
    immediateMeasures: [
      'Detener la infusión',
      'Aspirar a través de la vía',
      'Retirar la vía venosa',
      'Elevar la extremidad afectada',
      'Vigilar signos locales'
    ],
    generalMeasuresSummary: 'No riesgo documentado en la literatura de la guía.',
    antidote: {
      name: 'Sin antídoto específico',
      hasAntidote: false,
      observations: 'No se requiere antídoto. Manejo expectante con medidas generales de enfermería.'
    },
    resolution: {
      expectedText: 'No documentada. Generalmente evolución benigna sin toxicidad tisular intrínseca.'
    },
    warnings: [
      'Fármaco sin toxicidad vesicante ni necrosante documentada en la guía.'
    ],
    pdfPage: 6,
    bibliography: '1',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'aminofilina',
    name: 'AMINOFILINA',
    activeIngredient: 'Aminofilina',
    commercialNames: ['Aminofilina Genérica IV'],
    pharmacologicalGroup: 'Broncodilatador xantínico',
    classifications: ['Agente vesicante'],
    temperature: 'AMBOS',
    temperatureDetails: 'Medidas generales: elevación, calor o frío.',
    immediateMeasures: [
      'Detener la infusión',
      'Aspirar 5-10 ml de sangre',
      'Elevar la extremidad afectada',
      'Aplicar compresas frías o calor según tolerancia del paciente',
      'Administrar antídoto específico si existe sospecha de extravasación de volumen significativo'
    ],
    generalMeasuresSummary: 'Medidas generales: elevación, calor o frío.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15-25 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      technique: 'Administrar en inyecciones intradérmicas de 0,2 ml alrededor de la lesión',
      route: 'Intradérmica alrededor de la extravasación'
    },
    resolution: {
      expectedText: 'No documentada en la guía.'
    },
    warnings: [
      'Agente clasificado como vesicante en la guía: requiere monitorización de la zona por posible ampolla o flictena.'
    ],
    pdfPage: 6,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'amiodarona',
    name: 'AMIODARONA',
    activeIngredient: 'Amiodarona hidrocloruro',
    commercialNames: ['Trangorex IV', 'Amiodarona genérica'],
    pharmacologicalGroup: 'Antiarrítmico clase III',
    classifications: ['pH extremo (3,5-4,5)', 'Agente irritante', 'Agente necrosante'],
    temperature: 'FRIO',
    temperatureDetails: 'Elevación y compresas frías. Mantener el tratamiento durante 48 horas.',
    immediateMeasures: [
      'Detener inmediatamente la infusión de amiodarona',
      'Aspirar 5-10 ml por la vía; evitar compresión manual',
      'Retirar la aguja si no se administra antídoto IV',
      'Elevar la extremidad por encima del corazón',
      'Aplicar compresas frías durante 20 min 3-4 veces al día (mantener 48h)',
      'AVISO CLÍNICO: Evitar neutralizar el pH'
    ],
    generalMeasuresSummary: 'Medidas generales: elevación y compresas frías. Mantener el tratamiento durante 48h. Evitar neutralizar el pH.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15-25 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      technique: 'Administrar en inyecciones intradérmicas de 0,2 ml alrededor de la lesión',
      route: 'Intradérmica'
    },
    resolution: {
      expectedText: 'Tiempo de resolución documentado: 5 meses.',
      adultos: 'Resolución lenta en 5 meses.',
      complications: 'Flebitis química severa, necrosis tisular local por bajo pH y tensioactivos del vehículo.'
    },
    warnings: [
      'pH ácido extremo (3,5-4,5): no neutralizar con bicarbonato ni otras bases.',
      'La resolución completa puede demorarse hasta 5 meses debido al daño tisular residual.'
    ],
    pdfPage: 6,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'ampicilina',
    name: 'AMPICILINA',
    activeIngredient: 'Ampicilina sódica',
    commercialNames: ['Gobemicina', 'Ampicilina genérica IV'],
    pharmacologicalGroup: 'Antibiótico betalactámico (Aminopenicilina)',
    classifications: ['pH 8-10', 'Agente hiperosmolar (566 mOsm/L)'],
    temperature: 'AMBOS',
    temperatureDetails: 'Elevación del miembro afectado, calor seco o compresas frías. (Cabecera cita F, texto contempla calor seco o compresas frías).',
    immediateMeasures: [
      'Detener la infusión',
      'Aspirar a través de la vía',
      'Elevar el miembro afectado',
      'Aplicar calor seco o compresas frías según indicación'
    ],
    generalMeasuresSummary: 'Medidas generales: elevación del miembro afectado, calor seco o compresas frías.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15-25 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      route: 'Intradérmica'
    },
    resolution: {
      expectedText: 'No documentada en la guía.'
    },
    warnings: [
      'Osmolaridad elevada (566 mOsm/L) y pH alcalino moderado (8-10).'
    ],
    pdfPage: 6,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'anfotericina',
    name: 'ANFOTERICINA',
    activeIngredient: 'Anfotericina B',
    commercialNames: ['Fungizona', 'AmBisome (liposomal)', 'Abelcet'],
    pharmacologicalGroup: 'Antifúngico poliénico',
    classifications: ['pH 5-6', 'Agente vesicante', 'Agente necrosante'],
    temperature: 'AMBOS',
    temperatureDetails: 'Elevación y compresas de frío, seguido de compresión con calor al día siguiente.',
    immediateMeasures: [
      'Detener inmediatamente la infusión',
      'Aspirar 5-10 ml de sangre',
      'Elevar la extremidad',
      'Día 1: Aplicar compresas frías',
      'Día 2 en adelante: Compresión con calor'
    ],
    generalMeasuresSummary: 'Medidas generales: elevación y compresas de frío, seguido de compresión con calor al día siguiente.',
    antidote: {
      name: 'Sin antídoto específico',
      hasAntidote: false,
      observations: 'No se describe antídoto farmacológico en la guía. Manejo secuencial con frío el primer día y calor al día siguiente.'
    },
    resolution: {
      expectedText: 'Adultos: resolución en 6 días.',
      adultos: 'Resolución en 6 días.'
    },
    warnings: [
      'Pauta térmica secuencial única: Frío inicial las primeras 24 horas, seguido de calor al día siguiente.'
    ],
    pdfPage: 6,
    bibliography: '1',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'arginina',
    name: 'ARGININA',
    activeIngredient: 'L-Arginina clorhidrato',
    commercialNames: ['Arginina Solución IV'],
    pharmacologicalGroup: 'Aminoácido / Prueba diagnóstica',
    classifications: ['Agente necrosante', 'Agente hiperosmolar (950 mOsm/L)'],
    temperature: 'AMBOS',
    temperatureDetails: 'Elevación, frío o calor.',
    immediateMeasures: [
      'Detener la infusión',
      'Aspirar sangre por la vía',
      'Elevar la extremidad afectada',
      'Aplicar frío o calor'
    ],
    generalMeasuresSummary: 'Medidas generales: elevación, frío o calor.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15-25 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      route: 'Intradérmica'
    },
    ageSpecificActions: {
      ninos: 'Pomada de sulfadiazina argéntica, compresión en frío con un vendaje antibiótico impregnado de plata seguido de un vendaje fino de hidrocoloide.'
    },
    resolution: {
      expectedText: 'Niños: resolución en 1-2 meses.',
      ninos: 'Resolución en 1-2 meses con cura tópica argéntica y vendaje fino hidrocoloide.'
    },
    warnings: [
      'Hiperosmolaridad muy elevada (950 mOsm/L) con riesgo de necrosis tisular.'
    ],
    pdfPage: 7,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'bicarbonato-sodico',
    name: 'BICARBONATO SÓDICO',
    activeIngredient: 'Bicarbonato de sodio 1M / 1/6M',
    commercialNames: ['Bicarbonato Sódico 1M B. Braun', 'Bicarbonato 8,4%'],
    pharmacologicalGroup: 'Alcalinizante / Solución electrolítica',
    classifications: ['pH 7-8,5', 'Agente vesicante', 'Agente necrosante', 'Agente hiperosmolar (2000 mOsm/L)'],
    temperature: 'CALOR',
    temperatureDetails: 'Calor local (C). Medidas generales.',
    immediateMeasures: [
      'Detener de forma inmediata la infusión',
      'Aspirar 5-10 ml de sangre antes de manipular el acceso',
      'Elevar la extremidad',
      'Aplicar calor local'
    ],
    generalMeasuresSummary: 'Medidas generales.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15-25 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      route: 'Intradérmica'
    },
    ageSpecificActions: {
      neonatos: 'Pomada de sulfadiazina argéntica con clorhexidina al 0,2%.',
      adultos: 'Drenaje, injerto de piel y desbridamiento quirúrgico si evoluciona a necrosis.'
    },
    resolution: {
      expectedText: 'Neonatos: resolución en 3 meses. Adultos: no documentada.',
      neonatos: 'Resolución en 3 meses.',
      adultos: 'No documentada (puede requerir cirugía).'
    },
    warnings: [
      'Osmolaridad extrema (2000 mOsm/L en concentración 1M o 8,4%): alto riesgo de desbridamiento quirúrgico en adultos e injerto de piel.'
    ],
    pdfPage: 7,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'calcio-en-solucion',
    name: 'CALCIO EN SOLUCIÓN',
    activeIngredient: 'Calcio en solución / Sales de calcio',
    commercialNames: ['Cloruro Cálcico', 'Sales de calcio IV'],
    pharmacologicalGroup: 'Suplemento mineral / Electrolito',
    classifications: ['Agente vesicante'],
    temperature: 'CALOR',
    temperatureDetails: 'Calor local (C).',
    immediateMeasures: [
      'Parar la infusión inmediatamente',
      'Aspirar a través de la vía',
      'Elevar la extremidad',
      'Aplicar calor local en niños'
    ],
    generalMeasuresSummary: 'Medidas generales.',
    antidote: {
      name: 'Sin antídoto farmacológico documentado en esta tabla',
      hasAntidote: false,
      observations: 'Manejo clínico quirúrgico/antiinflamatorio según grupo de edad.'
    },
    ageSpecificActions: {
      neonatos: 'Desbridamiento quirúrgico.',
      ninos: 'Calor, desbridamiento quirúrgico de la masa.',
      adultos: 'Prednisona 30 mg durante 15 días.'
    },
    resolution: {
      expectedText: 'Neonatos: resolución espontánea. Niños: no pérdida de sensibilidad. Adultos: desaparición del halo eritematoso, pero permanencia durante 1 año de depósitos de hiperpigmentación.',
      neonatos: 'Resolución espontánea.',
      ninos: 'No pérdida de sensibilidad tras desbridamiento.',
      adultos: 'Desaparición del halo eritematoso, permanencia durante 1 año de depósitos de hiperpigmentación.'
    },
    warnings: [
      'Riesgo de calcificación tisular local y formación de masas induradas.'
    ],
    pdfPage: 7,
    bibliography: '1',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'calcico-gluconato',
    name: 'CÁLCICO, GLUCONATO',
    activeIngredient: 'Gluconato de calcio 10%',
    commercialNames: ['Gluconato Cálcico 10% B. Braun', 'Suplecal'],
    pharmacologicalGroup: 'Solución de electrolito / Calcio',
    classifications: ['Agente hiperosmolar (669 mOsm/L)', 'Agente vesicante', 'Agente necrosante'],
    temperature: 'CALOR',
    temperatureDetails: 'Calor local (C).',
    immediateMeasures: [
      'Detener la infusión de forma urgente',
      'Aspirar 5-10 ml de sangre',
      'Elevar el miembro por encima del corazón',
      'Diferenciar inmediatamente entre manejo precoz (<60 min) y tardío (>60 min)'
    ],
    generalMeasuresSummary: 'Diferenciación crítica según el tiempo de evolución: tratamiento precoz (<60 min) vs tratamiento tardío (>60 min).',
    antidote: {
      name: 'Hialuronidasa (Precoz <60 min) / Tiosulfato sódico 1/6M (Tardío >60 min)',
      hasAntidote: true,
      dose: 'Tiosulfato sódico 1/6M: 12,5 g IV durante 30 min (puede incrementarse a 25 g IV 3 veces/día)',
      route: 'Hialuronidasa SC/intradérmica en precoz; Tiosulfato sódico 1/6M vía IV en tardío',
      observations: 'El Tiosulfato sódico 1/6M se administra en casos de calcinosis cutis tardía (>60 min) para quelar el calcio libre depositado en tejidos.'
    },
    ageSpecificActions: {
      neonatos: 'Crema antibiótica con corticoides y otros antibióticos.',
      ninos: 'No documentado en la guía.',
      adolescentes: 'Sulfadiazina argéntica con crema de clorhexidina al 0,2 %, e injerto de piel y desbridamiento quirúrgico.',
      adultos: 'No documentado en la guía para pauta médica, vigilar complicaciones graves.'
    },
    resolution: {
      expectedText: 'Neonatos: recuperación entre 20 días y 6 meses. Adolescentes: resultados satisfactorios después de dos cirugías.',
      neonatos: 'Recuperación entre 20 días y 6 meses.',
      adolescentes: 'Resultados satisfactorios tras 2 intervenciones.',
      adultos: 'COMPLICACIÓN: rigidez, síndrome de distrofia simpática refleja, operaciones quirúrgicas.'
    },
    warnings: [
      'CRÍTICO: El tiempo es determinante. Si <60 min: Hialuronidasa y desbridamiento. Si >60 min (calcinosis cutis): Tiosulfato sódico 1/6M IV.',
      'En adultos puede complicarse con síndrome de dolor regional complejo (distrofia simpática refleja) y rigidez permanente.'
    ],
    pdfPage: 7,
    bibliography: '1',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'cloxacilina',
    name: 'CLOXACILINA',
    activeIngredient: 'Cloxacilina sódica',
    commercialNames: ['Orbenin IV', 'Cloxacilina genérica'],
    pharmacologicalGroup: 'Antibiótico betalactámico isoxazolilpenicilina',
    classifications: ['No documentado en la guía'],
    temperature: 'NO_ESPECIFICADO',
    temperatureDetails: 'No documentada en la guía. Aplicar protocolo general de actuación.',
    immediateMeasures: [
      'Detener la infusión',
      'Aspirar 5-10 ml de sangre',
      'Retirar la vía',
      'Elevar la extremidad',
      'Aplicar medidas generales de enfermería'
    ],
    generalMeasuresSummary: 'Manejo no documentado en la guía.',
    antidote: {
      name: 'Sin antídoto específico recogido en la guía',
      hasAntidote: false
    },
    resolution: {
      expectedText: 'No documentada.'
    },
    warnings: [
      'Sin datos específicos de toxicidad o pauta en la tabla original (basado en guía CHUA).'
    ],
    pdfPage: 8,
    bibliography: '1',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'dextrosa',
    name: 'DEXTROSA 10%-50%',
    activeIngredient: 'Glucosa hiperosmolar (Dextrosa 10%, 20%, 50%)',
    commercialNames: ['Glucosado 10%', 'Glucosado 20%', 'Glucosado 50%'],
    pharmacologicalGroup: 'Solución hidrocarbonada intravenosa',
    classifications: ['Agente hiperosmolar (504-2520 mOsm/L)', 'Agente necrosante'],
    temperature: 'AMBOS',
    temperatureDetails: 'Dextrosa (C) (F): Medidas generales.',
    immediateMeasures: [
      'Detener la perfusión inmediatamente',
      'Aspirar por la vía',
      'Elevar la extremidad por encima del corazón',
      'Administrar hialuronidasa precozmente'
    ],
    generalMeasuresSummary: 'Medidas generales.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15-25 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      technique: 'Administrar como inyecciones intradérmicas de 0,2 ml alrededor de la lesión',
      route: 'Intradérmica'
    },
    ageSpecificActions: {
      neonatos: 'Desbridamiento quirúrgico, injerto de piel y pomada proteolítica.',
      ninos: 'Desbridamiento quirúrgico e injerto de piel.',
      adolescentes: 'Compresión con frío y hialuronidasa.',
      adultos: 'No documentado en la guía.'
    },
    resolution: {
      expectedText: 'Neonatos: recuperación. Adolescentes: resolución en 6 meses.',
      neonatos: 'Recuperación documentada.',
      adolescentes: 'Resolución en 6 meses.',
      adultos: 'No documentado.'
    },
    warnings: [
      'Las concentraciones altas (Dextrosa al 50%: 2520 mOsm/L) causan rápida deshidratación celular y necrosis tisular severa.'
    ],
    pdfPage: 8,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'diazepam',
    name: 'DIAZEPAM',
    activeIngredient: 'Diazepam',
    commercialNames: ['Valium IV', 'Diazepam genérico'],
    pharmacologicalGroup: 'Benzodiacepina',
    classifications: ['Agente vesicante', 'Agente hiperosmolar'],
    temperature: 'AMBOS',
    temperatureDetails: 'Diazepam (C) (F): Medidas generales.',
    immediateMeasures: [
      'Detener la infusión',
      'Aspirar 5-10 ml de sangre',
      'Elevar la extremidad afectada',
      'Aplicar frío o calor'
    ],
    generalMeasuresSummary: 'Medidas generales.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15-25 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      technique: 'Administrar como inyecciones intradérmicas 0,2 ml alrededor de la lesión',
      route: 'Intradérmica'
    },
    resolution: {
      expectedText: 'No documentada en la guía.'
    },
    warnings: [
      'Contiene disolventes orgánicos (propilenglicol/etanol) que aumentan la osmolaridad y la agresividad tisular.'
    ],
    pdfPage: 8,
    bibliography: '2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'digoxina',
    name: 'DIGOXINA',
    activeIngredient: 'Digoxina',
    commercialNames: ['Digoxina Sanofi IV', 'Digoxina genérica'],
    pharmacologicalGroup: 'Glucósido cardiotónico',
    classifications: ['Agente vesicante', 'Agente hiperosmolar'],
    temperature: 'AMBOS',
    temperatureDetails: 'Digoxina (C) (F): Medidas generales.',
    immediateMeasures: [
      'Detener inmediatamente la inyección',
      'Aspirar a través de la vía venosa',
      'Elevar la extremidad',
      'Aplicar frío o calor'
    ],
    generalMeasuresSummary: 'Medidas generales.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15-25 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      technique: 'Administrar como inyecciones intradérmicas 0,2 ml alrededor de la lesión',
      route: 'Intradérmica'
    },
    resolution: {
      expectedText: 'No documentada en la guía.'
    },
    warnings: [
      'Clasificado como agente vesicante e hiperosmolar.'
    ],
    pdfPage: 8,
    bibliography: '2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'dopamina',
    name: 'DOPAMINA',
    activeIngredient: 'Dopamina hidrocloruro',
    commercialNames: ['Dopamina Grifols', 'Dopamina genérica IV'],
    pharmacologicalGroup: 'Agente inotrópico / Vasopresor adrenérgico',
    classifications: ['Agente vasopresor', 'Agente irritante', 'Agente necrosante'],
    temperature: 'CALOR',
    temperatureDetails: 'Dopamina (C): calor local.',
    immediateMeasures: [
      'Detener la perfusión de dopamina inmediatamente',
      'Aspirar sangre por la vía (5-10 ml)',
      'Elevar la extremidad por encima del corazón',
      'CRÍTICO: EVITAR FRÍO LOCAL Y HIALURONIDASA',
      'Infiltrar Fentolamina como antídoto de primera línea sin demora'
    ],
    generalMeasuresSummary: 'Medidas generales. Evitar frío local y hialuronidasa.',
    antidote: {
      name: 'Fentolamina',
      hasAntidote: true,
      dose: '5-10 mg en 10-20 ml SF intradérmico',
      technique: 'Inyecciones subcutáneas / intradérmicas en abanico en la zona extravasada',
      route: 'Intradérmica / Subcutánea',
      alternativas: [
        'Nitroglicerina 2% tópica cada 8 horas',
        'Terbutalina 1 mg en 10 ml de SF inyecciones intradérmicas (No disponible en el hospital, consultar al servicio de farmacia)'
      ],
      contraindicationsOrAvoid: [
        'FRÍO LOCAL (agrava la vasoconstricción isquémica)',
        'Hialuronidasa'
      ],
      observations: 'Actúa bloqueando receptores alfa adrenérgicos y restaurando el flujo microvascular.'
    },
    ageSpecificActions: {
      neonatos: 'Fentolamina, nitroglicerina tópica, antibióticos tópicos y gasas de vaselina.',
      ninos: 'Nitroglicerina tópica.',
      adolescentes: 'Desbridamiento e injerto de la piel.',
      adultos: 'Fentolamina, terbutalina y nitroprusiato sódico, compresión con calor.'
    },
    resolution: {
      expectedText: 'Neonatos: resolución a los 1-9 días. Niños: normal a las 12 horas. Adultos: resolución a las 2 semanas.',
      neonatos: 'Resolución a los 1-9 días. COMPLICACIÓN: desbridamientos quirúrgicos múltiples con terapia física a largo plazo.',
      ninos: 'Normalización a las 12 horas.',
      adultos: 'Resolución a las 2 semanas. COMPLICACIÓN: edema, equimosis, gangrena y operaciones quirúrgicas.'
    },
    warnings: [
      'EXTREMA URGENCIA: Riesgo de gangrena de extremidad o dedos y necesidad de amputación.',
      'El frío local está expresamente prohibido.',
      'Control vascular continuo y valoración por Cirugía.'
    ],
    pdfPage: 8,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'doxiciclina',
    name: 'DOXICICLINA',
    activeIngredient: 'Doxiciclina hiclato',
    commercialNames: ['Vibravenosa', 'Doxiciclina IV'],
    pharmacologicalGroup: 'Antibiótico tetraciclina',
    classifications: ['Agente irritante', 'Agente vesicante', 'Agente acidificante (pH 1,8-3,3)'],
    temperature: 'CALOR',
    temperatureDetails: 'Calor seco. Evitar neutralizar el pH.',
    immediateMeasures: [
      'Detener la infusión',
      'Aspirar por la vía 5-10 ml de sangre',
      'Elevar el miembro afectado',
      'Aplicar calor seco local',
      'NO neutralizar el pH'
    ],
    generalMeasuresSummary: 'Medidas generales: calor seco. Evitar neutralizar el pH.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      technique: 'Administrar como inyecciones intradérmicas 0,2 ml alrededor de la lesión',
      route: 'Intradérmica'
    },
    resolution: {
      expectedText: 'No documentada en la guía.'
    },
    warnings: [
      'pH extremadamente ácido (1,8-3,3): Daño tisular agudo directo por causticidad ácida.',
      'No irrigar con bicarbonato ni alterar el pH tisular.'
    ],
    pdfPage: 9,
    bibliography: '2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'etomidato',
    name: 'ETOMIDATO',
    activeIngredient: 'Etomidato',
    commercialNames: ['Hypnomidate', 'Etomidato Lipuro'],
    pharmacologicalGroup: 'Hipnótico intravenoso',
    classifications: ['Agente hiperosmolar'],
    temperature: 'AMBOS',
    temperatureDetails: 'Etomidato (C) (F): Medidas generales.',
    immediateMeasures: [
      'Detener la infusión',
      'Aspirar por la cánula',
      'Elevar la extremidad'
    ],
    generalMeasuresSummary: 'Medidas generales.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15-25 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      technique: 'Administrar como inyecciones intradérmicas 0,2 ml alrededor de la lesión',
      route: 'Intradérmica'
    },
    resolution: {
      expectedText: 'No documentada en la guía.'
    },
    warnings: [
      'Presentación clásica con propilenglicol de alta osmolaridad tisular.'
    ],
    pdfPage: 9,
    bibliography: '2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'fenilefrina',
    name: 'FENILEFRINA',
    activeIngredient: 'Fenilefrina hidrocloruro',
    commercialNames: ['Fenilefrina B. Braun', 'Fenilefrina IV'],
    pharmacologicalGroup: 'Agonista alfa-1 adrenérgico / Vasopresor',
    classifications: ['Agente vasopresor'],
    temperature: 'CALOR',
    temperatureDetails: 'Elevación y calor. Evitar hielo y hialuronidasa.',
    immediateMeasures: [
      'Detener inmediatamente la infusión de fenilefrina',
      'Aspirar 5-10 ml de sangre',
      'Elevar la extremidad afectada',
      'Aplicar calor local',
      'CRÍTICO: EVITAR HIELO Y HIALURONIDASA'
    ],
    generalMeasuresSummary: 'Medidas generales: elevación y calor. Evitar hielo y hialuronidasa.',
    antidote: {
      name: 'Fentolamina',
      hasAntidote: true,
      dose: '5-10 mg en 10-20 ml SF',
      technique: 'Infiltración intradérmica / subcutánea alrededor del área extravasada',
      route: 'Infiltración local',
      alternativas: [
        'Nitroglicerina 2%'
      ],
      contraindicationsOrAvoid: [
        'HIELO / FRÍO LOCAL',
        'Hialuronidasa'
      ],
      observations: 'Antagonista alfa potente para revertir la isquemia tisular.'
    },
    resolution: {
      expectedText: 'No documentada en la guía.'
    },
    warnings: [
      'Potente vasoconstrictor puro: el frío precipita necrosis dérmica irreversible.',
      'El tratamiento con calor y Fentolamina debe instaurarse con rapidez.'
    ],
    pdfPage: 9,
    bibliography: '2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'fenitoina',
    name: 'FENITOÍNA',
    activeIngredient: 'Fenitoína sódica',
    commercialNames: ['Epanutin parenteral', 'Fenitoína Rubió'],
    pharmacologicalGroup: 'Antiepiléptico / Hidantoína',
    classifications: ['Agente hiperosmolar (> 700 mOsm/L)', 'pH extremo (10-12)', 'Agente vesicante', 'Agente necrosante'],
    temperature: 'CALOR',
    temperatureDetails: 'Calor seco y elevación. Evitar neutralizar el pH. (En adultos se cita además compresión con frío en literatura).',
    immediateMeasures: [
      'Detener la inyección de fenitoína al instante',
      'Aspirar 5-10 ml de sangre',
      'Elevar la extremidad',
      'Aplicar calor seco local',
      'NO neutralizar el pH bajo ninguna circunstancia'
    ],
    generalMeasuresSummary: 'Medidas generales: calor seco y elevación. Evitar neutralizar el pH.',
    antidote: {
      name: 'Nitroglicerina 2% tópica',
      hasAntidote: true,
      dose: 'Nitroglicerina 2% tópica cada 8 horas',
      route: 'Tópica dérmica',
      alternativas: [
        'Hialuronidasa: diluir la ampolla a 1:10 (0,1 ml + 0,9 ml SF) y administrar 0,2 ml intradérmico alrededor de la lesión'
      ],
      observations: 'El síndrome de infusión de fenitoína ("Purple Glove Syndrome") cursa con edema, decoloración violácea y necrosis.'
    },
    ageSpecificActions: {
      ninos: 'Hialuronidasa, hidrocortisona SC, triamcinolona y lidocaína.',
      adultos: 'Parches de nitroglicerina, compresión con frío.'
    },
    resolution: {
      expectedText: 'Niños: recuperación en 5 meses. Adultos: resolución en 2 semanas.',
      ninos: 'Recuperación en 5 meses. COMPLICACIÓN: formación de ampollas.',
      adultos: 'Resolución en 2 semanas. COMPLICACIÓN: amputación.'
    },
    warnings: [
      'ALERTA GRAVE: Riesgo documentado de AMPUTACIÓN en adultos y necrosis extensa.',
      'Solución sumamente alcalina (pH 10-12) y de alta osmolaridad.',
      'Evitar neutralizar el pH con infusiones ácidas.'
    ],
    pdfPage: 9,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'furosemida',
    name: 'FUROSEMIDA',
    activeIngredient: 'Furosemida',
    commercialNames: ['Seguril IV', 'Furosemida genérica'],
    pharmacologicalGroup: 'Diurético del asa',
    classifications: ['No documentado en la guía'],
    temperature: 'NO_ESPECIFICADO',
    temperatureDetails: 'No documentada en la guía. Aplicar protocolo general.',
    immediateMeasures: [
      'Detener la infusión',
      'Aspirar a través de la vía',
      'Retirar la aguja',
      'Elevar el miembro afectado'
    ],
    generalMeasuresSummary: 'No documentada en la guía.',
    antidote: {
      name: 'Sin antídoto específico recogido en la guía',
      hasAntidote: false
    },
    resolution: {
      expectedText: 'No documentada.'
    },
    warnings: [
      'No constan medidas específicas en la tabla original de la guía.'
    ],
    pdfPage: 9,
    bibliography: '1',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'gentamicina',
    name: 'GENTAMICINA',
    activeIngredient: 'Gentamicina sulfato',
    commercialNames: ['Gentamicina B. Braun', 'Gevramycin'],
    pharmacologicalGroup: 'Antibiótico aminoglucósido',
    classifications: ['No documentado en la guía'],
    temperature: 'NO_ESPECIFICADO',
    temperatureDetails: 'Medidas generales.',
    immediateMeasures: [
      'Detener la infusión',
      'Aspirar por la vía',
      'Elevar la extremidad',
      'Iniciar cura tópica protectora'
    ],
    generalMeasuresSummary: 'Medidas generales.',
    antidote: {
      name: 'Sulfadiazina argéntica + Clorhexidina al 0,2%',
      hasAntidote: true,
      technique: 'Vendajes tópicos diarios',
      route: 'Tópica cutánea',
      observations: 'Cuidado y protección de barrera cutánea frente a infección secundaria y sobreinfección.'
    },
    resolution: {
      expectedText: 'Adultos: al menos 6 meses.',
      adultos: 'Tiempo de evolución documentado: al menos 6 meses.'
    },
    warnings: [
      'La evolución de la lesión puede prolongarse al menos 6 meses en adultos.'
    ],
    pdfPage: 9,
    bibliography: '2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'inmunoglobulinas-humanas',
    name: 'INMUNOGLOBULINAS HUMANAS',
    activeIngredient: 'Inmunoglobulina humana normal IV',
    commercialNames: ['Flebogamma DIF', 'Privigen', 'Octagam', 'Kiovig'],
    pharmacologicalGroup: 'Inmunoglobulina endovenosa (IgIV)',
    classifications: ['Agente hiperosmolar (240-1074 mOsm/L)', 'pH extremo (4-7)'],
    temperature: 'NO_ESPECIFICADO',
    temperatureDetails: 'Medidas generales.',
    immediateMeasures: [
      'Detener la infusión',
      'Aspirar a través de la cánula',
      'Elevar el miembro',
      'Aplicar curas diarias tópicas'
    ],
    generalMeasuresSummary: 'Medidas generales.',
    antidote: {
      name: 'Sulfadiazina argéntica + Clorhexidina al 0,2%',
      hasAntidote: true,
      technique: 'Vendajes tópicos diarios',
      route: 'Tópica'
    },
    resolution: {
      expectedText: 'Niños: al menos 4 meses con moderadas cicatrices.',
      ninos: 'Al menos 4 meses de evolución con presencia de moderadas cicatrices residuales.'
    },
    warnings: [
      'Alta concentración proteica y amplio rango de osmolaridad (hasta 1074 mOsm/L).'
    ],
    pdfPage: 9,
    bibliography: '2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'lipidos-20',
    name: 'LÍPIDOS 20%',
    activeIngredient: 'Emulsión lipídica IV (Triglicéridos)',
    commercialNames: ['Intralipid 20%', 'ClinOleic 20%', 'SMOFlipid 20%'],
    pharmacologicalGroup: 'Nutrición parenteral / Emulsión lipídica',
    classifications: ['Agente parenteral no citostático'],
    temperature: 'NO_ESPECIFICADO',
    temperatureDetails: 'No especificado en cabecera de tabla.',
    immediateMeasures: [
      'Detener la infusión de lípidos inmediatamente',
      'Aspirar 5-10 ml de sangre',
      'Elevar la extremidad',
      'Iniciar curas tópicas'
    ],
    generalMeasuresSummary: 'Sulfadiazina argéntica + clorhexidina al 0,2 %, e injerto de piel y desbridamiento quirúrgico.',
    antidote: {
      name: 'Sulfadiazina argéntica + Clorhexidina al 0,2%',
      hasAntidote: true,
      route: 'Tópica',
      observations: 'Requiere valoración quirúrgica precoz (injerto de piel y desbridamiento).'
    },
    resolution: {
      expectedText: 'Niños: recuperación.',
      ninos: 'Recuperación tras manejo tópico o quirúrgico.'
    },
    warnings: [
      'Las partículas lipídicas provocan reacción a cuerpo extraño e inflamación granulomatosa que puede precisar injerto o desbridamiento.'
    ],
    pdfPage: 10,
    bibliography: '2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'lorazepam',
    name: 'LORAZEPAM',
    activeIngredient: 'Lorazepam',
    commercialNames: ['Orfidal IV', 'Lorazepam genérico'],
    pharmacologicalGroup: 'Benzodiacepina',
    classifications: ['Agente hiperosmolar'],
    temperature: 'AMBOS',
    temperatureDetails: 'Lorazepam (C) (F): Medidas generales.',
    immediateMeasures: [
      'Detener la infusión',
      'Aspirar por la vía',
      'Elevar el miembro',
      'Aplicar frío o calor'
    ],
    generalMeasuresSummary: 'Medidas generales.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15-25 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      technique: 'Administrar como inyecciones intradérmicas 0,2 ml alrededor de la lesión',
      route: 'Intradérmica'
    },
    resolution: {
      expectedText: 'No documentada en la guía.'
    },
    warnings: [
      'Vehículo de propilenglicol con hiperosmolaridad local.'
    ],
    pdfPage: 10,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'manitol-20',
    name: 'MANITOL 20%',
    activeIngredient: 'Manitol 20%',
    commercialNames: ['Manitol 20% Fresenius', 'Manitol 20% B. Braun'],
    pharmacologicalGroup: 'Diurético osmótico',
    classifications: ['Agente hiperosmolar (1369 mOsm/L)'],
    temperature: 'CALOR',
    temperatureDetails: 'Cabecera (C): calor. En texto de medidas generales: elevación, calor o frío.',
    immediateMeasures: [
      'Detener inmediatamente la infusión',
      'Aspirar 5-10 ml de sangre',
      'Elevar la extremidad afectada',
      'Administrar hialuronidasa precozmente',
      'Vigilar rigurosamente si aparecen signos de síndrome compartimental'
    ],
    generalMeasuresSummary: 'Medidas generales: elevación, calor o frío.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15-25 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      technique: 'Administrar como inyecciones intradérmicas 0,2 ml alrededor de la lesión',
      route: 'Intradérmica'
    },
    ageSpecificActions: {
      ninos: 'Descompresión quirúrgica.',
      adolescentes: 'Descompresión quirúrgica.',
      adultos: 'Descompresión quirúrgica o hialuronidasa y compresión con calor.'
    },
    resolution: {
      expectedText: 'Recuperación en todos los casos documentados.',
      adultos: 'Recuperación documentada con tratamiento oportuno.'
    },
    warnings: [
      'Osmolaridad sumamente alta (1369 mOsm/L): atrae rápidamente líquido al espacio intersticial y puede desencadenar síndrome compartimental que precise descompresión quirúrgica urgente.'
    ],
    pdfPage: 10,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'metronidazol',
    name: 'METRONIDAZOL',
    activeIngredient: 'Metronidazol',
    commercialNames: ['Flagyl IV', 'Metronidazol B. Braun'],
    pharmacologicalGroup: 'Antibacteriano / Antiprotozoario',
    classifications: ['Agente no citostático'],
    temperature: 'NO_ESPECIFICADO',
    temperatureDetails: 'Medidas generales.',
    immediateMeasures: [
      'Detener la infusión inmediatamente',
      'Aspirar por la vía',
      'Elevar el miembro afectado',
      'Vigilar perfusión de dedos'
    ],
    generalMeasuresSummary: 'Medidas generales. Antídoto: desconocido. Aspirina, pentoxifilina o nifedipino resultan ineficaces.',
    antidote: {
      name: 'Sin antídoto específico conocido',
      hasAntidote: false,
      observations: 'Aspirina, pentoxifilina o nifedipino resultan ineficaces según la literatura.'
    },
    resolution: {
      expectedText: 'No documentada.',
      complications: 'COMPLICACIÓN GRAVE: gangrena en estado avanzado en la mitad de los dedos de la mano.'
    },
    warnings: [
      'ALERTA CLÍNICA: Riesgo documentado de gangrena avanzada en dedos de la mano.',
      'Los fármacos vasodilatadores empíricos como aspirina, pentoxifilina o nifedipino han demostrado ser ineficaces.'
    ],
    pdfPage: 10,
    bibliography: '2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'morfina',
    name: 'MORFINA',
    activeIngredient: 'Morfina clorhidrato',
    commercialNames: ['Morfina 1% B. Braun', 'Cloruro Mórfico'],
    pharmacologicalGroup: 'Analgésico opioide mayor',
    classifications: ['No documentada en la guía'],
    temperature: 'NO_ESPECIFICADO',
    temperatureDetails: 'No documentada.',
    immediateMeasures: [
      'Detener la infusión',
      'Aspirar a través de la vía',
      'Retirar la aguja',
      'Elevar la extremidad'
    ],
    generalMeasuresSummary: 'No documentada en la guía.',
    antidote: {
      name: 'Sin antídoto específico recogido en la guía',
      hasAntidote: false
    },
    resolution: {
      expectedText: 'No documentada.'
    },
    warnings: [
      'Sin datos lesivos específicos documentados en la guía.'
    ],
    pdfPage: 10,
    bibliography: '1',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'nitroglicerina-infusion',
    name: 'NITROGLICERINA (Infusión)',
    activeIngredient: 'Nitroglicerina (Gliceril trinitrato)',
    commercialNames: ['Solinitrina fuerte', 'Nitroglicerina IV'],
    pharmacologicalGroup: 'Vasodilatador coronario / periférico',
    classifications: ['Agente no citostático'],
    temperature: 'AMBOS',
    temperatureDetails: 'Nitroglicerina (C) (F): Medidas generales: elevación, calor o frío.',
    immediateMeasures: [
      'Detener la infusión',
      'Aspirar por la vía',
      'Elevar el miembro afectado',
      'Aplicar frío o calor'
    ],
    generalMeasuresSummary: 'Medidas generales: elevación, calor o frío.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15-25 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      technique: 'Administrar como inyecciones intradérmicas 0,2 ml alrededor de la lesión',
      route: 'Intradérmica'
    },
    resolution: {
      expectedText: 'No documentada en la guía.'
    },
    warnings: [
      'Vigilar posibles efectos hemodinámicos sistémicos (hipotensión) si la cantidad extravasada es absorbida.'
    ],
    pdfPage: 10,
    bibliography: '2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'noradrenalina',
    name: 'NORADRENALINA / NOREPINEFRINA',
    activeIngredient: 'Noradrenalina bitartrato',
    commercialNames: ['Noradrenalina B. Braun', 'Levofed'],
    pharmacologicalGroup: 'Vasopresor alfa-adrenérgico',
    classifications: ['Agente vasopresor', 'Agente irritante', 'Agente necrosante'],
    temperature: 'CALOR',
    temperatureDetails: 'Noradrenalina (C): elevación y calor.',
    immediateMeasures: [
      'Detener la perfusión de noradrenalina inmediatamente',
      'Aspirar 5-10 ml de sangre por la vía',
      'Elevar el miembro afectado por encima del corazón',
      'Aplicar compresión con calor seco',
      'CRÍTICO: EVITAR FRÍO LOCAL Y HIALURONIDASA',
      'Infiltrar Fentolamina precozmente (máximo beneficio en los primeros minutos)'
    ],
    generalMeasuresSummary: 'Medidas generales: elevación y calor. Evitar frío local y hialuronidasa.',
    antidote: {
      name: 'Fentolamina',
      hasAntidote: true,
      dose: '5-10 mg en 10-20 ml SF intradérmico',
      technique: 'Inyecciones subcutáneas / intradérmicas en abanico sobre la zona pálida o cianótica',
      route: 'Intradérmica / Subcutánea',
      alternativas: [
        'Nitroglicerina 2% tópica cada 8 horas',
        'Terbutalina 1 mg en 10 ml de SF inyecciones intradérmicas (No disponible en el hospital, consultar al servicio de farmacia)',
        'Sulfadiazina argéntica tópica'
      ],
      contraindicationsOrAvoid: [
        'FRÍO LOCAL (empeora drásticamente la vasoconstricción y la gangrena)',
        'Hialuronidasa'
      ],
      observations: 'Antagonista alfa competitivo específico; esencial para revertir el colapso microvascular.'
    },
    resolution: {
      expectedText: 'Adultos: recuperación a las 4 semanas.',
      adultos: 'Recuperación a las 4 semanas si se trata a tiempo.',
      complications: 'COMPLICACIÓN GRAVE: necrosis del dedo, mano cianótica a las 24 horas y edema durante 7 días.'
    },
    warnings: [
      'MÁXIMA PRIORIDAD CLÍNICA EN URGENCIAS.',
      'El frío local está formalmente contraindicado.',
      'Riesgo directo de necrosis digital y amputación si no se administra antídoto vasodilatador (Fentolamina/Nitroglicerina/Terbutalina).'
    ],
    pdfPage: 10,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'nutricion-parenteral-total',
    name: 'NUTRICIÓN PARENTERAL TOTAL',
    activeIngredient: 'Mezcla de aminoácidos, glucosa y electrolitos',
    commercialNames: ['Kabiven', 'OliClimel', 'Nutriflex'],
    pharmacologicalGroup: 'Nutrición parenteral parenteral central/periférica',
    classifications: ['Agente hiperosmolar', 'Agente vesicante', 'Agente necrosante'],
    temperature: 'AMBOS',
    temperatureDetails: 'NPT (C) (F): Medidas generales: elevación, frío o calor.',
    immediateMeasures: [
      'Detener la infusión de NPT',
      'Aspirar todo el volumen posible por la vía',
      'Elevar la extremidad afectada',
      'Aplicar frío o calor',
      'Administrar hialuronidasa como antídoto de dispersión'
    ],
    generalMeasuresSummary: 'Medidas generales: elevación, frío o calor.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      technique: 'Administrar como inyecciones intradérmicas 0,2 ml alrededor de la lesión',
      route: 'Intradérmica',
      alternativas: [
        'Parche de nitroglicerina 5 mg',
        'Nitroglicerina 2% tópica cada 8 horas'
      ]
    },
    ageSpecificActions: {
      neonatos: 'Parches de nitroglicerina tópica, pomada antibiótica, sulfadiazina argéntica al 1%. Compresión con calor.',
      ninos: 'Pomada antibiótica.',
      adultos: 'No documentada pauta específica en la tabla.'
    },
    resolution: {
      expectedText: 'Neonatos: resolución en 12-22 días. Niños: recuperación en 1-2 meses con pequeñas contracturas o pigmentación.',
      neonatos: 'Resolución en 12-22 días.',
      ninos: 'Recuperación en 1-2 meses con posibles pequeñas contracturas o pigmentación.',
      adultos: 'No documentada.'
    },
    warnings: [
      'Elevada osmolaridad y potencial vesicante con riesgo de contracturas cicatriciales residuales en pediatría.'
    ],
    pdfPage: 11,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'oxacilina',
    name: 'OXACILINA',
    activeIngredient: 'Oxacilina sódica',
    commercialNames: ['Oxacilina genérica IV', 'Bactocill'],
    pharmacologicalGroup: 'Antibiótico betalactámico penicilinasa-resistente',
    classifications: ['Antibiótico vesicante potencial'],
    temperature: 'FRIO',
    temperatureDetails: 'Oxacilina (F): Medidas generales: compresión fría.',
    immediateMeasures: [
      'Detener la infusión inmediatamente',
      'Aspirar 5-10 ml de sangre por la vía',
      'Elevar el miembro afectado',
      'Aplicar compresas frías (20 min 3-4 veces al día)',
      'Iniciar protocolo antiinflamatorio y antiséptico tópico'
    ],
    generalMeasuresSummary: 'Medidas generales: compresión fría.',
    antidote: {
      name: 'Hidrocortisona 1% tópico + Sulfadiazina argéntica tópica',
      hasAntidote: true,
      technique: 'Aplicación tópica de hidrocortisona 1% y sulfadiazina argéntica desde el día 2',
      route: 'Tópica cutánea'
    },
    resolution: {
      expectedText: 'Resolución en 2 semanas.',
      adultos: 'Resolución en 2 semanas.'
    },
    warnings: [
      'Mantener compresas frías en las primeras horas e iniciar cura tópica con corticoide y sulfadiazina desde el día 2.'
    ],
    pdfPage: 11,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'penicilina',
    name: 'PENICILINA',
    activeIngredient: 'Bencilpenicilina (Penicilina G)',
    commercialNames: ['Penicilina G Sódica', 'Penilevel'],
    pharmacologicalGroup: 'Antibiótico betalactámico',
    classifications: ['Agente irritante', 'Agente vesicante'],
    temperature: 'NO_ESPECIFICADO',
    temperatureDetails: 'No especificada pauta térmica en cabecera ni texto.',
    immediateMeasures: [
      'Detener la infusión',
      'Aspirar a través de la vía',
      'Elevar la extremidad'
    ],
    generalMeasuresSummary: 'Medidas generales.',
    antidote: {
      name: 'Sulfadiazina argéntica + Clorhexidina al 0,2%',
      hasAntidote: true,
      technique: 'Aplicación de crema combinada sobre la zona afectada',
      route: 'Tópica'
    },
    resolution: {
      expectedText: 'Resolución a los 6 meses.',
      adultos: 'Resolución a los 6 meses.'
    },
    warnings: [
      'Evolución prolongada que puede requerir seguimiento hasta 6 meses.'
    ],
    pdfPage: 11,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'pentamidina',
    name: 'PENTAMIDINA',
    activeIngredient: 'Pentamidina isetionato',
    commercialNames: ['Pentacarinat IV'],
    pharmacologicalGroup: 'Antiprotozoario / Antifúngico',
    classifications: ['Agente acidificante (pH 6,5)'],
    temperature: 'AMBOS',
    temperatureDetails: 'Cabecera indica (F) pero el texto especifica: elevación y calor seco. (Registrado con nota de validación clínica).',
    immediateMeasures: [
      'Detener la perfusión',
      'Aspirar 5-10 ml de sangre',
      'Elevar la extremidad afectada',
      'Administrar hialuronidasa intradérmica'
    ],
    generalMeasuresSummary: 'Medidas generales: elevación y calor seco (cabecera cita (F)).',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      technique: 'Administrar como inyecciones intradérmicas 0,2 ml alrededor de la lesión',
      route: 'Intradérmica'
    },
    resolution: {
      expectedText: 'No documentada en la guía.'
    },
    warnings: [
      'Discrepancia en la fuente original entre la sigla del título (F) y el texto de manejo ("calor seco"). Se recomienda consultar con Farmacia Hospitalaria.'
    ],
    pdfPage: 11,
    bibliography: '2',
    validationStatus: 'PENDIENTE_VALIDACION_FARMACIA',
    validationNotes: 'Discrepancia detectada en página 11: cabecera asigna (F), mientras el cuerpo del texto describe "elevación y calor seco".'
  },
  {
    id: 'piperacilina-tazobactam',
    name: 'PIPERACILINA / TAZOBACTAM',
    activeIngredient: 'Piperacilina sódica / Tazobactam sódico',
    commercialNames: ['Tazocel', 'Piperacilina/Tazobactam genérico'],
    pharmacologicalGroup: 'Antibiótico betalactámico + inhibidor betalactamasas',
    classifications: ['Antibiótico IV de amplio espectro'],
    temperature: 'FRIO',
    temperatureDetails: 'Piperacilina/Tazobactam (F): elevación y compresas frías.',
    immediateMeasures: [
      'Detener la infusión de antibiótico',
      'Aspirar contenido por la vía',
      'Retirar la vía venosa',
      'Elevar el miembro afectado',
      'Aplicar compresas frías 20 min 3-4 veces al día durante los primeros 2-3 días'
    ],
    generalMeasuresSummary: 'Medidas generales: elevación y compresas frías.',
    antidote: {
      name: 'Sin antídoto específico recogido en la guía',
      hasAntidote: false
    },
    resolution: {
      expectedText: 'No documentada en la guía.'
    },
    warnings: [
      'Medidas físicas (frío y elevación) son el pilar del tratamiento según la guía.'
    ],
    pdfPage: 11,
    bibliography: '2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'potasio-en-solucion',
    name: 'POTASIO EN SOLUCIÓN',
    activeIngredient: 'Cloruro potásico en dilución / Solución con potasio',
    commercialNames: ['Soluciones con Cloruro Potásico'],
    pharmacologicalGroup: 'Electrolito / Suplemento de potasio',
    classifications: ['Agente hiperosmolar (763 mOsm/L)'],
    temperature: 'AMBOS',
    temperatureDetails: 'Medidas generales: elevación, calor o frío.',
    immediateMeasures: [
      'Detener inmediatamente la infusión de potasio',
      'Aspirar 5-10 ml de sangre',
      'Elevar la extremidad por encima del corazón',
      'Aplicar calor o frío',
      'Administrar hialuronidasa',
      'Evaluar presión en compartimentos musculares'
    ],
    generalMeasuresSummary: 'Medidas generales: elevación, calor o frío.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15-25 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      technique: 'Administrar como inyecciones intradérmicas 0,2 ml alrededor de la lesión',
      route: 'Intradérmica'
    },
    ageSpecificActions: {
      ninos: 'Descompresión quirúrgica si hay signos compartimentales.',
      adolescentes: 'Descompresión quirúrgica si procede.',
      adultos: 'Descompresión quirúrgica.'
    },
    resolution: {
      expectedText: 'No documentada en la guía.'
    },
    warnings: [
      'Alta toxicidad tisular por despolarización celular rápida e hiperosmolaridad.',
      'Riesgo de síndrome compartimental que obligue a fasciotomía/descompresión quirúrgica urgente.'
    ],
    pdfPage: 11,
    bibliography: '2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'potasico-cloruro',
    name: 'POTÁSICO CLORURO',
    activeIngredient: 'Cloruro de potasio concentrado (KCl 1M o 2M)',
    commercialNames: ['Cloruro Potásico 2M B. Braun', 'Cloruro Potásico 1M'],
    pharmacologicalGroup: 'Electrolito concentrado de alto riesgo',
    classifications: ['Agente irritante', 'Agente vesicante', 'Agente hiperosmolar (3440-4355 mOsm/L)'],
    temperature: 'CALOR',
    temperatureDetails: 'Potásico Cloruro (C): calor local.',
    immediateMeasures: [
      'URGENCIA INMEDIATA: Parar la infusión sin demora',
      'Aspirar sangre por la vía (5-10 ml)',
      'Elevar la extremidad',
      'Aplicar calor local',
      'Administrar hialuronidasa precozmente'
    ],
    generalMeasuresSummary: 'Medidas generales.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      route: 'Infiltración local',
      observations: 'Favorece la dispersión del ion potasio concentrado para reducir la necrosis colicuativa.'
    },
    ageSpecificActions: {
      neonatos: 'No documentado en la guía.',
      adultos: 'Desbridamiento quirúrgico e injerto de piel.'
    },
    resolution: {
      expectedText: 'Neonatos: complicación no documentada. Adultos: tromboflebitis, obstrucción venosa grave, amputación.',
      adultos: 'COMPLICACIÓN SEVERA: tromboflebitis, obstrucción venosa grave, riesgo de amputación.'
    },
    warnings: [
      'Osmolaridad extrema catastrófica (3440-4355 mOsm/L). Medicamento de ALTO RIESGO.',
      'Complicaciones devastadoras: tromboflebitis séptica o química, necrosis muscular profunda, obstrucción venosa grave y amputación de extremidad.'
    ],
    pdfPage: 11,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'prometazina',
    name: 'PROMETAZINA',
    activeIngredient: 'Prometazina hidrocloruro',
    commercialNames: ['Frinova IV'],
    pharmacologicalGroup: 'Antihistamínico H1 / Fenotiazina',
    classifications: ['Agente irritante', 'Agente vesicante', 'pH extremo (4-5,5)'],
    temperature: 'CALOR',
    temperatureDetails: 'Calor seco y elevación. Evitar neutralizar el pH.',
    immediateMeasures: [
      'Detener la inyección de inmediato',
      'Aspirar sangre por la vía',
      'Elevar el miembro afectado',
      'Aplicar calor seco local',
      'NO neutralizar el pH',
      'Descartar inyección intraarterial inadvertida'
    ],
    generalMeasuresSummary: 'Medidas generales: calor seco y elevación. Evitar neutralizar el pH.',
    antidote: {
      name: 'Nitroglicerina 2% tópica cada 8h / Hialuronidasa',
      hasAntidote: true,
      dose: 'Nitroglicerina 2% cada 8h',
      route: 'Tópica / Intradérmica',
      alternativas: [
        'Hialuronidasa'
      ],
      observations: '*Extravasación intraarterial: consulta urgente a Cirugía. Heparina sistémica, bloqueo del ganglio estrellado.'
    },
    resolution: {
      expectedText: 'COMPLICACIÓN: lesión tisular grave. Injerto de piel. Amputación de dedos/brazo.',
      complications: 'Lesión tisular grave, necesidad de injerto de piel y riesgo de amputación de dedos o brazo entero.'
    },
    warnings: [
      'ALERTA NEGRA FDA / BASADO EN GUÍA CHUA: Fármaco altamente destructivo si se extravasa o si se inyecta intraarterialmente.',
      '*En extravasación intraarterial sospechada: llamada urgente inmediata a Cirugía, considerar anticoagulación sistémica con heparina y bloqueo de ganglio estrellado.'
    ],
    pdfPage: 12,
    bibliography: '2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'propofol',
    name: 'PROPOFOL',
    activeIngredient: 'Propofol 1% o 2%',
    commercialNames: ['Diprivan', 'Propofol Lipuro', 'Propofol genérico'],
    pharmacologicalGroup: 'Anestésico general intravenoso',
    classifications: ['pH extremo (7-8,5)'],
    temperature: 'FRIO',
    temperatureDetails: 'Propofol (F): frío y elevación.',
    immediateMeasures: [
      'Detener la infusión de anestésico',
      'Aspirar el máximo volumen posible por la vía',
      'Elevar la extremidad por encima del tórax',
      'Aplicar compresas frías locales'
    ],
    generalMeasuresSummary: 'Medidas generales: frío y elevación.',
    antidote: {
      name: 'Sin antídoto farmacológico documentado',
      hasAntidote: false,
      observations: 'Manejo con desbridamiento, refrigeración y curas húmedas con hidrogel.'
    },
    ageSpecificActions: {
      ninos: 'Desbridamiento de la herida e injerto de piel.',
      adultos: 'Desbridamiento quirúrgico, refrigeración de la mano y lavado diario con vendajes de salino e hidrogel.'
    },
    resolution: {
      expectedText: 'Niños: recuperación. Adultos: resolución en tiempo variable.',
      ninos: 'Recuperación tras desbridamiento/injerto si es necesario.',
      adultos: 'Resolución en tiempo variable.'
    },
    warnings: [
      'La formulación lipídica genera gran inflamación tisular y necrosis subdérmica que con frecuencia precisa lavado diario con vendajes de salino e hidrogel.'
    ],
    pdfPage: 12,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'tetraciclina',
    name: 'TETRACICLINA',
    activeIngredient: 'Tetraciclina clorhidrato',
    commercialNames: ['Tetraciclina IV'],
    pharmacologicalGroup: 'Antibiótico tetraciclina',
    classifications: ['pH extremo (3,2-6)'],
    temperature: 'NO_ESPECIFICADO',
    temperatureDetails: 'Medidas generales. No tratamiento específico.',
    immediateMeasures: [
      'Detener la infusión de inmediato',
      'Aspirar 5-10 ml de sangre',
      'Retirar la aguja',
      'Elevar la extremidad',
      'Vigilar signos de isquemia o necrosis'
    ],
    generalMeasuresSummary: 'Medidas generales. No tratamiento específico.',
    antidote: {
      name: 'Sin tratamiento específico documentado',
      hasAntidote: false,
      observations: 'No existe antídoto farmacológico documentado en la guía.'
    },
    resolution: {
      expectedText: 'COMPLICACIÓN en neonatos y adultos: amputación.',
      complications: 'COMPLICACIÓN SEVERA: Riesgo de amputación documentado en neonatos y adultos.'
    },
    warnings: [
      'ALERTA CLÍNICA: Riesgo documentado de amputación tanto en neonatos como en adultos.'
    ],
    pdfPage: 12,
    bibliography: '2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'tiopental-de-sodio',
    name: 'TIOPENTAL DE SODIO',
    activeIngredient: 'Tiopental sódico',
    commercialNames: ['Tiopental Braun', 'Pentothal'],
    pharmacologicalGroup: 'Barbitúrico intravenoso',
    classifications: ['Agente irritante', 'pH extremo (10-11)'],
    temperature: 'CALOR',
    temperatureDetails: 'Calor seco y elevación. Evitar neutralizar el pH.',
    immediateMeasures: [
      'Detener inmediatamente la inyección',
      'Aspirar por la aguja',
      'Elevar el miembro',
      'Aplicar calor seco local',
      'NO neutralizar el pH',
      'Si se sospecha vía intraarterial: consulta quirúrgica de urgencia'
    ],
    generalMeasuresSummary: 'Medidas generales: calor seco y elevación. Evitar neutralizar el pH.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      technique: 'Administrar como inyecciones intradérmicas 0,2 ml alrededor de la lesión',
      route: 'Intradérmica',
      alternativas: [
        'Lidocaína 2% tópica',
        'EMLA crema'
      ],
      observations: '*Extravasación intraarterial: consulta a cirugía. Heparina sistémica, bloqueo del ganglio estrellado.'
    },
    resolution: {
      expectedText: 'Adultos: recuperación en 48 días. COMPLICACIÓN: amputación.',
      adultos: 'Recuperación en 48 días.',
      complications: 'Riesgo grave de amputación si no se maneja precozmente.'
    },
    warnings: [
      'Solución marcadamente alcalina (pH 10-11): produce vasoespasmo intenso y necrosis química rápida.',
      'Si se sospecha extravasación o inyección intraarterial: interconsulta urgente con Cirugía Vascular, valorar heparina sistémica y bloqueo de ganglio estrellado.'
    ],
    pdfPage: 12,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'valproato-de-sodio',
    name: 'VALPROATO DE SODIO',
    activeIngredient: 'Ácido valproico / Valproato sódico',
    commercialNames: ['Depakine IV'],
    pharmacologicalGroup: 'Antiepiléptico',
    classifications: ['Mecanismo desconocido de toxicidad tisular'],
    temperature: 'NO_ESPECIFICADO',
    temperatureDetails: 'Medidas generales. No tratamiento específico.',
    immediateMeasures: [
      'Detener la infusión',
      'Aspirar a través de la vía',
      'Retirar la aguja',
      'Elevar la extremidad'
    ],
    generalMeasuresSummary: 'Medidas generales. No tratamiento específico.',
    antidote: {
      name: 'Sin tratamiento específico documentado',
      hasAntidote: false,
      observations: 'En adultos con compromiso tisular severo se describe escarotomía.'
    },
    ageSpecificActions: {
      adultos: 'Escarotomía en caso de necrosis circunferencial o constrictiva.'
    },
    resolution: {
      expectedText: 'Adultos: recuperación en 11 días.',
      adultos: 'Recuperación en 11 días.'
    },
    warnings: [
      'Mecanismo tisular no completamente esclarecido en la literatura.'
    ],
    pdfPage: 12,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'vancomicina',
    name: 'VANCOMICINA',
    activeIngredient: 'Vancomicina hidrocloruro',
    commercialNames: ['Vancomicina Hospira', 'Vancomicina genérica'],
    pharmacologicalGroup: 'Antibiótico glucopéptido',
    classifications: ['Agente irritante', 'Agente acidificante (pH=2,5-4)'],
    temperature: 'CALOR',
    temperatureDetails: 'Calor seco y elevación. Evitar neutralizar el pH.',
    immediateMeasures: [
      'Detener la infusión inmediatamente',
      'Aspirar 5-10 ml de sangre',
      'Elevar el miembro afectado por encima del corazón',
      'Aplicar calor seco local',
      'NO neutralizar el pH',
      'Administrar hialuronidasa intradérmica'
    ],
    generalMeasuresSummary: 'Medidas generales: calor seco y elevación. Evitar neutralizar el pH.',
    antidote: {
      name: 'Hialuronidasa',
      hasAntidote: true,
      dose: '15 UI',
      dilution: 'Diluir la ampolla a 1:10 (0,1 ml hialuronidasa + 0,9 ml SF)',
      technique: 'Administrar como inyecciones intradérmicas 0,2 ml alrededor de la lesión',
      route: 'Intradérmica',
      observations: '*Extravasación intraarterial: consulta a cirugía. Heparina sistémica, bloqueo del ganglio estrellado.'
    },
    resolution: {
      expectedText: 'Adultos: Las lesiones desaparecieron a las pocas semanas.',
      adultos: 'Lesiones resueltas a las pocas semanas.',
      complications: 'Formación de ampollas en el sitio de extravasación con decoloración persistente de la piel.'
    },
    warnings: [
      'pH marcadamente ácido (2,5-4): alta capacidad cáustica e irritante.',
      'Si se sospecha afectación intraarterial: consulta urgente a Cirugía, heparina sistémica y bloqueo del ganglio estrellado.'
    ],
    pdfPage: 12,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  },
  {
    id: 'vasopresina',
    name: 'VASOPRESINA',
    activeIngredient: 'Vasopresina (Hormona antidiurética)',
    commercialNames: ['Pitressin', 'Vasopresina IV'],
    pharmacologicalGroup: 'Hormona neurohipofisaria / Vasopresor potente',
    classifications: ['Agente vasopresor potente'],
    temperature: 'CALOR',
    temperatureDetails: 'Elevación y calor. Evitar frío local y hialuronidasa.',
    immediateMeasures: [
      'Detener la perfusión inmediatamente',
      'Aspirar 5-10 ml de sangre',
      'Elevar la extremidad afectada',
      'Aplicar calor local',
      'CRÍTICO: EVITAR FRÍO LOCAL Y HIALURONIDASA',
      'Aplicar Nitroglicerina 2% tópica cada 8h o infiltrar Fentolamina'
    ],
    generalMeasuresSummary: 'Medidas generales: elevación, calor. Evitar frío local y hialuronidasa.',
    antidote: {
      name: 'Nitroglicerina 2% tópica cada 8h',
      hasAntidote: true,
      dose: 'Nitroglicerina 2% pomada tópica / 8 horas',
      route: 'Tópica cutánea',
      alternativas: [
        'Fentolamina 5-10 mg en 10-20 ml SF intradérmico',
        'Terbutalina 1 mg/10 ml SF inyecciones intradérmicas (No disponible en el hospital, consultar al servicio de farmacia)'
      ],
      contraindicationsOrAvoid: [
        'FRÍO LOCAL (potencia la isquemia vascular severa)',
        'Hialuronidasa'
      ],
      observations: 'Vasodilatador capilar de acción directa para contrarrestar la vasoconstricción mediada por receptores V1.'
    },
    resolution: {
      expectedText: 'Adultos: Recuperación completa.',
      adultos: 'Recuperación completa documentada.',
      complications: 'COMPLICACIÓN: formación de escaras en un solo caso.'
    },
    warnings: [
      'Vasoconstrictor esplácnico y periférico extraordinariamente potente.',
      'El frío local aumentará drásticamente la necrosis tisular.'
    ],
    pdfPage: 12,
    bibliography: '1, 2',
    validationStatus: 'VALIDADO_PDF'
  }
];
