import *  as React from 'react';
import { connect } from 'react-redux';
import { Grid, Icon, Menu } from 'semantic-ui-react';
import { map } from 'lodash';
import { Wrapper } from './styles';
import { selectList, selectTab } from './actions';
import messages from './messages';
import { ETabs, ICustomList, IList, ITag } from 'app/types/types';
import { RootState } from 'app/reducers';
import { getLists } from 'app/components/Lists/selectors';

function Lists(props) {
  const {
    selectedTab, selectedList, lists, selectListAction
  } = props;
  const Tabs =

    <Menu pointing secondary inverted> {
      map(ETabs,(key) => (
        <Menu.Item
          key={key}
          active={key === selectedTab}
          onClick={() => props.selectTabAction(key)}>

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
  lists: getLists(state)
});

const mapDispatchToProps = dispatch => ({
  selectTabAction: (payload: ETabs) => dispatch(selectTab(payload)),
  selectListAction: (index) => dispatch(selectList(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
