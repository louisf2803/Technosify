import React, { useState } from 'react';
import { TechnosifyLogo } from './TechnosifyLogo';
import { Menu, X, FileSpreadsheet } from 'lucide-react';

export type PageId =
  | 'beranda'
  | 'katalog'
  | 'tkdn'
  | 'info-order'
  | 'blog'
  | 'kontak';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  quoteCount: number;
  onOpenQuoteDrawer: () => void;
}

const NAV_ITEMS: { id: PageId; label: string; badge?: string }[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'katalog', label: 'Katalog' },
  { id: 'tkdn', label: 'Etalase TKDN', badge: 'B2B' },
  { id: 'info-order', label: 'Cara Order & FAQ' },
  { id: 'blog', label: 'Blog' },
  { id: 'kontak', label: 'Kontak' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  quoteCount,
  onOpenQuoteDrawer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Left: Official Technosify Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('beranda')}
          className="cursor-pointer focus:outline-none flex items-center"
        >
          <TechnosifyLogo variant="dark" size="md" />
        </button>

        {/* Center/Right Desktop Multi-Page Navigation + Daftar Penawaran (0) matching image.png */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#0026FF] bg-[#EEF2FF]'
                      : 'text-slate-700 hover:text-[#0026FF] hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.2 text-[9px] font-black uppercase bg-[#0026FF] text-white rounded">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary Pill CTA matching image.png: Daftar Penawaran (0) */}
          <button
            type="button"
            onClick={onOpenQuoteDrawer}
            className="px-5 py-2.5 rounded-full bg-[#0026FF] hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm tracking-tight shadow-xs transition-all cursor-pointer flex items-center gap-2"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Daftar Penawaran ({quoteCount})</span>
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenQuoteDrawer}
            className="px-3.5 py-2 rounded-full bg-[#0026FF] text-white font-extrabold text-xs flex items-center gap-1.5 cursor-pointer"
          >
            <span>Daftar Penawaran ({quoteCount})</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-slate-300 text-slate-800 hover:bg-slate-50 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-[#0026FF] px-4 pt-2 pb-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#0026FF] text-white'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`px-2 py-0.5 text-[10px] font-black rounded ${
                      isActive ? 'bg-white text-[#0026FF]' : 'bg-[#EEF2FF] text-[#0026FF]'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
