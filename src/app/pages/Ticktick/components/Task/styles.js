import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0.5em 1em 0.5em 1em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  input {
    background: none;
    border: none;
    flex-grow: 1;
    &:focus {
      outline: none;
    }
  }
  background-color: ${props => props.taskIsSelected ? '#1F1F1F' : 'none'};

  
`;

//
