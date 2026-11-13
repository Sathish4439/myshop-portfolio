# MyShop — Official Website & POS Portfolio (`myshop.sathishdev.in`)

Production marketing, lead-generation, and merchant portfolio website for **MyShop – Grocery Billing & POS** (`com.sathishdev.myshop`), the 100% offline grocery billing and Android POS application for independent Indian retail merchants.

- **Live Production URL:** [https://myshop.sathishdev.in](https://myshop.sathishdev.in)
- **Backend API:** [https://api-myshop.sathishdev.in](https://api-myshop.sathishdev.in)
- **Google Play Store:** [Download MyShop on Google Play](https://play.google.com/store/apps/details?id=com.sathishdev.myshop)

---

## 🚀 Key Features

1. **High-Converting Landing Page (`/`)**:
   - 3D phone mockup showcasing the Flutter app in action.
   - Camera-scannable Google Play QR code for instant desktop-to-mobile conversion.
   - Interactive Year-1 Cost Calculator comparing MyShop (₹0) vs. traditional desktop POS (₹34,000+).
   - 6 Core Retail Modules breakdown (Offline POS, Camera Barcode Gun, Bluetooth Receipts, Khata & WhatsApp, Stock Alerts, Today's Summary).
   - Merchant FAQ answering offline reliability, scanner costs, and printer setup.

2. **Hardware Compatibility Guide (`/hardware`)**:
   - Tested & certified 58mm (2-inch) and 80mm (3-inch) ESC/POS Bluetooth printers (TVS RP 3150, Everycom EC-58, NGX, POSIFLEX, HOIN).
   - 58mm vs. 80mm paper width buyer guide with cost breakdown.
   - 4-step 3-minute Bluetooth pairing walkthrough.

3. **Interactive Web POS Simulator (`/demo`)**:
   - In-browser sandbox where store owners can experience 3-second billing before downloading.
   - Simulate camera barcode scanning with sound and animated detection.
   - Add/remove items, toggle quantities, switch payment modes (Cash, UPI QR, Khata).
   - Generate photorealistic 80mm thermal receipts and preview WhatsApp customer credit messages.

4. **Google Play Developer Console Compliance**:
   - **Privacy Policy (`/privacy`)**: Discloses 100% offline SQLite storage, camera barcode use, Bluetooth printer connectivity, and zero third-party data tracking.
   - **Terms of Service (`/terms`)**: Retail merchant software license and tax compliance responsibilities.
   - **Account & Data Deletion (`/account-deletion`)**: Web form allowing merchants to request permanent data deletion per Google Play policy.

5. **Technical & Programmatic SEO**:
   - Schema.org structured data (`SoftwareApplication` with 4.8★ aggregate rating & `Organization`).
   - OpenGraph & Twitter Card high-resolution previews (`screen-dashboard.png`).
   - Dynamic XML Sitemap (`/sitemap.xml`) generated via `app/sitemap.ts`.
   - `robots.txt` configuration via `app/robots.ts`.
   - Android App Links (`/.well-known/assetlinks.json`) with package `com.sathishdev.myshop`.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS with Material 3 Emerald (`#006c49`, `#10b981`) and Dark Slate palette
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans & Noto Sans Indic
- **Deployment:** Render / Vercel Web Service Ready

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/sathish-kumar/myshop-website.git
cd myshop-website

# Install dependencies
npm install

# Run development server on port 3000
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

```bash
# Verify TypeScript & Next.js production build
npm run build

# Start production server
npm start
```

---

## 🚢 Render Deployment

This repository includes a production-ready `render.yaml` blueprint. To deploy on Render:
1. Link this repository in Render Dashboard.
2. Select **Web Service** or use **New Blueprint Instance**.
3. Build Command: `npm install && npm run build`
4. Start Command: `npm start`
5. Connect your custom domain: `myshop.sathishdev.in` with DNS CNAME records.

