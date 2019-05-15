import * as React from 'react';
import { connect } from 'react-redux';

import { Dropdown, Header, Icon } from 'semantic-ui-react';
import { Wrapper } from './styles';
import { sortList, toggleMenu } from 'app/actions/index';
import { SDropdown } from 'app/components/Dropdown/styles';

function TaskListHeader(props) {
  const {selectedList, toggleMenu} = props

  const sortDropdownTrigger =
    <Icon name='sort amount up'/>

  const options = [
    { key: 'priority',
      text: 'By Priority',
      icon: 'sort amount down',
      active: false,
      onClick: () => {
        props.sortList('priority')
      }
    },
    { key: 'timeAdded',
      text: 'By Time Added',
      icon: 'sort amount down',
      active: false,
      onClick: () => {
        props.sortList('timeAdded')
      }
    }
  ]

  return (
    <Wrapper>
      <Icon
        onClick={() => toggleMenu()}
        name='bars'/>
      <Header inverted>{selectedList.name}</Header>
      <SDropdown
        icon={null}
        options={options}
        pointing='top right'
        trigger={sortDropdownTrigger}/>
    </Wrapper>
  );
}


const mapStateToProps = (state) => ({
  selectedList: state.ticktick.ui.selectedList,
});

const dispatchProps = {
  sortList,
  toggleMenu
}

export default connect(mapStateToProps, dispatchProps)(TaskListHeader);
