import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CatListContainer from '../containers/CatListContainer';
import CatResultContainer from '../containers/CatResultContainer';
import { fetchCatList } from '../reducers/catReducer';
import Header from '../components/HeaderComponent';

class CatListScreen extends Component {
  componentDidMount() {
      //fetch api
      //if(!this.props.isResultList){
        this.props.fetchListAction();
      //}    
  }   

  render() {
    const msg = this.props.isResultList ? 'List of votes' : 'Make your choice';
    return (
        <div className="mb-5">
        <Header />
        <p className="App-intro">
            {msg}
        </p>
        {this.props.isResultList ? <CatResultContainer isResultList={this.props.isResultList}/> : <CatListContainer />}
        </div>
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
