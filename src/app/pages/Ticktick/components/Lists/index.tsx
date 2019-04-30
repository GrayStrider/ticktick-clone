import *  as React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import { Grid, Icon, Menu } from 'semantic-ui-react';
import { map } from 'lodash';
import { Wrapper } from './styles';
import { selectList, selectTab } from './actions';
import messages from './messages';
import { tabs } from 'app/pages/Ticktick/types/types';

function Lists(props) {
  const { selectedTab, selectedList, lists,
    selectTabAction, selectListAction } = props;
  const Tabs =

    <Menu pointing secondary inverted>
      {
        tabs.map((key) => (
          <Menu.Item
            key={key}
            active={key === selectedTab}
            onClick={() => selectTabAction(key)}>

            {messages[key]}
          </Menu.Item>
        ))
      }
    </Menu>;
  // const tabMenuLists =
  //   <Menu vertical inverted fluid>
  //     {map(lists[selectedTab], (list) => (
  //       <Menu.Item
  //         key={list.listID}
  //         active={list.listID === selectedList.listID}
  //         onClick={() => selectListAction({
  //           type: list.type,
  //           name: list.name,
  //           listID: list.listID
  //         })}
  //       >
  //         <span><Icon name='list'/>{lists[selectedTab][list.listID].name}</span>
  //       </Menu.Item>
  //     ))}
  //   </Menu>;
  return (
    <Wrapper>
      {Tabs}
      <Grid.Row className='lists_and_filters'>
        {/*{tabMenuLists}*/}
      </Grid.Row>

    </Wrapper>
  );
}

Lists.propTypes = {
  selectedTab: PropTypes.string,
  selectedList: PropTypes.object,
  lists: PropTypes.object,

  selectTabAction: PropTypes.func,
  selectListAction: PropTypes.func
};

const mapStateToProps = state => ({
  selectedTab: state.typedTickTick.ui.selectedTab,
  selectedList: state.ticktick.lists.selectedList,
  insertableLists: state.ticktick.insertableLists,
  lists: {
    tags: state.typedTickTick.data.tags,
    lists: state.typedTickTick.data.lists,
    custom: state.typedTickTick.data.customLists,
    defaultLists: state.typedTickTick.defaultLists
  }
});

const mapDispatchToProps = dispatch => ({
  selectTabAction: (index) => dispatch(selectTab(index)),
  selectListAction: (index) => dispatch(selectList(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
