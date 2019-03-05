import React from 'react';
import CircleBtn from './styles/button';
import { Nav } from './styles/layout';
import { UserConsumer } from './userCtxt';

const Navbar = (props) => {
  const { onSidebarToggle, sidebar } = props;
  const navbarToggleClass = Boolean(sidebar) ? 'sidebar-display' : 'sidebar-hidden';

  return (
    <Nav className="header">
      <CircleBtn
        onClick={onSidebarToggle}
        className={`btn-left animate ${navbarToggleClass}`}
      >
        <i className='zmdi zmdi-arrow-left'></i>
      </CircleBtn>
      <UserConsumer>
        {({username}) => (
          <div className="header-right">
            <div className="header-text">{username}</div>
            <CircleBtn
              className={`btn-right animate ${navbarToggleClass}`}
              background={'#e1e1e1'} />
          </div>
        )}
      </UserConsumer>
    </Nav>
  )
};

export default Navbar;
