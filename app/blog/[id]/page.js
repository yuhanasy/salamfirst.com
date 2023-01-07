import React from "react";

async function getPost(id) {
  const post = await fetch(`${process.env.API_URL}/posts/${id}`);

  return post.json();
}

export default async function Page({ params }) {
  const post = await getPost(params?.id);

  return (
    <div>
      <article className="prose lg:prose-lg">
        <h1>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content?.rendered }} />
      </article>
    </div>
  );
}
