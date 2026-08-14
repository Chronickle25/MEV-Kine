export interface ClinicalFaq { q: string; a: string }

export interface ClinicalLanding {
  slug: string;
  shortTitle: string;
  title: string;
  metaDescription: string;
  intro: string;
  situations: string[];
  goals: string[];
  process: string[];
  faq: ClinicalFaq[];
  whatsappMessage: string;
  image: string;
}

export const clinicalLandings: ClinicalLanding[] = [
  {
    slug: "rehabilitacion-postoperatoria-domicilio",
    shortTitle: "Rehabilitación postoperatoria",
    title: "Rehabilitación postoperatoria a domicilio en Santiago",
    metaDescription: "Kinesiología postoperatoria a domicilio para recuperar movilidad, fuerza y autonomía después de una cirugía. Atención personalizada en Santiago.",
    intro: "Un plan progresivo permite recuperar movimiento y función respetando las indicaciones del equipo tratante y la etapa de cicatrización.",
    situations: ["Cirugías de rodilla, cadera, hombro o columna", "Reemplazos articulares y reparación de ligamentos", "Pérdida de fuerza o movilidad después de hospitalización", "Dificultad para caminar, subir escaleras o retomar tareas cotidianas"],
    goals: ["Recuperar movilidad de forma gradual", "Mejorar fuerza y control del movimiento", "Practicar tareas relevantes dentro del hogar", "Acompañar el retorno seguro a las actividades habituales"],
    process: ["Revisión de indicaciones y antecedentes", "Evaluación funcional en el domicilio", "Plan de ejercicios acorde con la etapa de recuperación", "Reevaluación y ajuste según evolución"],
    faq: [
      { q: "¿Cuándo comenzar después de una cirugía?", a: "Depende del procedimiento y de las indicaciones del cirujano. Antes de iniciar se revisan el alta, las restricciones y los antecedentes disponibles." },
      { q: "¿Necesito contar con implementos?", a: "No. La sesión se adapta al espacio del hogar y el profesional lleva los elementos necesarios para la evaluación y el tratamiento." },
      { q: "¿La atención reemplaza el control médico?", a: "No. La rehabilitación complementa el seguimiento del equipo médico y respeta sus indicaciones y signos de alarma." },
    ],
    whatsappMessage: "Hola, quiero consultar por rehabilitación postoperatoria a domicilio.",
    image: "/kinesiologia_musculoesqueletica.webp",
  },
  {
    slug: "kinesiologia-dolor-lumbar-domicilio",
    shortTitle: "Dolor lumbar",
    title: "Kinesiología para dolor lumbar a domicilio en Santiago",
    metaDescription: "Evaluación y kinesiología para dolor lumbar a domicilio en Santiago. Plan personalizado para recuperar movimiento y actividades cotidianas.",
    intro: "El dolor lumbar puede limitar el sueño, el trabajo y las tareas diarias. La evaluación busca comprender sus características y qué movimientos necesitan recuperarse.",
    situations: ["Dolor al sentarse, levantarse o caminar", "Molestias asociadas al trabajo o actividad física", "Episodios recurrentes de dolor lumbar", "Rigidez y temor a retomar movimientos"],
    goals: ["Comprender los factores que agravan los síntomas", "Recuperar movilidad y tolerancia a la carga", "Fortalecer de manera progresiva", "Retomar actividades con mayor seguridad"],
    process: ["Entrevista y detección de signos de alarma", "Evaluación de movimiento y función", "Educación y ejercicio terapéutico", "Progresión según objetivos y respuesta"],
    faq: [
      { q: "¿Siempre se necesitan exámenes?", a: "No siempre. La necesidad de imágenes o evaluación médica depende de los antecedentes, la evolución y los hallazgos de la evaluación." },
      { q: "¿Debo hacer reposo?", a: "En muchos casos se busca mantener actividad tolerable y recuperar movimiento progresivamente. La recomendación exacta depende de la evaluación individual." },
      { q: "¿Cuándo debo consultar con urgencia?", a: "Busca atención urgente ante pérdida repentina de fuerza, alteración del control de esfínteres, adormecimiento en la zona genital, fiebre o dolor asociado a un traumatismo importante." },
    ],
    whatsappMessage: "Hola, quiero consultar por kinesiología a domicilio para dolor lumbar.",
    image: "/kinesiologia_musculoesqueletica.webp",
  },
  {
    slug: "rehabilitacion-rodilla-domicilio",
    shortTitle: "Rehabilitación de rodilla",
    title: "Rehabilitación de rodilla a domicilio en Santiago",
    metaDescription: "Kinesiología de rodilla a domicilio para lesiones, dolor y recuperación postoperatoria. Evaluación funcional y tratamiento personalizado en Santiago.",
    intro: "La rehabilitación se orienta a recuperar movilidad, fuerza y confianza para caminar, usar escaleras y volver a las actividades importantes para ti.",
    situations: ["Dolor de rodilla durante actividades cotidianas", "Esguinces, lesiones deportivas o tendinopatías", "Recuperación después de cirugía", "Pérdida de fuerza, estabilidad o movilidad"],
    goals: ["Mejorar movilidad de la rodilla", "Recuperar fuerza y control", "Progresar la marcha y el uso de escaleras", "Preparar el retorno gradual a actividad física"],
    process: ["Evaluación de síntomas, movilidad y fuerza", "Definición de objetivos funcionales", "Ejercicio terapéutico progresivo", "Reevaluación y plan para la continuidad"],
    faq: [
      { q: "¿Puedo tratarme si todavía tengo dolor?", a: "Sí, cuando la evaluación indica que es seguro. La carga y los ejercicios se adaptan a los síntomas y se progresan según la respuesta." },
      { q: "¿Atienden rehabilitación después de una cirugía?", a: "Sí, revisando previamente las indicaciones, restricciones y controles del equipo médico tratante." },
      { q: "¿Cuánto dura la recuperación?", a: "Varía según el diagnóstico, el procedimiento, los objetivos y la respuesta individual. La evaluación permite definir hitos y revisar el avance." },
    ],
    whatsappMessage: "Hola, quiero consultar por rehabilitación de rodilla a domicilio.",
    image: "/kinesiologia_musculoesqueletica.webp",
  },
  {
    slug: "rehabilitacion-hombro-domicilio",
    shortTitle: "Rehabilitación de hombro",
    title: "Rehabilitación de hombro a domicilio en Santiago",
    metaDescription: "Kinesiología de hombro a domicilio para dolor, lesiones y recuperación postoperatoria. Plan progresivo y personalizado en Santiago.",
    intro: "El tratamiento busca recuperar el movimiento necesario para vestirse, trabajar, dormir y usar el brazo en las actividades cotidianas.",
    situations: ["Dolor al elevar o mover el brazo", "Tendinopatías y lesiones del manguito rotador", "Rigidez o pérdida de movilidad", "Recuperación posterior a cirugía o inmovilización"],
    goals: ["Disminuir limitaciones asociadas al dolor", "Recuperar movilidad de forma progresiva", "Mejorar fuerza y control del hombro", "Retomar tareas domésticas, laborales o deportivas"],
    process: ["Evaluación del movimiento y actividades limitadas", "Definición de cargas tolerables", "Ejercicio terapéutico y educación", "Progresión hacia las tareas objetivo"],
    faq: [
      { q: "¿Necesito una resonancia antes de comenzar?", a: "No en todos los casos. La necesidad de exámenes depende de los antecedentes, los signos clínicos y la evolución." },
      { q: "¿Puedo hacer ejercicios si mover el brazo molesta?", a: "La evaluación permite seleccionar movimientos y cargas tolerables. El plan se ajusta si los síntomas aumentan o no evolucionan como se espera." },
      { q: "¿Se puede rehabilitar una cirugía de hombro en casa?", a: "Sí, siempre que se respeten las indicaciones y restricciones específicas del procedimiento y del equipo tratante." },
    ],
    whatsappMessage: "Hola, quiero consultar por rehabilitación de hombro a domicilio.",
    image: "/kinesiologia_musculoesqueletica.webp",
  },
];

export const getClinicalPath = (item: ClinicalLanding) => `/servicios/${item.slug}/`;
