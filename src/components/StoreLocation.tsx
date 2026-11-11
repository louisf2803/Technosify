import React from 'react';
import { STORE_INFO } from '../data/mockData';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  ExternalLink,
  Navigation,
  MessageCircle,
  ShoppingBag,
  Building2,
} from 'lucide-react';

interface StoreLocationProps {
  onOpenWhatsApp?: (topic?: string, product?: string) => void;
}

export const StoreLocation: React.FC<StoreLocationProps> = ({ onOpenWhatsApp }) => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Top Royal Blue Header Banner */}
      <section className="bg-[#0026FF] text-white py-12 sm:py-16 border-b-2 border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white text-[#0026FF] text-xs font-extrabold uppercase tracking-wider">
              Lokasi Resmi Surabaya
            </span>
            <h1 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight leading-none">
              HUBUNGI &amp; KUNJUNGI TECHNOSIFY
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Berlokasi strategis di pusat niaga IT Ruko Mangga Dua Wonokromo
              Surabaya. Melayani pembelian online seluruh Indonesia via Tokopedia &amp;
              Shopee, pengiriman Instant Surabaya, serta pengadaan kantor B2B.
            </p>
          </div>
          <img
            src="/mascot/mascot-wave.png"
            alt="Technosify Contact Robot"
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain bg-white rounded-3xl p-3 border-2 border-slate-900 shadow-[6px_6px_0px_#090D16]"
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Store Details Card */}
          <div className="lg:col-span-6 space-y-5">
            <div className="tech-card rounded-3xl p-6 sm:p-8 bg-white space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#0026FF] block mb-1">
                  KANTOR &amp; GUDANG DISTRIBUSI
                </span>
                <h2 className="text-2xl font-black text-slate-900">
                  {STORE_INFO.name} ({STORE_INFO.city})
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#0026FF] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase text-slate-500">
                      Alamat Lengkap
                    </div>
                    <p className="text-sm font-bold text-slate-900 mt-0.5 leading-relaxed">
                      {STORE_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#0026FF] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase text-slate-500">
                      WhatsApp Customer Care &amp; B2B
                    </div>
                    <p className="text-base font-black text-[#0026FF] mt-0.5">
                      {STORE_INFO.phone}
                    </p>
                    <p className="text-xs text-slate-500">
                      Fast response untuk cek stok, konsultasi spek, &amp; permintaan
                      Faktur Pajak.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#0026FF] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase text-slate-500">
                      Jam Operasional &amp; Pengiriman
                    </div>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      {STORE_INFO.operatingHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#0026FF] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase text-slate-500">
                      Email Penawaran Korporasi
                    </div>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      {STORE_INFO.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() =>
                    onOpenWhatsApp
                      ? onOpenWhatsApp('stok-katalog')
                      : window.open(
                          `https://wa.me/${STORE_INFO.whatsappRaw}`,
                          '_blank'
                        )
                  }
                  className="py-3 px-4 rounded-xl bg-[#0026FF] hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat WhatsApp Sekarang
                </button>

                <a
                  href={STORE_INFO.socials.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl border-2 border-slate-900 hover:bg-slate-50 text-slate-900 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#0026FF]" />
                  Petunjuk Arah Google Maps
                </a>
              </div>
            </div>

            {/* Official Marketplace Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={STORE_INFO.socials.tokopedia}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-card rounded-2xl p-5 bg-white flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500">
                      Toko Resmi Tokopedia
                    </div>
                    <div className="text-sm font-extrabold text-slate-900 group-hover:text-emerald-700">
                      tokopedia.com/technosify
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
              </a>

              <a
                href={STORE_INFO.socials.shopee}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-card rounded-2xl p-5 bg-white flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-black">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500">
                      Toko Resmi Shopee
                    </div>
                    <div className="text-sm font-extrabold text-slate-900 group-hover:text-orange-600">
                      shopee.co.id/technosify_id
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-orange-600" />
              </a>
            </div>
          </div>

          {/* Right: Interactive Map Embed & B2B Note */}
          <div className="lg:col-span-6 space-y-5">
            <div className="rounded-3xl border-[3px] border-[#0026FF] shadow-[6px_6px_0px_#0026FF] overflow-hidden bg-slate-100">
              <iframe
                title="Peta Lokasi Technosify Ruko Mangga Dua Surabaya"
                src="https://www.google.com/maps?q=Ruko+Mangga+Dua+Blok+A6+No+3+Jagir+Wonokromo+Surabaya&output=embed"
                className="w-full h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-6 rounded-2xl bg-[#EEF2FF] border-2 border-[#0026FF] flex items-start gap-4">
              <Building2 className="w-6 h-6 text-[#0026FF] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  Kunjungan Ambil Sendiri &amp; Pengadaan Instansi
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Untuk pengambilan unit langsung di Ruko Mangga Dua Blok A6 No. 3
                  Surabaya atau diskusi pengadaan proyek B2B, mohon konfirmasi jadwal
                  dan ketersediaan unit lebih dulu melalui WhatsApp{' '}
                  <strong className="text-slate-900">{STORE_INFO.phone}</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
