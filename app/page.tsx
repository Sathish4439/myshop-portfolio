import Image from "next/image";
import Link from "next/link";
import { Download, CheckCircle2, ShieldCheck, Sparkles, QrCode, ArrowRight, Zap, Star } from "lucide-react";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import CostCalculator from "@/components/CostCalculator";
import PrinterSpotlight from "@/components/PrinterSpotlight";
import FaqSection from "@/components/FaqSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust & Social Proof Bar */}
      <section className="bg-slate-900 border-y border-slate-800 py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">100%</div>
              <div className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">
                Offline Resilience
              </div>
              <div className="text-[11px] text-slate-500 font-medium">No Wi-Fi or data required</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">₹0</div>
              <div className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">
                Hardware Investment
              </div>
              <div className="text-[11px] text-slate-500 font-medium">Use any Android phone</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">3 Sec</div>
              <div className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">
                Fast Checkout
              </div>
              <div className="text-[11px] text-slate-500 font-medium">Peak rush crowd handler</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 flex items-center justify-center gap-1">
                <span>4.8</span>
                <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">
                Merchant Rating
              </div>
              <div className="text-[11px] text-slate-500 font-medium">Verified grocery owners</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Deep Dive */}
      <FeaturesGrid />

      {/* 4. Cost Comparison Calculator */}
      <CostCalculator />

      {/* 5. Bluetooth Printer Compatibility Spotlight */}
      <PrinterSpotlight />

      {/* 6. Frequently Asked Questions */}
      <FaqSection />

      {/* 7. Final High-Impact Conversion CTA */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-extrabold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> Ready for your store today
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Stop Writing Paper Bills. <br />
                <span className="text-emerald-400">Start Billing on Your Phone in 2 Minutes!</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-medium">
                Join thousands of modern kirana, grocery, and provision shop owners across India who save ₹34,000+ and speed up customer billing with MyShop.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="https://play.google.com/store/apps/details?id=com.sathishdev.myshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base shadow-xl flex items-center justify-center gap-3 transition-all hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Free on Google Play</span>
                </a>
                <Link
                  href="/demo"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-base flex items-center justify-center gap-2 transition-all"
                >
                  <span>Try Web POS Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Desktop QR Code Block */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="p-6 rounded-3xl bg-white text-slate-900 shadow-2xl text-center max-w-xs w-full">
                <div className="w-44 h-44 mx-auto relative bg-slate-50 p-2 rounded-2xl border border-slate-200">
                  <Image
                    src="/images/playstore-qr.png"
                    alt="Scan to download MyShop on Android"
                    width={180}
                    height={180}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xs font-black uppercase text-slate-500 tracking-wider">
                    Scan With Phone Camera
                  </p>
                  <p className="text-sm font-extrabold text-slate-900 mt-1">
                    Instant Play Store Direct Link
                  </p>
                  <p className="text-[11px] text-emerald-700 font-bold mt-1">
                    100% Free • No Subscription
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Sticky Mobile Bottom Install Bar */}
      <aside aria-label="Quick mobile app install" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/app-logo.png"
              alt="MyShop"
              width={36}
              height={36}
              className="rounded-xl shadow"
            />
            <div>
              <p className="text-xs font-black text-white leading-tight">MyShop POS</p>
              <p className="text-[10px] text-emerald-400 font-bold">100% Free on Play Store</p>
            </div>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.sathishdev.myshop"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Install App</span>
          </a>
        </div>
      </aside>
    </>
  );
}

