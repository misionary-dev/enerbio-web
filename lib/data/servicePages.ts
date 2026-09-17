import type { ServiceIconName } from '@/components/ui/ServiceIcon'

export type ServicePageData = {
  slug: string
  eyebrow: string
  title: string
  intro: string
  sectionTitle: string
  description: string
  icon: ServiceIconName
  services: { title: string; description: string; icon: ServiceIconName }[]
  ctaTitle: string
  ctaLabel: string
  environmentalNote?: boolean
}

export const servicePages: ServicePageData[] = [
  {
    slug: 'analisis-de-proyectos', eyebrow: 'Análisis de proyectos',
    title: 'La base sólida sobre la que se construyen los grandes proyectos',
    intro: 'Evaluamos viabilidad técnica, económica y legal para asegurar que cada iniciativa arranque sobre fundamentos claros y con proyecciones realistas.',
    sectionTitle: 'Un departamento estratégico para la toma de decisiones',
    description: 'El Departamento de Análisis de Proyectos de EnerBio es el punto de partida de todo desarrollo energético. Nuestro equipo multidisciplinario, compuesto por analistas, ingenieros y consultores financieros, trabaja con cada cliente para identificar oportunidades, evaluar riesgos y estructurar proyectos técnica y económicamente viables.',
    icon: 'analysis',
    services: [
      { title: 'Estudios de Prefactibilidad', description: 'Análisis exhaustivos de las condiciones técnicas, económicas y de mercado para dar una visión clara de oportunidades y riesgos.', icon: 'analysis' },
      { title: 'Asesoramiento Financiero', description: 'Estructuramos la dimensión financiera para maximizar rentabilidad, acceder a financiamiento y desarrollar modelos de negocio sólidos.', icon: 'finance' },
      { title: 'Due Diligence de Proyectos', description: 'Evaluación detallada de los aspectos técnicos, legales y financieros antes de avanzar.', icon: 'certificate' },
      { title: 'Asesoramiento Legal', description: 'Apoyo legal y regulatorio, preparación de documentación y representación ante autoridades.', icon: 'legal' },
    ],
    ctaTitle: '¿Estás evaluando un proyecto energético?', ctaLabel: 'Solicitá un análisis',
  },
  {
    slug: 'ingenieria', eyebrow: 'Ingeniería', title: 'Diseño técnico de precisión para proyectos energéticos',
    intro: 'Nuestro departamento de ingeniería combina experiencia técnica con enfoque multidisciplinario para transformar ideas en soluciones concretas y ejecutables.',
    sectionTitle: 'Ingeniería que integra todas las disciplinas',
    description: 'Nos especializamos en soluciones técnicas avanzadas para generación de energía. Nuestro equipo abarca ingeniería eléctrica, mecánica, química, civil y ambiental, lo que permite abordar cada proyecto de forma integral y detallada.',
    icon: 'engineering',
    services: [
      { title: 'Ingeniería Básica y de Detalle', description: 'Diseñamos todos los aspectos técnicos, desde la conceptualización inicial hasta los planos detallados listos para ejecutar.', icon: 'design' },
      { title: 'Estudios de Factibilidad', description: 'Determinamos la viabilidad técnica y económica, evaluando oportunidades y mitigando riesgos desde el primer paso.', icon: 'analysis' },
      { title: 'Re-ingeniería de Proyectos', description: 'Revisamos diseños, sistemas y procesos existentes para aumentar eficiencia y reducir costos operativos.', icon: 'optimization' },
    ],
    ctaTitle: '¿Necesitás ingeniería para tu proyecto?', ctaLabel: 'Solicitá cotización',
  },
  {
    slug: 'montajes-y-puesta-en-marcha', eyebrow: 'Montajes y puesta en marcha', title: 'De los planos a la operación real',
    intro: 'Ejecutamos el montaje electromecánico completo y coordinamos la puesta en marcha con los más altos estándares de calidad y seguridad.',
    sectionTitle: 'Materializamos proyectos en plantas que funcionan',
    description: 'Nuestros supervisores y equipos técnicos garantizan que cada componente electromecánico se instale correctamente y opere en armonía desde el primer día.',
    icon: 'assembly',
    services: [
      { title: 'Supervisión de Montajes Electromecánicos', description: 'Garantizamos instalaciones acordes a planos y especificaciones, cuidando integridad y eficiencia.', icon: 'engineering' },
      { title: 'Ejecución de Montajes', description: 'Instalación completa de sistemas eléctricos, mecánicos, instrumentación y control.', icon: 'assembly' },
      { title: 'Supervisión de Obras Civiles', description: 'Coordinamos las obras civiles y su integración efectiva con los sistemas electromecánicos.', icon: 'construction' },
    ],
    ctaTitle: 'Confiá tu proyecto a manos expertas', ctaLabel: 'Contactanos',
  },
  {
    slug: 'operacion-y-mantenimiento', eyebrow: 'Operación y mantenimiento', title: 'Plantas funcionando 24/7, con la eficiencia que tu operación merece',
    intro: 'Operamos y mantenemos plantas energéticas asegurando continuidad, máxima disponibilidad y prolongando la vida útil de cada equipo.',
    sectionTitle: 'Continuidad y rendimiento durante toda la operación',
    description: 'Nuestro equipo mantiene las instalaciones en su máximo rendimiento, minimizando tiempos de inactividad y asegurando producción continua. Contamos con planta propia de O&M desde 2022 y equipos dedicados a la operación diaria.',
    icon: 'operation',
    services: [
      { title: 'Operación de Centrales', description: 'Operación diaria, segura y eficiente con monitoreo continuo para optimizar el rendimiento.', icon: 'operation' },
      { title: 'Mantenimiento Preventivo y Correctivo', description: 'Programas que evitan fallos, prolongan la vida útil y ofrecen respuesta rápida ante incidencias.', icon: 'maintenance' },
      { title: 'Gestión de Paradas de Planta', description: 'Planificación y ejecución de paradas programadas minimizando el impacto productivo.', icon: 'predictability' },
      { title: 'Capacitación', description: 'Transferimos conocimientos esenciales al personal del cliente para el manejo eficiente de las instalaciones.', icon: 'training' },
    ],
    ctaTitle: '¿Necesitás O&M para tu planta?', ctaLabel: 'Solicitá una propuesta',
  },
  {
    slug: 'ambiental-y-sustentabilidad', eyebrow: 'Ambiental y sustentabilidad', title: 'Compromiso ambiental en cada etapa del proyecto',
    intro: 'Estudios de impacto, huella de carbono, certificaciones y gestión ambiental integral para operar responsablemente y cumplir las normativas más exigentes.',
    sectionTitle: 'Sostenibilidad integrada a cada proyecto',
    description: 'Promovemos prácticas responsables para minimizar el impacto ambiental de las operaciones y contribuir al bienestar a largo plazo de las comunidades y ecosistemas donde trabajamos.',
    icon: 'environment',
    services: [
      { title: 'Estudios de Impacto Ambiental', description: 'Evaluamos y mitigamos impactos, asegurando cumplimiento normativo y una contribución positiva al entorno.', icon: 'environment' },
      { title: 'Cálculo de Huella de Carbono', description: 'Medimos emisiones de empresas y productos y definimos estrategias concretas para reducirlas.', icon: 'carbon' },
      { title: 'Certificaciones IREC y Bonos de Carbono', description: 'Acompañamos certificaciones de bonos y la obtención de Certificados de Energías Renovables.', icon: 'certificate' },
      { title: 'Asesoramiento en Sostenibilidad', description: 'Implementamos prácticas de eficiencia energética y adopción de tecnologías verdes.', icon: 'sustainability' },
    ],
    ctaTitle: '¿Necesitás gestión ambiental para tu proyecto?', ctaLabel: 'Contactanos', environmentalNote: true,
  },
]

export const serviceNavItems = [
  { label: 'Todos los servicios', href: '/servicios' },
  ...servicePages.map((service) => ({ label: service.eyebrow, href: `/servicios/${service.slug}` })),
  { label: 'Vapor y Energía', href: '/vapor-y-energia' },
]