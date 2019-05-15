import styled from 'styled-components';


export const Wrapper = styled.div<{menuOpen: boolean}>`
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100%;

  & * {
    color: white;
  }

  & .ui.grid {
    margin: 0;
    height: 100%;
    
    & .row {
      box-shadow: 0 1px 0 0 rgba(255,255,255,0.21);
    }
    
    & .column {
      padding: 0;
      box-shadow: 1px 0 0 0 rgba(255,255,255,0.21);
      height: 100%;
        

        }
      }   
   
  .column.right {
    width: 30% !important;
  }
  
  .column.center {
    display: flex !important;
    flex-direction: column !important;
    width: 45% !important;
  }
  
  .column.left {
    width: 25% !important;
    z-index: 9999;
    background: black;
  }

  @media screen and (max-width: 900px) {
    .column {
      &.left {
        position: fixed !important;
        width: 40% !important;
        left: ${p => p.menuOpen ? 0 : '-40%'};

      }
      
      &.center {
      * .bars {
      display: inline !important;
         }
      
      }
      
      &.right {
          width: 55% !important;
      }
    }
  }
  @media screen and (max-width: 600px) {
  
    .column {
      &.left {
        width: 60% !important;
        left: -60%;

      }
      
      &.center {
         width: 100% !important;

      }
      
      &.right {
          width: 30% !important;
          position: fixed !important;
          right: -30%;
      }
    }
  }
  
  
  .left .menu {
    display: flex !important;
    justify-content: space-evenly;
  }
`;
