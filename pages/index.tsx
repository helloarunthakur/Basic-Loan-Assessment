import { GetStaticProps } from "next";
import { useState } from "react";
import PostCard from "../components/PostCard";
import styles from "../styles/Home.module.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface HomeProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
  // get posts from an API on build time
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  return {
    props: { posts },
  };
};

export default function Home({ posts }: HomeProps) {
  const [search, setSearch] = useState("");

  // Filter posts based on search input
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>🕹️ Retro Theme - Posts</h1>
      <input
        className={styles.search}
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={styles.grid}>
        {filteredPosts.map((post) => (
          <PostCard key={post.id} id={post.id} title={post.title} />
        ))}
      </div>
    </main>
  );
}
