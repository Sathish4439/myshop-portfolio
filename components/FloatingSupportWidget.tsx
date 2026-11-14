"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, X, Headphones, Sparkles } from "lucide-react";

export default function FloatingSupportWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Customer support options" className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50">
      {/* Expanded Support Card */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-3xl p-5 shadow-2xl border border-slate-200/90 animate-fade-in text-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Headphones className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900 leading-tight">Merchant Support Desk</h4>
                <p className="text-[10px] font-bold text-emerald-700 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Online • Mon–Sat 9AM–9PM
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              aria-label="Close support dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            Need help setting up your Bluetooth printer, barcode scanner, or offline billing? Contact our developer & support desk directly:
          </p>

          <div className="space-y-2">
            {/* Call Support Button */}
            <a
              href="tel:+919488250293"
              className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-950 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-black">Call Support Desk</span>
                  <span className="block text-[11px] font-bold text-emerald-800 font-mono">+91 94882 50293</span>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900">
                Direct
              </span>
            </a>

            {/* WhatsApp Support Button */}
            <a
              href="https://wa.me/919488250293?text=Hi%20MyShop%20Team%2C%20I%20need%20help%20with%20the%20grocery%20billing%20app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-green-50 hover:bg-green-100 border border-green-200 text-green-950 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#25D366] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-black">WhatsApp Chat</span>
                  <span className="block text-[11px] font-medium text-green-800">1-Click Fast Reply</span>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-green-200 text-green-900">
                Chat
              </span>
            </a>

            {/* Email Support Button */}
            <a
              href="mailto:sathishg.dev@gmail.com?subject=MyShop%20Billing%20Support%20Inquiry"
              className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-black">Email Developer</span>
                  <span className="block text-[11px] font-semibold text-slate-600 truncate">sathishg.dev@gmail.com</span>
                </div>
              </div>
            </a>
          </div>

          <div className="pt-1 text-center">
            <span className="text-[10px] font-semibold text-slate-400">
              Personalized technical support for every store owner
            </span>
          </div>
        </div>
      )}

      {/* Floating Trigger Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-2xl border border-slate-700 hover:border-emerald-500 transition-all hover:scale-105 group"
        aria-label="Support options"
      >
        <div className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
          <Phone className="w-3.5 h-3.5" />
        </div>
        <div className="text-left hidden sm:block">
          <span className="block text-[11px] font-black leading-tight">Need Help?</span>
          <span className="block text-[10px] text-emerald-400 font-mono font-bold">+91 94882 50293</span>
        </div>
        <span className="sm:hidden font-black">Call Support</span>
      </button>
    </aside>
  );
}

