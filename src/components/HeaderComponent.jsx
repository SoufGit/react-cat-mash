import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => (
<React.Fragment>    
  <Menu attached inverted className="bg-blue-gradient" widths={2}>
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
  </React.Fragment>
  );

export default HeaderComponent;
