# Portfolio & Blog — Built with TanStack Start

This repository contains the source code for my personal portfolio and technical blog, built with TanStack Start.

The site is a full-stack application designed to:
- Present my engineering work and technical background
- Publish long-form technical writing on systems, architecture, and performance
- Serve as a production-grade example of how I structure modern web applications

The focus is clarity, performance, and maintainability.

## Architecture Overview

The application is built with:

- *Framework*: TanStack Start
- *Routing*: TanStack Router (file-based routing)
- *Frontend*: React
- *Data Fetching & Caching*: React Query
- *Styling*: Tailwind CSS
- *Deployment Target*: DigitalOcean (self-managed infrastructure)

The project emphasizes:

- Explicit routing and predictable layouts
- Clear server/client boundaries
- Declarative data fetching
- Minimal runtime complexity

This repository is not a scaffold or tutorial example. It is structured intentionally as a production application.

## Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

This runs the app in development mode with hot reload enabled.

## Production Build

To generate a production build:

```bash
pnpm build
```

This outputs an optimized build suitable for deployment.

## Deployment

The application is intended to be deployed on a DigitalOcean droplet.

At the moment:
- Deployment is handled manually
- CI/CD is not yet configured

Planned improvements:
- Automated builds and deployments
- CI pipeline for linting and type-checking
- Optional containerization with Docker

---