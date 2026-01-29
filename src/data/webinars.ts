// src/data/webinars.ts
export type Webinar = {
  id: string;
  title: string;
  description: string;
  start: string;
  badge: string;
  image: string;
  tag: "Desarrollo Web" | "SQL" | "Linux" | "Python & ML" | "Azure Fundamentals";
};

const webinars: Webinar[] = [
  {
    id: "devweb-landing-vue",
    title: "Desarrollo Web: Landing Pro con Vue",
    description:
      "Componentes reutilizables, layout moderno, responsive real y buenas prácticas para producción.",
    start: "2026-03-05T20:00:00-05:00",
    badge: "Desarrollo Web",
    tag: "Desarrollo Web",
    image:
      "/img/Azure_Work.png",
  },
  {
    id: "sql-fundamentos-joins",
    title: "SQL: Consultas sólidas (JOINs, GROUP BY, Window Functions)",
    description:
      "Domina reporting, análisis y performance desde la base: casos reales y prácticas guiadas.",
    start: "2026-03-07T20:00:00-05:00",
    badge: "SQL",
    tag: "SQL",
    image:
      "/img/SQL_Work.png",
  },
  {
    id: "linux-terminal-scripting",
    title: "Linux: Terminal, permisos, procesos y scripting esencial",
    description:
      "Lo que sí se usa en chamba: bash básico, debugging, logs, permisos y automatización.",
    start: "2026-03-10T20:00:00-05:00",
    badge: "Linux",
    tag: "Linux",
    image:
      "/img/Linux_Work.png",
  },
  {
    id: "python-ml-pipeline",
    title: "Python + IA: Pipeline end-to-end con Machine Learning",
    description:
      "Data prep, features, entrenamiento, evaluación y despliegue conceptual con foco práctico.",
    start: "2026-03-12T20:00:00-05:00",
    badge: "Python & ML",
    tag: "Python & ML",
    image:
      "/img/Python_Work.png",
  },
  {
    id: "azure-az900-fundamentals",
    title: "Azure Fundamentals (AZ-900): Ruta rápida y enfocada",
    description:
      "Conceptos cloud, servicios clave, seguridad y costos. Preparación clara para AZ-900.",
    start: "2026-03-14T10:00:00-05:00",
    badge: "Azure Fundamentals",
    tag: "Azure Fundamentals",
    image:
      "/img/Azure_Work.png",
  },
];

export default webinars;
