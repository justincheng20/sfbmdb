import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectAlbums,
} from 'containers/App/selectors';
import saga from './saga';

const key = 'musicList';

export function MusicList({ loading, error, albums }) {
  useInjectSaga({ key, saga });

  return (
    <div>
      <ul>
        {albums.map(title => (
          <li>{title}</li>
        ))}
      </ul>
    </div>
  );
}

MusicList.propTypes = {
  albums: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  albums: makeSelectAlbums(),
});

export function mapDispatchToProps() {
  return {
    // searchAlbums: title => dispatch(loadAlbums(title)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MusicList);
