import React, { useState } from 'react';
import { UserConsumer } from './userCtxt';
import { SidebarColumn, SidebarContent } from './styles/layout';
import { SidemenuContainer } from './styles/sidebar';

const sideMenuData = [
  {
    name: 'Career'
  },
  {
    name: 'Personal',
    sub: [
      {
        subheading: 'Manage',
      },
      {
        name: 'Password'
      },
      {
        name: 'Email'
      },
    ]
  }
]

const SideMenu = (props) => {
  const { data, addClassName } = props;
  const [submenuDisplay, toggleSubmenu] = useState(false);

  function toggleSub(e) {
    e.stopPropagation();
    toggleSubmenu(!submenuDisplay);
  }

  return (
    <ul className={addClassName}>
      {data.map((el, idx) => {
        return (
        <li key={idx}>
          {el.subheading ? (
            <div className="text--uppercase nav-item sub-heading">
               {el.subheading}
            </div>) :
            <div
              className={Boolean(submenuDisplay) && el.sub ? `nav-item link active` : 'nav-item link'}
              onClick={el.sub && toggleSub}>
              {el.name}
            </div>
          }
          {el.sub && Boolean(submenuDisplay)
            && <SideMenu data={el.sub} addClassName="sub"/>}
          </li>
      )})}
    </ul>
  )
}

const Sidebar = (props) => (
  <SidebarColumn>
    <SidebarContent {...props}>
      <UserConsumer>
        {({username}) => (
          <h2>{username}</h2>
        )}
      </UserConsumer>

      <SidemenuContainer>
        <div className="text--uppercase nav-item sub-heading">Account</div>
        <SideMenu data={sideMenuData}/>
      </SidemenuContainer>

    </SidebarContent>
  </SidebarColumn>
)


export default Sidebar
