export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  shortTitle: string;
  title: string;
  tagline: string;
  description: string;
  metaDescription: string;
  image: string;
  icon: "activity" | "wind" | "brain";
  benefits: string[];
  conditions: string[];
  process: string[];
  faq: ServiceFaq[];
  whatsappMessage: string;
}

export const services: ServiceData[] = [
  {
    id: "musculoesqueletica",
    slug: "kinesiologia-musculoesqueletica",
    shortTitle: "Musculoesquelética",
    title: "Kinesiología Musculoesquelética a Domicilio",
    tagline: "Recupera movilidad, fuerza y seguridad",
    description: "Rehabilitación personalizada para lesiones, dolor musculoesquelético y recuperación posterior a cirugías, adaptada a tus objetivos y al entorno de tu hogar.",
    metaDescription: "Kinesiología musculoesquelética a domicilio en Santiago para lesiones, dolor y recuperación postoperatoria. Evaluación y tratamiento personalizado.",
    image: "/kinesiologia_musculoesqueletica.png",
    icon: "activity",
    benefits: ["Manejo progresivo del dolor", "Fortalecimiento dirigido", "Recuperación de movilidad y función"],
    conditions: ["Lesiones deportivas y tendinopatías", "Dolor lumbar y cervical", "Fracturas y recuperación postoperatoria", "Disminución de fuerza o movilidad"],
    process: ["Evaluación funcional en domicilio", "Definición de objetivos alcanzables", "Ejercicio terapéutico y educación", "Seguimiento y ajuste del plan"],
    faq: [
      { q: "¿Necesito una orden médica?", a: "No siempre. Puedes comenzar con una evaluación kinésica y presentar tus exámenes o indicaciones médicas si los tienes." },
      { q: "¿Debo contar con equipamiento?", a: "No. El profesional lleva los implementos necesarios y adapta los ejercicios a los recursos disponibles en tu hogar." },
    ],
    whatsappMessage: "Hola, quiero consultar por kinesiología musculoesquelética a domicilio.",
  },
  {
    id: "respiratoria",
    slug: "kinesiologia-respiratoria",
    shortTitle: "Respiratoria",
    title: "Kinesiología Respiratoria a Domicilio",
    tagline: "Apoyo respiratorio para niños y adultos",
    description: "Atención orientada al manejo de secreciones, la ventilación y la educación respiratoria, según la evaluación y las necesidades de cada paciente.",
    metaDescription: "Kinesiología respiratoria a domicilio en Santiago para niños y adultos. Evaluación, manejo de secreciones y educación respiratoria personalizada.",
    image: "/kinesiologia_respiratoria.png",
    icon: "wind",
    benefits: ["Apoyo en el manejo de secreciones", "Ejercicios de ventilación y respiración", "Educación para el cuidado en el hogar"],
    conditions: ["Cuadros respiratorios con indicación kinésica", "Asma, EPOC y bronquitis", "Síndrome bronquial obstructivo", "Recuperación posterior a infecciones respiratorias"],
    process: ["Evaluación respiratoria inicial", "Selección de técnicas según hallazgos", "Tratamiento y educación al cuidador", "Reevaluación de la respuesta"],
    faq: [
      { q: "¿Atienden a niños y adultos?", a: "Sí. La evaluación y las técnicas se adaptan a la edad, condición y tolerancia de cada persona." },
      { q: "¿Cuándo debo acudir a urgencias?", a: "Ante dificultad respiratoria intensa, coloración azulada, compromiso de conciencia u otros signos de alarma, debes acudir a un servicio de urgencia." },
    ],
    whatsappMessage: "Hola, quiero consultar por kinesiología respiratoria a domicilio.",
  },
  {
    id: "neurologica",
    slug: "kinesiologia-neurologica",
    shortTitle: "Neurológica",
    title: "Kinesiología Neurológica a Domicilio",
    tagline: "Entrena movimiento y autonomía paso a paso",
    description: "Rehabilitación enfocada en movilidad, equilibrio, marcha y actividades cotidianas para personas con condiciones neurológicas.",
    metaDescription: "Kinesiología neurológica a domicilio en Santiago. Rehabilitación personalizada para movilidad, equilibrio, marcha y actividades diarias.",
    image: "/kinesiologia_neurologica.png",
    icon: "brain",
    benefits: ["Entrenamiento de equilibrio y marcha", "Práctica de tareas funcionales", "Orientación para familiares y cuidadores"],
    conditions: ["Secuelas de accidente cerebrovascular", "Enfermedad de Parkinson", "Alteraciones del equilibrio y la marcha", "Otras condiciones neurológicas con indicación de rehabilitación"],
    process: ["Evaluación del movimiento y la autonomía", "Priorización de actividades significativas", "Práctica funcional en el hogar", "Progresión y educación al entorno"],
    faq: [
      { q: "¿Puede participar un cuidador?", a: "Sí. Su participación puede ser útil para aprender transferencias, ejercicios y recomendaciones de seguridad." },
      { q: "¿El tratamiento se adapta al hogar?", a: "Sí. Se utilizan espacios y tareas cotidianas para que la práctica sea relevante y aplicable a la rutina diaria." },
    ],
    whatsappMessage: "Hola, quiero consultar por kinesiología neurológica a domicilio.",
  },
];

export const getServicePath = (service: ServiceData) => `/servicios/${service.slug}/`;

