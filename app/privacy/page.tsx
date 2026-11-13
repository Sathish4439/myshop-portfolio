import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Smartphone, Database, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy • MyShop POS",
  description:
    "Official Privacy Policy for MyShop – Grocery Billing & POS (com.sathishdev.myshop). We respect your privacy: 100% offline local SQLite storage with zero third-party data tracking.",
  alternates: {
    canonical: "https://myshop.sathishdev.in/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <span>/</span>
          <span className="text-slate-900">Privacy Policy</span>
        </div>

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-extrabold text-xs uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            Google Play Verified Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Privacy Policy for MyShop POS
          </h1>
          <p className="text-sm font-semibold text-slate-500 mt-2">
            Last updated: November 13, 2026 • Applies to Application Package: <code className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-mono text-xs">com.sathishdev.myshop</code>
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">1. Overview & Commitment to Merchant Privacy</h2>
            <p>
              MyShop (&quot;we&quot;, &quot;our&quot;, or &quot;the Application&quot;) is developed by Sathish Kumar and the MyShop Engineering Team. Our mission is to provide independent grocery store owners, kirana merchants, and retailers across India with a fast, reliable, and completely offline Point-of-Sale (POS) and inventory manager.
            </p>
            <p>
              We believe your store sales, inventory prices, customer ledger entries (Khata), and profit margins belong exclusively to you. <strong className="text-slate-950">We do not sell, monetize, or harvest your business or customer records.</strong>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">2. 100% Offline-First Architecture & Data Storage</h2>
            <p>
              MyShop operates primarily as an offline-first application. When you add items, generate invoices, or record customer credit:
            </p>
            <ul className="list-disc pl-5 space-y-2 font-medium">
              <li>
                <strong>Local SQLite Database:</strong> All inventory records, barcode mappings, invoices, payment types, and customer ledgers are saved securely in your Android device&apos;s sandboxed local storage (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">/data/data/com.sathishdev.myshop/databases/</code>).
              </li>
              <li>
                <strong>No Cloud Dependency for Daily Billing:</strong> You do not need an active internet connection to create bills, scan barcodes, or print receipts.
              </li>
              <li>
                <strong>Encrypted Backups:</strong> If you choose to export your database backup, it is saved directly to your device storage or your personal Google Drive account under your own authorization.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">3. Android Permissions & Why We Need Them</h2>
            <p>MyShop only requests the minimal set of hardware permissions required to deliver its POS features:</p>
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="font-extrabold text-slate-900 text-sm">📸 Camera Permission (android.permission.CAMERA)</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Used solely to operate the real-time camera barcode scanner. MyShop processes the camera video stream locally on your device to decode EAN-13, UPC, and QR codes. Images or video frames are never captured, recorded, or uploaded to any remote server.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="font-extrabold text-slate-900 text-sm">🖨️ Bluetooth Permissions (BLUETOOTH, BLUETOOTH_ADMIN, BLUETOOTH_CONNECT, BLUETOOTH_SCAN)</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Required on Android 12+ to discover, connect with, and stream ESC/POS thermal printing bytes to wireless receipt printers (e.g., 58mm/80mm TVS, Everycom, NGX). No other Bluetooth communication is conducted.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="font-extrabold text-slate-900 text-sm">🌐 Network State & Internet (android.permission.INTERNET)</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Used exclusively for periodic app update notifications, critical crash diagnostic logs via Google Firebase Crashlytics, and license validation.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">4. Third-Party Services</h2>
            <p>
              The Application may integrate with vetted industry-standard SDKs:
            </p>
            <ul className="list-disc pl-5 space-y-2 font-medium">
              <li><strong>Google Play Services:</strong> For application distribution, in-app updates, and licensing.</li>
              <li><strong>Google Firebase Crashlytics:</strong> For anonymous crash reports to help our engineering team identify and repair software stability bugs.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">5. User Data Rights & Account Deletion</h2>
            <p>
              In full compliance with Google Play Developer Policies, all users have the absolute right to delete all data associated with their usage.
            </p>
            <p>
              Because your billing data is stored locally on your device, you can completely purge all database records at any time by navigating to:
            </p>
            <p className="font-mono bg-slate-100 p-3 rounded-xl text-xs text-slate-800">
              Android Settings → Apps → MyShop → Storage → Clear Storage & Data
            </p>
            <p>
              To request deletion of any cloud-associated telemetry or account identifiers, visit our dedicated web deletion request portal at{" "}
              <Link href="/account-deletion" className="text-emerald-700 font-bold underline hover:text-emerald-800">
                https://myshop.sathishdev.in/account-deletion
              </Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">6. Contact Information</h2>
            <p>If you have any questions or security concerns regarding this Privacy Policy, please contact our Data Protection Officer:</p>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm font-semibold text-emerald-950">
              <p>MyShop POS Engineering & Privacy Desk</p>
              <p>Email: <a href="mailto:support@myshop.sathishdev.in" className="underline">support@myshop.sathishdev.in</a></p>
              <p>Website: <a href="https://myshop.sathishdev.in" className="underline">https://myshop.sathishdev.in</a></p>
              <p>Location: Bangalore, Karnataka, India</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}

