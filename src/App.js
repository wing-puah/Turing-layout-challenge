import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { UserProvider } from './userCtxt';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Main from './form';
import GlobalStyle, { theme } from './globalCSS';

const App = (props) => {
  const [sidebar, toggleSidebar] = useState(false);
  const [username, updateUserName] = useState('Giselle')
  const sidebarToggleClass = sidebar === true ? 'display' : 'hide';
  const contextValue = {
    username: username,
    updateUserNameState: updateUserNameState,
  };

  function updateUserNameState(el) {
    updateUserName(el);
  }

  function changeStateOfSidebar() {
    toggleSidebar(!sidebar);
  }

  return (
    <ThemeProvider theme={theme}>
      <UserProvider value={contextValue}>
        <div className="grid-container">
          <GlobalStyle />
          <Navbar
            onSidebarToggle={changeStateOfSidebar}
            sidebar={sidebar} />
          <Sidebar className={sidebarToggleClass}/>
          <section>
            <Main/>
          </section>
        </div>
      </UserProvider>
    </ThemeProvider>
)}

export default App;
