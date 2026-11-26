import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  Zap,
  ScanBarcode,
  Printer,
  Users,
  Package,
  BarChart3,
  CheckCircle2,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Maligai Kadai & Kirana Billing App for Android — MyShop POS | 100% Offline",
  description:
    "Best free maligai kadai & kirana billing app for Android. 100% offline POS, phone camera barcode scanner, Bluetooth thermal printer support, digital khata & WhatsApp reminders. No subscription. Free on Google Play.",
  keywords: [
    "maligai kadai billing app",
    "kirana billing app free",
    "kirana billing app android",
    "free maligai pos software",
    "kirana billing software offline",
    "grocery billing app tamil nadu",
    "kirana shop billing app",
    "free billing software maligai store",
    "offline kirana billing android",
    "provision store billing app",
    "shop billing software tamil"
  ],
  alternates: {
    canonical: "https://myshop.sathishdev.in/kirana-billing-app",
  },
  openGraph: {
    title: "Free Maligai Kadai & Kirana Billing App for Android — MyShop POS",
    description:
      "Turn your Android phone into a maligai kadai & kirana billing machine. 100% offline, camera barcode scanning, Bluetooth receipts, digital khata. Zero subscription. Free forever.",
    url: "https://myshop.sathishdev.in/kirana-billing-app",
    images: [
      {
        url: "https://myshop.sathishdev.in/images/screen-pos-billing.png",
        width: 700,
        height: 1500,
        alt: "MyShop Maligai Kadai & Kirana Billing App POS Screen",
      },
    ],
  },
};

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sathishdev.myshop";

const features = [
  {
    icon: <Zap className="w-5 h-5 text-emerald-600" />,
    title: "100% Offline Billing",
    desc: "Bill customers even when internet fails. All data stored locally on your phone.",
  },
  {
    icon: <ScanBarcode className="w-5 h-5 text-cyan-600" />,
    title: "Camera Barcode Scanner",
    desc: "Use your phone camera to scan grocery barcodes instantly. No external scanner needed.",
  },
  {
    icon: <Printer className="w-5 h-5 text-purple-600" />,
    title: "Bluetooth Thermal Receipts",
    desc: "Print professional receipts wirelessly via any 58mm or 80mm Bluetooth printer.",
  },
  {
    icon: <Users className="w-5 h-5 text-emerald-600" />,
    title: "Digital Khata & Udhaar",
    desc: "Track customer credit digitally. Send WhatsApp payment reminders in one tap.",
  },
  {
    icon: <Package className="w-5 h-5 text-amber-600" />,
    title: "Inventory & Stock Alerts",
    desc: "Get automatic alerts before products run out. Never lose a sale to empty shelves.",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    title: "Daily Sales Reports",
    desc: "View today's total sales, cash collected, UPI payments, and profit at a glance.",
  },
];

const whoFor = [
  "Kirana shop owners",
  "Grocery store owners",
  "Maligai kadai owners",
  "Provision store owners",
  "Mini supermarket owners",
  "Independent retailers",
  "Small shop owners",
];

const faqs = [
  {
    q: "Is MyShop kirana billing app really free?",
    a: "Yes, 100% free. No monthly subscription, no per-bill fees, no hidden charges. Download once from Google Play and use forever.",
  },
  {
    q: "Does the kirana billing app work without internet?",
    a: "Yes. MyShop works completely offline. All your products, bills, and customer data are stored on your phone using SQLite. No Wi-Fi or mobile data required.",
  },
  {
    q: "Can I use this billing app on any Android phone?",
    a: "Yes. MyShop works on any Android 6.0+ smartphone. No special hardware required — just your existing phone.",
  },
  {
    q: "Does this app work for maligai kadai and provision stores?",
    a: "Absolutely. MyShop is designed for all types of small retail shops including kirana stores, maligai kadai, provision stores, and mini supermarkets across India — especially Tamil Nadu.",
  },
];

export default function KiranaBillingAppPage() {
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
        "name": "Kirana Billing App",
        "item": "https://myshop.sathishdev.in/kirana-billing-app",
      },
    ],
  };

  const pageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageFaqSchema) }}
      />

      <div className="bg-white">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <Link href="/" className="hover:text-emerald-700 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-800">Kirana Billing App</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="pt-10 pb-16 md:py-20 bg-gradient-to-b from-emerald-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 font-extrabold text-xs uppercase tracking-wider mb-5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Free Maligai Kadai &amp; Kirana Billing App
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Best Free{" "}
                  <span className="text-emerald-700">Maligai Kadai &amp; Kirana Billing App</span>{" "}
                  for Android — 100% Offline
                </h1>

                <p className="text-base sm:text-xl text-slate-600 font-medium mt-5 leading-relaxed">
                  MyShop turns your Android phone into a complete grocery billing machine.
                  Designed for independent <strong>மளிகை கடை (Maligai Kadai)</strong>, kirana, and provision stores.
                  Bill customers in 3 seconds, scan barcodes with your camera, print Bluetooth receipts,
                  and track customer udhaar — all without internet. <strong>Completely free. No subscription.</strong>
                </p>

                {/* Tamil subtitle */}
                <p className="tamil text-base font-bold text-emerald-800 mt-3 p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  🛒 உங்கள் மளிகை கடை &amp; கிரானா ஸ்டோருக்கு சிறந்த இலவச பில்லிங் ஆப்! இண்டர்நெட் இல்லாமலும் பில் போடலாம்.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-base shadow-xl flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5"
                  >
                    <Download className="w-5 h-5 text-emerald-400" />
                    <span>Download Free on Google Play</span>
                  </a>
                  <Link
                    href="/demo"
                    className="px-6 py-4 rounded-2xl bg-white border-2 border-emerald-300 text-emerald-800 font-extrabold text-base flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all"
                  >
                    <span>Try Live Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm font-bold text-slate-600">
                  <span className="flex items-center gap-1.5 text-emerald-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Zero Subscription
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-800">
                    <Zap className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                    100% Offline
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-800">
                    <Smartphone className="w-4 h-4 text-emerald-600" />
                    Android Only
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full max-w-[280px] drop-shadow-2xl">
                  <Image
                    src="/images/screen-pos-billing.png"
                    alt="MyShop Kirana Billing App POS Quick Billing Screen"
                    width={700}
                    height={1500}
                    className="w-full h-auto object-contain block"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Is This For */}
        <section className="py-14 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Who Is This Kirana Billing App For?
            </h2>
            <p className="text-slate-400 font-medium mb-8 max-w-2xl mx-auto">
              MyShop is designed specifically for independent retail shop owners
              across India, especially in Tamil Nadu.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {whoFor.map((who) => (
                <span
                  key={who}
                  className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm font-semibold text-slate-200"
                >
                  {who}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Everything a Kirana Shop Needs
              </h2>
              <p className="text-slate-600 font-medium mt-3 text-base sm:text-lg max-w-2xl mx-auto">
                All the billing, inventory, and customer management features —
                in one free Android app.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat) => (
                <div
                  key={feat.title}
                  className="p-6 rounded-2xl border-2 border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all"
                >
                  <div className="p-3 rounded-xl bg-slate-50 w-fit mb-4 border border-slate-200">
                    {feat.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Free Matters */}
        <section className="py-16 bg-emerald-50 border-y border-emerald-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-8">
              Why MyShop is the Best Free Kirana Billing App in India
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  point: "No computer needed",
                  detail:
                    "Use your existing Android phone. No ₹30,000 desktop computer purchase.",
                },
                {
                  point: "Works in power cuts",
                  detail:
                    "100% offline. Bills customers even when internet goes down.",
                },
                {
                  point: "No monthly fees",
                  detail:
                    "Unlike Vyapar or myBillBook, MyShop has zero subscription charges.",
                },
                {
                  point: "Tamil Nadu first",
                  detail:
                    "Built for maligai kadai, kirana, provision stores in Tamil Nadu and India.",
                },
                {
                  point: "No external scanner needed",
                  detail:
                    "Your phone camera scans grocery barcodes. Saves ₹3,000+ on hardware.",
                },
                {
                  point: "Print receipts wirelessly",
                  detail:
                    "Pair with any Bluetooth thermal printer. No cables, no drivers.",
                },
              ].map((item) => (
                <div
                  key={item.point}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-emerald-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">
                      {item.point}
                    </div>
                    <div className="text-xs font-medium text-slate-600 mt-0.5">
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="p-5 rounded-2xl border-2 border-slate-200 bg-slate-50"
                >
                  <h3 className="font-extrabold text-slate-900 text-base mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-900 to-slate-900 text-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
              Download the Best Free Kirana Billing App Today
            </h2>
            <p className="text-emerald-200 font-medium mb-7 text-base">
              Join thousands of kirana shop owners across India. 100% free,
              100% offline. Works on any Android phone.
            </p>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-slate-950 font-extrabold text-base shadow-xl hover:bg-emerald-50 transition-all"
            >
              <Download className="w-5 h-5 text-emerald-700" />
              <span>Free Download on Google Play</span>
            </a>
            <div className="mt-5 flex justify-center gap-6 text-xs text-emerald-300 font-semibold">
              <span>✓ 100% Free</span>
              <span>✓ No Registration</span>
              <span>✓ Instant Setup</span>
            </div>
            <p className="mt-6 text-sm text-slate-400 font-medium">
              Also explore:{" "}
              <Link
                href="/hardware"
                className="text-emerald-400 hover:text-emerald-300 underline"
              >
                Compatible Bluetooth Printer Guide
              </Link>{" "}
              •{" "}
              <Link
                href="/demo"
                className="text-emerald-400 hover:text-emerald-300 underline"
              >
                Try Live POS Demo
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
