import Link from "next/link";
import Image from "next/image";
import { Download, Instagram, ShieldCheck, Heart } from "lucide-react";

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
            <div className="pt-2">
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
                href="https://www.sathishdev.in/work/myshop-pos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 font-semibold underline decoration-slate-700 transition-colors"
              >
                Full Architecture Case Study
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Indian Grocery & Kirana Stores</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

