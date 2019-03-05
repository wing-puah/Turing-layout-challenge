import styled from 'styled-components';

const CircleBtn = styled.button`
  background: ${props => props.background || 'transparent'};
  border-radius: 100%;
  color: white;
  width: 50px;
  height: 50px;
  justify-content: center;
  display: inline;
  cursor: pointer;
  border: none;

  &.btn-left {
    @media only screen and (max-width: 600px) {
      position: fixed;
      right: 15px;
      top: 15px;
    }
    border: 3px solid #dc412e;
    ${props => props.theme.breakpoint.tablet} {
      border: 0;
    }
    &.sidebar-display {
      background: #dc412e;
      transform: rotate(180deg);
    }

    &.sidebar-hidden {
      color: ${props => props.theme.palette.body};
    }
  }

  &.btn-right {
    &.sidebar-display {
      background: #dc412e;
    }
  }
`;

export default CircleBtn;
