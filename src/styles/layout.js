import styled from 'styled-components';

const Nav = styled.nav`
  display: grid;
  align-items: center;
  align-content: space-around;
  grid-template-columns: auto 80px;
  grid-template-rows: 1fr;
  position: relative;

  ${props => props.theme.breakpoint.tablet} {
    grid-template-columns: 80px auto;
  }

  .btn-left {
    justify-self: center;
    grid-column: 2;
    ${props => props.theme.breakpoint.tablet} {
      grid-column: 1;
    }
  }

  .header-right {
    @media only screen and (max-width: 600px){
      .btn-right {
        display: none;
        grid-area: 1 / 1;
      }
    }
    align-items: center;
    justify-self: end;

    ${props => props.theme.breakpoint.tablet} {
      display: inline-grid;
      grid-template-columns: auto 80px;
    }
  }

  .header-text {
    justify-self: end;
  }

  .btn-right {
    justify-self: center;
  }
`;

const MainGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 9fr 1fr;
  grid-template-rows: auto 3px auto;
  grid-template-areas:
    '. title .'
    'hr hr hr'
    '. formContainer .';

  ${props => props.theme.breakpoint.tablet} {
    grid-template-columns: 2fr 3fr 3fr 100px;
    grid-template-rows: 130px 3px auto;
    grid-template-areas:
      '. title . .'
      ' hr hr hr hr'
      '. formContainer . . ';
  }

  .title-container {
    @media only screen and (max-width: 600px) {
      padding: 20px 0;
    }
    grid-area: title;
    text-align: center;
  }

  .form-container {
    grid-area: formContainer;
    margin: 20px 0;
  }

  .border {
    grid-area: hr;
    background: ${props => props.theme.palette.border};
  }
`;

const SidebarColumn = styled.aside`
  @media only screen and (max-width: 600px) {
    left: -100%;
  }
  position: absolute;
  ${props => props.theme.breakpoint.tablet} {
    position: relative;
  }
`;

const SidebarContent = styled.div`
  @media only screen and (max-width: 600px) {
    color: black;
    width: 80%;
    height: 100%;
  }
  background: #dc412e;
  position: fixed;
  opacity: 0.9;
  transition: all 0.6s ease-in-out;
  display: grid;
  grid-template-rows: 80px auto;
  align-content: center;
  font-weight: 500;
  z-index: 2;
  ${props => props.theme.breakpoint.tablet} {
    position: relative;
    background: white;
    width: 100%;
  }

  h2 {
    align-self: center;
    padding-left: 30px;
  }

  &.display {
    left: 0;
  }

  &.hide {
    left: -100%;
  }
}`;

export { MainGrid, SidebarColumn, SidebarContent, Nav };
