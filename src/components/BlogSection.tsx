"use client";

import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/site-data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function BlogSection() {
  useScrollReveal();

  return (
    <section id="blog" className="cs-section-fade bg-[#f8f9fb] py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="cs-reveal mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-[#2d2d2d]/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2d2d2d]">
            Bilgi Köşesi
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-[#111827] md:text-4xl">
            Faydalı <span className="text-[#d4232a]">Bilgiler</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#4b5563]">
            Boyasız göçük onarımı hakkında bilmeniz gerekenleri paylaşıyoruz.
          </p>
        </div>

        <div className="cs-stagger grid grid-cols-1 gap-8 md:grid-cols-2">
          {BLOG_POSTS.map((post, i) => (
            <article
              key={post.title}
              className={`cs-reveal cs-reveal-delay-${i + 1} cs-card-lift group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm`}
            >
              <Link href={post.href} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width:1024px) 560px, 100vw"
                    className="cs-img-reveal object-cover"
                  />
                  <div className="absolute left-4 top-4 rounded-lg bg-[#2d2d2d] px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                    {post.date}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="mb-3 text-xl font-bold leading-snug text-[#111827] transition-colors duration-300 group-hover:text-[#d4232a]">
                    {post.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-[#4b5563]">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#d4232a] transition-all duration-300 group-hover:gap-3">
                    Devamını Oku
                    <span className="text-lg">→</span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
