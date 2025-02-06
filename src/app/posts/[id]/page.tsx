"use client";

import useSWR from "swr";
import { useParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { getComments, getPost } from "@/lib/apis";
import PostDetails from "@/components/component/PostDetail";
import AddCommentForm from "@/components/component/CommentForm";

export default function PostPage() {
  const { id } = useParams();
  const {
    data: post,
    error: postError,
    isLoading: postLoading,
  } = useSWR(`/posts/${id}`, () => getPost(id as string));
  const {
    data: comments,
    error: commentsError,
    isLoading: commentsLoading,
  } = useSWR(`/comments?postId=${id}`, () => getComments(id as string));

  if (postLoading || commentsLoading) {
    return (
      <div className="container mx-auto p-4 space-y-4">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  if (postError || commentsError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load post or comments. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <PostDetails post={post} comments={comments} />
      <AddCommentForm postId={id as string} />
    </div>
  );
}
