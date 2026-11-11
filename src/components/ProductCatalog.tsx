import React, { useState, useMemo, useEffect } from 'react';
import {
  PRODUCTS,
  CATEGORIES,
  STORE_INFO,
  Product,
  ProductCategory,
} from '../data/mockData';
import { ProductCard } from './ProductCard';
import {
  Search,
  SlidersHorizontal,
  FileCheck2,
  ExternalLink,
  RotateCcw,
  MessageCircle,
} from 'lucide-react';
import { assetUrl } from '../utils/assets';

interface ProductCatalogProps {
  initialCategory?: ProductCategory | 'all';
  initialBrand?: string;
  onSelectProductDetail: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  quoteProductIds: string[];
  onOpenWhatsApp: (topic?: string, product?: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  initialCategory = 'all',
  initialBrand = 'all',
  onSelectProductDetail,
  onAddToQuote,
  quoteProductIds,
  onOpenWhatsApp,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(
    initialCategory
  );
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrand || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyTkdn, setOnlyTkdn] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>(
    'featured'
  );

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    setSelectedBrand(initialBrand || 'all');
  }, [initialBrand]);

  const availableBrands = useMemo(() => {
    const brands = Array.from(new Set(PRODUCTS.map((p) => p.brand)));
    return ['all', ...brands];
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchCat =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchBrand =
        selectedBrand === 'all' ||
        product.brand.toLowerCase() === selectedBrand.toLowerCase();
      const matchTkdn = !onlyTkdn || Boolean(product.isTkdn);
      const q = searchQuery.trim().toLowerCase();
      const matchQuery =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q) ||
        product.categoryLabel.toLowerCase().includes(q) ||
        Object.values(product.specs).some((s) => s && s.toLowerCase().includes(q));

      return matchCat && matchBrand && matchTkdn && matchQuery;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, selectedBrand, onlyTkdn, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setOnlyTkdn(false);
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Page Header Banner */}
      <section className="bg-[#0026FF] text-white py-10 sm:py-12 border-b-2 border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-[#0026FF] text-xs font-extrabold uppercase tracking-wider">
              Etalase Resmi Tokopedia Technosify
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black italic uppercase tracking-tight">
              KATALOG PERANGKAT KERJA &amp; IT
            </h1>
            <p className="text-blue-100 text-sm sm:text-base max-w-2xl">
              Menampilkan foto produk asli dari etalase Tokopedia{' '}
              <strong className="text-white">technosify</strong> Surabaya. Klik{' '}
              <strong className="text-white">Tambah ke penawaran</strong> untuk membuat
              daftar pengadaan via WhatsApp atau beli langsung di Tokopedia.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <img
              src={assetUrl('mascot/mascot-laptop.png')}
              alt="Technosify Robot Laptop"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain bg-white rounded-2xl p-2 border-2 border-slate-900 shadow-[4px_4px_0px_#090D16]"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Search & Filter Control Card */}
        <div className="p-5 sm:p-6 rounded-2xl border-2 border-slate-800 bg-[#F8FAFC] shadow-[4px_5px_0px_#0026FF] mb-8 space-y-5">
          {/* Top Row: Search, TKDN Toggle, Sort */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari tipe produk (misal: ThinkPad E14, ExpertBook, Veriton, Altos, Brother)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-300 bg-white text-sm font-medium text-slate-900 focus:outline-none focus:border-[#0026FF]"
              />
            </div>

            <div className="md:col-span-3">
              <button
                type="button"
                onClick={() => setOnlyTkdn(!onlyTkdn)}
                className={`w-full py-2.5 px-4 rounded-xl border-2 font-extrabold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  onlyTkdn
                    ? 'bg-[#0026FF] border-[#0026FF] text-white'
                    : 'bg-white border-slate-300 text-slate-700 hover:border-[#0026FF]'
                }`}
              >
                <FileCheck2 className="w-4 h-4" />
                <span>{onlyTkdn ? 'Filter TKDN: Aktif' : 'Filter Produk TKDN Saja'}</span>
              </button>
            </div>

            <div className="md:col-span-3 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-slate-500 shrink-0" />
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as 'featured' | 'price-asc' | 'price-desc')
                }
                aria-label="Urutkan produk"
                className="w-full py-2.5 px-3 rounded-xl border-2 border-slate-300 bg-white text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0026FF]"
              >
                <option value="featured">Urutkan: Produk Unggulan</option>
                <option value="price-asc">Harga: Terendah ke Tertinggi</option>
                <option value="price-desc">Harga: Tertinggi ke Terendah</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer border-2 ${
                selectedCategory === 'all'
                  ? 'bg-[#0026FF] text-white border-[#0026FF]'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-[#0026FF]'
              }`}
            >
              Semua Kategori ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer border-2 ${
                  selectedCategory === cat.id
                    ? 'bg-[#0026FF] text-white border-[#0026FF]'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-[#0026FF]'
                }`}
              >
                {cat.number} {cat.title}
              </button>
            ))}
          </div>

          {/* Brand Filter Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-slate-500 mr-1">Merek:</span>
              {availableBrands.map((brand) => (
                <button
                  key={brand}
                  type="button"
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                    selectedBrand.toLowerCase() === brand.toLowerCase()
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-800'
                  }`}
                >
                  {brand === 'all' ? 'Semua Merek' : brand}
                </button>
              ))}
            </div>

            {(selectedCategory !== 'all' ||
              selectedBrand !== 'all' ||
              onlyTkdn ||
              searchQuery) && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-extrabold text-rose-600 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Filter
              </button>
            )}
          </div>
        </div>

        {/* Result Count & Tokopedia Store Link */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <p className="text-sm font-bold text-slate-700">
            Menampilkan <span className="text-[#0026FF]">{filteredProducts.length}</span>{' '}
            perangkat resmi dari katalog Tokopedia Technosify
          </p>
          <a
            href={STORE_INFO.socials.tokopedia}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-extrabold text-emerald-700 hover:underline inline-flex items-center gap-1.5"
          >
            <span>Lihat Seluruh 48 Etalase di Tokopedia Technosify</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-3xl border-2 border-slate-800 bg-[#EEF2FF]">
            <img
              src={assetUrl('mascot/mascot-wave.png')}
              alt="Robot Technosify"
              className="w-28 h-28 mx-auto object-contain mb-3"
            />
            <h3 className="text-xl font-black text-slate-900 mb-2">
              Tipe yang Anda Cari Belum Tampil di Filter Ini?
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              Kami memiliki lebih dari 1.000+ SKU aktif di gudang Surabaya. Tanyakan
              ketersediaan tipe khusus langsung ke tim sales kami lewat WhatsApp!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-5 py-2.5 rounded-xl bg-white border-2 border-slate-800 font-extrabold text-xs text-slate-900 cursor-pointer"
              >
                Tampilkan Semua Produk
              </button>
              <button
                type="button"
                onClick={() => onOpenWhatsApp('stok-katalog', searchQuery)}
                className="px-5 py-2.5 rounded-xl bg-[#0026FF] text-white font-extrabold text-xs flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Tanya Tipe Ini via WhatsApp
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectDetail={onSelectProductDetail}
                onAddToQuote={onAddToQuote}
                isInQuote={quoteProductIds.includes(product.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
