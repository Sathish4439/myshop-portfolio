import Link from "next/link";
import Image from "next/image";
import { Download, Instagram, ShieldCheck, Heart, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center">
                <Image
                  src="/images/app-logo.png"
                  alt="MyShop Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">MyShop POS</span>
            </div>
            <p className="text-sm font-medium text-slate-400 max-w-sm leading-relaxed">
              The 100% offline grocery billing & mobile POS app designed for independent Indian grocers, kiranas, and provision stores. Turn your smartphone into a billing machine.
            </p>

            {/* Direct Support Desk Card */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5 max-w-sm">
              <span className="text-xs font-black uppercase text-white tracking-wider block">
                Direct Merchant Assistance Desk
              </span>
              <div className="space-y-1.5 text-xs">
                <a
                  href="tel:+919488250293"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Call: <strong className="text-white font-mono">+91 94882 50293</strong></span>
                </a>
                <a
                  href="mailto:sathishg.dev@gmail.com"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 font-semibold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>sathishg.dev@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/919488250293?text=Hi%20MyShop%20Team%2C%20I%20need%20help%20with%20my%20grocery%20billing%20app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-green-400 shrink-0" />
                  <span>WhatsApp Chat (Instant Reply)</span>
                </a>
              </div>
              <p className="text-[10px] text-slate-500 font-medium pt-1 border-t border-slate-800">
                Operational Support: Mon–Sat 9:00 AM – 9:00 PM IST
              </p>
            </div>

            <div className="pt-1">
              <a
                href="https://play.google.com/store/apps/details?id=com.sathishdev.myshop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-xs shadow-md transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Google Play Free Download</span>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase text-white tracking-wider">Product</div>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link href="/#features" className="hover:text-emerald-400 transition-colors">POS Quick Billing</Link></li>
              <li><Link href="/#features" className="hover:text-emerald-400 transition-colors">Camera Barcode</Link></li>
              <li><Link href="/#features" className="hover:text-emerald-400 transition-colors">Thermal Receipts</Link></li>
              <li><Link href="/#features" className="hover:text-emerald-400 transition-colors">WhatsApp Khata</Link></li>
              <li><Link href="/#features" className="hover:text-emerald-400 transition-colors">Inventory Alerts</Link></li>
            </ul>
          </div>

          {/* Resources & Hardware */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase text-white tracking-wider">Resources</div>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link href="/hardware" className="hover:text-emerald-400 transition-colors">Printer Guide 🖨️</Link></li>
              <li><Link href="/demo" className="hover:text-emerald-400 transition-colors">Live Web Simulator</Link></li>
              <li><Link href="/#pricing" className="hover:text-emerald-400 transition-colors">Cost Calculator</Link></li>
              <li><Link href="/#faq" className="hover:text-emerald-400 transition-colors">FAQ</Link></li>
              <li><a href="https://www.instagram.com/myshop.billing/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><Instagram className="w-4 h-4 text-emerald-400" /> Instagram @myshop.billing</a></li>
            </ul>
          </div>

          {/* Legal & Compliance (Play Store Required) */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase text-white tracking-wider">Legal & Trust</div>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/account-deletion" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Data Deletion Portal</Link></li>
              <li><span className="text-xs text-slate-500 font-mono">Package: com.sathishdev.myshop</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="space-y-1">
            <div>
              © {new Date().getFullYear()} MyShop. All rights reserved. Built for retail store owners.
            </div>
            <div>
              Engineered by{" "}
              <a
                href="https://www.sathishdev.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 font-semibold underline decoration-slate-700 transition-colors"
              >
                Sathish G
              </a>{" "}
              •{" "}
              <a
                href="mailto:sathishg.dev@gmail.com"
                className="text-slate-400 hover:text-emerald-400 underline decoration-slate-700 transition-colors"
              >
                sathishg.dev@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="tel:+919488250293" className="hover:text-emerald-400 transition-colors font-mono">
              +91 94882 50293
            </a>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 inline fill-red-500" /> in India
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
