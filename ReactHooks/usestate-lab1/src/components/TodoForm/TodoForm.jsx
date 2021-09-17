import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TodoForm.css";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // prevent reloading browser
    e.preventDefault();

    // check
    if (!onSubmit) return;

    const formValues = {
      title: value,
    };
    onSubmit(formValues);

    // Reset form
    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange} />
      <p>Press Enter to submit.</p>
    </form>
  );
}

export default TodoForm;
