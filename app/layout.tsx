import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyInstallBar from "@/components/MobileStickyInstallBar";
import FloatingSupportWidget from "@/components/FloatingSupportWidget";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#006c49",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://myshop.sathishdev.in"),
  title: "Free Grocery Billing App for Android — MyShop POS | 100% Offline",
  description:
    "Free grocery billing app for kirana, maligai kadai & provision stores. 100% offline Android POS, camera barcode scanner, Bluetooth thermal receipt printing, digital khata & WhatsApp reminders. Zero subscription. Download free on Play Store.",
  keywords: [
    "மளிகைக் கடை பில்லிங் ஆப்",
    "maligai kadai billing app",
    "grocery billing app",
    "kirana billing app free",
    "offline billing app android",
    "kirana pos software",
    "free grocery pos app india",
    "grocery billing app tamil",
    "tamil nadu grocery billing app",
    "free maligai pos software",
    "bluetooth thermal printer billing app",
    "phone camera barcode scanner pos",
    "customer credit khata app",
    "provision store billing app",
    "phone as a pos",
    "myshop pos tamil"
  ],
  authors: [{ name: "MyShop Team", url: "https://myshop.sathishdev.in" }],
  creator: "MyShop",
  publisher: "MyShop",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://myshop.sathishdev.in",
    siteName: "MyShop POS",
    title: "MyShop — Free Offline Grocery Billing & POS App for Android",
    description:
      "Save ₹34,000+ on bulky computers. Bill in 3 seconds, scan barcodes with your camera, print Bluetooth receipts, and manage customer credit on your Android phone.",
    images: [
      {
        url: "https://myshop.sathishdev.in/images/screen-dashboard.png",
        width: 1200,
        height: 630,
        alt: "MyShop Grocery Billing App Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyShop • 100% Offline Grocery Billing App",
    description:
      "Turn your phone into a smart billing machine. Free download on Google Play Store.",
    images: ["https://myshop.sathishdev.in/images/screen-dashboard.png"],
  },
  alternates: {
    canonical: "https://myshop.sathishdev.in",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/app-logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/app-logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "google9c6a341969d73685",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MyShop - Grocery Billing & POS",
    "operatingSystem": "Android 6.0+",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "GroceryBillingApp",
    "description": "Free offline grocery billing POS app for Android. Turn your phone into a billing machine for kirana, maligai kadai, and provision stores. Camera barcode scanning, Bluetooth thermal printing, digital khata, WhatsApp reminders.",
    "featureList": [
      "100% offline billing without internet",
      "Camera barcode scanner",
      "Bluetooth thermal receipt printing",
      "Digital customer khata and udhaar tracking",
      "WhatsApp payment reminders",
      "Real-time inventory management",
      "Low-stock alerts",
      "Daily sales and profit reports",
      "Cash and UPI payment modes",
      "Multiple shop support"
    ],
    "screenshot": [
      "https://myshop.sathishdev.in/images/screen-pos-billing.png",
      "https://myshop.sathishdev.in/images/screen-dashboard.png",
      "https://myshop.sathishdev.in/images/screen-inventory.png",
      "https://myshop.sathishdev.in/images/screen-khata.png",
      "https://myshop.sathishdev.in/images/screen-receipt.png"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
    },
    "installUrl": "https://play.google.com/store/apps/details?id=com.sathishdev.myshop",
    "downloadUrl": "https://play.google.com/store/apps/details?id=com.sathishdev.myshop",
    "image": "https://myshop.sathishdev.in/images/app-logo.png",
    "url": "https://myshop.sathishdev.in",
    "author": {
      "@type": "Person",
      "name": "Sathish G",
      "url": "https://www.sathishdev.in",
    },
    "creator": {
      "@type": "Person",
      "name": "Sathish G",
      "url": "https://www.sathishdev.in",
    },
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MyShop",
    "url": "https://myshop.sathishdev.in",
    "logo": "https://myshop.sathishdev.in/images/app-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-94882-50293",
      "contactType": "customer support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"]
    },
    "sameAs": [
      "https://www.sathishdev.in/work/myshop-pos",
      "https://www.sathishdev.in",
      "https://play.google.com/store/apps/details?id=com.sathishdev.myshop",
      "https://www.instagram.com/myshop.billing/",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MyShop POS",
    "url": "https://myshop.sathishdev.in",
    "description": "Free offline grocery billing POS app for Android",
    "inLanguage": ["en-IN", "ta"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://myshop.sathishdev.in/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does MyShop billing work 100% without internet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. MyShop is built offline-first using local SQLite database storage on your phone. You can create bills, scan product barcodes, print receipts, and manage customer credit completely offline without mobile data or Wi-Fi."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to buy a separate barcode scanner machine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. MyShop uses your Android phone's built-in camera as a high-speed barcode scanner. It detects standard grocery barcodes in 0.2 seconds and auto-adds items into the cart, saving you ₹3,000+ on external hardware."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any monthly subscription fees or hidden charges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zero. MyShop is 100% free to download and use on Android. There are no monthly subscriptions, no per-bill commission fees, and no renewal charges."
        }
      },
      {
        "@type": "Question",
        "name": "Which Bluetooth thermal printers are compatible with MyShop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MyShop supports all standard 58mm (2-inch) and 80mm (3-inch) ESC/POS Bluetooth thermal printers, including popular models from TVS, Everycom, NGX, POSIFLEX, and HOIN."
        }
      },
      {
        "@type": "Question",
        "name": "How does the WhatsApp Customer Khata feature work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When a customer buys on credit (udhaar), you can record it in their digital ledger. With a single tap on 'Remind', MyShop opens a pre-composed WhatsApp message with their pending balance ready to send."
        }
      },
      {
        "@type": "Question",
        "name": "Can I print my shop name and logo on the bill?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. In the Settings tab, you can enter your shop name, contact number, address, and GSTIN. You can also upload your shop logo to print on every receipt."
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Noto+Sans+Tamil:wght@500;600;700;800&family=Noto+Sans+Kannada:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="google-play-app" content="app-id=com.sathishdev.myshop" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between antialiased selection:bg-emerald-500 selection:text-white">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyInstallBar />
        <FloatingSupportWidget />
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLACEHOLDER', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
