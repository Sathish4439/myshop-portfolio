"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Download, X } from "lucide-react";

export default function MobileStickyInstallBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 pb-safe bg-slate-950/95 backdrop-blur-md border-t border-slate-800 shadow-[0_-8px_30px_rgba(0,0,0,0.4)] animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        
        {/* App Icon + Rating */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow-sm border border-slate-200">
            <Image
              src="/images/app-logo.png"
              alt="MyShop App"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black text-white truncate">MyShop POS</span>
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded text-[9px] font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                <span>4.8</span>
                <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-semibold truncate">
              100% Free • Offline Android Billing
            </p>
          </div>
        </div>

        {/* CTA Button + Dismiss */}
        <div className="flex items-center gap-1.5 shrink-0">
          <a
            href="https://play.google.com/store/apps/details?id=com.sathishdev.myshop"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/30 transition-transform active:scale-95 whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Install App</span>
          </a>

          <button
            onClick={() => setDismissed(true)}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors"
            aria-label="Dismiss install banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}

