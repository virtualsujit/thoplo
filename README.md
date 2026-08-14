# SABTHOK

A clean and minimalist landing page for SABTHOK - a company providing Software Development, Marketing, and Selling Services.

Deployed on Vercel at [sabthok.com.np](https://sabthok.com.np).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Branding

All brand-specific values (company name, contact email, hiring email, address) live in
[`lib/site.ts`](lib/site.ts). This branch is otherwise identical to `main`, which serves
the Thoplo site — keeping the difference in one file makes changes easy to port between them.

## Structure

```
app/
  layout.tsx       root layout + metadata
  page.tsx         landing page (hero, services, careers)
  privacy/page.tsx Privacy Policy
  terms/page.tsx   Terms of Service
components/
  Navbar.tsx
  Footer.tsx
lib/
  site.ts          brand configuration
```
