import type { ServiceIconName } from '@/components/ui/ServiceIcon'

export const servicios = [
  { slug: "analisis-de-proyectos", titulo: "Análisis de Proyectos", descripcion: "Evaluamos viabilidad técnica, económica y legal para que cada proyecto arranque sobre bases sólidas y rentables.", icono: "analysis" as ServiceIconName },
  { slug: "ingenieria", titulo: "Ingeniería", descripcion: "Diseñamos la solución técnica: ingeniería básica, de detalle y re-ingeniería adaptada a cada industria.", icono: "engineering" as ServiceIconName },
  { slug: "montajes-y-puesta-en-marcha", titulo: "Montajes y Puesta en Marcha", descripcion: "Coordinamos y supervisamos el montaje electromecánico, la instrumentación, control y las obras civiles del proyecto.", icono: "assembly" as ServiceIconName },
  { slug: "operacion-y-mantenimiento", titulo: "Operación y Mantenimiento", descripcion: "Supervisamos la operación para garantizar el funcionamiento de las plantas 24/7, con programas preventivos y correctivos que aseguran continuidad.", icono: "operation" as ServiceIconName },
] as const