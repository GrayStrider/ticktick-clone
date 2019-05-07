import * as React from 'react';
import { connect } from 'react-redux';

import { Dropdown, Header, Icon } from 'semantic-ui-react';
import { sortListAction } from './actions';
import { Wrapper } from './styles';

function TaskListHeader(props) {
  const {sortList, selectedList} = props

  const sortDropdownTrigger =
    <Icon name='sort amount up'/>

  const options = [
    { key: 'priority',
      text: 'By Priority',
      icon: 'sort amount down',
      active: false,
      onClick: () => {
        sortList({
          selectedList: selectedList,
          sortType: 'priority'
        })
      }
    },
    { key: 'timeAdded',
      text: 'By Time Added',
      icon: 'sort amount down',
      active: false,
      onClick: () => {
        sortList({
          selectedList: selectedList,
          sortType: 'timeAdded'
        })
      }
    }
  ]

  return (
    <Wrapper>
      <Header inverted>{selectedList.name}</Header>
      <Dropdown
        icon={null}
        options={options}
        pointing='top right'
        trigger={sortDropdownTrigger}/>
    </Wrapper>
  );
}


const mapStateToProps = (state, ownProps) => ({
  selectedList: state.ticktick.ui.selectedList,
});

const mapDispatchToProps = dispatch => ({
  sortList: ({selectedList, sortType}) =>
    dispatch(sortListAction({selectedList, sortType})),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListHeader);
