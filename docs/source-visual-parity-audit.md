# Source Visual Parity Audit

## Scope

- Source private repo path: `C:\Users\annis\Desktop\sdmk-jaksel`
- Target public repo path: `C:\Users\annis\Desktop\sdmksudinjs.github.io`
- Source branch recorded during preflight: `chore/public-static-site-extraction-plan`
- Target branch recorded during preflight: `main`
- Safety decision: `PUBLIC_SAFE_TO_PORT` for visual-only layout, colors, public logos, public-facing section hierarchy, and general public placeholder copy.

## Source files reviewed

| Source path | Classification | Notes |
| --- | --- | --- |
| `src/app/page.tsx` | `PORT_AS_STATIC_ONLY` | Public landing design, section hierarchy, colors, cards, and public-safe placeholders were reviewed. Dynamic imports, Supabase reads, admin link, and generated data logic were not ported. |
| `src/app/layout.tsx` | `PUBLIC_SAFE_TO_PORT` | Public metadata, Indonesian language setting, and font direction were reviewed. Next.js implementation was not copied. |
| `src/app/globals.css` | `PUBLIC_SAFE_TO_PORT` | Visual tokens, light background, emerald focus color, reveal/soft pulse motion, and reduced-motion behavior were ported conceptually as static CSS. |
| `public/assets/logo_dki.png` | `PUBLIC_SAFE_TO_PORT` | Official/public logo copied to target. |
| `public/assets/logo_jaksehat.png` | `PUBLIC_SAFE_TO_PORT` | Official/public logo copied to target. |
| `public/assets/logo_sudinkesjs.png` | `PUBLIC_SAFE_TO_PORT` | Official/public logo copied to target. |
| `public/assets/logo_facebook.webp` | `PUBLIC_SAFE_TO_PORT` | Public social icon copied to target. |
| `public/assets/logo_ig.png` | `PUBLIC_SAFE_TO_PORT` | Public social icon copied to target. |
| `public/assets/logo_youtube.png` | `PUBLIC_SAFE_TO_PORT` | Public social icon copied to target. |

## Files/content/assets ported

- Ported the public landing visual hierarchy into static `index.html`:
  - rounded glass-like header
  - official logo cluster
  - emerald/teal/sky hero gradient
  - hero headline and primary/secondary actions
  - quick contact card pattern
  - profile, services, organization, information, news, contact, and footer sections
  - rounded cards, soft shadows, emerald accents, and dark news band
- Ported CSS concepts into `public/styles.css`:
  - color tokens
  - layout container widths
  - rounded cards and shadows
  - focus states
  - reduced-motion handling
  - responsive single-column behavior
- Copied only public-safe logo/icon assets into `public/assets/`.

## Files not ported and reasons

| Source item | Classification | Reason |
| --- | --- | --- |
| `src/app/admin/**` | `DO_NOT_PORT_PRIVATE` | Admin panel code is private/internal and explicitly excluded. |
| `src/app/admin/sign-in/**` | `DO_NOT_PORT_PRIVATE` | Auth/login logic is explicitly excluded. |
| `src/lib/supabase/**` | `DO_NOT_PORT_PRIVATE` | Supabase client/server/env logic is explicitly excluded. |
| `supabase/migrations/**` | `DO_NOT_PORT_PRIVATE` | SQL migrations and database schema are explicitly excluded. |
| Route handlers/API/backend candidates | `DO_NOT_PORT_PRIVATE` | Backend/API behavior is explicitly excluded. |
| Dynamic query logic in `src/app/page.tsx` | `DO_NOT_PORT_PRIVATE` | Supabase reads and dynamic data transformation were not copied. |
| Admin navigation link in `src/app/page.tsx` | `DO_NOT_PORT_PRIVATE` | Replaced with safe static text: portal internal available only for authorized staff. |
| Fasyankes directory/contact details | `REVIEW_REQUIRED` | Any real facility directory or real contact data needs public-source verification before publication. |
| Employee/health-worker/patient identifiers or personal contact details | `DO_NOT_PORT_PRIVATE` | PII and operational data are excluded. |

## REVIEW_REQUIRED items

- Real fasyankes lists, addresses, and contact details if later added.
- Any content containing personal names or personal contacts.
- Any content containing NIK, NIP, STR, SIP, pasien/patient, pegawai, or individual health-worker records.
- Any internal document or file whose public status cannot be confirmed.

## Safety decision

`PUBLIC_SAFE_PASS` for this porting batch, provided the automated target safety scan reports no `BLOCKER`. The static target uses placeholders where content safety is uncertain and does not copy backend, auth, admin, Supabase, migration, or private data logic.
