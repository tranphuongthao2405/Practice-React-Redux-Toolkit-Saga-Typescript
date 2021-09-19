import React from "react";
import PropTypes from "prop-types";

Hero.propTypes = {
  name: PropTypes.string,
};

Hero.defaultProps = {
  name: "",
};

function Hero(props) {
  const { name } = props;

  return <div>Hero name: {name}</div>;
}

// neu k dung thi neu state count o App thay doi
// app render lai thi component Hero cung bi render lai mac du props name khong thay doi
export default React.memo(Hero);
