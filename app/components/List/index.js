import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import Item from 'components/Item';


function List({ data, loading, error }) {
  if (loading || data.items === false) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <StyledItemList>
        <ul>
          {data.items.length === 0 ? (
            <Item key={uuid()} item='"Nothing Added Yet"' />
          ) : (
            data.items.map(item => <Item key={uuid()} item={item} />)
          )}
        </ul>
      </StyledItemList>
    </div>
  );
}

List.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default List;
