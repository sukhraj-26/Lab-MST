import React from 'react';
import { useSelector } from 'react-redux';

export default function ViewerPanel() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="mt-4 space-y-3">
      <div className="bg-gray-100 text-gray-600 text-center py-2 rounded text-sm font-semibold">
        Read-only access
      </div>
      <div className="space-y-2">
        {posts.map((post) => (
          <div key={post.id} className="p-3 bg-gray-50 rounded border text-sm text-gray-700">
            {post.title}
          </div>
        ))}
      </div>
    </div>
  );
}