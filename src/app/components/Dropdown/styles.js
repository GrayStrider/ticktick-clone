import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

export const SDropdown = styled(Dropdown)`
    height: 0; // adds some pixels
    .menu {
      border-radius: 0 !important;
      margin-top: 2em !important;
      & * {color: black;}
      
      &:after {
        right: 0.9em !important;
      }
  }
`;
