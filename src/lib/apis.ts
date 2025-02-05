const BASE_URL = "https://jsonplaceholder.typicode.com";
export async function getPosts() {
  const response = await fetch(`${BASE_URL}/posts`);
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
}

export async function getPost(id: string) {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  if (!response.ok) throw new Error("Failed to fetch post");
  return response.json();
}

export async function getComments(postId: string) {
  const response = await fetch(`${BASE_URL}/comments?postId=${postId}`);
  if (!response.ok) throw new Error("Failed to fetch comments");
  return response.json();
}

export async function addPost(data: { title: string; body: string }) {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to add post");
  return response.json();
}

export async function addComment(data: { title: string; body: string }) {
  const response = await fetch(`${BASE_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to add comment");
  return response.json();
}
