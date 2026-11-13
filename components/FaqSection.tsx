"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does MyShop billing work 100% without internet?",
      a: "Yes. MyShop is built offline-first using local SQLite database storage on your phone. You can create bills, scan product barcodes, print receipts, and manage customer credit completely offline without mobile data or Wi-Fi.",
    },
    {
      q: "Do I need to buy a separate barcode scanner machine gun?",
      a: "No! MyShop uses your Android phone's built-in camera as a high-speed barcode scanner. It detects standard grocery barcodes in 0.2 seconds and auto-adds items into the cart, saving you ₹3,000+ on external hardware.",
    },
    {
      q: "Are there any monthly subscription fees or hidden renewal charges?",
      a: "Zero. MyShop is 100% free to download and use on Android. There are no monthly subscriptions, no per-bill commission fees, and no renewal charges.",
    },
    {
      q: "Which Bluetooth thermal printers are compatible with MyShop?",
      a: "MyShop supports all standard 58mm (2-inch) and 80mm (3-inch) ESC/POS Bluetooth thermal printers, including popular models from TVS, Everycom, NGX, POSIFLEX, and HOIN. Check our Hardware page for a full compatibility list.",
    },
    {
      q: "How does the WhatsApp Customer Khata feature work?",
      a: "When a customer buys on credit (udhaar / கடன்), you can record it in their digital ledger. With a single tap on 'Remind', MyShop opens a pre-composed, polite WhatsApp message with their pending balance and bill details ready to send.",
    },
    {
      q: "Can I print my grocery shop name, logo, and GST number on the bill?",
      a: "Yes. In the Settings tab, you can enter your shop name, contact number, address, and GSTIN. You can also upload your shop emblem or logo to print on every receipt.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 font-extrabold text-xs uppercase tracking-wider mb-4 border border-emerald-300">
            <HelpCircle className="w-3.5 h-3.5" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Common Questions from Grocery Store Owners
          </h2>
          <p className="text-base text-slate-600 font-medium mt-3">
            Everything you need to know about setting up MyShop in your store.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border-2 border-slate-200/90 overflow-hidden transition-colors hover:border-emerald-300 bg-slate-50/50"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-extrabold text-base sm:text-lg text-slate-900"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 font-medium leading-relaxed border-t border-slate-200/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

