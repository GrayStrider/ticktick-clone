import styled from 'styled-components';

export const Wrapper = styled.span`
  padding: 0.5em 1em 0 1em;
  display: flex;
  flex-direction: row;
  
  .header {
    display: inline;
    margin: 0;
    flex: auto;
  }
  
  .dropdown {
    height: 0; // adds some pixels
    & .menu {
      border-radius: 0 !important;
      margin-top: 2em !important;
      & * {color: black;}
      
      &::after {
        right: 0.9em !important;
      }
    }
  }
  ;
`;
