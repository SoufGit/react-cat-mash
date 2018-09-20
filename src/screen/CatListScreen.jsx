import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CatListContainer from '../containers/CatListContainer';
import { fetchCatList } from '../reducers/catReducer';


class CatListScreen extends Component {
  componentDidMount() {
      //fetch api
    this.props.fetchListAction();
  }

  render() {
    return (
          <CatListContainer />
    );
  }
}

CatListScreen.propTypes = {
  fetchListAction: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  fetchListAction: () => dispatch(fetchCatList()),
});

export default connect(null, mapDispatchToProps)(CatListScreen);
