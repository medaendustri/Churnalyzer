# Churnalyzer

Churnalyzer, şirketlerin ve ürünlerin başarısızlık hikayelerini analiz eden, Next.js ve Supabase/PostgreSQL tabanlı modern bir blog platformudur. Hem frontend hem admin paneli ile içerik yönetimi ve detaylı vaka incelemeleri sunar.

## Özellikler

- Next.js 14+ ile hızlı ve modern frontend
- Tailwind CSS ile responsive ve şık tasarım
- Supabase/PostgreSQL ile güvenli ve ölçeklenebilir veritabanı
- Prisma ORM ile kolay veri yönetimi
- Admin panel üzerinden şifreli giriş ve CRUD işlemleri
- Kategori ve post bazlı detaylı vaka analizleri
- Etkileşimli içerik bölümleri (timeline, chart, autopsy, vs.)
- Vercel üzerinde kolay deploy

## Kurulum

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/medaendustri/churnalyzer.git
   cd churnblog
   ```
2. Bağımlılıkları yükleyin:
   ```bash
   pnpm install
   ```
3. Environment variable'ları ayarlayın (`.env`):
   ```env
   DATABASE_URL=postgresql://kullanici:sifre@host:port/veritabani?sslmode=require
   NEXT_PUBLIC_SUPABASE_URL=https://projeid.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ADMIN_PASSWORD=...
   ```
4. Migration ve seed işlemlerini çalıştırın:
   ```bash
   pnpm exec prisma migrate deploy
   pnpm exec tsx prisma/seed.ts
   ```
5. Geliştirme sunucusunu başlatın:
   ```bash
   pnpm dev
   ```

## Kullanım

- Ana sayfada öne çıkan vaka ve son eklenenler
- Kategori bazlı filtreleme ve detay sayfaları
- Admin panelden yeni kategori ve post ekleme/düzenleme/silme
- Etkileşimli içerik ve görseller

## Deploy

- Vercel ile tek tıkla deploy
- Supabase/PostgreSQL ile canlı veritabanı
- Cloudflare ile CDN ve cache desteği (isteğe bağlı)

## Katkı

Pull request ve issue açarak katkıda bulunabilirsiniz.

## Lisans

MIT
