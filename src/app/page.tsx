import AddPostForm from "@/components/component/PostForm";
import PostsList from "@/components/component/PostsList";
import { getPosts } from "@/lib/apis";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto p-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold my-4">All Posts</h1>
      <AddPostForm />
      <PostsList posts={posts} />
    </div>
  );
}
