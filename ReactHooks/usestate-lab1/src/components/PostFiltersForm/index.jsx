import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./index.css";

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  onSubmit: null,
};

function PostFiltersForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;

    // clear truoc khi set timeout moi
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // doi 300ms moi goi onSubmit
    // neu duoc 100ms da tiep tuc trigger ham handle
    // thi se thay gia tri ref co ton tai, phai clear timeout truoc do
    // sau do moi duoc set timeout moi o thoi diem hien tai
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 300);
  };

  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
    </form>
  );
}

export default PostFiltersForm;
