import Link from "next/link";
import React from "react";

export default async function Page() {
  return (
    <header className="h-3/4">
      <h1 className="text-3xl font-serif">Sebuah Catatan Pelajaran Hidup dari Seorang Muslimah yang Sedang Berusaha Menjadi Hamba Allah</h1>
      <Link href="/blog">Visit Blog</Link>
    </header>
  );
}
