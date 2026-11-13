import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Printer, Bluetooth, CheckCircle2, ShieldCheck, Download, Smartphone, HelpCircle, ArrowRight, Zap, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Compatible Bluetooth Thermal Printers (58mm & 80mm) • MyShop POS",
  description:
    "Official hardware compatibility guide for MyShop grocery billing app. Tested with TVS, Everycom, NGX, POSIFLEX, and HOIN 58mm & 80mm ESC/POS Bluetooth printers.",
  keywords: [
    "bluetooth thermal printer billing app",
    "58mm thermal printer grocery",
    "80mm pos receipt printer android",
    "tvs rp 3150 bluetooth billing",
    "everycom ec 58 billing setup",
    "ngx bluetooth printer kirana",
    "esc pos printer android setup"
  ],
  alternates: {
    canonical: "https://myshop.sathishdev.in/hardware",
  },
};

export default function HardwarePage() {
  const printers = [
    {
      name: "TVS RP 3150 / Star Series",
      width: "80mm (3-Inch)",
      tag: "Best for Busy Supermarkets",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      speed: "250 mm/sec",
      connectivity: "Bluetooth + USB + Serial",
      tested: "100% Plug & Play Verified",
      features: [
        "Crisp store logo & GST tax summary",
        "Automatic paper cutter support",
        "Supports 100+ items per invoice",
        "High-volume daily counter use",
      ],
      priceRange: "₹ 5,500 – ₹ 7,500",
    },
    {
      name: "Everycom EC-58 / EC-58Plus",
      width: "58mm (2-Inch)",
      tag: "Most Popular Budget Printer",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      speed: "90 mm/sec",
      connectivity: "Bluetooth 4.0 / USB",
      tested: "100% Plug & Play Verified",
      features: [
        "Ultra-compact pocket design",
        "Very low paper roll cost (~₹12/roll)",
        "Perfect for small kiranas & fruit stalls",
        "Rechargeable battery options available",
      ],
      priceRange: "₹ 1,800 – ₹ 2,800",
    },
    {
      name: "NGX BTP-324 / N-POS Series",
      width: "58mm & 80mm",
      tag: "Rugged Industrial Quality",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      speed: "120 mm/sec",
      connectivity: "Bluetooth / Wireless",
      tested: "100% Plug & Play Verified",
      features: [
        "Heavy-duty dust & heat resistant body",
        "Large paper capacity roll",
        "Long battery life for power cuts",
        "Widely serviced across Tier-2/3 India",
      ],
      priceRange: "₹ 3,500 – ₹ 5,200",
    },
    {
      name: "HOIN / POSIFLEX / Generic ESC/POS",
      width: "58mm & 80mm Universal",
      tag: "Universal ESC/POS Protocol",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
      speed: "90 – 200 mm/sec",
      connectivity: "Bluetooth Standard",
      tested: "Universal ESC/POS Standard",
      features: [
        "Works with 99% of Amazon & Flipkart thermal printers",
        "Standard ESC/POS byte streaming",
        "Instant pairing via Android Bluetooth Settings",
        "Zero driver installation required",
      ],
      priceRange: "₹ 1,500 – ₹ 4,000",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Power On Printer & Pair via Android",
      desc: "Turn on your Bluetooth thermal printer. On your Android phone, go to Settings → Bluetooth, scan for devices, and pair with the printer (Default PIN is usually 0000 or 1234).",
    },
    {
      num: "02",
      title: "Open MyShop Settings",
      desc: "In MyShop app, tap Settings → Printer Configuration. Choose your paper width: 58mm (2-inch) or 80mm (3-inch).",
    },
    {
      num: "03",
      title: "Select Paired Device & Test",
      desc: "Select your paired printer name from the dropdown list. Tap 'Print Test Slip'. The printer will buzz and print a sample receipt in 1 second!",
    },
    {
      num: "04",
      title: "Ready for Auto-Printing",
      desc: "Turn on 'Auto-print receipt after checkout'. Every time you tap Complete Bill, your paper receipt prints instantly without manual taps.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <span>/</span>
          <span className="text-slate-900">Hardware Compatibility</span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-extrabold text-xs uppercase tracking-wider mb-4">
            <Printer className="w-4 h-4 text-emerald-700" />
            Zero Proprietary Lock-In
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Bluetooth Thermal Printers Compatible with MyShop POS
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-4 leading-relaxed">
            MyShop works with <span className="text-emerald-700 font-bold">any standard ESC/POS Bluetooth thermal printer</span> available on Amazon, Flipkart, or your local electronics market. No expensive proprietary hardware required.
          </p>
        </div>

        {/* Printers Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {printers.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider border ${p.badgeColor}`}>
                      {p.tag}
                    </span>
                    <h2 className="text-2xl font-black text-slate-900 mt-3">{p.name}</h2>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                      Paper Width: <span className="text-emerald-700">{p.width}</span>
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700">
                    <Printer className="w-6 h-6" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-2xl text-xs font-bold border border-slate-100">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Print Speed</span>
                    <span className="text-slate-800 font-extrabold">{p.speed}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Interface</span>
                    <span className="text-slate-800 font-extrabold">{p.connectivity}</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-semibold text-slate-600">
                  {p.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Approx Market Price</span>
                  <span className="text-lg font-black text-slate-900">{p.priceRange}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-extrabold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {p.tested}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 58mm vs 80mm Comparison Guide */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md mb-20">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              58mm vs 80mm: Which Paper Width Should You Buy?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium mt-2">
              Both roll sizes are supported in MyShop settings. Here is how to choose the right one for your retail store:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-slate-900 font-black text-lg">
                <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center text-xs">58</span>
                <span>58mm (2-Inch) Rolls</span>
              </div>
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mt-1">Recommended for: Kiranas, Veg Stalls & Bakeries</p>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm font-semibold text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Cheapest paper cost (~₹12 to ₹15 per roll)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Printers are ultra-portable and fit in your hand</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Standard 32 characters per line fits item name, qty & amount</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-slate-900 font-black text-lg">
                <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs">80</span>
                <span>80mm (3-Inch) Rolls</span>
              </div>
              <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider mt-1">Recommended for: Supermarkets & Provision Marts</p>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm font-semibold text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Supermarket-grade wide receipt format with full product descriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Detailed GST breakdown table (CGST + SGST columns)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Supports auto-cutter for rapid 1-second bill separation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4-Step Setup Guide */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              How to Connect Your Printer in 3 Minutes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium mt-2">
              No technical expertise needed. Just pair via Bluetooth and start billing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm relative">
                <span className="text-3xl font-black text-emerald-600/30 block mb-3">{st.num}</span>
                <h3 className="text-base font-black text-slate-900 mb-2">{st.title}</h3>
                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-emerald-900 rounded-3xl p-8 sm:p-12 text-white text-center flex flex-col items-center justify-center">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Ready to Print Professional Receipts on Your Android Phone?
          </h2>
          <p className="text-emerald-200 text-sm sm:text-base max-w-xl font-medium mt-2">
            Download MyShop today. It works 100% offline with any Bluetooth printer.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.sathishdev.myshop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-2xl bg-white text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-emerald-100 transition-all"
            >
              <Download className="w-4 h-4 text-emerald-700" />
              <span>Download Free Android App</span>
            </a>
            <Link
              href="/demo"
              className="px-7 py-3.5 rounded-2xl bg-emerald-800 text-white font-bold text-sm flex items-center justify-center gap-2 border border-emerald-700 hover:bg-emerald-700 transition-all"
            >
              <span>Test Receipt Simulator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

