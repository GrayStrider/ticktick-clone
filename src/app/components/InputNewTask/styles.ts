import styled from 'styled-components';
import { EPriorities } from 'app/types/types';

export const Wrapper = styled.span<{
  buttonBarActive: boolean,
}>`
  padding: 0.5em 1em 0.5em 1em !important;
  
  input {
    background: black !important;
    color: white !important;
    border: 1px solid gray !important;
    border-radius: 1px !important;
    padding: 0.5em ${props => props.buttonBarActive ? '7em' : '0.5em'} 0.5em 0.5em !important;
    &::placeholder {
      color: #ffffff !important;
    }
    
    &:focus {
      background: black !important;
      
      &::placeholder {
        color: #ffffff !important;
      }
    }
  }
`;
