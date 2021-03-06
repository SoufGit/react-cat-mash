import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isBoolean from 'lodash/isBoolean';
import sortBy from 'lodash/sortBy';
import ErrorMsg from '../common/ErrorMsg';
import CatListComponent from '../components/CatListComponent';

const CatResultContainer = ({response}) => {
    const onError = isBoolean(response); // display the error block    
    const sortedList = sortBy(response, c => { return -c.nbVote; });
  return (
   
!onError ? (
    <CatListComponent
    catList={sortedList}
    isResultList
    />
  ) : (
    <ErrorMsg />
  )
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


