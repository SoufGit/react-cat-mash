import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withState, withHandlers, withProps } from 'recompose';
import isBoolean from 'lodash/isBoolean';

import ErrorMsg from '../common/ErrorMsg';
import CatListComponent from '../components/CatListComponent';
import { increment } from '../actions/vote';

const CatListContainer = ({
    response, 
    onClickItem, 
    retDataFilter,
}) => {
    const onError = isBoolean(response); // display the error block
    //console.log('responseresponse', response);
     //console.log('retDataFilterretDataFilter' , retDataFilter);
  return (
    !onError ? (
        <CatListComponent
        catList={retDataFilter}
        onClickItem={onClickItem}
        />
  ) : (
        <ErrorMsg />
  )
  );
};

CatListContainer.propTypes = {
    response: PropTypes.array || PropTypes.bool,
  };

  export default(compose(
    withState('isWinner', 'setIswinner', false), 
    withState('retDataFilter', 'setRetDataFilter', []),        
    connect(
        state => ({
            // OK state.fetchCatList should be a selector
            response: state.fetchCatList,
            dataFilter: state.totoList,
            //responseTwo: state.
          }),
        dispatch => ({
            incrementAction: data => dispatch(increment(data)),
          })
    ),
    
      withProps(({ response, retDataFilter }) => {        
        const newCatList = response.slice();
        const dataFiltered = newCatList.filter(item => !item.hasVote);
        retDataFilter = dataFiltered.splice(0,2);
        return {
            newCatList,
            retDataFilter,
            dataFiltered
        };
      }),
      withHandlers({
        onClickItem: ({ incrementAction, retDataFilter, setRetDataFilter }) => (cat) => {
            retDataFilter = retDataFilter.map(item => {
                if(item.id === cat.id){item.hasClicked = true};
                return item;
            })
            setRetDataFilter(retDataFilter);
            setTimeout(() => {incrementAction(retDataFilter)}, 500);
        },
      }),
  )(CatListContainer));


