# Landing Page Template

A modern, production-ready landing page template built with React, TypeScript, and a carefully curated tech stack for optimal developer experience and performance.

## ✨ Features

- ⚡ **Vite** - Lightning fast development server and build tool
- ⚛️ **React 19** - Latest React with concurrent features
- 🎯 **TypeScript** - Full type safety and IntelliSense
- 🎨 **Tailwind CSS v4** - Utility-first CSS with the latest features
- 🧩 **shadcn/ui** - Beautiful, accessible components built on Radix UI
- 🛣️ **TanStack Router** - Type-safe routing with auto-complete
- 🔧 **Biome** - Fast formatter and linter (ESLint + Prettier alternative)
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode Support** - Built-in theme switching
- 🚀 **Performance Optimized** - Code splitting and lazy loading

## 🚀 Quick Start

### Using degit (Recommended)

```bash
# Clone the template
npx degit rodrigocgodoy/template-landingpage my-landing-page

# Navigate to the project
cd my-landing-page

# Install dependencies
npm install

# Start development server
npm run dev
```

### Manual Clone

```bash
# Clone the repository
git clone https://github.com/rodrigocgodoy/template-landingpage.git my-landing-page

# Navigate to the project
cd my-landing-page

# Remove git history (optional)
rm -rf .git

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   └── ui/             # shadcn/ui components
├── lib/                # Utility functions
│   └── utils.ts        # Class merging utilities
├── routes/             # TanStack Router pages
├── styles/             # Global styles and CSS
│   └── global.css      # Tailwind imports and CSS variables
└── main.tsx            # Application entry point

Public assets and configuration files in root
```

## 🛠️ Tech Stack Details

### Core Framework
- **React 19** - Latest stable version with improved concurrent features
- **TypeScript** - Strict type checking enabled for better code quality
- **Vite** - Modern build tool with HMR and optimized production builds

### Styling
- **Tailwind CSS v4** - Latest version with improved performance
- **CSS Variables** - Dynamic theming support
- **Mobile-first Design** - Responsive breakpoints included

### UI Components
- **shadcn/ui** - Pre-built accessible components
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful icon library
- **Class Variance Authority** - Type-safe component variants

### Routing
- **TanStack Router** - File-based routing with TypeScript support
- **Code Splitting** - Automatic route-based code splitting
- **Type Safety** - Fully typed routes and navigation

### Development Tools
- **Biome** - Fast linting and formatting (replaces ESLint + Prettier)
- **Hot Module Replacement** - Instant updates during development
- **TypeScript Path Mapping** - Clean imports with `@/` alias

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run Biome linter
npm run lint:fix     # Fix linting issues automatically
npm run format       # Format code with Biome
```

## 🎨 Adding Components

This template includes shadcn/ui for beautiful, accessible components:

```bash
# Add individual components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog

# Add multiple components
npx shadcn@latest add button card dialog input
```

### Available Components
The template comes with these components pre-installed:
- ✅ **Button** - Various styles and sizes
- ✅ **Accordion** - Collapsible content sections

## 🌙 Theme Customization

The template supports light and dark modes out of the box. Customize themes by editing:

- `src/styles/global.css` - CSS variables for colors
- `components.json` - shadcn/ui configuration

## 🚀 Deployment

The template is optimized for deployment on modern hosting platforms:

### Vercel
```bash
npm run build
# Deploy the `dist` folder
```

### Netlify
```bash
npm run build
# Deploy the `dist` folder
```

### Static Hosting
```bash
npm run build
# Serve the `dist` folder with any static file server
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
