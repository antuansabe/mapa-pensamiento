// src/app/taoismo/page.jsx
import React from 'react'
import styles from './taoismo.module.css'

export default function TaoismoPage() {
  return (
    <main className={styles.taoismoPage}>
      {/* Encabezado */}
      <section className={styles.taoismoHeader}>
        <div className="container">
          <h1 className={styles.title}>Taoísmo</h1>
          <p className={styles.subtitle}>
            Tradición filosófica china que enfatiza vivir en armonía con el Tao, el camino natural del universo.
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section className={styles.introduction}>
        <div className="container">
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <h2>El Camino del Tao</h2>
              <p>
                El Taoísmo es una de las grandes tradiciones filosóficas y espirituales de China, originada en el siglo VI a.C. 
                Su nombre deriva de "Tao" (道), que significa "el Camino" o "la Vía", refiriéndose al principio fundamental 
                que subyace y une a todo el universo.
              </p>
              <p>
                Esta filosofía enseña la importancia de vivir en armonía con el orden natural, 
                practicando el wu wei (無為) o "no-acción", que no significa inactividad sino actuar 
                de acuerdo con el flujo natural de la vida sin forzar las situaciones.
              </p>
            </div>
            <div className={styles.taoSymbol}>
              <div className={styles.yinYang}>
                <div className={styles.yang}></div>
                <div className={styles.yin}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundadores y figuras clave */}
      <section className={styles.keyFigures}>
        <div className="container">
          <h2>
            <span className={styles.sectionIcon}>
              <i className="fas fa-user-circle"></i>
            </span>
            Figuras Clave
          </h2>
          <div className={styles.figuresGrid}>
            {[
              {
                name: 'Laozi (老子)',
                period: '6to siglo a.C.',
                role: 'Legendario fundador',
                description: 'Tradicionalmente considerado el autor del Tao Te Ching, la obra fundamental del Taoísmo.',
                icon: 'scroll'
              },
              {
                name: 'Zhuangzi (莊子)',
                period: '369-286 a.C.',
                role: 'Filósofo taoísta',
                description: 'Desarrolló las ideas taoístas con parábolas y paradojas, enfatizando la libertad espiritual.',
                icon: 'feather'
              },
              {
                name: 'Liezi (列子)',
                period: '450-375 a.C.',
                role: 'Filósofo taoísta',
                description: 'Conocido por sus enseñanzas sobre el vacío y la espontaneidad natural.',
                icon: 'wind'
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
                concept: 'Tao (道)',
                meaning: 'El Camino',
                description: 'El principio fundamental del universo, la fuente y el patrón de toda existencia.',
                icon: 'route'
              },
              {
                concept: 'Wu Wei (無為)',
                meaning: 'No-acción',
                description: 'Actuar en armonía con el flujo natural sin forzar, permitiendo que las cosas sucedan naturalmente.',
                icon: 'water'
              },
              {
                concept: 'Yin-Yang (陰陽)',
                meaning: 'Dualidad complementaria',
                description: 'Las fuerzas opuestas pero complementarias que mantienen el equilibrio en el universo.',
                icon: 'yin-yang'
              },
              {
                concept: 'Ziran (自然)',
                meaning: 'Naturalidad espontánea',
                description: 'El estado de ser auténtico y natural, siguiendo la propia naturaleza sin artificios.',
                icon: 'seedling'
              },
              {
                concept: 'Te (德)',
                meaning: 'Virtud natural',
                description: 'La manifestación del Tao en acción, la virtud que surge naturalmente del seguir el Camino.',
                icon: 'gem'
              },
              {
                concept: 'Pu (樸)',
                meaning: 'Simplicidad original',
                description: 'El estado de simplicidad y pureza natural, libre de complicaciones artificiales.',
                icon: 'cube'
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

      {/* Textos sagrados */}
      <section className={styles.sacredTexts}>
        <div className="container">
          <h2>
            <span className={styles.sectionIcon}>
              <i className="fas fa-book-open"></i>
            </span>
            Textos Fundamentales
          </h2>
          <div className={styles.textsGrid}>
            <div className={styles.textCard}>
              <div className={styles.textIcon}>
                <i className="fas fa-scroll"></i>
              </div>
              <h3>Tao Te Ching (道德經)</h3>
              <div className={styles.textMeta}>
                <span>Laozi · Siglo VI a.C.</span>
              </div>
              <p>
                El texto fundamental del Taoísmo, compuesto de 81 capítulos breves que exploran 
                la naturaleza del Tao y cómo vivir en armonía con él. Es uno de los libros 
                más traducidos en la historia.
              </p>
              <div className={styles.famousQuote}>
                <blockquote>
                  "El Tao que puede ser expresado no es el Tao eterno"
                </blockquote>
                <cite>Tao Te Ching, Capítulo 1</cite>
              </div>
            </div>
            <div className={styles.textCard}>
              <div className={styles.textIcon}>
                <i className="fas fa-feather-alt"></i>
              </div>
              <h3>Zhuangzi (莊子)</h3>
              <div className={styles.textMeta}>
                <span>Zhuangzi · Siglo IV a.C.</span>
              </div>
              <p>
                Colección de textos que desarrollan las ideas taoístas a través de parábolas, 
                historias y paradojas. Enfatiza la libertad espiritual y la relatividad 
                de todas las perspectivas.
              </p>
              <div className={styles.famousQuote}>
                <blockquote>
                  "Una vez soñé que era una mariposa... Ahora no sé si soy un hombre que soñó ser mariposa, o una mariposa que sueña ser hombre"
                </blockquote>
                <cite>Zhuangzi</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prácticas y aplicaciones */}
      <section className={styles.practices}>
        <div className="container">
          <h2>
            <span className={styles.sectionIcon}>
              <i className="fas fa-hands"></i>
            </span>
            Prácticas y Aplicaciones
          </h2>
          <div className={styles.practicesGrid}>
            {[
              {
                title: 'Meditación Taoísta',
                description: 'Técnicas de meditación que buscan la unión con el Tao a través del silencio y la quietud interior.',
                icon: 'spa'
              },
              {
                title: 'Tai Chi (太極)',
                description: 'Arte marcial suave que incorpora principios taoístas de equilibrio y fluidez.',
                icon: 'walking'
              },
              {
                title: 'Feng Shui (風水)',
                description: 'Práctica de armonizar el entorno físico con las energías naturales.',
                icon: 'home'
              },
              {
                title: 'Medicina Tradicional China',
                description: 'Sistema médico basado en el equilibrio de las energías yin y yang en el cuerpo.',
                icon: 'leaf'
              },
              {
                title: 'Qigong (氣功)',
                description: 'Práctica de cultivo de la energía vital (qi) a través de movimiento, respiración y meditación.',
                icon: 'circle-dot'
              },
              {
                title: 'Alquimia Taoísta',
                description: 'Prácticas de cultivo espiritual para lograr la longevidad y la inmortalidad espiritual.',
                icon: 'flask'
              }
            ].map(({ title, description, icon }) => (
              <div key={title} className={styles.practiceCard}>
                <div className={styles.practiceIcon}>
                  <i className={`fas fa-${icon}`}></i>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Influencia moderna */}
      <section className={styles.modernInfluence}>
        <div className="container">
          <h2>
            <span className={styles.sectionIcon}>
              <i className="fas fa-globe"></i>
            </span>
            Influencia en el Mundo Moderno
          </h2>
          <div className={styles.influenceContent}>
            <div className={styles.influenceText}>
              <p>
                El Taoísmo ha tenido una profunda influencia en el pensamiento occidental moderno, 
                especialmente en áreas como la psicología, la ecología, y la física cuántica. 
                Conceptos como el equilibrio, la no-resistencia, y la armonía con la naturaleza 
                han encontrado eco en movimientos contemporáneos.
              </p>
            </div>
            <div className={styles.modernApplications}>
              <div className={styles.applicationCard}>
                <h4>Psicología</h4>
                <p>Terapias basadas en la aceptación y el fluir con las emociones naturales.</p>
              </div>
              <div className={styles.applicationCard}>
                <h4>Ecología</h4>
                <p>Principios de sostenibilidad y vida en armonía con el medio ambiente.</p>
              </div>
              <div className={styles.applicationCard}>
                <h4>Negocios</h4>
                <p>Liderazgo basado en la flexibilidad y la adaptación natural.</p>
              </div>
              <div className={styles.applicationCard}>
                <h4>Arte y Literatura</h4>
                <p>Influencia en la estética minimalista y la filosofía del "menos es más".</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}