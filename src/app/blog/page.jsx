"use client"

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    if (session) {
      fetchPosts();
    }
  }, [session]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Your Posts</h1>
      {session ? (
        <ul className="space-y-4">
          {posts.length === 0 ? (
            <p>No posts found.</p>
          ) : (
            posts.map((post) => (
              <li
                key={post.id}
                className="border rounded-md p-4 shadow-md hover:shadow-lg transition duration-300"
              >
                <Link href={`/posts/${post.id}`}>
                  <span className="text-blue-500 hover:underline">{post.title}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      ) : (
        <p className="text-gray-600">Please sign in to view your posts.</p>
      )}
    </div>
  );
};

export default PostsPage;
