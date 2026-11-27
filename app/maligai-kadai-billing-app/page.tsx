import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  Zap,
  ScanBarcode,
  Printer,
  Users,
  Package,
  BarChart3,
  CheckCircle2,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  Phone,
  MessageCircle,
  Sparkles,
  MapPin,
  Store,
} from "lucide-react";

export const metadata: Metadata = {
  title: "மளிகைக் கடை பில்லிங் ஆப் — MyShop POS | Tamil Nadu Grocery Billing App (100% Free)",
  description:
    "தமிழ்நாடு மளிகைக் கடை, ப்ரொவிஷன் ஸ்டோர் & சூப்பர் மார்க்கெட்டுகளுக்கான சிறந்த இலவச ஆண்ட்ராய்டு பில்லிங் ஆப். 100% ஆஃப்லைன், போன் கேமரா பார்கோடு ஸ்கேனர், ப்ளூடூத் ரசீது பிரிண்டர், வாட்ஸ்அப் கடன் கணக்கு. ₹0 கட்டணம். Download Free on Google Play.",
  keywords: [
    "மளிகைக் கடை பில்லிங் ஆப்",
    "maligai kadai billing app",
    "maligai store billing software",
    "grocery billing app tamil",
    "tamil nadu grocery billing app",
    "free maligai pos software",
    "provision store billing software tamil",
    "kirana billing software tamil nadu",
    "offline billing app tamil",
    "bluetooth printer billing app tamil nadu",
    "coimbatore grocery billing app",
    "chennai kirana billing app",
    "madurai maligai kadai app",
    "myshop pos tamil"
  ],
  alternates: {
    canonical: "https://myshop.sathishdev.in/maligai-kadai-billing-app",
  },
  openGraph: {
    title: "மளிகைக் கடை பில்லிங் ஆப் — MyShop POS (100% Free Offline)",
    description:
      "உங்கள் ஆண்ட்ராய்டு போனை ஸ்மார்ட் மளிகைக் கடை பில்லிங் மெஷினாக மாற்றுங்கள்! கம்ப்யூட்டர் தேவையில்லை, இன்டர்நெட் தேவையில்லை. 100% இலவசம்.",
    url: "https://myshop.sathishdev.in/maligai-kadai-billing-app",
    images: [
      {
        url: "https://myshop.sathishdev.in/images/screen-pos-billing.png",
        width: 700,
        height: 1500,
        alt: "MyShop மளிகைக் கடை பில்லிங் ஆப் ஸ்கிரீன்",
      },
    ],
  },
};

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sathishdev.myshop";

const tamilFeatures = [
  {
    icon: <Zap className="w-6 h-6 text-emerald-600" />,
    badge: "100% ஆஃப்லைன்",
    title: "இன்டர்நெட் தேவையில்லை — மழை பெய்தாலும் பில்லிங் ஓடும்!",
    desc: "மாலை நேரக் கூட்டத்தில் நெட் கட் ஆனாலோ, வைஃபை நின்றுபோனாலோ பில்லிங் நிற்காது. எல்லாப் பொருட்களும், பில்களும் உங்கள் போனிலேயே பத்திரமாக சேமிக்கப்படும்.",
    bullets: ["3 வினாடியில் மின்னல் வேக பில்", "ஹோல்டு (Hold) செய்து அடுத்த கஸ்டமருக்கு பில்", "ரொக்கம் (Cash) & UPI இரண்டும் சப்போர்ட்"],
  },
  {
    icon: <ScanBarcode className="w-6 h-6 text-cyan-600" />,
    badge: "கேமரா ஸ்கேனர்",
    title: "போன் கேமராவே பார்கோடு ஸ்கேனர் — ₹3,000 மிச்சம்!",
    desc: "தனியாக ₹3,000 கொடுத்து பார்கோடு கன் வாங்கத் தேவையில்லை. உங்கள் போன் கேமராவை மளிகைப் பாக்கெட் மீது காட்டினால் 0.2 வினாடியில் கார்ட்டில் ஏறும்.",
    bullets: ["வெளிப்புற மெஷின் வாங்கத் தேவையில்லை", "மங்கலான வெளிச்சத்திலும் துல்லிய ஸ்கேன்", "தானாகவே பெயர் & விலை வந்துவிடும்"],
  },
  {
    icon: <Printer className="w-6 h-6 text-purple-600" />,
    badge: "ப்ளூடூத் பிரிண்டர்",
    title: "ப்ளூடூத் தெர்மல் ரசீது பிரிண்டர் — 1 வினாடியில் ரசீது!",
    desc: "அமேசான் அல்லது கடைகளில் கிடைக்கும் எந்தவொரு 58mm (2-இன்ச்) அல்லது 80mm (3-இன்ச்) ப்ளூடூத் தெர்மல் பிரிண்டரிலும் கம்பியில்லாமல் பில் போடலாம்.",
    bullets: ["கடையின் பெயர், லோகோ & போன் நம்பர்", "ஜிஎஸ்டி மற்றும் சாதாரண பில்", "கீழே நன்றி / வாழ்த்து வாசகம்"],
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-600" />,
    badge: "வாட்ஸ்அப் கடன் கணக்கு",
    title: "டிஜிட்டல் கடன் (உத்தரி) கணக்கு & 1-டேப் வாட்ஸ்அப் வசூல்!",
    desc: "பழைய நோட்டுப் புத்தகத்தில் கடன் எழுதிப் பக்கங்கள் கிழிந்துபோகும் தொல்லை இனி வேண்டாம். கஸ்டமர் பெயரில் வரவு-செலவு வைத்து ஒரே கிளிக்கில் வாட்ஸ்அப் மெசேஜ் அனுப்பலாம்.",
    bullets: ["தனிநபர் டிஜிட்டல் கணக்கு புத்தகம்", "ஒரே கிளிக்கில் வாட்ஸ்அப் பேமெண்ட் லிங்க்", "பாக்கி வசூல் இனி ரொம்ப சுலபம்"],
  },
  {
    icon: <Package className="w-6 h-6 text-amber-600" />,
    badge: "சரக்கு இருப்பு எச்சரிக்கை",
    title: "பொருட்கள் தீர்ந்துபோகும் முன் போனில் எச்சரிக்கை!",
    desc: "ஒவ்வொரு பில் போடும்போதும் தானாகவே ஸ்டாக் குறையும். அரிசி, பருப்பு, எண்ணெய் தீரும் முன் போனில் அலர்ட் வரும். கஸ்டமரை பக்கத்துக் கடைக்கு விடாதீர்கள்!",
    bullets: ["நேரடி ஸ்டாக் இருப்பு மதிப்பு", "குறைந்த இருப்பு எச்சரிக்கை (Low-Stock)", "பொருட்கள் வகைப்பாடு (Category-wise)"],
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    badge: "தினசரி லாபக் கணக்கு",
    title: "இன்றைய மொத்த விற்பனை & லாபம் உடனே தெரியும்!",
    desc: "கடை மூடும் போது மொத்த விற்பனை எவ்வளவு, கல்லாவில் ரொக்கம் எவ்வளவு, கூகுள் பே / ஃபோன்பே UPI எவ்வளவு என்று கணக்கு பார்க்க கால்குலேட்டர் தட்ட வேண்டாம்.",
    bullets: ["மொத்த விற்பனை & செலவு கணக்கு", "ரொக்கம் vs UPI தனித்தனி அறிக்கை", "சிக்கலான கணக்குகள் இல்லை"],
  },
];

const tamilTowns = [
  "சென்னை (Chennai)",
  "கோயம்புத்தூர் (Coimbatore)",
  "மதுரை (Madurai)",
  "திருச்சி (Trichy)",
  "சேலம் (Salem)",
  "திருப்பூர் (Tiruppur)",
  "ஈரோடு (Erode)",
  "திருநெல்வேலி (Tirunelveli)",
  "வேலூர் (Vellore)",
  "திண்டுக்கல் (Dindigul)",
  "தஞ்சாவூர் (Thanjavur)",
  "கரூர் (Karur)",
];

const tamilShopTypes = [
  { name: "மளிகைக் கடைகள் (Maligai Kadai)", desc: "தினசரி மளிகைப் பொருட்கள், தானியங்கள் & எண்ணெய்கள்" },
  { name: "ப்ரொவிஷன் ஸ்டோர்கள் (Provision Stores)", desc: "அரிசி, பருப்பு, மசாலா & வீட்டு உபயோகப் பொருட்கள்" },
  { name: "மினி சூப்பர் மார்க்கெட்டுகள் (Mini Marts)", desc: "பார்கோடு பில்லிங் & வேகமான கவுண்டர் செக்-அவுட்" },
  { name: "நாட்டு மருந்துக் கடைகள் & காய்கறி கடைகள்", desc: "எடை மற்றும் எண்ணிக்கைப் பில்லிங்" },
  { name: "அரிசி மண்டிகள் & எண்ணெய் டிப்போக்கள்", desc: "மொத்த மற்றும் சில்லறை விற்பனை பில்" },
  { name: "பெட்டிக்கடை & பேக்கரிகள்", desc: "3-வினாடி வேகமான பணப் பரிவர்த்தனை" },
];

const tamilFaqs = [
  {
    q: "மளிகைக் கடை பில்லிங் ஆப் உண்மையிலேயே 100% இலவசமா?",
    a: "ஆம், முற்றிலும் இலவசம்! மாதாந்திர கட்டணம் (Monthly Subscription) கிடையாது, வருடாந்திர புதுப்பித்தல் கட்டணம் கிடையாது, பில் ஒன்றுக்கு கமிஷன் கிடையாது. கூகுள் பிளே ஸ்டோரிலிருந்து இலவசமாக பதிவிறக்கம் செய்து வாழ்நாள் முழுவதும் பயன்படுத்தலாம்.",
  },
  {
    q: "இன்டர்நெட் (Mobile Data / Wi-Fi) இல்லாமலும் பில் போட முடியுமா?",
    a: "கட்டாயமாக முடியும்! MyShop 100% ஆஃப்லைன்-முதல் (Offline-first) ஆப். உங்கள் போனிலேயே உள்ள பாதுகாப்பான SQLite டேட்டாபேஸில் பொருட்கள், விலைகள் மற்றும் பில்கள் சேமிக்கப்படும். கரண்ட் கட் ஆனாலோ நெட் இல்லையென்றாலோ கவலைப்பட வேண்டாம்.",
  },
  {
    q: "பார்கோடு ஸ்கேனர் மெஷின் தனியாக வாங்க வேண்டுமா?",
    a: "தேவையே இல்லை! உங்கள் ஆண்ட்ராய்டு ஸ்மார்ட்போனின் கேமராவே அதிவேக பார்கோடு ஸ்கேனராகச் செயல்படும். பாக்கெட் மீது கேமராவைக் காட்டினால் 0.2 வினாடியில் தானாகவே பொருள் பெயர் மற்றும் விலை கார்ட்டில் சேர்ந்துவிடும்.",
  },
  {
    q: "எந்த ப்ளூடூத் பிரிண்டர் இதற்கு பொருந்தும்?",
    a: "அமேசான், ஃபிளிப்கார்ட் அல்லது லோக்கல் மார்க்கெட்டில் கிடைக்கும் அனைத்து 58mm (2-இன்ச்) மற்றும் 80mm (3-இன்ச்) ESC/POS ப்ளூடூத் தெர்மல் பிரிண்டர்களும் MyShop உடன் 100% உடனடியாக வேலை செய்யும் (TVS, Everycom, NGX, POSIFLEX, HOIN).",
  },
  {
    q: "வாடிக்கையாளர் கடன் பாக்கியை வாட்ஸ்அப்பில் எப்படி வசூலிப்பது?",
    a: "கஸ்டமர் கடன் வாங்கும்போது ஆப்பில் அவரது பெயரில் பதிவு செய்துகொள்ளலாம். 'Remind' பொத்தானைத் தட்டினால், அவரது கடன் தொகை மற்றும் பில் விவரங்களுடன் கூடிய மரியாதையான தமிழ்/ஆங்கில மெசேஜ் வாட்ஸ்அப்பில் தானாகத் தயாராகிவிடும். ஒரே கிளிக்கில் அனுப்பிவிடலாம்.",
  },
  {
    q: "கடையின் பெயர், போன் நம்பர் & ஜிஎஸ்டி பில்லில் வருமா?",
    a: "நிச்சயமாக வரும்! ஆப்பின் Settings பகுதிக்குச் சென்று உங்கள் கடையின் பெயர், முகவரி, தொலைபேசி எண் மற்றும் ஜிஎஸ்டி எண் (இருந்தால்) பதிவு செய்யலாம். உங்கள் கடை லோகோவையும் ரசீதில் அச்சிடலாம்.",
  },
];

export default function MaligaiKadaiBillingAppPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://myshop.sathishdev.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "மளிகைக் கடை பில்லிங் ஆப்",
        "item": "https://myshop.sathishdev.in/maligai-kadai-billing-app",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tamilFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-white">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <Link href="/" className="hover:text-emerald-700 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-emerald-800 font-extrabold">மளிகைக் கடை பில்லிங் ஆப் (Tamil Nadu)</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="pt-8 pb-16 md:py-20 bg-gradient-to-b from-emerald-50 via-teal-50/40 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7">
                {/* Tamil Trust Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-5 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span>தமிழ்நாடு மளிகைக் கடைகளுக்கு 100% இலவச பில்லிங் ஆப்</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.2]">
                  உங்கள் ஆண்ட்ராய்டு போனை ஸ்மார்ட்{" "}
                  <span className="text-emerald-700 relative inline-block">
                    மளிகைக் கடை பில்லிங்
                  </span>{" "}
                  மெஷினாக மாற்றுங்கள்!
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-xl text-slate-700 font-medium mt-6 leading-relaxed">
                  கம்ப்யூட்டர் வாங்க ₹35,000 செலவு செய்ய வேண்டாம். உங்கள் ஆண்ட்ராய்டு ஸ்மார்ட்போனிலேயே
                  <strong> 3 வினாடியில் பில் போடலாம்</strong>, கேமரா மூலம் பார்கோடு ஸ்கேன் செய்யலாம்,
                  ப்ளூடூத் பிரிண்டரில் ரசீது கொடுக்கலாம் மற்றும் வாடிக்கையாளர் உத்தரி (கடன்) கணக்கை
                  வாட்ஸ்அப்பில் வசூலிக்கலாம்!
                </p>

                {/* Tamil Highlight Pill Box */}
                <div className="mt-5 p-4 rounded-2xl bg-white border-2 border-emerald-300 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-black uppercase text-slate-500 tracking-wider">
                      செலவு இல்லாத டிஜிட்டல் பில்லிங்
                    </div>
                    <div className="text-sm sm:text-base font-black text-slate-900 mt-0.5">
                      மாதாந்திர சந்தா கட்டணம் ₹0 • கமிஷன் ₹0
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-black text-xs">
                    100% Free Forever
                  </span>
                </div>

                {/* Action CTA Buttons */}
                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-base shadow-xl flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5"
                  >
                    <Download className="w-5 h-5 text-emerald-400" />
                    <span>இலவசமாக டவுன்லோட் செய்யுங்கள் (Google Play)</span>
                  </a>
                  <Link
                    href="/demo"
                    className="px-6 py-4 rounded-2xl bg-white border-2 border-emerald-300 text-emerald-800 font-extrabold text-base flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all"
                  >
                    <span>டெமோ பார்க்க (Try Demo)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Direct Phone / WhatsApp Assistance for Tamil merchants */}
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-bold text-slate-600">
                  <a
                    href="tel:+919488250293"
                    className="flex items-center gap-1.5 text-slate-800 hover:text-emerald-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>நேரடி போன் உதவி: +91 94882 50293</span>
                  </a>
                  <a
                    href="https://wa.me/919488250293?text=மளிகைக்%20கடை%20பில்லிங்%20ஆப்%20பற்றி%20தெரிந்துகொள்ள%20விரும்புகிறேன்"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-800 hover:text-emerald-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    <span>வாட்ஸ்அப் உதவி</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Visual App Screen */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[280px] drop-shadow-2xl">
                  <Image
                    src="/images/screen-pos-billing.png"
                    alt="MyShop மளிகைக் கடை பில்லிங் ஸ்கிரீன்"
                    width={700}
                    height={1500}
                    className="w-full h-auto object-contain block"
                    priority
                  />
                  <div className="absolute -bottom-4 -left-6 bg-slate-900 text-white p-3.5 rounded-2xl border-2 border-emerald-400 shadow-xl max-w-[200px]">
                    <div className="text-[10px] text-emerald-400 font-extrabold uppercase">100% ஆஃப்லைன்</div>
                    <div className="text-xs font-black mt-0.5">கரண்ட் போனாலும் பில்லிங் ஓடும்!</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Tamil Nadu Coverage Bar */}
        <section className="py-12 bg-slate-900 text-white border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-black text-xs uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5" />
                தமிழ்நாடு முழுவதும் உள்ள மளிகைக் கடைகள்
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                சென்னை முதல் குமரி வரை 1,000+ மளிகைக் கடைகளில் பயன்பாட்டில் உள்ளது
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {tamilTowns.map((town) => (
                <span
                  key={town}
                  className="px-4 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-xs sm:text-sm font-bold text-slate-200"
                >
                  📍 {town}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 6 Key Features Section in Tamil */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 font-extrabold text-xs uppercase tracking-wider mb-4 border border-emerald-300">
                சிறப்பம்சங்கள்
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                மளிகைக் கடைக்குத் தேவையான அனைத்தும் உங்கள் போனில்!
              </h2>
              <p className="text-base text-slate-600 font-medium mt-3">
                கம்ப்யூட்டர் அறிவு தேவையில்லை. எவரும் 1 நிமிடத்தில் பில் போடக் கற்றுக்கொள்ளலாம்.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tamilFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl p-6 sm:p-7 border-2 border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all flex flex-col justify-between bg-slate-50/50"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-white shadow-sm border border-slate-200">
                        {feat.icon}
                      </div>
                      <span className="text-[11px] font-black tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                        {feat.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium mt-3 leading-relaxed">
                      {feat.desc}
                    </p>

                    <ul className="mt-5 space-y-2 text-xs font-bold text-slate-700">
                      {feat.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Suitable Store Types in Tamil Nadu */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                இந்த ஆப் யாருக்கெல்லாம் பொருந்தும்?
              </h2>
              <p className="text-slate-600 font-medium mt-2 text-sm sm:text-base">
                தமிழ்நாட்டில் உள்ள அனைத்து சில்லறை மற்றும் மொத்த விற்பனைக் கடைகளுக்கும் உகந்தது.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {tamilShopTypes.map((st) => (
                <div
                  key={st.name}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5"
                >
                  <Store className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-base font-extrabold text-slate-900">{st.name}</div>
                    <div className="text-xs text-slate-600 font-medium mt-1">{st.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Comparison Box */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              பழைய கம்ப்யூட்டர் பில்லிங் vs MyShop போன் பில்லிங்
            </h2>
            <p className="text-slate-600 font-medium mb-10 max-w-2xl mx-auto text-sm sm:text-base">
              ₹35,000 கம்ப்யூட்டர் வாங்குவதைத் தவிர்த்து உங்கள் கடைப் பணத்தைச் சேமியுங்கள்!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="p-6 rounded-3xl bg-rose-50/70 border-2 border-rose-200">
                <div className="text-xs font-black uppercase text-rose-700 tracking-wider">பழைய முறை (Computer Billing)</div>
                <div className="text-2xl font-black text-slate-900 mt-2">₹ 35,000+ ஆரம்பச் செலவு</div>
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <li>❌ கம்ப்யூட்டர் & மானிட்டர்: ₹ 25,000</li>
                  <li>❌ பார்கோடு ஸ்கேனர் மெஷின்: ₹ 3,000</li>
                  <li>❌ யுபிஎஸ் இன்வெர்ட்டர் பேக்கப்: ₹ 3,500</li>
                  <li>❌ வருடாந்திர சாப்ட்வேர் ரினிவல்: ₹ 5,000/ஆண்டு</li>
                  <li>❌ கரண்ட் கட் ஆனால் பில் போட முடியாது</li>
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-emerald-50 border-2 border-emerald-400 relative shadow-lg">
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-600 text-white font-black text-xs">
                  Best Choice
                </div>
                <div className="text-xs font-black uppercase text-emerald-800 tracking-wider">MyShop ஆண்ட்ராய்டு ஆப்</div>
                <div className="text-2xl font-black text-emerald-800 mt-2">₹ 0 (100% இலவசம்)</div>
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-bold text-slate-800">
                  <li>✅ உங்கள் கையில் உள்ள ஆண்ட்ராய்டு போன் போதும்</li>
                  <li>✅ போன் கேமராவே பார்கோடு ஸ்கேனர்</li>
                  <li>✅ போன் பேட்டரி நாள் முழுவதும் தாங்கும்</li>
                  <li>✅ மாதாந்திர/வருடாந்திர கட்டணம் ₹0 (இலவசம்)</li>
                  <li>✅ 100% ஆஃப்லைன் (கரண்ட் கட் ஆனாலும் பில்லிங் ஓடும்)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tamil FAQs Section */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQ)
              </h2>
              <p className="text-slate-600 font-medium mt-2 text-sm sm:text-base">
                மளிகைக் கடை உரிமையாளர்களின் பொதுவான சந்தேகங்கள்
              </p>
            </div>

            <div className="space-y-4">
              {tamilFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm"
                >
                  <h3 className="font-extrabold text-slate-900 text-base mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Conversion CTA in Tamil */}
        <section className="py-20 bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-black text-xs uppercase tracking-wider mb-4 border border-emerald-400/30">
              <Sparkles className="w-4 h-4" /> இன்றே தொடங்குங்கள்
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              நோட்டுப் புத்தகத்தில் பில் எழுதுவதை நிறுத்துங்கள்! <br />
              <span className="text-emerald-400">இன்றே உங்கள் போனில் பில் போடத் தொடங்குங்கள்!</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-medium mt-4">
              தமிழ்நாட்டின் நவீன மளிகை, ப்ரொவிஷன் மற்றும் சூப்பர் மார்க்கெட் உரிமையாளர்களுடன் இணையுங்கள். 100% இலவசம்.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base shadow-2xl flex items-center justify-center gap-3 transition-all hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Google Play Store-ல் இலவசமாக டவுன்லோட்</span>
              </a>
              <a
                href="tel:+919488250293"
                className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-base flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>உதவிக்கு அழைக்க: 94882 50293</span>
              </a>
            </div>

            <div className="mt-6 flex justify-center gap-6 text-xs text-emerald-300 font-bold">
              <span>✓ 100% இலவசம்</span>
              <span>✓ மாதாந்திரக் கட்டணம் இல்லை</span>
              <span>✓ தமிழில் வாடிக்கையாளர் உதவி</span>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
