import Image from "next/image";
import { Zap, ScanBarcode, Printer, Users, Package, BarChart3, CheckCircle2 } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      tag: "FEATURE 01",
      title: "100% Offline POS & 3-Sec Checkout",
      tamilTitle: "மழை பெய்தாலும் பில்லிங் ஓடும்!",
      description:
        "Never get stuck when internet or Wi-Fi drops during the evening customer rush. All products, prices, and bills are saved locally on your phone in high-speed SQLite.",
      bullets: ["3-Second fast checkout", "Hold & Resume busy carts", "Cash & UPI payment modes"],
      image: "/images/screen-pos-billing.png",
      accent: "border-emerald-200 bg-emerald-50/40",
    },
    {
      icon: <ScanBarcode className="w-6 h-6 text-cyan-600" />,
      tag: "FEATURE 02",
      title: "Phone Camera Barcode Scanner",
      tamilTitle: "தனி ஸ்கேனர் மெஷின் வாங்க ₹3,000 செலவு வேண்டாம்!",
      description:
        "Your phone camera functions as an ultra-fast laser barcode gun. Simply point your camera at any grocery packet or oil tin — it detects and adds to cart in 0.2 seconds.",
      bullets: ["Zero hardware cost", "Works in dim light conditions", "Auto-adds item and unit price"],
      image: "/images/screen-pos-billing.png",
      accent: "border-cyan-200 bg-cyan-50/40",
    },
    {
      icon: <Printer className="w-6 h-6 text-purple-600" />,
      tag: "FEATURE 03",
      title: "Bluetooth Thermal Bill Printing",
      tamilTitle: "கஸ்டமருக்கு கச்சிதமான பிரிண்டர் பில்!",
      description:
        "Print professional supermarket-quality receipts wirelessly in 1 second. Pair with any portable 58mm (2-inch) or 80mm (3-inch) Bluetooth thermal printer machine.",
      bullets: ["Print shop name, logo & phone", "Itemized GST/tax summary", "Custom greeting footer"],
      image: "/images/screen-receipt.png",
      accent: "border-purple-200 bg-purple-50/40",
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      tag: "FEATURE 04",
      title: "Digital Khata & WhatsApp Reminders",
      tamilTitle: "கடன் பாக்கி வசூல் இனி டென்ஷன் இல்லாமல் ரொம்ப ஈஸி!",
      description:
        "Stop writing customer credit in paper notebooks with torn pages. Track customer-wise balances and send polite, professional WhatsApp reminders in one single click.",
      bullets: ["Individual digital ledgers", "1-Click WhatsApp payment link", "Zero lost customer dues"],
      image: "/images/screen-khata.png",
      accent: "border-emerald-200 bg-emerald-50/40",
    },
    {
      icon: <Package className="w-6 h-6 text-amber-600" />,
      tag: "FEATURE 05",
      title: "Real-Time Stock & Low-Stock Alerts",
      tamilTitle: "பொருட்கள் தீர்ந்துபோகும் முன் எச்சரிக்கை!",
      description:
        "Every completed bill automatically deducts your stock. Get instant notifications before rice, dal, or oil packets run out so you never lose a customer to competitors.",
      bullets: ["Live inventory valuation", "Automated low-stock warnings", "Categorized product catalog"],
      image: "/images/screen-inventory.png",
      accent: "border-amber-200 bg-amber-50/40",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      tag: "FEATURE 06",
      title: "Today's Summary & Profit Dashboard",
      tamilTitle: "இன்றைய மொத்த விற்பனை & லாபம் உடனே தெரியும்!",
      description:
        "Know your exact store numbers at the end of each day. Track total daily sales, cash collected, UPI payments, expenses, and estimated gross profit at a glance.",
      bullets: ["Daily sales & expense tally", "Cash vs UPI payment splits", "Zero complicated math"],
      image: "/images/screen-dashboard.png",
      accent: "border-blue-200 bg-blue-50/40",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 font-extrabold text-xs uppercase tracking-wider mb-4 border border-emerald-300">
            ENGINEERED FOR RETAIL EFFICIENCY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Everything Your Grocery Shop Needs to Run Smarter
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-4">
            Designed specifically for independent Indian grocery, kirana, provision, and supermarket counters. No computer knowledge required.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-7 border-2 ${feat.accent} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white shadow-sm border border-slate-200">
                    {feat.icon}
                  </div>
                  <span className="text-[11px] font-black tracking-widest text-slate-400 font-mono">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                  {feat.title}
                </h3>
                <div className="tamil text-sm font-bold text-emerald-700 mt-1">
                  {feat.tamilTitle}
                </div>
                <p className="text-sm text-slate-600 font-medium mt-3 leading-relaxed">
                  {feat.description}
                </p>

                <ul className="mt-5 space-y-2 text-xs font-bold text-slate-700">
                  {feat.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup Preview */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex justify-center">
                <div className="w-44 drop-shadow-md">
                  <Image
                    src={feat.image}
                    alt={feat.title}
                    width={350}
                    height={750}
                    className="w-full h-auto object-contain block rounded-2xl"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

