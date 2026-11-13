import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service • MyShop POS",
  description:
    "Terms of Service governing the use of MyShop – Grocery Billing & POS application for Android and myshop.sathishdev.in.",
  alternates: {
    canonical: "https://myshop.sathishdev.in/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <span>/</span>
          <span className="text-slate-900">Terms of Service</span>
        </div>

        {/* Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-sm mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-300 font-extrabold text-xs uppercase tracking-wider mb-4">
            <FileText className="w-4 h-4 text-slate-700" />
            Merchant Agreement
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-2 break-all">
            Effective Date: November 13, 2026 • Application: MyShop (com.sathishdev.myshop)
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or utilizing the MyShop mobile application (&quot;the App&quot;) or accessing the myshop.sathishdev.in website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please uninstall the App immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">2. License & Authorized Use</h2>
            <p>
              We grant you a revocable, non-exclusive, non-transferable, royalty-free license to use MyShop on your Android mobile device for managing your retail shop, kirana, supermarket, or business transactions.
            </p>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>Reverse engineer, decompile, or disassemble any portion of the App binary.</li>
              <li>Circumvent or tamper with local database integrity or application security sandboxes.</li>
              <li>Distribute counterfeit or modified APK copies outside the official Google Play Store release.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">3. Merchant Tax, Pricing & Accounting Responsibility</h2>
            <p>
              MyShop provides calculation utilities for itemizing sales, computing GST (0%, 5%, 12%, 18%, 28%), and tracking customer credit (Khata). However:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>You, as the merchant, are solely responsible for ensuring the accuracy of product prices, discounts, GSTIN registrations, and tax rates configured inside the App.</li>
              <li>MyShop does not act as a tax filing agent, chartered accountant, or bank. You must maintain appropriate physical and digital tax records in accordance with Indian tax laws.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">4. Data Backup & Loss Prevention</h2>
            <p>
              Because MyShop is an offline-first POS application storing records locally on your device, you are solely responsible for backing up your store data. We encourage merchants to regularly use the built-in Database Backup tool to export a database copy to Google Drive or external SD storage to safeguard against device loss, damage, or theft.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">5. Limitation of Liability & &quot;As-Is&quot; Disclaimer</h2>
            <p>
              The App is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without warranties of any kind, whether express or implied. Under no circumstances will MyShop, its authors, or Sathish Kumar be liable for any indirect, incidental, punitive, or consequential damages (including loss of business profits, hardware printer failure, or lost inventory records) arising out of the use or inability to use the App.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">6. Governing Law & Jurisdiction</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Bangalore, Karnataka, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">7. Support Inquiries</h2>
            <p>
              For questions regarding these terms or technical support for MyShop, email our team at:{" "}
              <a href="mailto:support@myshop.sathishdev.in" className="text-emerald-700 font-bold underline">
                support@myshop.sathishdev.in
              </a>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}

