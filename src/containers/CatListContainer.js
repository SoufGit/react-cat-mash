import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Responsive } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import isBoolean from 'lodash/isBoolean';
import ErrorMsg from '../common/ErrorMsg';
import CatListComponent from '../components/duel/CatListComponent';

const CatListContainer = ({response}) => {
    const onError = isBoolean(response); // display the error block
  return (
    <div className="mb-5">
      <Menu attached borderless inverted secondary widths={1}>
        <Menu.Item className="righteous text-white font-4rem">
          <Responsive as={Icon} minWidth={768} name="paw" /> CAT MASH
        </Menu.Item>
      </Menu>
      <Menu attached inverted className="bg-red-gradient" widths={2}>
        <Menu.Item
          as={NavLink}
          exact
          to="/"
          className="righteous font-185rem"
          size="massive"
        >
          Duel
        </Menu.Item>
        <Menu.Item as={NavLink} to="/results" className="righteous font-185rem">
          Results
        </Menu.Item>
      </Menu>
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


