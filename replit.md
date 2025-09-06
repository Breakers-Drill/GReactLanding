# Overview

GReact is a modern web application showcasing a Russian IT development philosophy focused on speed, utility, and beauty over complexity. The project serves as a marketing landing page for a development philosophy and upcoming IT projects, libraries, services, and frameworks. Built with React and TypeScript, it features a dark-themed design with smooth animations and modern UI components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The application uses a modern React architecture with the following key decisions:

- **React with TypeScript**: Provides type safety and better developer experience
- **Vite**: Chosen as the build tool for fast development and optimized production builds
- **Wouter**: Lightweight client-side routing library instead of React Router for minimal bundle size
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui Components**: Pre-built, customizable React components based on Radix UI primitives
- **TanStack React Query**: Data fetching and state management for server state
- **React Hook Form**: Form handling with validation

The frontend follows a component-based architecture with:
- Atomic design principles using shadcn/ui components
- Custom hooks for reusable logic (mobile detection, toast notifications)
- Smooth scrolling and intersection observer-based animations
- Responsive design optimized for both desktop and mobile

## Backend Architecture

The backend uses a minimal Express.js setup with the following design:

- **Express.js**: RESTful API server with middleware for logging and error handling
- **TypeScript**: Type-safe server-side development
- **In-Memory Storage**: Currently uses a simple in-memory storage implementation with plans for database integration
- **Modular Route Structure**: Routes are organized in separate files with a clear separation of concerns
- **Development Integration**: Vite integration for seamless development experience with HMR

The server architecture is designed to be easily extensible, with interfaces defined for storage operations that can be swapped out for different implementations.

## Data Storage

Currently implements an in-memory storage solution with:
- **Interface-based Design**: IStorage interface allows for easy swapping of storage implementations
- **User Management**: Basic user CRUD operations (create, read by ID, read by username)
- **Drizzle ORM Ready**: Configuration prepared for PostgreSQL integration using Drizzle ORM
- **Schema Definition**: Database schema defined in shared directory for type safety

## Build and Development

- **Monorepo Structure**: Client and server code organized in a single repository
- **Shared Types**: Common TypeScript definitions shared between frontend and backend
- **ESBuild**: Server bundling for production deployment
- **Development Scripts**: Integrated development workflow with hot reloading

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL database (configured but not yet implemented)
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL dialect
- **Drizzle Kit**: Database migration and schema management tools

## UI and Styling
- **Radix UI**: Headless UI primitives for accessible components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Inter font family for typography

## Development Tools
- **Replit Integration**: Development environment integration with runtime error overlay and cartographer
- **PostCSS**: CSS processing with Autoprefixer
- **Class Variance Authority**: Utility for creating component variants

## Utilities
- **date-fns**: Date manipulation library
- **clsx**: Conditional className utility
- **nanoid**: URL-safe unique ID generator
- **zod**: Schema validation library