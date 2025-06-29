import Link from "next/link";
import styles from "@/styles/PostCard.module.css";

interface Props {
  id: number;
  title: string;
}

export default function PostCard({ id, title }: Props) {
  return (
    <Link href={`/posts/${id}`} className={styles.card}>
      <h2>{title}</h2>
    </Link>
  );
}
