import React from 'react';
import { Product } from '../data/mockData';
import { ExternalLink, Plus, Check, ShieldCheck, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelectDetail: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  isInQuote: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectDetail,
  onAddToQuote,
  isInQuote,
}) => {
  const formatPrice = (price: number) => {
    return 'Rp' + price.toLocaleString('id-ID');
  };

  return (
    <div className="tech-card rounded-2xl overflow-hidden flex flex-col bg-white group">
      {/* Top Brand & Badge Bar matching image.png + Real Tokopedia Product Image */}
      <div
        onClick={() => onSelectDetail(product)}
        className="relative bg-[#EEF2FF] border-b-2 border-slate-800 cursor-pointer overflow-hidden"
      >
        {/* Top Brand Header Strip */}
        <div className="px-4 pt-3 pb-2 flex items-center justify-between">
          <span className="text-base font-extrabold tracking-tight text-[#0026FF]">
            {product.brand}
          </span>
          <div className="flex items-center gap-1.5">
            {product.isTkdn && (
              <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-[#0026FF] text-white rounded-md">
                TKDN
              </span>
            )}
            {product.promoLabel && (
              <span className="px-2 py-0.5 text-[10px] font-bold bg-white text-slate-800 border border-slate-300 rounded-md">
                {product.promoLabel}
              </span>
            )}
          </div>
        </div>

        {/* Authentic Tokopedia Product Thumbnail */}
        <div className="px-3 pb-3">
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-white border border-blue-100 shadow-xs">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-contain group-hover:scale-103 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-[#0026FF]" />
                Lihat Detail Spek
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Body matching image.png */}
      <div className="p-4 flex-1 flex flex-col justify-between bg-white">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              {product.categoryLabel}
            </span>
            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              Ready Stock
            </span>
          </div>

          <h3
            onClick={() => onSelectDetail(product)}
            className="font-extrabold text-slate-900 text-sm leading-snug line-clamp-2 hover:text-[#0026FF] cursor-pointer transition-colors min-h-[2.5rem]"
            title={product.name}
          >
            {product.shortName || product.name}
          </h3>

          {/* Condensed Spec Line */}
          <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
            {[
              product.specs.processor,
              product.specs.ram,
              product.specs.storage,
              product.specs.display,
            ]
              .filter(Boolean)
              .join(' • ')}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100">
          {/* Price */}
          <div className="mb-3">
            {product.originalPrice && (
              <div className="text-[11px] text-slate-400 line-through">
                {formatPrice(product.originalPrice)}
              </div>
            )}
            <div className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
              {formatPrice(product.price)}
            </div>
          </div>

          {/* Primary Action Row matching image.png: Detail | Tambah ke penawaran */}
          <div className="grid grid-cols-12 gap-2">
            <button
              type="button"
              onClick={() => onSelectDetail(product)}
              className="col-span-5 py-2 px-2.5 rounded-lg border-2 border-slate-800 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs transition-colors cursor-pointer text-center"
            >
              Detail
            </button>
            <button
              type="button"
              onClick={() => onAddToQuote(product)}
              className={`col-span-7 py-2 px-2.5 rounded-lg font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-1 leading-tight text-center ${
                isInQuote
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-emerald-600'
                  : 'bg-[#0026FF] hover:bg-blue-700 text-white border-2 border-[#0026FF]'
              }`}
            >
              {isInQuote ? (
                <>
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>Di Penawaran</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5 shrink-0" />
                  <span>Tambah ke penawaran</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Tokopedia Quick Link */}
          <div className="mt-2.5 flex items-center justify-between text-[11px]">
            <span className="inline-flex items-center gap-1 text-slate-500 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0026FF]" />
              Garansi Resmi
            </span>
            <a
              href={product.tokopediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
            >
              <span>Beli di Tokopedia</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
