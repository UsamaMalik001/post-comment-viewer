import AddCommentForm from "@/components/component/CommentForm";
import PostDetails from "@/components/component/PostDetail";
import { getComments, getPost } from "@/lib/apis";

export default async function PostDynamicPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPost(params.id);
  const comments = await getComments(params.id);
  return (
    <div className="container mx-auto p-4">
      <PostDetails post={post} comments={comments} />
      <AddCommentForm postId={params.id} />
    </div>
  );
}
