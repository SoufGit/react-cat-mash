import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CatListContainer from '../containers/CatListContainer';
import CatResultContainer from '../containers/CatResultContainer';
import { fetchCatList } from '../reducers/catReducer';

class CatListScreen extends Component {
  componentDidMount() {
      //fetch api
      //if(!this.props.isResultList){
        this.props.fetchListAction();
      //}    
  }   

  render() {
    return (this.props.isResultList ? <CatResultContainer isResultList={this.props.isResultList}/> : <CatListContainer />
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
