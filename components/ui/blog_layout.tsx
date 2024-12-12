"use client";

import React, { useEffect } from "react";
import Lenis from "lenis"; // Import Lenis




interface BlogPost {
  id: string;
  title: string;
  description: string;
  header: string;
  icon: string;
  href: string;
}

const BlogLayout = ({ post }: { post: BlogPost }) => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Control animation duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smoothWheel: true, // Enable smooth scrolling
    });

    // Animation frame for Lenis
    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-customYellow min-h-screen">
      <div className="mb-12">
    
      
</div>
      <div className="container mx-auto px-4 pt-24">
        {/* Outer grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side containing title and image */}
          <div className="flex flex-col justify-start">
            <h2
              className="text-5xl font-light text-black mb-4"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {post.title}
            </h2>
            {/* Image directly below the title */}
            <div className="flex justify-start mb-8">
              <img
                src={post.icon}
                alt="Icon"
                className="w-full max-w-lg h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right side containing description */}
          <div className="flex flex-col justify-start">
            <div className="text-left text-2xl text-black leading-relaxed">
              <p>{post.description}</p>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default BlogLayout;
