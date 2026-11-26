import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Grocery POS Simulator — Try MyShop Billing App Online",
  description:
    "Try MyShop's grocery billing POS simulator online. Scan barcodes, add items, generate bills, and experience how the Android kirana billing app works — before you download.",
  keywords: [
    "grocery billing demo",
    "pos simulator online",
    "kirana billing app demo",
    "try grocery billing app",
    "myshop demo",
  ],
  alternates: {
    canonical: "https://myshop.sathishdev.in/demo",
  },
  openGraph: {
    title: "Live Grocery POS Simulator — MyShop",
    description:
      "Experience how MyShop turns your Android phone into a grocery billing machine. Try the live demo — no download required.",
    url: "https://myshop.sathishdev.in/demo",
    images: [
      {
        url: "https://myshop.sathishdev.in/images/screen-pos-billing.png",
        width: 700,
        height: 1500,
        alt: "MyShop Grocery Billing POS Demo",
      },
    ],
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://myshop.sathishdev.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Live POS Demo",
        "item": "https://myshop.sathishdev.in/demo",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
