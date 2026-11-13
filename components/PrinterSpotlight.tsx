import Image from "next/image";
import Link from "next/link";
import { Printer, Bluetooth, Check, ArrowRight } from "lucide-react";

export default function PrinterSpotlight() {
  const supportedPrinters = [
    { name: "TVS RP 3150 / Star", type: "80mm / 3-inch Roll", tag: "Supermarket Standard" },
    { name: "Everycom EC-58", type: "58mm / 2-inch Roll", tag: "Compact & Portable" },
    { name: "NGX POS Bluetooth", type: "58mm & 80mm", tag: "Heavy Duty Kirana" },
    { name: "HOIN / POSIFLEX", type: "ESC/POS Compatible", tag: "Fast 1-Sec Print" },
  ];

  return (
    <section className="py-20 bg-emerald-950/5 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Real Thermal Receipt Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[300px] drop-shadow-[0_20px_40px_rgba(0,108,73,0.25)] transform -rotate-1">
              <Image
                src="/images/screen-receipt.png"
                alt="MyShop Thermal Receipt Preview"
                width={700}
                height={1500}
                className="w-full h-auto object-contain block"
              />
              <div className="absolute -bottom-4 bg-emerald-800 text-white px-5 py-2.5 rounded-full shadow-lg text-xs font-black flex items-center gap-2">
                <Printer className="w-4 h-4 text-emerald-300" />
                <span>Live 80mm Receipt Roll</span>
              </div>
            </div>
          </div>

          {/* Right Column: Printer Compatibility & Features */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 font-extrabold text-xs uppercase tracking-wider mb-4 border border-emerald-300">
              <Bluetooth className="w-4 h-4 text-emerald-700" />
              UNIVERSAL BLUETOOTH PRINTER SUPPORT
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Pair Any Standard 58mm or 80mm Thermal Printer in 1 Minute
            </h2>

            <p className="text-base text-slate-600 font-medium mt-4 leading-relaxed">
              No complex drivers, no USB wire mess, and no computer required. MyShop auto-discovers and connects wirelessly to all ESC/POS thermal printers over Bluetooth.
            </p>

            {/* Printer Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {supportedPrinters.map((p, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-sm font-black text-slate-900">{p.name}</div>
                    <div className="text-xs text-slate-500 font-semibold">{p.type}</div>
                  </div>
                  <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {p.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Customization Bullets */}
            <div className="mt-8 pt-6 border-t border-slate-200 space-y-2 text-sm font-bold text-slate-700">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Print custom store name, phone number, address, and GSTIN</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Upload your shop logo for branded, professional printed receipts</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Custom footer message (e.g. &ldquo;Thank you for shopping! Visit again.&rdquo;)</span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/hardware"
                className="inline-flex items-center gap-2 font-black text-sm text-emerald-800 hover:text-emerald-950 hover:underline"
              >
                <span>View Complete Printer Compatibility Database & Setup Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

