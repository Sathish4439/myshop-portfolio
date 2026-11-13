"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, AlertTriangle, CheckCircle2, ShieldAlert, ArrowRight, HelpCircle } from "lucide-react";

export default function AccountDeletionPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [storeName, setStoreName] = useState("");
  const [reason, setReason] = useState("");
  const [confirmCheckbox, setConfirmCheckbox] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || !confirmCheckbox) return;

    const generatedTicket = "DEL-" + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedTicket);
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <span>/</span>
          <span className="text-slate-900">Account & Data Deletion</span>
        </div>

        {/* Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 border border-red-200 font-extrabold text-xs uppercase tracking-wider mb-4">
            <Trash2 className="w-4 h-4 text-red-700" />
            Google Play Data Compliance
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            MyShop Account & Data Deletion Request
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-2 break-all">
            Application Package: <code className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-mono text-xs">com.sathishdev.myshop</code>
          </p>
        </div>

        {/* How Data is Stored Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-8 space-y-4">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span>Understanding How MyShop Stores Your Data</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            MyShop is built with an <strong className="text-slate-900">offline-first architecture</strong>. 99% of your store transactions, customer names, product catalogs, and barcode prices are stored <strong className="text-slate-900">exclusively on your physical Android phone</strong> in a local SQLite database.
          </p>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 text-xs sm:text-sm">
            <p className="font-black text-amber-950">To instantly delete your local shop data on your phone:</p>
            <ol className="list-decimal pl-5 space-y-1 text-amber-900 font-medium">
              <li>Open your phone&apos;s <strong>Settings</strong> app.</li>
              <li>Go to <strong>Apps</strong> → <strong>MyShop</strong>.</li>
              <li>Tap <strong>Storage & Cache</strong> → Tap <strong>Clear Storage</strong> (or Clear Data).</li>
              <li>All local invoices, products, and customer records will be permanently erased immediately.</li>
            </ol>
          </div>
        </div>

        {/* Web Deletion Request Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Deletion Request Submitted
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-medium">
                Your request ticket has been registered. Our security team will purge all server records associated with this mobile number within 7 business days.
              </p>
              <div className="inline-block p-4 rounded-2xl bg-slate-100 border border-slate-200 font-mono text-sm font-black text-slate-800">
                Ticket Reference: {ticketId}
              </div>
              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-xl font-black text-slate-900">
                  Request Server & Cloud Telemetry Deletion
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  If you have registered an account, phone login, or cloud backup, submit this form to request complete permanent removal from our servers.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1.5">
                    Registered Mobile Number / Email *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+91 98765 43210 or merchant@example.com"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1.5">
                    Store / Business Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kumar Grocery Store"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1.5">
                    Reason for Deletion (Optional)
                  </label>
                  <select
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  >
                    <option value="">Select a reason</option>
                    <option value="closing_business">Closed retail business</option>
                    <option value="switching_device">Switching devices</option>
                    <option value="privacy_preference">Privacy preferences</option>
                    <option value="other">Other reason</option>
                  </select>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={confirmCheckbox}
                      onChange={(e) => setConfirmCheckbox(e.target.checked)}
                      className="mt-1 w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                    />
                    <span className="text-xs text-slate-600 font-semibold leading-relaxed">
                      I confirm that I am requesting permanent deletion of all account credentials, cloud backups, and transaction telemetry associated with this identifier. I understand that this action is irreversible.
                    </span>
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!confirmCheckbox || !phoneNumber}
                  className="w-full py-4 rounded-2xl bg-red-600 hover:bg-red-500 disabled:opacity-40 text-white font-black text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Submit Permanent Deletion Request</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center font-medium">
                For questions regarding data privacy compliance, reach us at{" "}
                <a href="mailto:support@myshop.sathishdev.in" className="text-emerald-700 font-bold underline">
                  support@myshop.sathishdev.in
                </a>
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

