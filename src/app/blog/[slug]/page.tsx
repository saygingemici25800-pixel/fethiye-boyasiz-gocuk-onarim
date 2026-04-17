import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_DETAILS, getBlogBySlug, getOtherBlogs } from "@/lib/blog-details";
import { SITE } from "@/lib/site-data";
import { BlogPageClient } from "./client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_DETAILS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [{ url: blog.heroImage }],
      type: "article",
      locale: "tr_TR",
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const otherBlogs = getOtherBlogs(slug);

  return <BlogPageClient blog={blog} otherBlogs={otherBlogs} site={SITE} />;
}
