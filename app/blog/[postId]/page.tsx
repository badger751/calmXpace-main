"use client";

import BlogLayout from "@/components/ui/blog_layout";
import { fetchPostById } from "@/lib/fetchdata";
import { useEffect, useState } from "react";
import { useRedirectOnBack } from "@/hooks/useRedirectOnBack"; // Updated hook

interface Post {
  id: string;
  title: string;
  description: string;
  header: string;
  icon: string;
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
  const [routerReady, setRouterReady] = useState(false);

  useEffect(() => {
    setRouterReady(true);
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const fetchPost = () => {
      fetchPostById(postId)
        .then((post) => {
          if (!isCancelled) {
            setPost(post);
          }
        })
        .catch((error) => {
          if (!isCancelled) {
            console.error("Error fetching post:", error);
            setError("Failed to load the post.");
          }
        });
    };

    if (routerReady && postId) {
      fetchPost();
    }

    return () => {
      isCancelled = true;
    };
  }, [postId, routerReady]);

  // Call the custom hook to handle back navigation
  useRedirectOnBack();

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
