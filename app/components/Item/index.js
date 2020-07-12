import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StyledItem from './StyledItem';

function Item({ item }) {
  const itemName = <div>{item.name}</div>;
  // return <StyledItem>{itemName}</StyledItem>;
  return (
    <Link className="button" to={`sandwiches/${item.id}`}>
      <StyledItem>{itemName}</StyledItem>
    </Link>
  );
}

Item.propTypes = {
  item: PropTypes.string,
};

export default Item;
