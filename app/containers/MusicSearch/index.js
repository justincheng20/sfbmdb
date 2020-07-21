import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { loadAlbums } from '../App/actions';
import saga from './saga';

const key = 'musicSearch';

export function MusicSearch({ loading, error, searchAlbums }) {
  useInjectSaga({ key, saga });
  const [formData, setFormData] = useState({ name: '' });

  const handleSubmit = evt => {
    console.log("!")
    evt.preventDefault();
    console.log("Check out state ->", formData);
    // do something with the data submitted
    searchAlbums(formData.name);
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    console.log("data", formData)
    setFormData(oldData => ({
      ...oldData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="AddForm">
        <h1>Find Album</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Album Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

MusicSearch.propTypes = {
  searchAlbums: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    searchAlbums: title => dispatch(loadAlbums(title)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MusicSearch);
