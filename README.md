# Mapa del Pensamiento Filosófico

¡Bienvenido al proyecto **Mapa del Pensamiento**! 🎉

Este repositorio contiene la versión moderna de nuestra plataforma educativa interactiva, donde exploramos la rica historia de las ideas filosóficas en Occidente y Oriente, así como los conceptos y debates que han moldeado el pensamiento humano.

---

## 📖 Descripción

El **Mapa del Pensamiento** ofrece:

- Una **línea de tiempo** interactiva de escuelas filosóficas y conceptos.
- Un **explorador** de tradiciones (Occidente y Oriente) con filtros y tarjetas detalladas.
- Un **buscador** de conceptos filosóficos con resaltado en tiempo real.
- Una sección de **comparación** para analizar y contrastar diferentes escuelas.
- Rutas de **aprendizaje** y seguimiento de progreso.

En esta migración, hemos reconstruido la plataforma original (HTML/CSS/JS vanilla) usando **Next.js**, **React**, **D3.js** y un **Headless CMS** para facilitar la escalabilidad, el rendimiento y la mantenibilidad.

---

## 🚀 Características

- **App Router** de Next.js para una navegación rápida y SEO-friendly.
- **Theme Toggle** (claro/oscuro) con persistencia en el navegador.
- **Componentes React** reutilizables: NavBar, Footer, Timeline, Cards, etc.
- **Visualizaciones** interactivas con D3.js.
- **CSS Modules** y variables globales para estilos consistentes.
- **Despliegue** automático en Vercel (frontend) y Railway (backend).

---

## 🛠 Tech Stack

- **Frontend**: Next.js + React
- **Estilos**: CSS Modules, variables CSS globales
- **Visualizaciones**: D3.js
- **Autenticación & Backend**: Supabase (pendiente de integrar)
- **CMS**: Strapi (pendiente de integrar)
- **Deployment**: Vercel (frontend), Railway (backend)

---

## 📦 Instalación y desarrollo

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/antuansabe/mapa-pensamiento.git
   cd mapa-pensamiento
   ```

2. **Instala dependencias**:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. Abre http://localhost:3000 en tu navegador y ¡disfruta de la magia filosófica!

---

## 📂 Estructura del Proyecto

```
mapa-pensamiento/
├─ src/
│  ├─ app/               # Rutas de Next.js (App Router)
│  │  ├─ layout.js       # Layout global (NavBar, Footer, fonts)
│  │  └─ page.js         # Home y demás páginas (occidente, oriente ...)
│  ├─ components/        # Componentes React reutilizables
│  └─ styles/            # CSS global y módulos CSS
├─ public/               # Imágenes y assets estáticos
├─ .gitignore
├─ package.json
└─ README.md             # Este archivo
```

---

## 🤝 Cómo contribuir

1. Abre un **issue** si encuentras bugs o tienes ideas.
2. Crea una **rama** con tu mejora (`git checkout -b feature/nombre`).
3. Realiza tus cambios y haz **commit** con mensajes claros.
4. Envía un **pull request** describiendo tu aporte.

¡Toda contribución es bienvenida! 🌟

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE). ¡Siéntete libre de usar y modificar!

---

¡Gracias por visitar **Mapa del Pensamiento**! Siéntete libre de explorar, aprender y compartir. 😊

