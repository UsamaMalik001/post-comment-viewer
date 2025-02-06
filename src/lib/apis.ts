const API_BASE = "https://jsonplaceholder.typicode.com";

export async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error("An error occurred while fetching the data.");
  return res.json();
}

export const getPosts = () => fetcher<Post[]>(`${API_BASE}/posts`);
export const getPost = (id: string) => fetcher<Post>(`${API_BASE}/posts/${id}`);
export const getComments = (postId: string) =>
  fetcher<Comment[]>(`${API_BASE}/comments?postId=${postId}`);

export async function addPost(data: { title: string; body: string }) {
  const res = await fetch(`${API_BASE}/posts`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!res.ok) throw new Error("Failed to add post");
  return res.json();
}

export async function addComment(data: {
  postId: string;
  name: string;
  email: string;
  body: string;
}) {
  const res = await fetch(`${API_BASE}/comments`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!res.ok) throw new Error("Failed to add comment");
  return res.json();
}

export type Post = {
  id: number;
  title: string;
  body: string;
};

export type Comment = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};
