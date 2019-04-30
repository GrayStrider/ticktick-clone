import styled from 'styled-components';

export const InputButtonBar = styled.span`
  // @ts-ignore
  display: ${props => props.active ? 'flex' : 'none'};
  position: relative;
  float: right;
  top: -27px;
  margin-bottom: -27px;
  padding: 0 0.5em 0 0.5em;
  justify-content: space-between;
  width: 7em;
  z-index: 900;
  height: 100%;
  
  
  .icon {
    cursor: pointer;
    z-index: 998;
  }
  
`
