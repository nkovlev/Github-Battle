import React from 'react';
import './AddPost.css';

function AddPost({ onSubmit, onCancel }) {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, body });
  };

  const validateTitle = (value) => {
    let error;
    if ( !value ) {
      error = 'Required';
    } else if( value.length < 2 || value.length > 7 ){
        error = 'Title must be minimum 2 and maximum 7 characters'
    }
    return error;
  }

  const validateBody = (value) => {
    let error;
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/;
    if (!value)  {
      error = 'Required';
    } else if (!regex.test(value)) {
      error = 'Body must contain at least one uppercase letter, one lowercase letter, minimum 2 and maximum 100 characters';
    }
    return error;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <h3>Add Post</h3>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              onBlur={(event) => setTitle(event.target.value.trim())}
              required
              minLength={2}
            />
            <p className="error">{validateTitle(title)}</p>
          </div>
          <div className="form-group">
            <label>Body:</label>
            <textarea
              value={body}
              onChange={(event) => setBody(event.target.value)}
              onBlur={(event) => setBody(event.target.value.trim())}
              required
              pattern="^(?=.*[A-Z])(?=.*[a-z]).{2,100}$"
            />
            <p className="error">{validateBody(body)}</p>
          </div>
          <div className="modal-buttons">
            <button type="button" onClick={onCancel}>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPost;
