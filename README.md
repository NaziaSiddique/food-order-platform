# Food Order Platform

A multi-tenant food ordering system designed for restaurants, takeaways, and food vendors.

## Project Goals

- Allow each customer (restaurant) to have a unique frontend (design + domain)
- Centralized backend (plugin-like API) that powers all clients
- Support for multi-tenancy with tenant-specific data
- Mobile-responsive frontend using modern UI (Next.js + TailwindCSS)
- Real-time order updates and backend receipt integration
- Built-in support for future features like reporting, sales, analytics, and accounting

## Tech Stack

| Layer          | Tech                |
|----------------|---------------------|
| Frontend       | Next.js, TailwindCSS, shadcn/ui |
| Backend        | FastAPI or NestJS (TBD) |
| Database       | PostgreSQL          |
| Hosting        | Vercel + Render/Railway or AWS (TBD) |
| Auth           | OAuth2 + JWT        |

## Project Structure

