import Link from "next/link";
import React from "react";

async function getPosts() {
  const posts = await fetch(`${process.env.API_URL}/posts`);

  return posts.json();
}

function omitReadMore(excerpt) {
  return excerpt.replace(/<div class="link-more">.+<\/div>/, "");
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <div>
      <main className="prose lg:prose-lg">
        <h1>Articles</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title?.rendered}</h3>
            <div dangerouslySetInnerHTML={{ __html: omitReadMore(post.excerpt?.rendered) }} />
            <Link href={`/blog/${post.id}`}>Read More</Link>
          </div>
        ))}
      </main>
    </div>
  );
}
