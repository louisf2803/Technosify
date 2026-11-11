import React, { useState } from 'react';
import { Product, STORE_INFO } from '../data/mockData';
import {
  X,
  Trash2,
  Plus,
  Minus,
  FileText,
  Send,
  Building2,
  User,
  CheckCircle2,
  ShoppingBag,
} from 'lucide-react';
import { TechnosifyLogo } from './TechnosifyLogo';
import { assetUrl } from '../utils/assets';

export interface QuoteItem {
  product: Product;
  quantity: number;
}

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onUpdateQty: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
  onNavigateToCatalog: () => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onClearAll,
  onNavigateToCatalog,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [needFakturPajak, setNeedFakturPajak] = useState(true);
  const [needTkdnCert, setNeedTkdnCert] = useState(true);
  const [needPackingKayu, setNeedPackingKayu] = useState(false);
  const [notes, setNotes] = useState('');
  const [showInvoicePreview, setShowInvoicePreview] = useState(false);

  if (!isOpen) return null;

  const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const formatPrice = (price: number) => 'Rp' + price.toLocaleString('id-ID');

  const handleSendWhatsAppQuote = () => {
    const header = `Halo Admin *Technosify Surabaya*, saya ingin meminta *Surat Penawaran Resmi (Quotation)* untuk daftar perangkat berikut:\n\n`;
    const identity = [
      customerName ? `• Nama PIC: *${customerName}*` : null,
      companyName ? `• Instansi / Perusahaan: *${companyName}*` : null,
      `• Faktur Pajak PPN: *${needFakturPajak ? 'Ya (Butuh Faktur Pajak)' : 'Tidak'}*`,
      `• Lampiran Sertifikat TKDN: *${needTkdnCert ? 'Ya (Bila tersedia)' : 'Tidak'}*`,
      needPackingKayu ? `• Tambahan: *Packing Kayu Ekstra*` : null,
    ]
      .filter(Boolean)
      .join('\n');

    const itemLines = items
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.product.shortName || item.product.name}*\n   Qty: ${
            item.quantity
          } unit × ${formatPrice(item.product.price)} = *${formatPrice(
            item.product.price * item.quantity
          )}*`
      )
      .join('\n\n');

    const footer = `\n\n*Total Estimasi (${totalUnits} unit): ${formatPrice(
      totalAmount
    )}*\n${
      notes ? `\nCatatan Tambahan: ${notes}\n` : ''
    }\nMohon info ketersediaan stok dan penawaran resminya. Terima kasih!`;

    const fullText = `${header}${identity}\n\n*DAFTAR PERANGKAT:*\n${itemLines}${footer}`;
    const waUrl = `https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent(
      fullText
    )}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-xl h-full flex flex-col border-l-[3px] border-[#0026FF] shadow-2xl">
        {/* Drawer Header */}
        <div className="px-6 py-5 bg-[#0026FF] text-white flex items-center justify-between">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-white text-[#0026FF] text-[10px] font-extrabold uppercase tracking-wider mb-1">
              Quotation Builder
            </span>
            <h2 className="text-xl font-black italic uppercase tracking-tight">
              DAFTAR PENAWARAN ({totalUnits})
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Tutup daftar penawaran"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-12 px-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50">
              <img
                src={assetUrl('mascot/mascot-laptop.png')}
                alt="Technosify Robot"
                className="w-32 h-32 mx-auto object-contain mb-4"
              />
              <h3 className="text-lg font-extrabold text-slate-900 mb-1">
                Daftar Penawaran Masih Kosong
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
                Pilih laptop, AIO, desktop, server, atau printer di katalog lalu klik
                tombol <strong>&ldquo;Tambah ke penawaran&rdquo;</strong> untuk menyusun daftar
                kebutuhan Anda.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigateToCatalog();
                }}
                className="px-6 py-3 rounded-xl bg-[#0026FF] hover:bg-blue-700 text-white font-extrabold text-sm cursor-pointer inline-flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Lihat Katalog Produk
              </button>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Perangkat Dipilih ({items.length} tipe)
                  </span>
                  <button
                    type="button"
                    onClick={onClearAll}
                    className="text-xs font-bold text-rose-600 hover:underline cursor-pointer"
                  >
                    Kosongkan Semua
                  </button>
                </div>

                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="p-3.5 rounded-2xl border-2 border-slate-800 bg-white shadow-[3px_3px_0px_#0026FF] flex items-center gap-3.5"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded-xl object-contain bg-[#EEF2FF] border border-slate-200 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-extrabold text-[#0026FF] uppercase">
                          {product.brand}
                        </span>
                        {product.isTkdn && (
                          <span className="text-[9px] font-extrabold bg-[#0026FF] text-white px-1.5 py-0.2 rounded">
                            TKDN
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                        {product.shortName || product.name}
                      </h4>
                      <div className="text-xs font-extrabold text-slate-800 mt-0.5">
                        {formatPrice(product.price * quantity)}
                        <span className="text-[11px] font-normal text-slate-500 ml-1">
                          ({formatPrice(product.price)} / unit)
                        </span>
                      </div>
                    </div>

                    {/* Qty Controls */}
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => onUpdateQty(product.id, -1)}
                        className="w-7 h-7 rounded-lg border border-slate-300 hover:border-[#0026FF] flex items-center justify-center text-slate-700 cursor-pointer"
                        aria-label="Kurangi jumlah"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center text-xs font-extrabold text-slate-900">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQty(product.id, 1)}
                        className="w-7 h-7 rounded-lg border border-slate-300 hover:border-[#0026FF] flex items-center justify-center text-slate-700 cursor-pointer"
                        aria-label="Tambah jumlah"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(product.id)}
                        className="w-7 h-7 rounded-lg text-rose-500 hover:bg-rose-50 flex items-center justify-center ml-1 cursor-pointer"
                        aria-label="Hapus produk"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Toggle Preview Draft Surat Penawaran / Invoice matching uploaded PSD template */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowInvoicePreview(!showInvoicePreview)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#EEF2FF] hover:bg-blue-100 text-[#0026FF] font-extrabold text-xs flex items-center justify-center gap-2 border border-blue-200 cursor-pointer transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  {showInvoicePreview
                    ? 'Sembunyikan Preview Draft Invoice Technosify'
                    : 'Lihat Preview Format Invoice / Penawaran Resmi Technosify'}
                </button>

                {showInvoicePreview && (
                  <div className="mt-3 p-4 rounded-2xl border-2 border-[#0026FF] bg-white text-xs space-y-3 shadow-sm">
                    <div className="flex items-center justify-between border-b pb-3 border-slate-200">
                      <TechnosifyLogo variant="dark" size="sm" showSlogan />
                      <div className="text-right">
                        <div className="text-sm font-black text-[#0026FF] tracking-wide">
                          QUOTATION / INVOICE
                        </div>
                        <div className="text-[10px] text-slate-500">
                          No: INV/TSF/{new Date().getFullYear()}/B2B
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="text-slate-400 font-semibold block">Kepada Yth:</span>
                        <span className="font-bold text-slate-900">
                          {companyName || customerName || 'Pelanggan / Instansi Terhormat'}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-400 font-semibold block">Dari:</span>
                        <span className="font-bold text-slate-900">
                          Technosify Surabaya (Ruko Mangga Dua A6/3)
                        </span>
                      </div>
                    </div>
                    <div className=" rounded-lg overflow-hidden border border-slate-200">
                      <div className="bg-[#0026FF] text-white font-bold px-3 py-1.5 grid grid-cols-12 text-[10px]">
                        <span className="col-span-6">NAMA PRODUK</span>
                        <span className="col-span-2 text-center">QTY</span>
                        <span className="col-span-4 text-right">TOTAL</span>
                      </div>
                      {items.map(({ product, quantity }, idx) => (
                        <div
                          key={product.id}
                          className={`px-3 py-1.5 grid grid-cols-12 text-[11px] ${
                            idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'
                          }`}
                        >
                          <span className="col-span-6 font-medium truncate pr-2">
                            {product.shortName}
                          </span>
                          <span className="col-span-2 text-center font-bold">
                            {quantity}
                          </span>
                          <span className="col-span-4 text-right font-bold">
                            {formatPrice(product.price * quantity)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-200 font-extrabold text-slate-900">
                      <span>ESTIMASI TOTAL</span>
                      <span className="text-[#0026FF] text-sm">
                        {formatPrice(totalAmount)}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Customer / Instansi Details Form */}
              <div className="bg-slate-50 p-4 rounded-2xl border-2 border-slate-200 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  Data Pemohon Penawaran (Opsional)
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      Nama Anda / PIC
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#0026FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      Nama Instansi / Perusahaan
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Contoh: PT Maju Bersama / Dinas..."
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#0026FF]"
                      />
                    </div>
                  </div>
                </div>

                {/* Checkboxes for B2B & Shipping */}
                <div className="space-y-2 pt-1">
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={needFakturPajak}
                      onChange={(e) => setNeedFakturPajak(e.target.checked)}
                      className="rounded border-slate-300 text-[#0026FF] focus:ring-[#0026FF]"
                    />
                    <span>Minta Penerbitan Faktur Pajak PPN Resmi</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={needTkdnCert}
                      onChange={(e) => setNeedTkdnCert(e.target.checked)}
                      className="rounded border-slate-300 text-[#0026FF] focus:ring-[#0026FF]"
                    />
                    <span>Lampirkan Dokumen Sertifikat TKDN (untuk item TKDN)</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={needPackingKayu}
                      onChange={(e) => setNeedPackingKayu(e.target.checked)}
                      className="rounded border-slate-300 text-[#0026FF] focus:ring-[#0026FF]"
                    />
                    <span>Tambahkan Opsi Packing Kayu (Pengiriman Luar Kota/Pulau)</span>
                  </label>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Catatan Khusus (Upgrade RAM, Alamat Kirim, dll.)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tulis spesifikasi tambahan atau pertanyaan..."
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#0026FF]"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t-2 border-slate-200 bg-white space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-500">
                  Total Estimasi ({totalUnits} Unit)
                </div>
                <div className="text-xl font-black text-slate-900">
                  {formatPrice(totalAmount)}
                </div>
              </div>
              <div className="text-right text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Siap Kirim ke WhatsApp
              </div>
            </div>

            <button
              type="button"
              onClick={handleSendWhatsAppQuote}
              className="w-full py-3.5 px-5 rounded-xl bg-[#0026FF] hover:bg-blue-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-[4px_4px_0px_#0f172a] cursor-pointer transition-all"
            >
              <Send className="w-4 h-4" />
              Minta Penawaran Resmi lewat WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
