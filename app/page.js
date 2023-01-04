import React from "react";

async function getPosts() {
  const posts = await fetch(`${process.env.API_URL}/posts`);

  return posts.json();
}

const Page = async () => {
  const posts = await getPosts();
  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
};

export default Page;
