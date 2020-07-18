import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import Item from 'components/Item';

function List({ sandwiches, loading, error }) {
  if (loading || !sandwiches) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <ul>
        {sandwiches.length === 0 ? (
          <Item key={uuid()} item='"Nothing Added Yet"' />
        ) : (
          sandwiches.map(sandwich => <Item key={uuid()} item={sandwich} />)
        )}
      </ul>
    </div>
  );
}

List.propTypes = {
  sandwiches: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default List;
