import React from 'react';
import {
  CATEGORIES,
  PRODUCTS,
  STORE_INFO,
  THREE_STEPS,
  Product,
  ProductCategory,
} from '../data/mockData';
import { ProductCard } from './ProductCard';
import { PageId } from './Navbar';
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  FileCheck2,
  Truck,
  Headphones,
  Award,
} from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageId) => void;
  onSelectCategory: (category: ProductCategory | 'all', brand?: string) => void;
  onSelectProductDetail: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  quoteProductIds: string[];
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  onSelectCategory,
  onSelectProductDetail,
  onAddToQuote,
  quoteProductIds,
}) => {
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  const pillarIcons = [
    <FileCheck2 key="p1" className="w-5 h-5 text-[#0026FF]" />,
    <ShieldCheck key="p2" className="w-5 h-5 text-[#0026FF]" />,
    <Award key="p3" className="w-5 h-5 text-[#0026FF]" />,
    <Truck key="p4" className="w-5 h-5 text-[#0026FF]" />,
    <Headphones key="p5" className="w-5 h-5 text-[#0026FF]" />,
  ];

  return (
    <div className="bg-white">
      {/* 1. ELECTRIC ROYAL BLUE HERO SECTION MATCHING IMAGE.PNG */}
      <section className="bg-[#0026FF] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Slogan Pill, Italic Bold Headline, Subtext, 2 Buttons */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block">
                <span className="px-4 py-1.5 rounded-full bg-white text-[#0026FF] font-extrabold text-xs sm:text-sm tracking-tight shadow-xs">
                  {STORE_INFO.slogan}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black italic uppercase leading-[1.04] tracking-tight text-white">
                PERANGKAT KERJA YANG BISA KAMU PERCAYA.
              </h1>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                Laptop, all in one, PC, server, dan printer dari ASUS, Lenovo, Acer, Dell,
                dan merek lain. Susun daftar kebutuhanmu, minta penawaran lewat WhatsApp.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('all');
                    onNavigate('katalog');
                  }}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-blue-50 text-[#0026FF] font-extrabold text-sm transition-all cursor-pointer shadow-sm"
                >
                  Lihat Katalog
                </button>

                <a
                  href={STORE_INFO.socials.tokopedia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl border-2 border-white/80 hover:border-white hover:bg-white/10 text-white font-extrabold text-sm transition-all inline-flex items-center gap-2"
                >
                  <span>Toko di Tokopedia</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: White Mascot & Tokopedia Stats Card matching image.png */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-[28px] p-6 sm:p-8 border-2 border-slate-900 shadow-[8px_8px_0px_#090D16] text-slate-900">
                <div className="flex justify-center py-2">
                  <img
                    src="/mascot/mascot-peace.png"
                    alt="Maskot Robot Technosify"
                    className="w-56 h-56 sm:w-64 sm:h-64 object-contain drop-shadow-sm"
                  />
                </div>

                {/* 3 Stat Boxes at Bottom of Card */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="bg-[#EEF2FF] border border-blue-200 rounded-xl p-3 sm:p-3.5">
                    <div className="text-xl sm:text-2xl font-black text-[#0026FF] leading-none">
                      {STORE_INFO.stats.rating}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-600 mt-1">
                      rating, {STORE_INFO.stats.reviews}
                    </div>
                  </div>

                  <div className="bg-[#EEF2FF] border border-blue-200 rounded-xl p-3 sm:p-3.5">
                    <div className="text-xl sm:text-2xl font-black text-[#0026FF] leading-none">
                      {STORE_INFO.stats.sold}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-600 mt-1">
                      {STORE_INFO.stats.soldLabel}
                    </div>
                  </div>

                  <div className="bg-[#EEF2FF] border border-blue-200 rounded-xl p-3 sm:p-3.5">
                    <div className="text-xl sm:text-2xl font-black text-[#0026FF] leading-none">
                      {STORE_INFO.stats.etalase}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-600 mt-1">
                      {STORE_INFO.stats.etalaseLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND PARTNERS BAR MATCHING IMAGE.PNG */}
      <section className="border-b border-slate-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2">
            {STORE_INFO.brandPartners.map((brand) => (
              <button
                key={brand}
                type="button"
                onClick={() => {
                  onSelectCategory('all', brand);
                  onNavigate('katalog');
                }}
                className="text-xs sm:text-sm font-bold text-slate-700 hover:text-[#0026FF] transition-colors cursor-pointer py-1"
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BELANJA PER KATEGORI MATCHING IMAGE.PNG */}
      <section className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tight text-slate-900">
            BELANJA PER KATEGORI
          </h2>
          <button
            type="button"
            onClick={() => {
              onSelectCategory('all');
              onNavigate('katalog');
            }}
            className="text-xs sm:text-sm font-extrabold text-[#0026FF] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Buka Katalog Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                onNavigate('katalog');
              }}
              className="tech-card rounded-2xl p-6 cursor-pointer flex flex-col justify-between bg-white"
            >
              <div>
                <span className="text-xs font-extrabold text-[#0026FF] block mb-1">
                  {cat.number}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#0026FF]">
                  {cat.countLabel}
                </span>
                <ArrowRight className="w-4 h-4 text-[#0026FF]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PRODUK PILIHAN MATCHING IMAGE.PNG */}
      <section className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tight text-slate-900">
            PRODUK PILIHAN
          </h2>
          <button
            type="button"
            onClick={() => {
              onSelectCategory('all');
              onNavigate('katalog');
            }}
            className="text-xs sm:text-sm font-extrabold text-[#0026FF] hover:underline cursor-pointer"
          >
            Lihat semua produk
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectDetail={onSelectProductDetail}
              onAddToQuote={onAddToQuote}
              isInQuote={quoteProductIds.includes(product.id)}
            />
          ))}
        </div>
      </section>

      {/* 5. TKDN READY!! INSTANSI BANNER MATCHING IMAGE.PNG & TKDN.PNG */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border-[4px] border-[#0026FF] bg-white p-6 sm:p-10 lg:p-12 shadow-[0_10px_0_0_#0026FF]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block">
                UNTUK PENGADAAN INSTANSI &amp; KORPORASI
              </span>

              <h2 className="text-5xl sm:text-6xl font-black italic uppercase leading-[0.95] text-[#0026FF] tracking-tight">
                TKDN
                <br />
                READY!!
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl">
                Etalase TKDN kami berisi produk yang disertai sertifikatnya, jadi tim
                pengadaan tidak perlu mengejar dokumen satu per satu.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0026FF] mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-slate-900">Sertifikat tersedia.</strong> Produk
                    di etalase TKDN disertai sertifikatnya.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0026FF] mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-slate-900">Penawaran resmi &amp; Faktur Pajak.</strong>{' '}
                    Untuk jumlah besar atau proyek instansi, kirim daftar penawaran.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0026FF] mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-slate-900">Merek dikenal tim IT.</strong> ASUS,
                    Lenovo, Acer, MSI, dan Dell.
                  </span>
                </li>
              </ul>

              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('tkdn')}
                  className="px-6 py-3.5 rounded-xl bg-[#0026FF] hover:bg-blue-700 text-white font-extrabold text-sm transition-all cursor-pointer shadow-xs"
                >
                  Buka Etalase TKDN
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('info-order')}
                  className="px-5 py-3.5 rounded-xl border-2 border-slate-800 hover:bg-slate-50 text-slate-900 font-bold text-sm transition-all cursor-pointer"
                >
                  Pelajari Cara Order &amp; Pengiriman
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <img
                src="/mascot/mascot-megaphone.png"
                alt="Robot Megaphone TKDN Ready"
                className="w-60 h-60 sm:w-72 sm:h-72 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. TIGA LANGKAH DARI PILIH SAMPAI BARANG TIBA MATCHING IMAGE.PNG */}
      <section className="bg-[#EEF2FF] border-t border-b border-slate-300 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0026FF] block mb-2">
                ALUR BELANJA &amp; PENGADAAN MUDAH
              </span>
              <h2 className="text-2xl sm:text-4xl font-black italic uppercase tracking-tight text-slate-900 max-w-xl leading-tight">
                TIGA LANGKAH DARI PILIH SAMPAI BARANG TIBA
              </h2>
            </div>
            <img
              src="/mascot/mascot-cool.png"
              alt="Technosify Cool Robot"
              className="w-28 h-28 sm:w-36 sm:h-36 object-contain self-end sm:self-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {THREE_STEPS.map((item) => (
              <div
                key={item.step}
                className="tech-card rounded-2xl p-6 bg-white flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-lg bg-[#0026FF] text-white font-black text-xs mb-4">
                    LANGKAH {item.step}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Terjamin Resmi &amp; Aman</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 5 PILAR KEUNGGULAN TECHNOSIFY (FROM WELCOMING PAGE.PNG) */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-3.5 py-1 rounded-full bg-[#EEF2FF] text-[#0026FF] text-xs font-extrabold uppercase tracking-wider">
            Mengapa Technosify Surabaya?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black italic uppercase text-slate-900 mt-3">
            STANDAR LAYANAN RESMI KAMI
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STORE_INFO.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-5 rounded-2xl border-2 border-slate-800 bg-white shadow-[3px_4px_0px_#0026FF] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-3">
                  {pillarIcons[idx]}
                </div>
                <h3 className="font-black text-xs sm:text-sm text-slate-900 uppercase tracking-tight mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
