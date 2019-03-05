import styled from 'styled-components';

const SidemenuContainer = styled.nav`
  .nav-item {
    padding: 15px 0 15px 30px;
    ${props => props.theme.breakpoint.tablet} {
      color: ${props => props.theme.palette.muted};
    }

    &.active {
      font-weight: 600;
      ${props => props.theme.breakpoint.tablet} {
        background: ${props => props.theme.palette.bgHover};
        color: ${props => props.theme.palette.body};
      }
    }
  }

  .sub-heading {
    font-size: 13px;
    ${props => props.theme.breakpoint.tablet} {
      color: ${props => props.theme.palette.body};
    }
  }

  .link {
    font-weight: 400;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;

    div {
      cursor: pointer;
      &:hover {
        background: ${props => props.theme.palette.bgHover};
      }
    }
  }
`;

export { SidemenuContainer };
