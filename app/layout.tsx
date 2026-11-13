import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://myshop.sathishdev.in"),
  title: "MyShop • 100% Offline Grocery Billing & POS App for Android",
  description:
    "Turn your Android smartphone into a complete grocery billing machine. 100% offline POS, phone camera barcode scanning, Bluetooth thermal receipts, and 1-click WhatsApp customer khata reminders. 100% Free on Google Play Store.",
  keywords: [
    "grocery billing app",
    "offline billing app android",
    "kirana pos software",
    "free grocery pos app india",
    "bluetooth thermal printer billing app",
    "phone camera barcode scanner pos",
    "customer credit khata app",
    "maligai kadai billing app",
    "kirana billing software bangalore",
    "myshop pos"
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
    "operatingSystem": "Android",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
    },
    "installUrl": "https://play.google.com/store/apps/details?id=com.sathishdev.myshop",
    "image": "https://myshop.sathishdev.in/images/app-logo.png",
    "author": {
      "@type": "Organization",
      "name": "MyShop",
      "url": "https://myshop.sathishdev.in",
    },
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MyShop",
    "url": "https://myshop.sathishdev.in",
    "logo": "https://myshop.sathishdev.in/images/app-logo.png",
    "sameAs": [
      "https://play.google.com/store/apps/details?id=com.sathishdev.myshop",
      "https://www.instagram.com/myshop.billing/",
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between antialiased selection:bg-emerald-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
