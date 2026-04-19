"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { BLOG_POSTS } from "@/lib/site-data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function BlogSection() {
  useScrollReveal();

  return (
    <section id="blog" className="bg-[#f8f9fb] py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="cs-reveal mb-12 text-center md:mb-16">
          <span className="mb-3 inline-block rounded-full bg-[#2d2d2d]/[.06] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2d2d2d]/70">
            Bilgi Köşesi
          </span>
          <h2 className="font-gambarino mt-3 text-[28px] leading-tight text-[#111827] md:text-[36px]">
            Faydalı <span className="text-[#d4232a]">Bilgiler</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#4b5563]">
            Boyasız göçük onarımı hakkında bilmeniz gerekenleri paylaşıyoruz.
          </p>
        </div>

        <div className="cs-stagger grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {BLOG_POSTS.map((post, i) => (
            <article
              key={post.title}
              className={`cs-reveal cs-reveal-delay-${i + 1} cs-card-lift group overflow-hidden rounded-2xl border border-gray-100/80 bg-white`}
            >
              <Link
                href={post.href}
                className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width:1024px) 560px, 100vw"
                    className="cs-img-reveal object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute left-4 top-4 rounded-lg bg-[#2d2d2d]/95 px-3 py-1 text-[11px] font-semibold text-white shadow-md backdrop-blur-sm">
                    {post.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold leading-snug text-[#111827] transition-colors duration-200 group-hover:text-[#d4232a]">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-[13px] leading-relaxed text-[#4b5563] line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-[#d4232a]">
                    Devamını Oku
                    <ArrowRightIcon
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
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
