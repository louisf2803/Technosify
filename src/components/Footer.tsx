import React from 'react';
import { STORE_INFO, CATEGORIES, ProductCategory } from '../data/mockData';
import { TechnosifyLogo } from './TechnosifyLogo';
import { PageId } from './Navbar';
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  MessageCircle,
  FileCheck2,
  ShieldCheck,
} from 'lucide-react';
import { assetUrl } from '../utils/assets';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onSelectCategory: (category: ProductCategory | 'all') => void;
  onOpenWhatsApp: (topic?: string, product?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectCategory,
  onOpenWhatsApp,
}) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0026FF] text-white border-t-[3px] border-slate-900">
      {/* Top CTA Strip inside Footer */}
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <img
              src={assetUrl('mascot/mascot-thankyou.png')}
              alt="Technosify Robot Thank You"
              className="w-20 h-20 object-contain bg-white rounded-2xl p-1.5 border-2 border-slate-900 shrink-0"
            />
            <div>
              <span className="inline-block px-3 py-0.5 rounded-full bg-white text-[#0026FF] text-[10px] font-extrabold uppercase tracking-wider mb-1">
                {STORE_INFO.slogan}
              </span>
              <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-tight">
                BUTUH PENAWARAN RESMI ATAU FAKTUR PAJAK PPN?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
                Tim sales &amp; B2B Technosify Surabaya siap membantu pengadaan kantor,
                sekolah, dan instansi Anda.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenWhatsApp('pengadaan-b2b')}
              className="px-5 py-3 rounded-xl bg-white hover:bg-blue-50 text-[#0026FF] font-extrabold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi WhatsApp {STORE_INFO.phone}</span>
            </button>
            <a
              href={STORE_INFO.socials.tokopedia}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl border-2 border-white hover:bg-white/10 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2"
            >
              <span>Toko di Tokopedia</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Col 1: Brand & Address */}
        <div className="lg:col-span-4 space-y-4">
          <TechnosifyLogo variant="light" size="lg" showSlogan />
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            Mitra perangkat kerja &amp; IT terpercaya di Surabaya. Menyediakan Laptop,
            All in One, Desktop PC, Server Enterprise, dan Printer bergaransi resmi
            lengkap dengan Etalase TKDN &amp; Faktur Pajak.
          </p>
          <div className="space-y-2 text-xs text-blue-100 pt-1">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>{STORE_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white shrink-0" />
              <span className="font-bold text-white">{STORE_INFO.phone}</span>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>{STORE_INFO.operatingHours}</span>
            </div>
          </div>
        </div>

        {/* Col 2: Halaman Website */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-200">
            Navigasi Halaman
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm font-bold">
            <li>
              <button
                type="button"
                onClick={() => handleNav('beranda')}
                className="hover:underline cursor-pointer"
              >
                Beranda Utama
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  onSelectCategory('all');
                  handleNav('katalog');
                }}
                className="hover:underline cursor-pointer"
              >
                Katalog Produk Lengkap
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNav('tkdn')}
                className="hover:underline cursor-pointer flex items-center gap-1.5"
              >
                <span>Etalase TKDN &amp; Pengadaan Instansi</span>
                <span className="px-1.5 py-0.2 bg-white text-[#0026FF] rounded text-[10px] font-black">
                  READY
                </span>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNav('info-order')}
                className="hover:underline cursor-pointer"
              >
                Cara Order, Jam Kirim &amp; FAQ
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNav('blog')}
                className="hover:underline cursor-pointer"
              >
                Blog &amp; Review Perangkat IT
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNav('kontak')}
                className="hover:underline cursor-pointer"
              >
                Lokasi Toko &amp; Kontak Surabaya
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Kategori Produk */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-200">
            Kategori Produk
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm font-bold">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory(cat.id);
                    handleNav('katalog');
                  }}
                  className="hover:underline cursor-pointer text-left"
                >
                  {cat.number} {cat.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Official Marketplace & Jaminan */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-200">
            Official Marketplace
          </h4>
          <div className="space-y-2.5">
            <a
              href={STORE_INFO.socials.tokopedia}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3.5 rounded-xl bg-white text-slate-900 font-extrabold text-xs flex items-center justify-between hover:bg-blue-50 transition-colors"
            >
              <span>Tokopedia: technosify</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#0026FF]" />
            </a>
            <a
              href={STORE_INFO.socials.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3.5 rounded-xl bg-white/15 border border-white/30 text-white font-extrabold text-xs flex items-center justify-between hover:bg-white/25 transition-colors"
            >
              <span>Shopee: technosify_id</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 text-[11px] text-blue-100 space-y-1.5 mt-3">
            <div className="flex items-center gap-1.5 font-extrabold text-white">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Original &amp; Garansi Resmi</span>
            </div>
            <div className="flex items-center gap-1.5 font-extrabold text-white">
              <FileCheck2 className="w-4 h-4" />
              <span>Bisa Terbit Faktur Pajak PPN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/20 bg-[#001EC7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-100">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-white">Technosify</strong>{' '}
            ({STORE_INFO.slogan}) — Ruko Mangga Dua Blok A6 No. 3, Surabaya.
          </p>
          <p className="font-semibold">
            Melayani Pengiriman Seluruh Indonesia &amp; Pengadaan Instansi B2B
          </p>
        </div>
      </div>
    </footer>
  );
};
