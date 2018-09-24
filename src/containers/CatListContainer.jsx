import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withState, withHandlers, lifecycle, withProps } from 'recompose';
import isBoolean from 'lodash/isBoolean';

import ErrorMsg from '../common/ErrorMsg';
import Header from '../components/HeaderComponent';
import CatListComponent from '../components/CatListComponent';
import { increment, twoCatList, otherCatList } from '../actions/vote';

const CatListContainer = ({
    response, 
    onClickItem, 
    retDataFilter, 
    newCatList
}) => {
    console.log('CatListContainerCatListContainerCatListContainerCatListContainer'); 
    const onError = isBoolean(response); // display the error block
    const msg = 'Make your choice';
    console.log('retDataFilterretDataFilter', retDataFilter);
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
  
//   const mapStateToProps = state => ({
//     // OK state.fetchCatList should be a selector
//     response: state.fetchCatList,
//   });
  
  //export default connect(mapStateToProps)(CatListContainer);

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
            twoCatListAction : data => dispatch(twoCatList(data)),
            otherCatListAction : data => dispatch(otherCatList(data)),
          })
    ),
    
      withProps(({ response, dataFilter, data }) => {
        
        const newCatList = response.slice();
    let retDataFilter = newCatList.splice(0,2);
    
    if(dataFilter.length > 0){
        retDataFilter = newCatList.filter(cat => dataFilter.map((item) => {
            if (item.id !== cat.id) {
              return cat;
            }
          }));
          console.log('dataFilter.length', retDataFilter);
    }

    let retDataFilter123 = newCatList.splice(0,2);
    response = retDataFilter;
    //setData(retDataFilter);
     
    // console.log('newCatListnewCatList', newCatList);
        return {
            newCatList,
            retDataFilter,
            response
        };
      }),
      withHandlers({
        onClickItem: ({ setIswinner, incrementAction, twoCatListAction, retDataFilter, setData }) => (cat) => {
            const promise1 = Promise.resolve(incrementAction(cat));

             promise1.then((value) => {
                console.log('valuevaluevalue',value);
                console.log('retDataFilterretDataFilter', retDataFilter);
                // expected output: Array [1, 2, 3]
                twoCatListAction(retDataFilter);
              });
              setData(retDataFilter);
            setIswinner(cat.isWinner); // render the card
        },
      }),
      lifecycle({
        componentDidMount() {
            //this.props.twoCatListAction(this.props.response);
            //console.log('this.props', this.props);
        },
      })
  )(CatListContainer));


