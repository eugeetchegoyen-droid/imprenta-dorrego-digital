---
name: post-instagram
description: Generates 5 on-brand Instagram post images (PNG) for Imprenta Dorrego using Lovable's native image models, saves them only in the code repository under social/instagram/, and tells the user where to find and download them. Use when the user asks for "Post Instagram", Instagram posts, social media content or piezas para redes.
---

# Post Instagram — Imprenta Dorrego

Create exactly **5 PNG pieces** for Instagram, on brand, and save them **only in the code repository** (never in Files / `/mnt/documents`, never in `src/assets`).

## Brand identity (always apply)
- Palette: deep onyx black (#0B0A09), graphite (#2A2826), warm paper off-white (#FAF8F4), subtle metallic gold accent (#D4A94A, soft gold #E8D3A3). Dark tech backgrounds, gold as a restrained accent. No purple/indigo, no neon.
- Typography feel: clean modern sans-serif (Inter-like), bold weights, never italic, never serif.
- Tone: sophisticated, editorial, premium craft + technology. Spanish (Argentina, voseo): "Cotizá", "Imprimimos", etc.
- Key messages to rotate: Xerox Iridesse (metallic/special inks: gold, silver, clear, white), Web Approval (aprobá en 1 clic), encuadernación PUR, impresión por demanda ("Sin mínimos de impresión", "Imprimimos la cantidad exacta que necesitás", "Tirada chica o grande, misma calidad"), +70 años de historia, Av Dorrego 1102, Buenos Aires. Never say "1 ejemplar".
- Logo: the official logo lives at `src/assets/dorrego-logo.png.asset.json` (pointer). Include it in every piece.

## Workflow
1. Plan 5 distinct pieces (one per message above, varied compositions: macro photo of metallic print, book with PUR binding, quote/typographic piece, press detail, CTA piece). Short headline (max ~6 words) per piece.
2. For each piece, call `imagegen--generate_image` with `model: "premium"` (text legibility), `width: 1080`, `height: 1350` (4:5 feed), describing the brand palette, headline text in quotes, photographic style, and leaving space bottom-right for the logo. Save to `/tmp/post-instagram/base-N.png`... note: the tool prefers .jpg for opaque images; use `.jpg` for the base.
3. Add the real logo: call `imagegen--edit_image` with `image_paths: ["/tmp/post-instagram/base-N.jpg", "src/assets/dorrego-logo.png.asset.json"]`, prompt to place the logo small and crisp in the bottom-right corner without altering the rest, `target_path: "social/instagram/<YYYY-MM-DD>/post-0N-<slug>.png"`.
4. Verify each image with `code--view` (legible text, logo present, brand colors, no typos). Regenerate any failing piece.
5. Ensure all 5 files are PNG (`file social/instagram/<date>/*`); convert with `python3` PIL if needed. Delete `/tmp/post-instagram`.
6. Do not import these images into the app and do not copy them to `/mnt/documents`.

## Final message to the user (Spanish)
Tell them the 5 piezas are ready, list each file name with its headline, and explain how to download: open the code view in the editor, go to the folder `social/instagram/<fecha>/`, select each image and download it (or download the repository via GitHub). Keep it short.
