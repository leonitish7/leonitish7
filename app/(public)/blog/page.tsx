import type { Metadata } from "next";
import { ServicesHero } from "@/components/public/blog/services-hero";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eindev.ir';

export const metadata: Metadata = {
  title: "Services",
  description: "Engineering services for building modern web applications, scalable APIs, AI-assisted products, and cloud-ready systems.",
  openGraph: {
    title: "Services — EINCODE",
    description: "Engineering services for modern products and scalable software systems.",
    url: `${baseUrl}/blog`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image-blog.png`,
        width: 1200,
        height: 630,
        alt: "EINCODE Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — EINCODE",
    description: "Engineering services for modern products and scalable software systems.",
    images: [`${baseUrl}/og-image-blog.png`],
  },
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
};

export default function BlogPage() {
  return (
    <ServicesHero />
  );
}
