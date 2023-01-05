import Link from "next/link";
import React from "react";

export default async function Page() {
  return (
    <main>
      <h1 className="text-xl font-bold">Salamfirst</h1>
      <Link href="/blog">Visit Blog</Link>
    </main>
  );
}
