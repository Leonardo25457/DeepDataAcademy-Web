export default [
  {
    slug: 'tipos-bases-datos-analitica',
    title: 'Tipos de bases de datos para analítica',
    excerpt: 'SQL, NoSQL, series de tiempo y grafos: cuándo elegir cada una.',
    content: `
      <p>En analítica moderna conviven modelos relacionales (OLTP/OLAP), NoSQL, time-series y grafos.
      El enfoque correcto depende de patrón de lectura/escritura, consistencia y latencia.</p>
      <ul class="list-disc pl-6">
        <li><strong>Relacional:</strong> reporting estructurado, joins complejos.</li>
        <li><strong>NoSQL:</strong> alta escala, modelos flexibles.</li>
        <li><strong>Time-series:</strong> métricas, sensores, logs.</li>
        <li><strong>Grafos:</strong> relaciones y recomendaciones.</li>
      </ul>`
  },
  {
    slug: 'ia-para-todos-trabajo',
    title: 'IA para todos en el trabajo',
    excerpt: 'Casos en marketing, finanzas y RRHH con herramientas low-code.',
    content: `
      <p>Desde asistentes de redacción hasta análisis de sentimiento y extracción de entidades,
      la IA ya impulsa productividad transversal. Lo clave: <strong>data governance</strong> y evaluación continua.</p>`
  },
  {
    slug: 'de-notebooks-a-produccion',
    title: 'De notebooks a producción',
    excerpt: 'Buenas prácticas para entregar valor en la empresa.',
    content: `
      <p>Versiona datos y modelos, automatiza pipelines, orquesta con Airflow
      y monitoriza <strong>drift</strong> para reducir el tiempo de valor.</p>`
  }
]
