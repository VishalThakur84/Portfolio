# Portfolio Application

## Overview

This is a personal portfolio application for Vishal Singh Thakur, a Ruby on Rails backend developer. The application is built as a full-stack web application using a modern React frontend with Express.js backend, featuring a professional portfolio layout with contact functionality and resume download capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds
- **UI Components**: Comprehensive set of Radix UI primitives wrapped in shadcn/ui

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Express sessions with PostgreSQL store
- **Validation**: Zod for runtime type validation

### Database Schema
- **Users Table**: Basic user authentication (id, username, password)
- **Contacts Table**: Contact form submissions (id, name, email, message, created_at)
- **Migration System**: Drizzle Kit for database migrations

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Professional introduction with profile image
- **About Section**: Skills showcase and professional summary
- **Experience Section**: Work history with company details and achievements
- **Projects Section**: Portfolio of completed projects
- **Contact Section**: Contact form with validation and submission handling
- **Theme Provider**: Dark/light theme support with system preference detection

### Backend Routes
- **POST /api/contact**: Contact form submission with Zod validation
- **GET /api/resume/download**: Resume file download endpoint
- **Static File Serving**: Vite development server integration in development

### UI Component Library
- Complete shadcn/ui implementation with Radix UI primitives
- Form components (Input, Textarea, Button, etc.)
- Layout components (Card, Dialog, Sheet, etc.)
- Feedback components (Toast, Alert, etc.)
- Navigation components (Tabs, Accordion, etc.)

## Data Flow

1. **Contact Form Submission**:
   - User fills contact form → Frontend validation → API request → Backend Zod validation → Success/error response → Toast notification

2. **Resume Download**:
   - User clicks download button → API request → File existence check → File download or 404 response

3. **Theme Management**:
   - System preference detection → Local storage persistence → CSS class application → Dynamic theme switching

4. **Navigation**:
   - Single-page application with smooth scrolling between sections
   - Mobile-responsive navigation with drawer/sheet implementation

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **State Management**: TanStack React Query
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Carousel**: Embla Carousel React

### Backend Dependencies
- **Server Framework**: Express.js
- **Database**: Drizzle ORM, Neon Database serverless
- **Validation**: Zod, drizzle-zod
- **Session Management**: connect-pg-simple
- **Development**: tsx for TypeScript execution

### Build Tools
- **Frontend Build**: Vite with React plugin
- **Backend Build**: esbuild for production bundling
- **Development**: Concurrent development with Vite dev server
- **TypeScript**: Shared configuration across client/server/shared folders

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR (Hot Module Replacement)
- **Backend**: tsx with nodemon-like functionality for auto-restart
- **Database**: Neon Database with connection pooling
- **Environment**: Replit integration with cartographer plugin

### Production Build
- **Frontend**: Vite build to `dist/public` directory
- **Backend**: esbuild bundle to `dist/index.js`
- **Static Serving**: Express serves built frontend files
- **Database**: PostgreSQL via Neon Database with environment variable configuration

### File Structure
- `/client`: React frontend application
- `/server`: Express backend application
- `/shared`: Shared TypeScript types and schemas
- `/attached_assets`: Static files (resume PDF)
- `/migrations`: Database migration files

### Environment Configuration
- Database URL required via `DATABASE_URL` environment variable
- Development/production mode switching via `NODE_ENV`
- Replit-specific optimizations for development environment

The application follows a clean separation of concerns with shared TypeScript definitions, comprehensive error handling, and modern development practices including TypeScript strict mode and ESLint configuration.