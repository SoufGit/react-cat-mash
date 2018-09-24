import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isBoolean from 'lodash/isBoolean';
import ErrorMsg from '../common/ErrorMsg';
import Header from '../components/HeaderComponent';
import CatListComponent from '../components/CatListComponent';

const CatListContainer = ({response}) => {
    console.log('CatListContainerCatListContainerCatListContainerCatListContainer'); 
    const onError = isBoolean(response); // display the error block
  return (
    <div className="mb-5">
      <Header />
    {!onError ? (
        <CatListComponent
        catList={response}
        />
  ) : (
        <ErrorMsg />
  )}
    </div>
  );
};

CatListContainer.propTypes = {
    response: PropTypes.array || PropTypes.bool,
  };
  
  const mapStateToProps = state => ({
    // OK state.fetchCatList should be a selector
    response: state.fetchCatList,
  });
  
  export default connect(mapStateToProps)(CatListContainer);


