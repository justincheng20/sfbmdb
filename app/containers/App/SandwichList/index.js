import React, { useEffect, memo } from 'react';
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
import List from 'components/List';
import { Link } from 'react-router-dom';
import messages from './messages';
import { loadItems } from '../App/actions';
import saga from './saga';

const key = 'sandwiches';

export function SandwichList({ loading, error, onLoad, data }) {
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (!data.items) onLoad();
  }, []);

  const listProps = {
    data,
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
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onLoad: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(loadItems()),
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
