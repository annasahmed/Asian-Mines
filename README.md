# Asian Mines and Minerals

Next.js site for Asian Mines and Minerals, a Pakistani chrome ore exporter selling mainly to China, and also to Oman and Europe.

## Run

```bash
npm run dev
```

Open http://localhost:3000.

## Your logo, films, and photographs

File names and folders are listed in `public/WHERE-TO-PUT-FILES.txt`.

Drop the logo in `public/brand/`. Drop product pictures in `public/media/products/`. The company film and the metallurgical film belong in `public/media/videos/`. Until a product photograph is there, that frame shows a catalog drawing.

## Company details

Email, phone, WhatsApp, and the Karachi address live in `src/lib/site.ts`.

Before launch, set `NEXT_PUBLIC_SITE_URL` to the live domain so the sitemap and sharing cards use it.
