import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../redux/postSlice';

export default function AdminPanel() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="section-title">Manage Posts (Admin Access)</div>
      {posts.length === 0 ? (
        <p style={{ color: '#94a3b8', fontSize: '14px' }}>No posts remaining.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post-item">
            <span>{post.title}</span>
            <button
              onClick={() => dispatch(deletePost(post.id))}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}