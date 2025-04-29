import Head from 'next/head'
import Script from 'next/script'
import styles from './aprender.module.css'

export default function AprenderPage() {
  return (
    <>
      <Head>
        <title>Aprender – Mapa del Pensamiento</title>
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Ruta de Aprendizaje</h1>
          <p>Sigue estos pasos para profundizar en cada escuela y concepto.</p>
        </header>

        <ol className={styles.steps}>
          <li>
            <h3>Introducción General</h3>
            <p>Contexto y fundamentos del pensamiento filosófico.</p>
          </li>
          <li>
            <h3>Escuelas Principales</h3>
            <p>Selecciona una escuela y explora su contenido.</p>
          </li>
          <li>
            <h3>Conceptos Clave</h3>
            <p>Aprende los términos esenciales y su evolución.</p>
          </li>
          <li>
            <h3>Práctica y Debate</h3>
            <p>Ejercicios interactivos y foros de discusión.</p>
          </li>
        </ol>
      </div>

      <Script src="/scripts/aprender.js" strategy="afterInteractive" />
    </>
  )
}