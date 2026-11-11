import React, { useState, useEffect } from 'react';
import { STORE_INFO } from '../data/mockData';
import {
  MessageCircle,
  X,
  Send,
  PackageSearch,
  Building2,
  Cpu,
  ShieldAlert,
} from 'lucide-react';
import { assetUrl } from '../utils/assets';

interface WhatsAppWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  initialTopic?: string;
  initialProduct?: string;
}

const TOPICS = [
  {
    id: 'stok-katalog',
    label: 'Cek Stok & Harga Tokopedia',
    icon: PackageSearch,
    template: (prod: string) =>
      `Halo Admin Technosify Surabaya, saya ingin menanyakan ketersediaan stok unit ${
        prod ? `*${prod}*` : 'berikut'
      } apakah ready untuk dikirim hari ini?`,
  },
  {
    id: 'pengadaan-b2b',
    label: 'Minta Penawaran B2B / TKDN & Faktur Pajak',
    icon: Building2,
    template: (prod: string) =>
      `Halo Tim B2B Technosify Surabaya, kami dari perusahaan/instansi ingin meminta Surat Penawaran Resmi beserta Faktur Pajak PPN (dan Sertifikat TKDN) untuk produk ${
        prod ? `*${prod}*` : 'kebutuhan kantor kami'
      }.`,
  },
  {
    id: 'konsultasi-spek',
    label: 'Konsultasi Spesifikasi Laptop / Server',
    icon: Cpu,
    template: (prod: string) =>
      `Halo Tim Teknis Technosify, saya ingin berkonsultasi mengenai spesifikasi perangkat kerja ${
        prod ? `(terkait *${prod}*)` : ''
      } yang paling sesuai untuk kebutuhan kami.`,
  },
  {
    id: 'garansi-support',
    label: 'Bantuan Pengiriman / After Sales Support',
    icon: ShieldAlert,
    template: (prod: string) =>
      `Halo Customer Care Technosify Surabaya, saya membutuhkan informasi terkait pengiriman / klaim garansi resmi untuk unit ${
        prod ? `*${prod}*` : 'pesanan saya'
      }.`,
  },
];

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  isOpen,
  onClose,
  onOpen,
  initialTopic = 'stok-katalog',
  initialProduct = '',
}) => {
  const [selectedTopic, setSelectedTopic] = useState(initialTopic);
  const [productName, setProductName] = useState(initialProduct);
  const [customNote, setCustomNote] = useState('');

  useEffect(() => {
    if (initialTopic) setSelectedTopic(initialTopic);
  }, [initialTopic]);

  useEffect(() => {
    setProductName(initialProduct || '');
  }, [initialProduct]);

  const currentTopicObj =
    TOPICS.find((t) => t.id === selectedTopic) || TOPICS[0];

  const generatedMessage =
    currentTopicObj.template(productName) +
    (customNote.trim() ? `\n\nCatatan tambahan: ${customNote.trim()}` : '');

  const handleSend = () => {
    const url = `https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent(
      generatedMessage
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-5 right-5 z-40">
        {!isOpen && (
          <button
            type="button"
            onClick={onOpen}
            className="group flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-full bg-[#0026FF] hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm border-2 border-slate-900 shadow-[4px_4px_0px_#090D16] cursor-pointer transition-all"
          >
            <img
              src={assetUrl('mascot/mascot-peace.png')}
              alt="Chat CS"
              className="w-8 h-8 rounded-full bg-white object-contain p-0.5 border border-slate-900"
            />
            <span>Chat WhatsApp CS</span>
          </button>
        )}
      </div>

      {/* Chat Popup Modal */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 z-50 w-[92vw] max-w-sm bg-white rounded-3xl border-[3px] border-[#0026FF] shadow-[8px_8px_0px_#090D16] overflow-hidden">
          {/* Header */}
          <div className="bg-[#0026FF] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={assetUrl('mascot/mascot-peace.png')}
                alt="Technosify CS"
                className="w-11 h-11 rounded-2xl bg-white p-1 object-contain border-2 border-slate-900"
              />
              <div>
                <div className="font-black text-sm leading-tight">
                  CS Technosify Surabaya
                </div>
                <div className="text-[11px] text-blue-100 font-semibold">
                  WhatsApp Resmi • {STORE_INFO.phone}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white cursor-pointer"
              aria-label="Tutup chat WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3.5 max-h-[70vh] overflow-y-auto bg-white">
            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                1. Pilih Topik Layanan:
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {TOPICS.map((t) => {
                  const Icon = t.icon;
                  const active = selectedTopic === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTopic(t.id)}
                      className={`p-2.5 rounded-xl border-2 text-left text-xs font-bold flex items-center gap-2.5 cursor-pointer transition-all ${
                        active
                          ? 'bg-[#EEF2FF] border-[#0026FF] text-[#0026FF]'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1">
                2. Nama Produk / Kebutuhan (Opsional):
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Contoh: Lenovo ThinkPad E14 / Acer Veriton TKDN"
                className="w-full px-3 py-2 rounded-xl border-2 border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0026FF]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1">
                3. Catatan Tambahan (Jumlah Unit / Instansi):
              </label>
              <input
                type="text"
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="Contoh: Butuh 5 unit + Faktur Pajak PPN"
                className="w-full px-3 py-2 rounded-xl border-2 border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0026FF]"
              />
            </div>

            {/* Preview Bubble */}
            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[11px] text-slate-600 leading-relaxed">
              <span className="font-bold text-slate-800 block mb-0.5">
                Preview Pesan Otomatis:
              </span>
              {generatedMessage}
            </div>

            <button
              type="button"
              onClick={handleSend}
              className="w-full py-3 px-4 rounded-xl bg-[#0026FF] hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-[3px_3px_0px_#090D16]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Kirim ke WhatsApp Technosify</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
