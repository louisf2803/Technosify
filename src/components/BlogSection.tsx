import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/mockData';
import {
  BookOpen,
  Clock,
  Calendar,
  User,
  CheckCircle2,
  ArrowRight,
  X,
  MessageCircle,
} from 'lucide-react';
import { assetUrl } from '../utils/assets';

interface BlogSectionProps {
  onOpenWhatsApp: (topic?: string, product?: string) => void;
  onNavigateToCatalog: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onOpenWhatsApp,
  onNavigateToCatalog,
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Top Royal Blue Header Banner */}
      <section className="bg-[#0026FF] text-white py-12 sm:py-16 border-b-2 border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white text-[#0026FF] text-xs font-extrabold uppercase tracking-wider">
              Wawasan &amp; Review Perangkat
            </span>
            <h1 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight leading-none">
              BLOG &amp; PANDUAN IT TECHNOSIFY
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Tips memilih laptop bisnis, panduan pengadaan perangkat bersertifikat
              TKDN untuk instansi, serta rekomendasi server dan printer efisien dari
              tim teknis Technosify Surabaya.
            </p>
          </div>
          <img
            src={assetUrl('mascot/mascot-thumbsup.png')}
            alt="Technosify Blog Robot"
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain bg-white rounded-3xl p-3 border-2 border-slate-900 shadow-[6px_6px_0px_#090D16]"
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="tech-card rounded-2xl overflow-hidden bg-white flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="bg-[#EEF2FF] p-4 border-b-2 border-slate-800">
                  <div className="aspect-video rounded-xl overflow-hidden bg-white border border-blue-100 flex items-center justify-center p-2">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 text-[11px] font-bold text-slate-500 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#EEF2FF] text-[#0026FF] uppercase font-extrabold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0026FF] transition-colors leading-snug mb-2.5">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-[#0026FF]">
                <span className="text-slate-500 font-semibold">{post.date}</span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Baca Selengkapnya
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white border-[3px] border-[#0026FF] shadow-[8px_8px_0px_#0026FF] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 z-10 bg-white border-b-2 border-slate-200 px-6 py-4 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#EEF2FF] text-[#0026FF] font-extrabold text-xs uppercase">
                {selectedPost.category}
              </span>
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="w-9 h-9 rounded-full border-2 border-slate-800 flex items-center justify-center text-slate-800 hover:bg-slate-100 cursor-pointer"
                aria-label="Tutup artikel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  {selectedPost.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500 mt-3">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#0026FF]" />
                    {selectedPost.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#0026FF]" />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#0026FF]" />
                    {selectedPost.readTime}
                  </span>
                </div>
              </div>

              {/* Key Takeaways Box */}
              <div className="p-5 rounded-2xl bg-[#EEF2FF] border-2 border-[#0026FF] space-y-2.5">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#0026FF]">
                  Poin Penting Artikel:
                </div>
                {selectedPost.keyTakeaways.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0026FF] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {selectedPost.content.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPost(null);
                    onNavigateToCatalog();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#0026FF] text-white font-extrabold text-xs cursor-pointer"
                >
                  Lihat Produk Terkait di Katalog
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedPost.title;
                    setSelectedPost(null);
                    onOpenWhatsApp('konsultasi-spek', title);
                  }}
                  className="px-5 py-2.5 rounded-xl border-2 border-slate-800 text-slate-900 font-extrabold text-xs flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  Diskusikan dengan Tim Teknis via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
