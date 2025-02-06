import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Post, Comment } from "@/lib/apis";

export default function PostDetails({
  post,
  comments,
}: {
  post: Post;
  comments: Comment[];
}) {
  return (
    <div>
      <Link href="/">
        <Button className="mb-4">Back to Posts</Button>
      </Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-8">{post.body}</p>
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="border p-4 rounded-md">
            <h3 className="font-semibold">{comment.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{comment.email}</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
