"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Post = () => {
    const router = useRouter();
    const [postNo, setPostNo] = useState('');
    const [reviewNo, setReviewNo] = useState('');
    const [error, setError] = useState('');
  
    const handlePostRedirect = () => {
      if (!postNo.trim()) {
        setError('Post number is required');
        return;
      }
      const url = `/post/${postNo}`;
      router.push(url);
    };
  
    const handlePostReviewRedirect = () => {
      if (!postNo.trim() || !reviewNo.trim()) {
        setError('Post number and review number are required');
        return;
      }
      const url = `/post/${postNo}/review/${reviewNo}`;
      router.push(url);
    };
  
    return (
      <div>
        <h1>Post</h1>
        <div className="flex justify-center font-bold text-5xl mt-12 mb-20">
          Post
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="w-64 mx-auto">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
            placeholder="Post Number"
            value={postNo}
            onChange={(e) => setPostNo(e.target.value)}
          />
          <button
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 mb-4"
            onClick={handlePostRedirect}
          >
            Go to Post
          </button>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
            placeholder="Review Number"
            value={reviewNo}
            onChange={(e) => setReviewNo(e.target.value)}
          />
          <button
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            onClick={handlePostReviewRedirect}
          >
            Go to Post & Review
          </button>
        </div>
      </div>
    );
  };
  
  export default Post;