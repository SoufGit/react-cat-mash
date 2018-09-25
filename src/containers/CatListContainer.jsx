import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withState, withHandlers, withProps } from 'recompose';
import isBoolean from 'lodash/isBoolean';
import merge from 'lodash/merge';

import ErrorMsg from '../common/ErrorMsg';
import Header from '../components/HeaderComponent';
import CatListComponent from '../components/CatListComponent';
import { increment, twoCatList, otherCatList } from '../actions/vote';

const CatListContainer = ({
    response, 
    onClickItem, 
    retDataFilter, 
    isWinner,
}) => {
    const onError = isBoolean(response); // display the error block
    const msg = 'Make your choice';
    console.log('isWinnerisWinnerisWinner', isWinner);
  return (
    <div className="mb-5">
      <Header />
    {!onError ? (
        <React.Fragment>
        <p className="App-intro">
    {msg}
        </p>
        <CatListComponent
        catList={retDataFilter}
        onClickItem={onClickItem}
        />
        </React.Fragment>
  ) : (
        <ErrorMsg />
  )}
    </div>
  );
};

CatListContainer.propTypes = {
    response: PropTypes.array || PropTypes.bool,
  };

  export default(compose(
    withState('isWinner', 'setIswinner', false), 
    withState('data', 'setData', []),        
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
    
      withProps(({ response }) => {        
        const newCatList = response.slice();
        const dataFiltered = newCatList.filter(item => !item.hasVote);
        const retDataFilter = dataFiltered.splice(0,2);
        return {
            newCatList,
            retDataFilter,
            dataFiltered
        };
      }),
      withHandlers({
        onClickItem: ({ setIswinner, incrementAction, retDataFilter, setData }) => (cat) => {
            const newData = retDataFilter.map(item => {
                if(item.id === cat.id){item.hasClicked = true};
                return item;
            })
            console.log('newData', newData);
            const promise1 = setTimeout(() => {incrementAction(newData)}, 1000);
            //clearTimeout(promise1);
            //setIswinner(cat.isWinner);
        },
      }),
  )(CatListContainer));


