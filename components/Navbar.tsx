"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowRight, Download, Smartphone } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl bg-white p-1.5 shadow-md shadow-slate-200 border border-slate-100 flex items-center justify-center transition-transform group-hover:scale-105">
            <Image
              src="/images/app-logo.png"
              alt="MyShop Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-slate-900">MyShop</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300">
                POS
              </span>
            </div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
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
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
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
          <div className="pt-2 border-t border-slate-100">
            <a
              href="https://play.google.com/store/apps/details?id=com.sathishdev.myshop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-700 text-white font-extrabold text-sm shadow-md"
            >
              <Smartphone className="w-4 h-4" />
              <span>Install Free on Google Play</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

