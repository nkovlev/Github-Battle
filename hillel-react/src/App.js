import React, { useState, useEffect } from 'react';
import './App.css';
import Modal from './Components/ModalDelete/ModalDelete'
import AddPost from './Components/AddPost/AddPost'

function App() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  const [showAddPost, setShowAddPost] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data.slice(0, 5));
      });
  }, []);

  const handleDelete = (postId) => {
    setShowModal(true);
    setPostIdToDelete(postId);
  };

  const handleDeleteConfirm = () => {
    const updatedPosts = posts.filter(post => post.id !== postIdToDelete);
    setPosts(updatedPosts);
    setShowModal(false);
    setPostIdToDelete(null);
  };

  const handleDeleteCancel = () => {
    setShowModal(false);
    setPostIdToDelete(null);
  };

  const handleAddPostSubmit = (newPost) => {
    const id = posts.length + 1;
    const post = { id, ...newPost };
    setPosts([...posts, post]);
    setShowAddPost(false);
  };

  const handleAddPostCancel = () => {
    setShowAddPost(false)
  };

  return (
    <div>
      {!showAddPost && (
        <button onClick={() => setShowAddPost(true)} className="addPostBtn">Add post</button>
      )}
      {showAddPost && (
        <AddPost 
        onSubmit={handleAddPostSubmit}
        onCancel={handleAddPostCancel}
        />
      )}

      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.id}</h3>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}

      {showModal &&
        <Modal
          title="Delete Post"
          message="Are you sure you want to delete this post?"
          onCancel={handleDeleteCancel}
          onConfirm={handleDeleteConfirm}
        />
      }
    </div>
  );
}

export default App;
