import React, { useState } from 'react';
import { STORE_INFO, THREE_STEPS, FAQ_LIST } from '../data/mockData';
import {
  Clock,
  PackageCheck,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { assetUrl } from '../utils/assets';

interface OrderGuideProps {
  onOpenWhatsApp: (topic?: string, product?: string) => void;
}

export const OrderGuide: React.FC<OrderGuideProps> = ({ onOpenWhatsApp }) => {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_LIST[0].id);
  const [selectedFaqCat, setSelectedFaqCat] = useState<string>('all');

  const filteredFaqs = FAQ_LIST.filter(
    (item) => selectedFaqCat === 'all' || item.category === selectedFaqCat
  );

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Top Royal Blue Header Banner */}
      <section className="bg-[#0026FF] text-white py-12 sm:py-16 border-b-2 border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white text-[#0026FF] text-xs font-extrabold uppercase tracking-wider">
              Panduan Resmi Technosify
            </span>
            <h1 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight leading-none">
              CARA ORDER, JAM KIRIM &amp; FAQ
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Informasi resmi jadwal pengiriman harian, standar pengemasan aman
              (Gratis Bubblewrap &amp; Packing Kayu), aturan komplain wajib video
              unboxing, serta tanya-jawab seputar layanan Technosify Surabaya.
            </p>
          </div>
          <img
            src={assetUrl('mascot/mascot-sign-up.png')}
            alt="Robot Technosify Info"
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain bg-white rounded-3xl p-3 border-2 border-slate-900 shadow-[6px_6px_0px_#090D16]"
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* 1. 3 LANGKAH CARA ORDER */}
        <section>
          <div className="mb-8">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0026FF] block mb-1">
              PANDUAN TRANSAKSI
            </span>
            <h2 className="text-2xl sm:text-3xl font-black italic uppercase text-slate-900">
              TIGA LANGKAH DARI PILIH SAMPAI BARANG TIBA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {THREE_STEPS.map((s) => (
              <div
                key={s.step}
                className="tech-card rounded-2xl p-6 bg-white flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-lg bg-[#0026FF] text-white font-black text-xs mb-3">
                    LANGKAH {s.step}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#0026FF]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Resmi &amp; Transparan</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. JAM KIRIM & PACKAGING (EXACTLY MATCHING INFO.PNG) */}
        <section className="rounded-[32px] bg-[#0026FF] text-white p-6 sm:p-10 lg:p-12 border-2 border-slate-900 shadow-[8px_8px_0px_#090D16]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Jam Kirim Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white text-[#0026FF] font-black text-lg uppercase tracking-tight">
                <Clock className="w-5 h-5" />
                <span>JAM KIRIM</span>
              </div>

              <div className="space-y-4">
                {STORE_INFO.shippingSchedule.map((sched) => (
                  <div
                    key={sched.days}
                    className="p-5 rounded-2xl bg-white/10 border-2 border-white/25 backdrop-blur-xs"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-base sm:text-lg font-black uppercase tracking-wide text-white">
                        {sched.days}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-white text-[#0026FF] text-[11px] font-extrabold">
                        {sched.cutoff}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                      {sched.rule}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white text-[#0026FF] font-black text-lg uppercase tracking-tight">
                <PackageCheck className="w-5 h-5" />
                <span>PACKAGING</span>
              </div>

              <div className="space-y-4">
                {STORE_INFO.packagingRules.map((pack) => (
                  <div
                    key={pack.type}
                    className="p-5 rounded-2xl bg-white text-slate-900 border-2 border-slate-900"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                        • {pack.type}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#0026FF] text-[10px] font-extrabold uppercase shrink-0">
                        {pack.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pack.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. ATTENTION !!! (EXACTLY MATCHING ATTENTION!!.PNG) */}
        <section className="rounded-[32px] border-[4px] border-[#0026FF] bg-white p-6 sm:p-10 lg:p-12 shadow-[0_10px_0_0_#0026FF]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#0026FF] text-white font-black italic text-xl sm:text-2xl uppercase tracking-tight">
                <AlertTriangle className="w-6 h-6" />
                <span>ATTENTION !!!</span>
              </div>

              <div className="space-y-4 pt-2">
                {STORE_INFO.attentionRules.map((rule) => (
                  <div
                    key={rule.number}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border-2 border-slate-800"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#0026FF] text-white font-black text-base flex items-center justify-center shrink-0">
                      {rule.number}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        {rule.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <img
                src={assetUrl('mascot/mascot-megaphone.png')}
                alt="Attention Robot Megaphone"
                className="w-56 h-56 sm:w-64 sm:h-64 object-contain"
              />
              <p className="text-xs font-bold text-slate-500 mt-2 max-w-xs">
                Pastikan merekam video unboxing tanpa jeda sejak paket masih tersegel
                demi kenyamanan bersama.
              </p>
            </div>
          </div>
        </section>

        {/* 4. INTERACTIVE FAQ SECTION (MATCHING FAQ.PNG) */}
        <section id="faq">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <img
                src={assetUrl('mascot/mascot-sign-peek.png')}
                alt="FAQ Robot"
                className="w-16 h-16 object-contain shrink-0"
              />
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#0026FF] block">
                  TANYA JAWAB PELANGGAN
                </span>
                <h2 className="text-2xl sm:text-3xl font-black italic uppercase text-slate-900">
                  FREQUENTLY ASKED QUESTIONS (FAQ)
                </h2>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'Semua' },
                { id: 'order', label: 'Pemesanan' },
                { id: 'shipping', label: 'Pengiriman & Packing' },
                { id: 'b2b', label: 'Faktur Pajak & TKDN' },
                { id: 'warranty', label: 'Garansi & Unboxing' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedFaqCat(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold border-2 cursor-pointer transition-all ${
                    selectedFaqCat === cat.id
                      ? 'bg-[#0026FF] border-[#0026FF] text-white'
                      : 'bg-white border-slate-300 text-slate-700 hover:border-[#0026FF]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3.5">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="tech-card rounded-2xl overflow-hidden bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#0026FF] shrink-0" />
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0026FF] block">
                          {faq.categoryLabel}
                        </span>
                        <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                          {faq.question}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-700 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0026FF]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed bg-[#F8FAFC]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 p-6 rounded-2xl bg-[#EEF2FF] border-2 border-[#0026FF] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-extrabold text-slate-900 text-base">
                Masih punya pertanyaan seputar ketersediaan unit atau pengiriman?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Admin CS Technosify Surabaya siap merespons cepat di jam operasional
                kerja.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenWhatsApp('stok-katalog')}
                className="px-5 py-2.5 rounded-xl bg-[#0026FF] hover:bg-blue-700 text-white font-extrabold text-xs flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Chat WhatsApp CS
              </button>
              <a
                href={STORE_INFO.socials.tokopedia}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white border-2 border-slate-800 text-slate-900 font-extrabold text-xs flex items-center gap-2"
              >
                <span>Tokopedia Technosify</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
