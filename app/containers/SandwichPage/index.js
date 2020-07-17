import React, { useEffect, memo } from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectDetails,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

// import messages from './messages';
import { loadDetails } from '../App/actions';
import saga from './saga';

const key = 'sandwiches';

export function SandwichPage({ loading, error, onLoad, details }) {
  useInjectSaga({ key, saga });
  const { id } = useParams();
  useEffect(() => {
    onLoad(id);
  }, []);

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return 'Something went wrong.';
  }
  return (
    <div className="title">
      <h1>{details.name}</h1>
      <div>{details.description}</div>
      <div>Tastes Like: {details.music}</div>
      <div>Comments</div>
    </div>
  );
}

SandwichPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  details: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onLoad: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  details: makeSelectDetails(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: (id) => dispatch(loadDetails(id)),
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
