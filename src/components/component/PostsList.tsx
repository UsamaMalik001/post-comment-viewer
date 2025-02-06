import { Button } from "@/components/ui/button";
import type { Post } from "@/lib/apis";
import Link from "next/link";

export default function PostsList({ posts }: { posts: Post[] }) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id} className="border p-4 rounded-md">
          <h1 className="text-xl font-semibold mb-2">{post.title}</h1>
          <Link href={`/posts/${post.id}`}>
            <Button>View Details</Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
