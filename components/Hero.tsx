import Image from "next/image";
import Link from "next/link";
import { Zap, ShieldCheck, QrCode, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-24 ambient-emerald">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Prop & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-extrabold text-[11px] sm:text-sm uppercase tracking-wider mb-6 max-w-full mx-auto lg:mx-0 shadow-sm text-center">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span>100% OFFLINE GROCERY BILLING &amp; POS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.18] sm:leading-[1.15]">
              Turn Your Android Phone into a Smart{" "}
              <span className="text-emerald-700 italic relative inline-block">
                Billing Machine!
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-500" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-600 font-medium mt-4 sm:mt-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Why spend ₹25,000 on bulky computers? MyShop gives independent grocery, kirana, and provision stores a lightning-fast 3-second billing POS, camera barcode scanner, Bluetooth receipts, and WhatsApp khata reminders.
            </p>

            {/* Action Buttons & Desktop QR Code */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              
              {/* Direct Play Store Link */}
              <a
                href="https://play.google.com/store/apps/details?id=com.sathishdev.myshop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-base shadow-xl flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6 fill-current text-emerald-400" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186A2.32 2.32 0 013 20.575V3.425c0-.66.23-1.248.609-1.611zm11.233 11.233L6.096 21.792l9.878-5.702-1.132-3.043zm0-2.094L14.842 7.91 4.964 2.208l9.878 8.745zm1.536 1.047l3.87 2.234a1.867 1.867 0 000-3.235l-3.87 2.234z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-slate-400 leading-none">Get it on</div>
                  <div className="text-lg font-black leading-tight">Google Play</div>
                </div>
              </a>

              {/* Try Simulator */}
              <Link
                href="/demo"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 border-2 border-emerald-300 text-emerald-800 font-extrabold text-base shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                <Play className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                <span>Try Live Simulator</span>
              </Link>

            </div>

            {/* Desktop Scannable QR Badge */}
            <div className="hidden sm:inline-flex items-center gap-4 mt-6 p-3 px-4 rounded-2xl bg-white/95 border border-slate-200 shadow-sm w-max mx-auto lg:mx-0">
              <div className="p-1.5 bg-slate-50 rounded-xl border border-slate-200">
                <Image
                  src="/images/playstore-qr.png"
                  alt="Play Store Download QR"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                  <span>On Desktop? Scan with Phone</span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Instant Google Play Install • Package: com.sathishdev.myshop
                </div>
              </div>
            </div>

            {/* Micro-Trust Signals */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-8 pt-6 border-t border-slate-200/80 text-xs sm:text-sm font-bold text-slate-600">
              <span className="flex items-center gap-1.5 text-emerald-800">
                <Zap className="w-4 h-4 text-emerald-600 fill-emerald-600" /> 100% Offline (SQLite)
              </span>
              <span className="flex items-center gap-1.5 text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Zero Monthly Subscription
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" /> Made for Android
              </span>
            </div>

          </div>

          {/* Right Column: Hero 3D Phone Mockup with Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full px-4 sm:px-0">
            
            {/* Ambient Behind-Phone Glow */}
            <div className="w-64 h-64 sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-br from-emerald-400/25 to-teal-400/20 blur-3xl absolute pointer-events-none"></div>

            {/* Flagship Phone Container */}
            <div className="relative w-full max-w-[260px] sm:max-w-[340px] drop-shadow-[0_25px_50px_rgba(0,108,73,0.22)] transform sm:rotate-1 transition-transform hover:rotate-0 duration-300">
              <Image
                src="/images/screen-pos-billing.png"
                alt="MyShop POS Quick Billing Screen"
                width={700}
                height={1500}
                className="w-full h-auto object-contain block"
                priority
              />
            </div>

            {/* Floating Live Badge 1 (Top Left) */}
            <div className="absolute top-12 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border-2 border-emerald-300 shadow-xl max-w-[210px] hidden sm:block animate-bounce duration-1000">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">⚡</span>
                <div>
                  <div className="text-xs font-black text-slate-900">100% Offline POS</div>
                  <div className="text-[10px] text-slate-500 font-semibold">Works without Wi-Fi</div>
                </div>
              </div>
            </div>

            {/* Floating Live Badge 2 (Right Bottom) */}
            <div className="absolute bottom-16 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border-2 border-emerald-300 shadow-xl max-w-[220px] hidden sm:block">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-sm shrink-0">🖨️</span>
                <div>
                  <div className="text-xs font-black text-slate-900">1-Sec Bluetooth Bill</div>
                  <div className="text-[10px] text-slate-500 font-semibold">58mm & 80mm Roll</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

