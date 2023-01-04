import Link from "next/link";
import React from "react";

export default async function Page() {
  return (
    <main>
      <h1>Salamfirst</h1>
      <Link href="/blog">Visit Blog</Link>
    </main>
  );
}
