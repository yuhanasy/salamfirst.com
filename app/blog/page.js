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
      <main>
        <h1 className="font-serif">Articles</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h3 className="font-serif">{post.title?.rendered}</h3>
            <div dangerouslySetInnerHTML={{ __html: omitReadMore(post.excerpt?.rendered) }} />
            <Link href={`/blog/${post.id}`}>Read More</Link>
          </div>
        ))}
      </main>
    </div>
  );
}
