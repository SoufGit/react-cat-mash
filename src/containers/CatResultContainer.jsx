import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isBoolean from 'lodash/isBoolean';
import sortBy from 'lodash/sortBy';
import ErrorMsg from '../common/ErrorMsg';
import Header from '../components/HeaderComponent';
import CatListComponent from '../components/CatListComponent';

const CatResultContainer = ({response, isResultList}) => {
    const onError = isBoolean(response); // display the error block
    
    const toto = sortBy(response, c => { return -c.nbVote; });
    console.log('responseresponseresponse', response); 
    console.log('totototototo', toto); 
  return (
    <div className="mb-5">
      <Header />
{!onError ? (
    <CatListComponent
    catList={toto}
    isResultList
    />
  ) : (
    <ErrorMsg />
  )}
    </div>
  );
};

CatResultContainer.propTypes = {
    response: PropTypes.array || PropTypes.bool,
  };
  
  const mapStateToProps = state => ({
    // OK state.fetchCatList should be a selector
    response: state.fetchCatList,
  });
  
  export default connect(mapStateToProps)(CatResultContainer);


