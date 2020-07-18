import React, { useEffect, memo } from 'react';
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
import List from 'components/List';
import { Link } from 'react-router-dom';
import messages from './messages';
import { loadSandwiches } from '../App/actions';
import saga from './saga';

const key = 'sandwiches';

export function SandwichList({ loading, error, onLoad, sandwiches }) {
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (sandwiches === false) onLoad();
  }, []);

  const listProps = {
    sandwiches,
    loading,
    error,
  };

  // if (loading) {
  //   return 'Loading...';
  // }

  // if (error) {
  //   return 'Something went wrong.';
  // }

  return (
    <div className="title">
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Link className="button" to="/new">
        Add a new entry
      </Link>
      <List {...listProps} />
    </div>
  );
}

SandwichList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  sandwiches: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoad: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  sandwiches: makeSelectSandwiches(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(loadSandwiches()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SandwichList);
