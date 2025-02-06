"use client";

import AddPostForm from "@/components/component/PostForm";
import PostsList from "@/components/component/PostsList";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { getPosts } from "@/lib/apis";
import { AlertCircle } from "lucide-react";
import useSWR from "swr";

export default function Home() {
  const { data: posts, error, isLoading } = useSWR("/posts", getPosts);

  if (isLoading) {
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

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load posts. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="container mx-auto p-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold my-4 text-center">--(All Posts)--</h1>
      <AddPostForm />
      <PostsList posts={posts} />
    </div>
  );
}
