import React, { useState } from "react";

const AddCommentForm = ({ }) => {
  const INITIAL_STATE = { comment: "" };
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
      [name]: value
    }));
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Comment:</label>
      <input
        id="comment"
        name="comment"
        value={formData.name}
        onChange={handleChange}
      />



      <button>Add comment!</button>
    </form>
  );
};

export default AddCommentForm;
