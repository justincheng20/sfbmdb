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

export function MusicSearch({ loading, error, handleSubmit }) {
  useInjectSaga({ key, saga });
  const [formData, setFormData] = useState({ name: '' });

  const handleChange = evt => {
    const { name, value } = evt.target;
    console.log("data",formData)
    setFormData(oldData => ({
      ...oldData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="AddForm">
        <h1>Find Album</h1>
        <form>
          <label htmlFor="name">Album Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </form>
        <button type="submit" onClick={handleSubmit(formData.name)}>
          Search
        </button>
      </div>
    </div>
  );
}

MusicSearch.propTypes = {
  handleSubmit: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: title => dispatch(loadAlbums(title)),
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
