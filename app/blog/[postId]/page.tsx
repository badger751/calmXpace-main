"use client";

import BlogLayout from "@/components/ui/blog_layout";
import { fetchPostById } from "@/lib/fetchdata";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRefreshOnBack } from "@/hooks/useRefreshOnBack"; // Import the custom hook

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
    // Delay setting the router ready state until after the component mounts
    setRouterReady(true);
  }, []);

  // Fetch post only if the router is ready
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

    if (routerReady && postId) {
      fetchPost();
    }
  }, [postId, routerReady]);

  // Call the custom hook to handle back navigation
  useRefreshOnBack();

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
