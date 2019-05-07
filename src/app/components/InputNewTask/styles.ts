import styled from 'styled-components';

export const Wrapper = styled.span<{
  buttonBarActive: boolean
}>`
  padding: 0.5em 1em 0.5em 1em;
  
  .input input {
    background: black;
    color: white !important;
    border: 1px solid gray;
    border-radius: 1px;
    padding: 0.5em ${props => props.buttonBarActive ? '7em' : '0.5em'} 0.5em 0.5em ;
    &::placeholder {
      color: #ffffff;
    }
    
    &:focus {
      background: black;
      
      &::placeholder {
        color: #ffffff;
      }
    }
  }
`;
