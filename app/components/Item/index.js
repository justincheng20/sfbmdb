import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Item({ item }) {
  const itemName = <div>{item.name}</div>;
  // return <StyledItem>{itemName}</StyledItem>;
  return (
    <Link className="button" to={`sandwiches/${item.id}`}>
      <div>{item.name}</div>
    </Link>
  );
}

Item.propTypes = {
  item: PropTypes.string,
};

export default Item;
