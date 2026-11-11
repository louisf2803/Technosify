import React from 'react';
import { PRODUCTS, STORE_INFO, Product } from '../data/mockData';
import { ProductCard } from './ProductCard';
import { TechnosifyLogo } from './TechnosifyLogo';
import {
  FileCheck2,
  Building2,
  ShieldCheck,
  FileSpreadsheet,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';

interface TkdnPageProps {
  onSelectProductDetail: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  quoteProductIds: string[];
  onOpenQuoteDrawer: () => void;
  onOpenWhatsApp: (topic?: string, product?: string) => void;
}

export const TkdnPage: React.FC<TkdnPageProps> = ({
  onSelectProductDetail,
  onAddToQuote,
  quoteProductIds,
  onOpenQuoteDrawer,
  onOpenWhatsApp,
}) => {
  const tkdnProducts = PRODUCTS.filter((p) => p.isTkdn);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* TKDN Hero Banner inspired by Tkdn.png & Artboard 1.png */}
      <section className="bg-[#0026FF] text-white py-12 sm:py-16 border-b-2 border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#0026FF] font-extrabold text-xs uppercase tracking-wider">
                <FileCheck2 className="w-4 h-4" />
                <span>Pengadaan Instansi, BUMN, Sekolah &amp; Korporasi</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black italic uppercase leading-none tracking-tight">
                TKDN READY!!
                <span className="block text-2xl sm:text-3xl text-blue-200 mt-2">
                  RESELLER &amp; PENGADAAN B2B WELCOME
                </span>
              </h1>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                Seluruh produk di Etalase TKDN Technosify dilengkapi dokumen sertifikat
                TKDN resmi Kemenperin, dukungan penerbitan{' '}
                <strong className="text-white">Faktur Pajak PPN 11%</strong>, Surat
                Penawaran Resmi, dan garansi distributor authorized Indonesia.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={onOpenQuoteDrawer}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-blue-50 text-[#0026FF] font-extrabold text-sm flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Buka Daftar Penawaran B2B ({quoteProductIds.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    onOpenWhatsApp(
                      'pengadaan-b2b',
                      'Permintaan Penawaran TKDN & Faktur Pajak'
                    )
                  }
                  className="px-6 py-3.5 rounded-xl border-2 border-white hover:bg-white/10 text-white font-extrabold text-sm flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Konsultasi Tim B2B via WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Right: Official TKDN Ready Card matching Artboard 1.png */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-[28px] p-6 sm:p-8 border-2 border-slate-900 shadow-[8px_8px_0px_#090D16] relative overflow-hidden">
                <div className="flex justify-end mb-2">
                  <TechnosifyLogo variant="dark" size="sm" />
                </div>
                <div className="text-left">
                  <div className="text-4xl sm:text-5xl font-black text-[#0026FF] tracking-tight leading-none -rotate-2">
                    TKDN
                    <br />
                    READY!!
                  </div>
                  <p className="text-xs font-bold text-slate-600 mt-3 max-w-xs">
                    Sertifikat TKDN + Faktur Pajak PPN + Surat Dukungan Pengadaan Resmi.
                  </p>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div className="space-y-1.5 text-xs font-bold text-slate-800">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0026FF]" />
                      <span>ASUS ExpertBook &amp; ExpertCenter</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0026FF]" />
                      <span>Acer Veriton, TravelMate &amp; Altos</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0026FF]" />
                      <span>Lenovo ThinkCentre &amp; MSI Pro</span>
                    </div>
                  </div>
                  <img
                    src="/mascot/mascot-megaphone.png"
                    alt="Maskot TKDN Technosify"
                    className="w-32 h-32 sm:w-36 sm:h-36 object-contain shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Advantages Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div className="tech-card rounded-2xl p-6 bg-white">
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#0026FF] flex items-center justify-center mb-3">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-1.5">
              Dokumen Sertifikat TKDN Lengkap
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Setiap unit di etalase ini memiliki nilai TKDN resmi yang terdaftar di
              Kemenperin untuk kelengkapan administrasi pengadaan instansi.
            </p>
          </div>

          <div className="tech-card rounded-2xl p-6 bg-white">
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#0026FF] flex items-center justify-center mb-3">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-1.5">
              Faktur Pajak PPN &amp; Quotation Resmi
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Kami menerbitkan Surat Penawaran (Quotation) berstempel resmi, Invoice,
              Surat Jalan, hingga e-Faktur Pajak PPN 11% sesuai NPWP instansi/PT Anda.
            </p>
          </div>

          <div className="tech-card rounded-2xl p-6 bg-white">
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#0026FF] flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-1.5">
              Harga Khusus Proyek &amp; Reseller
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Untuk pembelian kuantitas banyak (tender/proyek kantor/sekolah) maupun
              mitra reseller IT, dapatkan penawaran harga grosir terbaik via WhatsApp.
            </p>
          </div>
        </div>

        {/* Curated TKDN Products Grid */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0026FF] block mb-1">
              KATALOG BERSERTIFIKAT RESMI
            </span>
            <h2 className="text-2xl sm:text-3xl font-black italic uppercase text-slate-900">
              DAFTAR PERANGKAT ETALASE TKDN ({tkdnProducts.length} PRODUK)
            </h2>
          </div>
          <p className="text-xs font-bold text-slate-500">
            Butuh tipe TKDN lain? Hubungi WhatsApp {STORE_INFO.phone}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tkdnProducts.map((product) => (
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
    </div>
  );
};
