import React from 'react';
import { Menu, Icon, Responsive } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => (
<React.Fragment>
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
  </React.Fragment>
  );

export default HeaderComponent;
