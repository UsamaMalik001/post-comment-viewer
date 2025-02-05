"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { addPost } from "@/lib/apis";
import { Textarea } from "../ui/textarea";

type FormData = {
  title: string;
  body: string;
};

export default function AddPostForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await addPost(data);
      reset();
      alert("Post added successfully!");
    } catch (error) {
      console.error("Error adding post:", error);
      alert("Failed to add post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-8 space-y-4">
      <div>
        <Input
          {...register("title", { required: "Title is required" })}
          placeholder="Post title"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>
      <div>
        <Textarea
          {...register("body", { required: "Body is required" })}
          placeholder="Post body"
        />
        {errors.body && <p className="text-red-500">{errors.body.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Adding..." : "Add Post"}
      </Button>
    </form>
  );
}
