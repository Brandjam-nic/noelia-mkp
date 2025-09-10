# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start the development server with Turbopack on http://localhost:3000
- `npm run build` - Build the production application with Turbopack
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

### Type Checking
- `npx tsc --noEmit` - Run TypeScript compiler to check for type errors without emitting files

## Architecture

This is a Next.js 15.5.2 application using the App Router architecture with React 19.1.0. Key architectural decisions:

### Tech Stack
- **Framework**: Next.js 15.5.2 with Turbopack bundler
- **UI Components**: shadcn/ui components library configured with New York style
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **Icons**: Lucide React for iconography
- **TypeScript**: Strict mode enabled with TypeScript 5.x
- **Framer Motion**: For scroll animation

### Project Structure
- `/app` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with font optimization (Outfit font family)
  - `page.tsx` - Homepage component
  - `globals.css` - Global styles and Tailwind directives
- `/components` - React components organized by:
  - `/ui` - shadcn/ui components
  - Component files use camelCase naming (e.g., `heroSection.tsx`, `makeupSection.tsx`)
- `/lib` - Utility functions and shared logic
  - `utils.ts` - Contains `cn()` utility for className merging with clsx and tailwind-merge
- `/types` - Centralized TypeScript type definitions
  - `index.ts` - Exports all shared types and interfaces for components
- `/public/images` - Static image assets
  - `/hero` - Hero section images for random display

### Naming Conventions
- **Component Files**: Use camelCase for file names (e.g., `heroSection.tsx`, `navigationBar.tsx`)
- **Component Exports**: Use PascalCase for React component names (e.g., `HeroSection`, `NavigationBar`)
- **Functions/Variables**: Use camelCase throughout the codebase

### Import Aliases
The project uses `@/` as the root import alias configured in tsconfig.json, allowing imports like:
- `@/components` - Component imports
- `@/lib` - Library and utility imports
- `@/components/ui` - UI component imports
- `@/types` - Type definitions and interfaces

### shadcn/ui Configuration
Components are configured via `components.json`:
- Style: New York
- React Server Components enabled
- Tailwind CSS variables for theming
- Base color: Neutral
- CSS location: `app/globals.css`