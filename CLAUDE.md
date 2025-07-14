# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Urahost is a French-language Next.js landing page for a cloud hosting platform. The app allows users to deploy applications and databases with one-click deployments. The site features modern animations, dark mode support, and Cal.com integration for scheduling.

## Development Commands

```bash
# Start development server
npm run dev
# or
pnpm dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion
- **UI Components**: Custom components with Tailwind
- **Theme**: Dark/light mode via next-themes
- **Icons**: Tabler Icons, Lucide React, React Icons
- **Calendar**: Cal.com embed integration

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable UI components
- `context/` - React context providers (theme)
- `lib/` - Utility functions (mainly Tailwind class merging)
- `constants/` - Application constants and links
- `app/hooks/` - Custom React hooks

### Key Components
- **Layout**: Global layout with theme provider, navbar, and footer
- **Hero**: Landing page hero with animated beams and collision effects
- **Theme Provider**: Wraps next-themes for dark/light mode switching
- **Cal.com Integration**: Custom hook for embedding Cal.com calendars

### Styling Conventions
- Uses `cn()` utility from `lib/utils.ts` for conditional class merging
- Tailwind classes follow semantic naming
- Dark mode variants using `dark:` prefix
- Custom CSS variables for complex animations

### TypeScript Configuration
- Strict mode enabled
- Path aliases: `@/*` maps to root directory
- ES2017 target for broad browser compatibility

## Cal.com Integration

The project includes Cal.com embedding via the `useCalEmbed` hook located in `app/hooks/useCalEmbed.ts`. Configuration constants should be defined in `constants/links.ts`.

## Animations

Heavy use of Framer Motion for:
- Page transitions
- Hero section beam animations with collision detection
- Text reveal animations
- Component entrance effects

## Theme System

Uses next-themes with system preference detection. Theme provider is configured in `context/providers.tsx` and applied globally in the root layout.