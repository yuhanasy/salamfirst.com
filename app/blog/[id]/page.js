import React from "react";

async function getPost(id) {
  const post = await fetch(`${process.env.API_URL}/posts/${id}`);

  return post.json();
}

export default async function Page({ params }) {
  const post = await getPost(params?.id);

  return (
    <div>
      <article>
        <h1 className="font-serif">{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content?.rendered }} />
      </article>
    </div>
  );
}
