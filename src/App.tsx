import React, { useState, useMemo } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { TkdnPage } from './components/TkdnPage';
import { OrderGuide } from './components/OrderGuide';
import { BlogSection } from './components/BlogSection';
import { StoreLocation } from './components/StoreLocation';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteDrawer, QuoteItem } from './components/QuoteDrawer';
import { Product, ProductCategory } from './data/mockData';
import { CheckCircle2, FileSpreadsheet } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('beranda');
  const [catalogCategory, setCatalogCategory] = useState<ProductCategory | 'all'>('all');
  const [catalogBrand, setCatalogBrand] = useState<string>('all');

  // Quote Cart State ("Daftar Penawaran")
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [toastProduct, setToastProduct] = useState<string | null>(null);

  // Product Detail Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // WhatsApp Widget State
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [whatsAppTopic, setWhatsAppTopic] = useState('stok-katalog');
  const [whatsAppProduct, setWhatsAppProduct] = useState('');

  const handleOpenWhatsApp = (topic: string = 'stok-katalog', product: string = '') => {
    setWhatsAppTopic(topic);
    setWhatsAppProduct(product);
    setIsWhatsAppOpen(true);
  };

  const handleSelectCategory = (
    category: ProductCategory | 'all',
    brand: string = 'all'
  ) => {
    setCatalogCategory(category);
    setCatalogBrand(brand);
  };

  const handleAddToQuote = (product: Product) => {
    setQuoteItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    setToastProduct(product.shortName || product.name);
    setTimeout(() => {
      setToastProduct((current) =>
        current === (product.shortName || product.name) ? null : current
      );
    }, 3500);
  };

  const handleUpdateQuoteQty = (productId: string, delta: number) => {
    setQuoteItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveQuoteItem = (productId: string) => {
    setQuoteItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const quoteTotalCount = useMemo(
    () => quoteItems.reduce((sum, item) => sum + item.quantity, 0),
    [quoteItems]
  );

  const quoteProductIds = useMemo(
    () => quoteItems.map((item) => item.product.id),
    [quoteItems]
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#0026FF] selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={setActivePage}
        quoteCount={quoteTotalCount}
        onOpenQuoteDrawer={() => setIsQuoteDrawerOpen(true)}
      />

      {/* Toast Notification when adding to Daftar Penawaran */}
      {toastProduct && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl border-2 border-[#0026FF] shadow-lg flex items-center gap-3 max-w-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="text-xs">
            <span className="font-extrabold block">{toastProduct}</span>
            <span className="text-slate-300">Ditambahkan ke Daftar Penawaran</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setToastProduct(null);
              setIsQuoteDrawerOpen(true);
            }}
            className="ml-2 px-2.5 py-1.5 rounded-lg bg-[#0026FF] hover:bg-blue-600 text-white font-extrabold text-[11px] shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            Buka
          </button>
        </div>
      )}

      {/* Multi-Page Router Content */}
      <main className="flex-1">
        {activePage === 'beranda' && (
          <Hero
            onNavigate={setActivePage}
            onSelectCategory={handleSelectCategory}
            onSelectProductDetail={setSelectedProduct}
            onAddToQuote={handleAddToQuote}
            quoteProductIds={quoteProductIds}
          />
        )}

        {activePage === 'katalog' && (
          <ProductCatalog
            initialCategory={catalogCategory}
            initialBrand={catalogBrand}
            onSelectProductDetail={setSelectedProduct}
            onAddToQuote={handleAddToQuote}
            quoteProductIds={quoteProductIds}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        )}

        {activePage === 'tkdn' && (
          <TkdnPage
            onSelectProductDetail={setSelectedProduct}
            onAddToQuote={handleAddToQuote}
            quoteProductIds={quoteProductIds}
            onOpenQuoteDrawer={() => setIsQuoteDrawerOpen(true)}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        )}

        {activePage === 'info-order' && (
          <OrderGuide onOpenWhatsApp={handleOpenWhatsApp} />
        )}

        {activePage === 'blog' && (
          <BlogSection
            onOpenWhatsApp={handleOpenWhatsApp}
            onNavigateToCatalog={() => {
              handleSelectCategory('all');
              setActivePage('katalog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activePage === 'kontak' && (
          <StoreLocation onOpenWhatsApp={handleOpenWhatsApp} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={setActivePage}
        onSelectCategory={handleSelectCategory}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToQuote={handleAddToQuote}
        isInQuote={
          selectedProduct ? quoteProductIds.includes(selectedProduct.id) : false
        }
        onAskWhatsApp={(prod) =>
          handleOpenWhatsApp('stok-katalog', prod.shortName || prod.name)
        }
      />

      {/* Daftar Penawaran (Quote Cart) Drawer */}
      <QuoteDrawer
        isOpen={isQuoteDrawerOpen}
        onClose={() => setIsQuoteDrawerOpen(false)}
        items={quoteItems}
        onUpdateQty={handleUpdateQuoteQty}
        onRemoveItem={handleRemoveQuoteItem}
        onClearAll={() => setQuoteItems([])}
        onNavigateToCatalog={() => {
          handleSelectCategory('all');
          setActivePage('katalog');
        }}
      />

      {/* Smart WhatsApp Assistant Widget */}
      <WhatsAppWidget
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        onOpen={() => setIsWhatsAppOpen(true)}
        initialTopic={whatsAppTopic}
        initialProduct={whatsAppProduct}
      />
    </div>
  );
}
