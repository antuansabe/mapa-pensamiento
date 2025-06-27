// src/app/confucianismo/page.jsx
import React from 'react'
import styles from './confucianismo.module.css'

export default function ConfucianismoPage() {
  return (
    <main className={styles.confucianismoPage}>
      {/* Encabezado */}
      <section className={styles.confucianismoHeader}>
        <div className="container">
          <h1 className={styles.title}>Confucianismo</h1>
          <p className={styles.subtitle}>
            Sistema de pensamiento ético y social basado en las enseñanzas de Confucio, enfocado en la armonía social, la virtud y el buen gobierno.
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section className={styles.introduction}>
        <div className="container">
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <h2>La Filosofía de la Armonía Social</h2>
              <p>
                El Confucianismo es una tradición filosófica china fundada por Confucio (Kong Qiu, 551-479 a.C.) 
                durante el período de Primavera y Otoño. Más que una religión, es un sistema de pensamiento 
                ético, político y social que ha influido profundamente en la cultura china durante más de 2500 años.
              </p>
              <p>
                Sus enseñanzas se centran en la importancia de la virtud personal (de), las relaciones sociales 
                armoniosas, el respeto por los ancestros y la autoridad, y la búsqueda de un gobierno justo 
                basado en la moralidad más que en la fuerza.
              </p>
            </div>
            <div className={styles.confuciusSymbol}>
              <div className={styles.wisdomCircle}>
                <div className={styles.innerSymbol}>
                  <span className={styles.chineseChar}>仁</span>
                  <span className={styles.translation}>Ren</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Figuras clave */}
      <section className={styles.keyFigures}>
        <div className="container">
          <h2>
            <span className={styles.sectionIcon}>
              <i className="fas fa-graduation-cap"></i>
            </span>
            Figuras Clave
          </h2>
          <div className={styles.figuresGrid}>
            {[
              {
                name: 'Confucio (孔子)',
                period: '551-479 a.C.',
                role: 'Fundador',
                description: 'Filósofo y educador chino, fundador de la escuela confuciana. Sus enseñanzas se recopilaron en las Analíticas.',
                icon: 'user-graduate'
              },
              {
                name: 'Mencio (孟子)',
                period: '372-289 a.C.',
                role: 'Segundo Sabio',
                description: 'Desarrolló las ideas confucianas, especialmente la teoría de la bondad innata de la naturaleza humana.',
                icon: 'heart'
              },
              {
                name: 'Xunzi (荀子)',
                period: '313-238 a.C.',
                role: 'Filósofo confuciano',
                description: 'Propuso que la naturaleza humana es originalmente mala y debe ser cultivada a través de la educación.',
                icon: 'book-open'
              },
              {
                name: 'Zhu Xi (朱熙)',
                period: '1130-1200 d.C.',
                role: 'Neoconfuciano',
                description: 'Sistematizó el neoconfucianismo durante la dinastía Song, integrando elementos taoístas y budistas.',
                icon: 'balance-scale'
              }
            ].map(({ name, period, role, description, icon }) => (
              <div key={name} className={styles.figureCard}>
                <div className={styles.figureIcon}>
                  <i className={`fas fa-${icon}`}></i>
                </div>
                <h3>{name}</h3>
                <div className={styles.figureMeta}>
                  <span className={styles.period}>{period}</span>
                  <span className={styles.role}>{role}</span>
                </div>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conceptos fundamentales */}
      <section className={styles.concepts}>
        <div className="container">
          <h2>
            <span className={styles.sectionIcon}>
              <i className="fas fa-lightbulb"></i>
            </span>
            Conceptos Fundamentales
          </h2>
          <div className={styles.conceptsGrid}>
            {[
              {
                concept: 'Ren (仁)',
                meaning: 'Benevolencia',
                description: 'La virtud fundamental que abarca la humanidad, bondad, amor y compasión hacia otros.',
                icon: 'heart'
              },
              {
                concept: 'Li (禮)',
                meaning: 'Rituales/Etiqueta',
                description: 'Las normas de comportamiento apropiado que mantienen el orden social y expresan respeto.',
                icon: 'handshake'
              },
              {
                concept: 'Yi (義)',
                meaning: 'Rectitud',
                description: 'La capacidad de discernir lo correcto de lo incorrecto y actuar con justicia moral.',
                icon: 'gavel'
              },
              {
                concept: 'Xiao (孝)',
                meaning: 'Piedad filial',
                description: 'El respeto y cuidado hacia los padres y ancestros, base de la armonía familiar.',
                icon: 'users'
              },
              {
                concept: 'Zhengming (正名)',
                meaning: 'Rectificación de nombres',
                description: 'La importancia de usar las palabras correctamente para que reflejen la realidad apropiada.',
                icon: 'spell-check'
              },
              {
                concept: 'Junzi (君子)',
                meaning: 'Persona ejemplar',
                description: 'El ideal confuciano de una persona virtuosa que actúa con moralidad y liderazgo ético.',
                icon: 'crown'
              }
            ].map(({ concept, meaning, description, icon }) => (
              <div key={concept} className={styles.conceptCard}>
                <div className={styles.conceptIcon}>
                  <i className={`fas fa-${icon}`}></i>
                </div>
                <h3>{concept}</h3>
                <h4>{meaning}</h4>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Textos clásicos */}
      <section className={styles.classicTexts}>
        <div className="container">
          <h2>
            <span className={styles.sectionIcon}>
              <i className="fas fa-scroll"></i>
            </span>
            Textos Clásicos
          </h2>
          <div className={styles.textsGrid}>
            <div className={styles.textCard}>
              <div className={styles.textIcon}>
                <i className="fas fa-comments"></i>
              </div>
              <h3>Analíticas (論語)</h3>
              <div className={styles.textMeta}>
                <span>Discípulos de Confucio · Siglo V-III a.C.</span>
              </div>
              <p>
                Colección de dichos y conversaciones de Confucio compilada por sus discípulos. 
                Contiene las enseñanzas centrales sobre ética, política, educación y relaciones sociales.
              </p>
              <div className={styles.famousQuote}>
                <blockquote>
                  "No hagas a otros lo que no quieres que te hagan a ti"
                </blockquote>
                <cite>Analíticas 15:23</cite>
              </div>
            </div>
            <div className={styles.textCard}>
              <div className={styles.textIcon}>
                <i className="fas fa-book"></i>
              </div>
              <h3>Mencio (孟子)</h3>
              <div className={styles.textMeta}>
                <span>Mencio · Siglo IV a.C.</span>
              </div>
              <p>
                Texto que desarrolla la filosofía confuciana, especialmente la teoría de que 
                la naturaleza humana es inherentemente buena y puede ser cultivada a través de la educación.
              </p>
              <div className={styles.famousQuote}>
                <blockquote>
                  "El camino está cerca, pero la gente lo busca lejos"
                </blockquote>
                <cite>Mencio 4A:11</cite>
              </div>
            </div>
            <div className={styles.textCard}>
              <div className={styles.textIcon}>
                <i className="fas fa-university"></i>
              </div>
              <h3>Los Cuatro Libros</h3>
              <div className={styles.textMeta}>
                <span>Compilación Neoconfuciana · Dinastía Song</span>
              </div>
              <p>
                Colección que incluye las Analíticas, Mencio, la Gran Enseñanza y la Doctrina del Medio. 
                Base de la educación confuciana durante siglos.
              </p>
              <div className={styles.famousQuote}>
                <blockquote>
                  "El aprendizaje sin reflexión es inútil; la reflexión sin aprendizaje es peligrosa"
                </blockquote>
                <cite>Analíticas 2:15</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sistema de gobierno y educación */}
      <section className={styles.governance}>
        <div className="container">
          <h2>
            <span className={styles.sectionIcon}>
              <i className="fas fa-landmark"></i>
            </span>
            Gobierno y Educación
          </h2>
          <div className={styles.governanceContent}>
            <div className={styles.governanceText}>
              <h3>El Gobierno Virtuoso</h3>
              <p>
                Confucio creía que el gobierno debía basarse en la virtud moral más que en la fuerza. 
                Los gobernantes deben ser ejemplos de rectitud y benevolencia para inspirar a sus súbditos.
              </p>
              <h3>Educación para Todos</h3>
              <p>
                "En la educación no debe haber distinciones de clase". Confucio promovía la educación 
                universal como medio para el desarrollo personal y social.
              </p>
            </div>
            <div className={styles.principlesGrid}>
              {[
                {
                  title: 'Meritocracia',
                  description: 'Los cargos públicos deben otorgarse basados en el mérito y la virtud, no en el nacimiento.',
                  icon: 'medal'
                },
                {
                  title: 'Liderazgo Moral',
                  description: 'Los líderes deben gobernar con el ejemplo, demostrando virtud y benevolencia.',
                  icon: 'chess-king'
                },
                {
                  title: 'Educación Continua',
                  description: 'El aprendizaje es un proceso de toda la vida que cultiva el carácter y la sabiduría.',
                  icon: 'brain'
                },
                {
                  title: 'Armonía Social',
                  description: 'La sociedad prospera cuando cada persona cumple su rol con virtud y responsabilidad.',
                  icon: 'people-arrows'
                }
              ].map(({ title, description, icon }) => (
                <div key={title} className={styles.principleCard}>
                  <div className={styles.principleIcon}>
                    <i className={`fas fa-${icon}`}></i>
                  </div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Influencia moderna */}
      <section className={styles.modernInfluence}>
        <div className="container">
          <h2>
            <span className={styles.sectionIcon}>
              <i className="fas fa-globe-asia"></i>
            </span>
            Influencia en el Mundo Moderno
          </h2>
          <div className={styles.influenceContent}>
            <div className={styles.influenceText}>
              <p>
                El Confucianismo sigue siendo una fuerza influyente en Asia Oriental, 
                moldeando sistemas educativos, estructuras familiares, ética empresarial y políticas gubernamentales. 
                Sus valores de respeto, educación y armonía social continúan relevantes en el mundo globalizado.
              </p>
            </div>
            <div className={styles.modernApplications}>
              <div className={styles.applicationCard}>
                <h4>Educación</h4>
                <p>Sistemas educativos que enfatizan el respeto al maestro, la disciplina y el logro académico.</p>
              </div>
              <div className={styles.applicationCard}>
                <h4>Familia</h4>
                <p>Estructuras familiares que valoran la piedad filial y el respeto intergeneracional.</p>
              </div>
              <div className={styles.applicationCard}>
                <h4>Negocios</h4>
                <p>Ética empresarial basada en relaciones a largo plazo, confianza y responsabilidad social.</p>
              </div>
              <div className={styles.applicationCard}>
                <h4>Gobierno</h4>
                <p>Ideales de meritocracia y servicio público en las administraciones asiáticas modernas.</p>
              </div>
              <div className={styles.applicationCard}>
                <h4>Psicología</h4>
                <p>Enfoques terapéuticos que integran armonía familiar y responsabilidad social.</p>
              </div>
              <div className={styles.applicationCard}>
                <h4>Diplomacia Internacional</h4>
                <p>Principios de armonía y respeto mutuo en las relaciones internacionales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}