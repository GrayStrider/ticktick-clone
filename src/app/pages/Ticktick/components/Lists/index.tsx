import *  as React from 'react';
import { connect } from 'react-redux';
import { Grid, Icon, Menu } from 'semantic-ui-react';
import { map } from 'lodash';
import { Wrapper } from './styles';
import { selectList, selectTab } from './actions';
import messages from './messages';
import { ICustomList, IList, ITag, tabs } from 'app/pages/Ticktick/types/types';
import { RootState } from 'app/reducers';

function Lists(props) {
  const {
    selectedTab, selectedList, lists,
    selectTabAction, selectListAction
  } = props;
  const Tabs =

    <Menu pointing secondary inverted> {
      tabs.map((key) => (
        <Menu.Item
          key={key}
          active={key === selectedTab}
          onClick={() => selectTabAction(key)}>

          {messages[key]}
        </Menu.Item>
      ))}</Menu>;
  const tabMenuLists =
    <Menu vertical inverted fluid>
      {map(lists[selectedTab], (list: ITag | IList | ICustomList) => (
        <Menu.Item
          key={list.id}
          active={list.id === selectedList.id}
          onClick={() => selectListAction({
            type: list.type,
            name: list.name,
            id: list.id
          })}
        >
          <span><Icon name='list'/>{lists[selectedTab][list.id].name}</span>
        </Menu.Item>
      ))}
    </Menu>;
  return (
    <Wrapper>
      {Tabs}
      <Grid.Row className='lists_and_filters'>
        {tabMenuLists}
      </Grid.Row>

    </Wrapper>
  );
}

const mapStateToProps = (state: RootState) => ({
  selectedTab: state.ticktick.ui.selectedTab,
  selectedList: state.ticktick.ui.selectedList,
  lists: {
    tags: state.ticktick.data.tags,
    lists: state.ticktick.data.lists,
    custom: state.ticktick.data.custom,
    defaultLists: state.ticktick.defaultLists
  }
});

const mapDispatchToProps = dispatch => ({
  selectTabAction: (index) => dispatch(selectTab(index)),
  selectListAction: (index) => dispatch(selectList(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
