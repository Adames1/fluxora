# Fluxora

> Personal productivity app to manage projects, tasks and track your progress.

**[🚀 Live Demo](https://fluxora-app.netlify.app/sign-in)** · **[GitHub](https://github.com/Adames1/flowme)**

---

## 📌 About

Fluxora is a personal productivity web application that allows you to organize your projects, manage tasks per project, and get a clear overview of your progress from a centralized dashboard.

Built as an anchor project to apply and consolidate modern frontend development practices with a real-world architecture.

---

## ✨ Features

- 🔐 Authentication — Sign up and sign in with email and password
- 📁 Projects — Create, edit and delete projects with status tracking
- ✅ Tasks — Add and manage tasks per project with priority levels
- 📊 Dashboard — Overview of project stats and pending tasks
- ⚡ Realtime — Changes reflect instantly without page refresh (Supabase Realtime)
- 📱 Responsive — Works on desktop and mobile

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui |
| Backend & Auth | Supabase |
| Routing | React Router v6 |
| Forms | React Hook Form + Zod |
| Notifications | Sonner |

---

## 🏗️ Architecture

Feature-based folder structure with a clear three-layer separation:

```
src/
├── components/        # Shared and UI components
├── features/
│   ├── auth/          # Authentication (context, hooks, pages, services)
│   ├── dashboard/     # Dashboard (components, helpers, pages)
│   └── projects/      # Projects & Tasks (components, constants, context, hooks, pages, services, validations)
├── layouts/           # AuthLayout and MainLayout
├── lib/               # Supabase client and utilities
└── routes/            # Route guards and app routes
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A Supabase project

### Installation

```bash
# Clone the repository
git clone https://github.com/Adames1/flowme.git
cd flowme

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

Add your Supabase credentials to `.env`:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

```bash
# Start development server
npm run dev
```

---

## 🗄️ Database Setup

Run the following in your Supabase SQL Editor:

```sql
-- Profiles table (auto-populated on user signup)
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects table
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tasks table
CREATE TABLE public.tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  priority TEXT DEFAULT 'low',
  is_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

Enable RLS and add the trigger for auto-creating profiles on signup — see the full setup guide in the [Supabase docs](https://supabase.com/docs).

---

## 📄 License

MIT

---

---

# Fluxora

> Aplicación de productividad personal para gestionar proyectos, tareas y hacer seguimiento de tu progreso.

**[🚀 Demo en vivo](https://fluxora-app.netlify.app/sign-in)** · **[GitHub](https://github.com/Adames1/flowme)**

---

## 📌 Acerca del proyecto

Fluxora es una aplicación web de productividad personal que permite organizar proyectos, gestionar tareas por proyecto y obtener una vista clara del progreso desde un dashboard centralizado.

Construida como proyecto ancla para aplicar y consolidar buenas prácticas de desarrollo frontend moderno con una arquitectura real.

---

## ✨ Funcionalidades

- 🔐 Autenticación — Registro e inicio de sesión con email y contraseña
- 📁 Proyectos — Crear, editar y eliminar proyectos con seguimiento de estado
- ✅ Tareas — Agregar y gestionar tareas por proyecto con niveles de prioridad
- 📊 Dashboard — Resumen de estadísticas de proyectos y tareas pendientes
- ⚡ Tiempo real — Los cambios se reflejan al instante sin recargar la página (Supabase Realtime)
- 📱 Responsivo — Funciona en escritorio y móvil

---

## 🛠️ Stack tecnológico

| Categoría | Tecnología |
|---|---|
| Framework | React 18 |
| Build Tool | Vite |
| Estilos | Tailwind CSS v4 |
| Componentes UI | shadcn/ui |
| Backend & Auth | Supabase |
| Enrutamiento | React Router v6 |
| Formularios | React Hook Form + Zod |
| Notificaciones | Sonner |

---

## 🏗️ Arquitectura

Estructura de carpetas basada en features con una separación clara en tres capas:

```
src/
├── components/        # Componentes compartidos y de UI
├── features/
│   ├── auth/          # Autenticación (context, hooks, pages, services)
│   ├── dashboard/     # Dashboard (components, helpers, pages)
│   └── projects/      # Proyectos y Tareas (components, constants, context, hooks, pages, services, validations)
├── layouts/           # AuthLayout y MainLayout
├── lib/               # Cliente Supabase y utilidades
└── routes/            # Guards de rutas y rutas de la app
```

---

## 🚀 Cómo correrlo localmente

### Requisitos previos

- Node.js 18+
- Un proyecto en Supabase

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Adames1/flowme.git
cd flowme

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
```

Agrega tus credenciales de Supabase en `.env`:

```env
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

```bash
# Iniciar servidor de desarrollo
npm run dev
```

---

## 📄 Licencia

MIT
