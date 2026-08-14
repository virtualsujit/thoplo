# Thoplo

A clean and minimalist landing page for Thoplo - a company providing Software Development, Marketing, and Selling Services.

Deployed on Vercel at [thoplo.com](https://thoplo.com).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Branding

All brand-specific values (company name, contact email, hiring email, address) live in
[`lib/site.ts`](lib/site.ts). The `sabthok` branch serves sabthok.com.np from an identical
codebase and differs only in that file — keeping the difference in one place makes changes
easy to port between the two sites.

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
  LegalPage.tsx    shared shell for legal pages
lib/
  site.ts          brand configuration
```
