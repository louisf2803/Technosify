import React from 'react';
import { Product } from '../data/mockData';
import {
  X,
  Check,
  Plus,
  ExternalLink,
  ShieldCheck,
  Cpu,
  HardDrive,
  Monitor,
  Layers,
  MessageCircle,
  FileCheck2,
  ShoppingBag,
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (product: Product) => void;
  isInQuote: boolean;
  onAskWhatsApp: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToQuote,
  isInQuote,
  onAskWhatsApp,
}) => {
  if (!product) return null;

  const formatPrice = (price: number) => 'Rp' + price.toLocaleString('id-ID');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white border-[3px] border-[#0026FF] shadow-[8px_8px_0px_#0026FF] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Top Bar */}
        <div className="sticky top-0 z-10 bg-white border-b-2 border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-[#EEF2FF] text-[#0026FF] font-extrabold text-xs uppercase tracking-wider">
              {product.brand} • {product.categoryLabel}
            </span>
            {product.isTkdn && (
              <span className="px-3 py-1 rounded-full bg-[#0026FF] text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-1">
                <FileCheck2 className="w-3.5 h-3.5" />
                {product.tkdnScore || 'TKDN Ready'}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full border-2 border-slate-800 flex items-center justify-center text-slate-800 hover:bg-slate-100 cursor-pointer"
            aria-label="Tutup detail produk"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left: Real Tokopedia Image */}
          <div className="md:col-span-5">
            <div className="rounded-2xl border-2 border-slate-800 bg-[#EEF2FF] p-3">
              <div className="aspect-square rounded-xl overflow-hidden bg-white border border-blue-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0026FF]" />
                Jaminan Resmi Technosify Surabaya
              </div>
              <p>{product.warranty}</p>
              <p className="text-[11px] text-slate-500">
                ID Produk Tokopedia: <span className="font-mono">{product.sku}</span>
              </p>
            </div>
          </div>

          {/* Right: Specs & Actions */}
          <div className="md:col-span-7 space-y-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {product.name}
              </h2>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-black text-[#0026FF]">
                  {formatPrice(product.price)}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  Tersedia / Bisa Faktur Pajak PPN
                </span>
              </div>
            </div>

            {/* Specification Breakdown */}
            <div className="space-y-2.5 bg-[#F8FAFC] p-4 rounded-2xl border-2 border-slate-200">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                Spesifikasi Teknis Lengkap
              </h3>

              {product.specs.processor && (
                <div className="flex items-start gap-2.5 text-sm">
                  <Cpu className="w-4 h-4 text-[#0026FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800">Prosesor: </span>
                    <span className="text-slate-700">{product.specs.processor}</span>
                  </div>
                </div>
              )}

              {product.specs.ram && (
                <div className="flex items-start gap-2.5 text-sm">
                  <Layers className="w-4 h-4 text-[#0026FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800">Memori (RAM): </span>
                    <span className="text-slate-700">{product.specs.ram}</span>
                  </div>
                </div>
              )}

              {product.specs.storage && (
                <div className="flex items-start gap-2.5 text-sm">
                  <HardDrive className="w-4 h-4 text-[#0026FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800">Storage: </span>
                    <span className="text-slate-700">{product.specs.storage}</span>
                  </div>
                </div>
              )}

              {product.specs.display && (
                <div className="flex items-start gap-2.5 text-sm">
                  <Monitor className="w-4 h-4 text-[#0026FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800">Layar / Fitur Utama: </span>
                    <span className="text-slate-700">{product.specs.display}</span>
                  </div>
                </div>
              )}

              {product.specs.gpu && (
                <div className="flex items-start gap-2.5 text-sm">
                  <Cpu className="w-4 h-4 text-[#0026FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800">Grafis: </span>
                    <span className="text-slate-700">{product.specs.gpu}</span>
                  </div>
                </div>
              )}

              {product.specs.os && (
                <div className="flex items-start gap-2.5 text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#0026FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800">Sistem / Paket: </span>
                    <span className="text-slate-700">{product.specs.os}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => onAddToQuote(product)}
                  className={`py-3 px-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    isInQuote
                      ? 'bg-emerald-600 text-white border-2 border-emerald-600'
                      : 'bg-[#0026FF] hover:bg-blue-700 text-white border-2 border-[#0026FF]'
                  }`}
                >
                  {isInQuote ? (
                    <>
                      <Check className="w-4 h-4" />
                      Sudah Masuk Daftar Penawaran
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      Tambah ke Daftar Penawaran
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onAskWhatsApp(product);
                  }}
                  className="py-3 px-4 rounded-xl font-extrabold text-sm border-2 border-slate-900 bg-white hover:bg-slate-50 text-slate-900 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  Tanya Stok via WhatsApp
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={product.tokopediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl font-bold text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center justify-center gap-2 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4 text-emerald-600" />
                  Beli Langsung di Tokopedia Technosify
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={product.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl font-bold text-xs bg-orange-50 hover:bg-orange-100 text-orange-800 border border-orange-300 flex items-center justify-center gap-2 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4 text-orange-600" />
                  Beli di Shopee (technosify_id)
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
