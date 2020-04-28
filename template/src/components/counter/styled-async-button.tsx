import styled from 'styled-components'

export const StyledAsyncButton = styled.button`
  composes: button;
  position: relative;
  margin-left: 8px;

  &:after {
    content: "";
    background-color: rgba(112, 76, 182, 0.15);
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    transition: width 1s linear, opacity 0.5s ease 1s;

    &:after {
      width: 0;
      opacity: 1;
      transition: 0s
    }
  }
`

export default StyledAsyncButton
