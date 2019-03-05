import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(5, minmax(80px, min-content));
  grid-row-gap: 15px;
  align-content: center;

  .form-inputs {
    align-self: center;
    position: relative;

    &.active {
      label {
        transform: translateY(-20px);
        font-size: 10px;
      }
    }
  }

  .form-title {
    align-self: center;
  }

  label {
    position: absolute;
    z-index: 1;
  }

  input {
    width: 100%;
    position: relative;
    z-index: 1;
    background: transparent;
    border: 0;
    border-bottom: 1px solid ${props => props.theme.palette.border};
    font-size: 16px;
    padding: 10px 0;
  }
`;

export default Form;
