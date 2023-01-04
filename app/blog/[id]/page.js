import Link from "next/link";
import React from "react";

async function getPost(id) {
  const post = await fetch(`${process.env.API_URL}/posts/${id}`);

  return post.json();
}

export default async function Page({ params }) {
  const post = await getPost(params?.id);

  return (
    <main>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <div dangerouslySetInnerHTML={{ __html: post.content?.rendered }} />
    </main>
  );
}
