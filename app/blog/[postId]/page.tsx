"use client"

import BlogLayout from "@/components/ui/blog_layout";
import { fetchPostById } from "@/lib/fetchdata";
import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
  description: string;
  header: string
  icon: string 
  [key: string]: any; // Add more fields as needed
  href: string;
}

interface BlogPageProps {
  params: {
    postId: string; // Dynamic route parameter
  };
}

export default function BlogPage({ params }: BlogPageProps) { 
  const { postId } = params;

  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await fetchPostById(postId);
        setPost(post);
      } catch (error) {
        console.error("Error fetching post:", error);
        setError("Failed to load the post.");
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  return (
    <div>
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : post ? (
        <BlogLayout post={post} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
