import React, { useEffect, memo } from 'react';
import { useParams } from "react-router";
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectData,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

// import messages from './messages';
import { loadDetails } from '../App/actions';
import saga from './saga';

const key = 'sandwiches';

export function SandwichPage({ loading, error, onLoad, details }) {
  useInjectSaga({ key, saga });
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    if (!details) onLoad();
  }, []);

  const itemsListProps = {
    details,
    loading,
    error,
  };

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return 'Something went wrong.';
  }
  return (
    <div className="title">
      <h1>Stuff</h1>
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
  data: makeSelectData(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(loadDetails()),
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
