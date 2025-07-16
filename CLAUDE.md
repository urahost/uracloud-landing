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
- **Styling**: Tailwind CSS 4.x with custom CSS variables
- **Animations**: Framer Motion with complex collision detection
- **UI Components**: Custom components with class-variance-authority
- **Theme**: Dark/light mode via next-themes with system preference
- **Icons**: Tabler Icons, Lucide React, React Icons
- **Calendar**: Cal.com embed integration
- **Analytics**: Vercel Analytics integration
- **Utilities**: clsx + tailwind-merge via `cn()` utility

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable UI components
- `components/ui/` - Base UI components
- `context/` - React context providers (theme)
- `lib/` - Utility functions (mainly Tailwind class merging)
- `constants/` - Application constants and external links
- `app/hooks/` - Custom React hooks
- `public/images/` - Static images and assets

### Key Architecture Patterns

**Layout System**: Global layout (`app/layout.tsx`) wraps all pages with:
- Theme provider with system preference detection
- Navbar and Footer components
- Vercel Analytics integration
- Inter font optimization

**Animation System**: Complex Framer Motion setup in Hero component:
- Multiple animated beams with collision detection
- Real-time collision coordinate tracking
- Explosion effects on beam-container collision
- Grid background animations with CSS custom properties

**Theme System**: 
- Uses next-themes with `ThemeProvider` from `context/providers.tsx`
- CSS custom properties for both light/dark modes
- System preference detection with manual override

**Cal.com Integration**: 
- Custom `useCalEmbed` hook in `app/hooks/useCalEmbed.ts`
- Configuration via `CONSTANTS` in `constants/links.ts`
- Support for custom branding, layouts, and event type hiding

### Styling Conventions
- Uses `cn()` utility from `lib/utils.ts` for conditional class merging
- Tailwind classes with semantic naming
- Dark mode variants using `dark:` prefix
- CSS custom properties for complex animations and theming
- Extensive use of gradients and backdrop blur effects

### TypeScript Configuration
- Strict mode enabled
- Path aliases: `@/*` maps to root directory
- ES2017 target for broad browser compatibility
- Includes Next.js plugin for optimized builds

### Image Optimization
- Next.js Image component with remote patterns for:
  - cp.urahost.fr (control panel)
  - images.unsplash.com
  - assets.aceternity.com
- Static images in `public/images/` directory

### External Integrations
- **Dashboard**: https://dash.urahost.fr (login/register)
- **Cal.com**: Embedded calendar with namespace "demo-Urahost" 
- **Vercel Analytics**: Usage tracking and performance monitoring