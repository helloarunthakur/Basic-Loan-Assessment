import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import styles from "@/styles/Post.module.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostProps {
  post: Post;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // Fetch post data based on the dynamic route parameter
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  const post: Post = await res.json();
  return {
    props: { post },
  };
};

export default function PostPage({ post }: PostProps) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={() => router.back()}>
        ⬅ Back
      </button>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.body}>{post.body}</p>
    </div>
  );
}
