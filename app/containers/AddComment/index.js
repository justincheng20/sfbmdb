import React, { useState } from 'react';

const AddCommentForm = () => {
  const INITIAL_STATE = { comment: '' };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    // addItem(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Comment:</label>
      <input
        id="comment"
        name="comment"
        value={formData.comment}
        onChange={handleChange}
      />
      <button type="submit">Add comment!</button>
    </form>
  );
};

export default AddCommentForm;
