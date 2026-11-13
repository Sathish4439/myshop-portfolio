import { Check, X, Sparkles } from "lucide-react";

export default function CostCalculator() {
  const comparisonRows = [
    {
      item: "Hardware (Desktop PC / Billing Machine)",
      traditional: "₹ 25,000 – ₹ 35,000",
      vyapar: "₹ 25,000",
      myshop: "₹ 0 (Use your existing phone)",
      highlight: true,
    },
    {
      item: "Barcode Scanner Machine Gun",
      traditional: "₹ 2,500 – ₹ 3,500",
      vyapar: "₹ 2,500",
      myshop: "₹ 0 (Phone camera scanner)",
      highlight: false,
    },
    {
      item: "UPS Power Inverter Backup",
      traditional: "₹ 3,500",
      vyapar: "₹ 3,500",
      myshop: "₹ 0 (Phone battery lasts all day)",
      highlight: false,
    },
    {
      item: "Software License / Annual Renewal",
      traditional: "₹ 5,000 – ₹ 12,000 / year",
      vyapar: "₹ 4,000 – ₹ 8,000 / year",
      myshop: "₹ 0 (100% Free Forever)",
      highlight: true,
    },
    {
      item: "Internet Dependency for Billing",
      traditional: "Needs continuous broadband",
      vyapar: "Requires sync",
      myshop: "100% Offline (SQLite)",
      highlight: false,
    },
    {
      item: "Setup Complexity & Training Time",
      traditional: "Needs technician setup",
      vyapar: "Needs training",
      myshop: "60-Second Instant Setup",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold text-xs uppercase tracking-wider mb-4 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            UNBEATABLE STORE ECONOMICS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Save Over <span className="text-emerald-400">₹34,000</span> in Your First Year
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium mt-4">
            See how MyShop eliminates every single unnecessary expense of bulky computer setups and monthly software subscriptions.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-700 bg-slate-800/80 backdrop-blur-md shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-950/60 text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-wider">
                <th className="p-4 sm:p-6">Expense Item</th>
                <th className="p-4 sm:p-6">Traditional Desktop POS</th>
                <th className="p-4 sm:p-6">Other Billing Apps</th>
                <th className="p-4 sm:p-6 text-emerald-400 bg-emerald-950/40 border-l border-emerald-800/60">
                  MyShop POS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700 text-xs sm:text-sm font-semibold">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-700/30 transition-colors">
                  <td className="p-4 sm:p-6 font-bold text-white flex items-center gap-2">
                    {row.item}
                  </td>
                  <td className="p-4 sm:p-6 text-slate-300">
                    {row.traditional}
                  </td>
                  <td className="p-4 sm:p-6 text-slate-300">
                    {row.vyapar}
                  </td>
                  <td className="p-4 sm:p-6 font-extrabold text-emerald-300 bg-emerald-950/30 border-l border-emerald-800/60 flex-1">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      {row.myshop}
                    </span>
                  </td>
                </tr>
              ))}
              
              {/* Grand Total Row */}
              <tr className="bg-slate-950 font-black text-sm sm:text-base border-t-2 border-slate-600">
                <td className="p-5 sm:p-7 text-white uppercase tracking-wider">
                  Total 1st-Year Cost:
                </td>
                <td className="p-5 sm:p-7 text-rose-400">
                  ₹ 36,000 – ₹ 54,000
                </td>
                <td className="p-5 sm:p-7 text-amber-400">
                  ₹ 35,000 – ₹ 39,000
                </td>
                <td className="p-5 sm:p-7 text-2xl text-emerald-400 bg-emerald-900/40 border-l border-emerald-600">
                  ₹ 0.00 (100% FREE)
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* CTA banner below table */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-emerald-900/60 via-slate-800 to-emerald-900/60 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="text-xl font-black text-white">Why keep paying expensive monthly fees?</div>
            <div className="text-sm text-slate-300 font-medium mt-1">Download MyShop 100% Free on Google Play Store today.</div>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.sathishdev.myshop"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 shrink-0"
          >
            Get Free Android App →
          </a>
        </div>

      </div>
    </section>
  );
}

