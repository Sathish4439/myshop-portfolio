"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ScanBarcode, 
  Plus, 
  Minus, 
  Trash2, 
  Printer, 
  Share2, 
  CheckCircle2, 
  Download, 
  Smartphone, 
  RotateCcw,
  Sparkles,
  ShoppingBag,
  CreditCard,
  Banknote,
  Send
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  tamilName: string;
  price: number;
  barcode: string;
  category: string;
  unit: string;
}

interface CartItem extends Product {
  qty: number;
}

const SAMPLE_PRODUCTS: Product[] = [
  { id: "1", name: "Aashirvaad Shudh Chakki Atta 5kg", tamilName: "ஆசீர்வாத் கோதுமை மாவு", price: 245, barcode: "890103001", category: "Grains", unit: "1 bag" },
  { id: "2", name: "Fortune Sunlite Refined Oil 1L", tamilName: "ஃபார்ச்சூன் சன்லைட் எண்ணெய்", price: 135, barcode: "890600728", category: "Oils", unit: "1 pouch" },
  { id: "3", name: "Tata Salt Iodized 1kg", tamilName: "டாடா அயோடின் உப்பு", price: 28, barcode: "890105885", category: "Spices", unit: "1 pkt" },
  { id: "4", name: "Premium Toor Dal 1kg", tamilName: "துவரம் பருப்பு", price: 160, barcode: "890104441", category: "Pulses", unit: "1 kg" },
  { id: "5", name: "Maggi 2-Minute Masala Noodles 280g", tamilName: "மேகி நூடுல்ஸ்", price: 48, barcode: "890105886", category: "Snacks", unit: "1 pack" },
  { id: "6", name: "Surf Excel Easy Wash Detergent 1kg", tamilName: "சர்ப் எக்செல்", price: 140, barcode: "890103038", category: "Cleaning", unit: "1 pkt" },
  { id: "7", name: "Cadbury Dairy Milk Silk 60g", tamilName: "டெய்ரி மில்க் சில்க்", price: 80, barcode: "890123302", category: "Chocolates", unit: "1 bar" },
  { id: "8", name: "Parle-G Gold Biscuits 1kg", tamilName: "பார்லே-ஜி பிஸ்கட்", price: 120, barcode: "890171911", category: "Biscuits", unit: "1 family pkt" },
];

export default function DemoPage() {
  const [cart, setCart] = useState<CartItem[]>([
    { ...SAMPLE_PRODUCTS[0], qty: 1 },
    { ...SAMPLE_PRODUCTS[1], qty: 2 },
  ]);
  const [lastScanned, setLastScanned] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [paymentMode, setPaymentMode] = useState<"CASH" | "UPI" | "KHATA">("CASH");
  const [billGenerated, setBillGenerated] = useState(false);
  const [invoiceNumber] = useState("INV-" + Math.floor(1000 + Math.random() * 9000));
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  // Cart operations
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setBillGenerated(false);
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
    setBillGenerated(false);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    setBillGenerated(false);
  };

  const clearCart = () => {
    setCart([]);
    setBillGenerated(false);
    setLastScanned(null);
  };

  // Simulate instant camera scan
  const simulateCameraScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      // Pick a random product not currently in cart or an existing one
      const randomProduct = SAMPLE_PRODUCTS[Math.floor(Math.random() * SAMPLE_PRODUCTS.length)];
      addToCart(randomProduct);
      setLastScanned(`${randomProduct.name} (Barcode: ${randomProduct.barcode})`);
      setIsScanning(false);
    }, 350);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="bg-slate-100 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Live Simulation Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              <Link href="/" className="hover:text-emerald-700">Home</Link>
              <span>/</span>
              <span className="text-slate-900">Interactive POS Demo</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>Interactive Web POS Simulator</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                Live Sandbox
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Test how quick and effortless 3-second billing is on MyShop before installing on Android.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={clearCart}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset POS</span>
            </button>
            <a
              href="https://play.google.com/store/apps/details?id=com.sathishdev.myshop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Install Real App</span>
            </a>
          </div>
        </div>

        {/* Live Simulator Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Product Catalog & Camera Barcode Scanner (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Camera Barcode Scanner Action Card */}
            <div className="bg-emerald-950 text-white rounded-3xl p-6 shadow-xl border border-emerald-800 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-[10px] uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" /> Camera Scanner Engine
                  </div>
                  <h2 className="text-lg font-black tracking-tight text-white">
                    Simulate 0.2-Sec Phone Camera Scan
                  </h2>
                  <p className="text-xs text-emerald-200 font-medium">
                    Test the rapid barcode gun algorithm built into your phone camera.
                  </p>
                </div>

                <button
                  onClick={simulateCameraScan}
                  disabled={isScanning}
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                >
                  <ScanBarcode className={`w-4 h-4 ${isScanning ? "animate-spin" : ""}`} />
                  <span>{isScanning ? "Scanning Barcode..." : "Scan Grocery Barcode"}</span>
                </button>
              </div>

              {lastScanned && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-900/60 border border-emerald-700/60 text-xs font-bold text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Scanned: {lastScanned}</span>
                </div>
              )}
            </div>

            {/* Quick Add Product Catalog */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-black text-slate-900">
                  Quick Catalog (Tap + to add to cart)
                </h3>
                <span className="text-xs font-bold text-slate-500">
                  {SAMPLE_PRODUCTS.length} Sample Kirana Items
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SAMPLE_PRODUCTS.map((prod) => {
                  const inCart = cart.find((c) => c.id === prod.id);
                  return (
                    <div
                      key={prod.id}
                      onClick={() => addToCart(prod)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between select-none ${
                        inCart
                          ? "border-emerald-500 bg-emerald-50/50"
                          : "border-slate-200 hover:border-emerald-300 hover:bg-slate-50"
                      }`}
                    >
                      <div className="space-y-0.5 min-w-0 flex-1 pr-2">
                        <p className="text-xs font-black text-slate-900 leading-snug line-clamp-1">{prod.name}</p>
                        <p className="text-[11px] font-bold text-emerald-700">{prod.tamilName}</p>
                        <p className="text-[10px] text-slate-400 font-mono">Barcode: {prod.barcode}</p>
                      </div>

                      <div className="text-right flex items-center gap-2.5">
                        <span className="text-sm font-black text-slate-900">₹{prod.price}</span>
                        <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                          {inCart ? inCart.qty : <Plus className="w-4 h-4" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Side: Active Cart & Live Thermal Receipt (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Cart Box */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-emerald-600" />
                  <span className="font-black text-slate-900 text-base">Active Cart</span>
                </div>
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {totalItems} items
                </span>
              </div>

              {cart.length === 0 ? (
                <div className="py-12 text-center text-slate-400">
                  <ShoppingBag className="w-10 h-10 mx-auto text-slate-300 mb-2" />
                  <p className="text-xs font-bold">Cart is empty</p>
                  <p className="text-[11px]">Click items or scan a barcode on the left</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-100 max-h-60 overflow-y-auto my-3 pr-1">
                  {cart.map((item) => (
                    <div key={item.id} className="py-2.5 flex items-center justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-black text-slate-900 truncate">{item.name}</p>
                        <p className="text-[11px] text-slate-500 font-semibold">
                          ₹{item.price} × {item.qty} = <span className="font-bold text-slate-800">₹{item.price * item.qty}</span>
                        </p>
                      </div>

                      {/* Quantity Toggles */}
                      <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-6 h-6 rounded-lg bg-white text-slate-700 flex items-center justify-center hover:bg-slate-200"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-black text-slate-900">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-6 h-6 rounded-lg bg-white text-slate-700 flex items-center justify-center hover:bg-slate-200"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-red-500 p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Total & Payment Modes */}
              <div className="pt-4 border-t border-slate-100 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Grand Total</span>
                  <span className="text-2xl font-black text-slate-900">₹ {subtotal}</span>
                </div>

                {/* Payment Mode Selector */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setPaymentMode("CASH")}
                    className={`py-2 px-2 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1 border transition-all ${
                      paymentMode === "CASH"
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200"
                    }`}
                  >
                    <Banknote className="w-3.5 h-3.5" />
                    <span>Cash</span>
                  </button>
                  <button
                    onClick={() => setPaymentMode("UPI")}
                    className={`py-2 px-2 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1 border transition-all ${
                      paymentMode === "UPI"
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200"
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>UPI QR</span>
                  </button>
                  <button
                    onClick={() => setPaymentMode("KHATA")}
                    className={`py-2 px-2 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1 border transition-all ${
                      paymentMode === "KHATA"
                        ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200"
                    }`}
                  >
                    <span>Khata (Credit)</span>
                  </button>
                </div>

                {/* Complete Bill / Print Slip Button */}
                <button
                  disabled={cart.length === 0}
                  onClick={() => setBillGenerated(true)}
                  className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white font-black text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Printer className="w-4 h-4" />
                  <span>Generate Bill & Print Slip</span>
                </button>
              </div>
            </div>

            {/* Simulated 80mm Photorealistic Thermal Receipt */}
            {billGenerated && (
              <div className="bg-white rounded-3xl p-6 border-2 border-emerald-500 shadow-2xl relative animate-fade-in font-mono text-slate-900 text-xs">
                
                {/* Paper Jagged Top Visual */}
                <div className="text-center pb-4 border-b border-dashed border-slate-300">
                  <div className="font-sans font-black text-base uppercase tracking-tight text-slate-900">
                    KUMAR GROCERY & SUPERMARKET
                  </div>
                  <p className="text-[11px] text-slate-500">12, Gandhi Bazaar Main Road, Bangalore - 560004</p>
                  <p className="text-[10px] text-slate-400">GSTIN: 29AAAAA0000A1Z5 • Ph: 9876543210</p>
                  <div className="flex justify-between items-center text-[10px] text-slate-500 mt-2 font-bold">
                    <span>{invoiceNumber}</span>
                    <span>{new Date().toLocaleDateString("en-IN")} • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </div>

                {/* Items Table */}
                <div className="py-3 border-b border-dashed border-slate-300">
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 pb-1 uppercase">
                    <span className="w-3/5">Item</span>
                    <span className="w-1/5 text-center">Qty</span>
                    <span className="w-1/5 text-right">Amt</span>
                  </div>
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex justify-between py-1 text-[11px]">
                      <span className="w-3/5 truncate font-bold">{item.name}</span>
                      <span className="w-1/5 text-center">{item.qty}</span>
                      <span className="w-1/5 text-right font-bold">₹{item.price * item.qty}</span>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="py-3 border-b border-dashed border-slate-300 space-y-1">
                  <div className="flex justify-between font-bold">
                    <span>Total Items:</span>
                    <span>{totalItems}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Payment Mode:</span>
                    <span className="uppercase text-emerald-700">{paymentMode}</span>
                  </div>
                  <div className="flex justify-between text-sm font-black text-slate-950 pt-1">
                    <span>NET AMOUNT:</span>
                    <span>₹ {subtotal}.00</span>
                  </div>
                </div>

                {/* Footer Message */}
                <div className="text-center pt-3 text-[10px] text-slate-500">
                  <p className="font-bold">*** THANK YOU! VISIT AGAIN ***</p>
                  <p className="text-[9px] text-emerald-800 font-sans font-bold mt-1">
                    Billed with MyShop • 100% Free Offline POS
                  </p>
                </div>

                {/* Actions Below Receipt */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 font-sans">
                  <button
                    onClick={() => setShowWhatsAppModal(true)}
                    className="flex-1 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-black flex items-center justify-center gap-1.5 border border-emerald-200 transition-all"
                  >
                    <Share2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Bill</span>
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-black flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Browser Print</span>
                  </button>
                </div>

                {/* High-Converting Download Card */}
                <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-emerald-950 to-slate-900 border border-emerald-500/40 text-white font-sans text-center space-y-2.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" /> Ready for your shop counter
                  </div>
                  <h4 className="text-sm font-black text-white">
                    Start Billing with Your Phone Today!
                  </h4>
                  <p className="text-[11px] text-slate-300 font-medium leading-relaxed">
                    100% Free on Android. Zero computer cost, works 100% offline with Bluetooth receipt printers.
                  </p>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.sathishdev.myshop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Free on Google Play</span>
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* WhatsApp Modal Simulator */}
        {showWhatsAppModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    <Send className="w-4 h-4" />
                  </div>
                  <span className="font-black text-slate-900 text-sm">WhatsApp Receipt Preview</span>
                </div>
                <button
                  onClick={() => setShowWhatsAppModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Chat Bubble Format */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-slate-800 space-y-2">
                <p className="font-bold text-emerald-950 font-sans">
                  🙏 Vanakkam! Thank you for shopping at Kumar Grocery!
                </p>
                <p>🧾 Bill: <span className="font-bold">{invoiceNumber}</span></p>
                <p>📦 Total Items: <span className="font-bold">{totalItems}</span></p>
                <p>💰 Paid Amount: <span className="font-bold text-emerald-800">₹{subtotal}</span> ({paymentMode})</p>
                <p className="text-[10px] text-slate-500 pt-1 border-t border-emerald-200 font-sans">
                  Powered by MyShop POS App • Download on Google Play Store
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  onClick={() => setShowWhatsAppModal(false)}
                  className="px-4 py-2.5 rounded-xl text-slate-500 hover:text-slate-800 font-bold text-xs"
                >
                  Close
                </button>
                <a
                  href="https://play.google.com/store/apps/details?id=com.sathishdev.myshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center gap-1.5 shadow-md shadow-emerald-600/30"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Get App for Store</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

