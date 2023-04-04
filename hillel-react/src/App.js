import React, { Component } from 'react';
import './App.css'

class Modal extends Component {
  render() {
    const { title, message, onCancel, onConfirm } = this.props;

    return (
      <div className="modal">
        <div className="modal-content">
          <h3>{title}</h3>
          <p>{message}</p>
          <div className="modal-buttons">
            <button onClick={onCancel}>No</button>
            <button onClick={onConfirm}>Yes</button>
          </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      showModal: false,
      postIdToDelete: null
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: data.slice(0, 5) }); // обрезаем массив до первых 5 элементов
      });
  }

  handleDelete = (postId) => {
    this.setState({ showModal: true, postIdToDelete: postId });
  }

  handleDeleteConfirm = () => {
    const { posts, postIdToDelete } = this.state;
    const updatedPosts = posts.filter(post => post.id !== postIdToDelete);
    this.setState({ posts: updatedPosts, showModal: false, postIdToDelete: null });
  }

  handleDeleteCancel = () => {
    this.setState({ showModal: false, postIdToDelete: null });
  }

  render() {
    const { posts, showModal } = this.state;

    return (
      <div>
        {posts.map(post => (
          <div key={post.id} className="post">
            <h3>{post.id}</h3>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => this.handleDelete(post.id)}>Delete</button>
          </div>
        ))}
        {showModal &&
          <Modal
            title="Delete Post"
            message="Are you sure you want to delete this post?"
            onCancel={this.handleDeleteCancel}
            onConfirm={this.handleDeleteConfirm}
          />
        }
      </div>
    );
  }
}

export default App;
