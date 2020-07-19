import React, { useEffect, memo } from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectSandwiches,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

// import messages from './messages';
import { loadDetails } from '../App/actions';
import saga from './saga';

const key = 'sandwiches';

export function SandwichPage({ loading, error, onLoad, details }) {
  const { id } = useParams();
  useInjectSaga({ key, saga });
  useEffect(() => {
    console.log("useEffect")
    onLoad(id);
  }, []);
  
  const sandwich = details[id - 1];
  
  if (loading || sandwich.data === false) {
    return 'Loading...';
  }

  if (error) {
    return 'Something went wrong.';
  }
  
  

  return (
    <div>
      <h1>{sandwich.name}</h1>
      <div>{sandwich.details.description}</div>
      <div>Tastes Like: {sandwich.details.music}</div>
      <iframe src={`https://open.spotify.com/embed/track/${sandwich.details.spotify}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  );
}

SandwichPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // sandwiches: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  details: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoad: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  details: makeSelectSandwiches(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: id => dispatch(loadDetails(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SandwichPage);
