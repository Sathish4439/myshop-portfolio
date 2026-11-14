"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowRight, Download, Smartphone, Phone, Mail, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Utility Announcement & Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-extrabold text-[11px] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              100% Offline POS
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline text-slate-400 text-[11px] font-medium">Zero Subscriptions & Per-Bill Fees</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href="tel:+919488250293"
              className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Call Support: <strong className="font-extrabold text-white font-mono">+91 94882 50293</strong></span>
            </a>
            <span className="hidden md:inline text-slate-700">|</span>
            <a
              href="mailto:sathishg.dev@gmail.com"
              className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-3 h-3 text-emerald-400" />
              <span>sathishg.dev@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white p-1.5 shadow-md shadow-slate-200 border border-slate-100 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
              <Image
                src="/images/app-logo.png"
                alt="MyShop Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">MyShop</span>
                <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300">
                  POS
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider truncate">
                100% Offline Android Billing
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <Link href="/#features" className="hover:text-emerald-700 transition-colors">
              Features
            </Link>
            <Link href="/hardware" className="hover:text-emerald-700 transition-colors">
              Printer Guide 🖨️
            </Link>
            <Link href="/demo" className="hover:text-emerald-700 transition-colors flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Simulator
            </Link>
            <Link href="/#pricing" className="hover:text-emerald-700 transition-colors">
              Cost Comparison
            </Link>
            <Link href="/#faq" className="hover:text-emerald-700 transition-colors">
              FAQ
            </Link>
          </nav>

          {/* CTA Button Group */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.sathishdev.myshop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm shadow-md shadow-emerald-700/20 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Install Free App</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-6 bg-white border-b border-slate-200 shadow-xl space-y-4">
            <nav className="flex flex-col space-y-3 font-bold text-slate-700">
              <Link
                href="/#features"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-emerald-50"
              >
                Features
              </Link>
              <Link
                href="/hardware"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-emerald-50"
              >
                Printer Guide 🖨️
              </Link>
              <Link
                href="/demo"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-emerald-50"
              >
                Live Simulator (Try Now)
              </Link>
              <Link
                href="/#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-emerald-50"
              >
                Savings Calculator
              </Link>
              <Link
                href="/#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-emerald-50"
              >
                FAQ
              </Link>
            </nav>

            {/* Quick Contact in Mobile Drawer */}
            <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2">
              <p className="text-[11px] font-black uppercase text-emerald-900 tracking-wider">
                Direct Merchant Assistance:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <a
                  href="tel:+919488250293"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-700 text-white"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/919488250293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#25D366] text-white"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <a
                href="https://play.google.com/store/apps/details?id=com.sathishdev.myshop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-extrabold text-sm shadow-md"
              >
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>Install Free on Google Play</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
