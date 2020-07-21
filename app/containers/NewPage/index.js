import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MusicSearch from 'containers/MusicSearch';

const INITIAL_STATE = {
  name: "",
  price: "",
  description: "",
  music: "",
  spotify: ""
}

function NewPage() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  // const history = useHistory();
  // const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    // if(post) {
    //   dispatch(putPost(post.id, formData));
    //   toggleForm();
    // } else {
    //   dispatch(addPost(formData));
    //   history.push("/")
    // }
  };

  // const handleCancel = () => {
  //   post ? toggleForm() : history.push("/");
  // }

  return (
    <div className="AddForm">
      <h1> New Post</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="music">Music</label>
        <input
          type="text"
          id="music"
          name="music"
          value={formData.music}
          onChange={handleChange}
        />
        <label htmlFor="spotify">Spotify</label>
        <input
          type="text"
          id="spotify"
          name="spotify"
          value={formData.spotify}
          onChange={handleChange}
        />
        {/* <button className="AddEditForm-btn-save" onClick={handleSubmit}>Save</button>
        <button className="AddEditForm-btn-cancel" onClick={handleCancel}>Cancel</button> */}
      </form>
      <MusicSearch />
    </div>
  );
}

export default NewPage;
