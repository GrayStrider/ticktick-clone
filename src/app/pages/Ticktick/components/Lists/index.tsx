import *  as React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import { Icon, Menu, Grid } from 'semantic-ui-react';
import { map } from 'lodash';
import { Wrapper } from './styles';
import { selectList, selectTab } from './actions';
import { menuCategories } from '../../mockDataReducer';
import messages from './messages';

function Lists(props) {
  const {
    selectedTab,
    selectedList,
    insertableLists,
    selectTabAction,
    selectListAction
  } = props;
  const Tabs =
    <Menu pointing secondary inverted>
      {
        menuCategories.map((key) => (
          <Menu.Item
            key={key}
            active={key === selectedTab}
            onClick={() => selectTabAction(key)}>

            {messages[key]}
          </Menu.Item>
        ))
      }
    </Menu>;
  const InsertableLists =
    <Menu vertical inverted fluid>
      {map(insertableLists[selectedTab], (list) => (
        <Menu.Item
          key={list.listID}
          active={list.listID === selectedList.listID}
          onClick={() => selectListAction({
            type: list.type,
            name: list.name,
            listID: list.listID
          })}
        >
          <span><Icon name='list'/>{insertableLists[selectedTab][list.listID].name}</span>
        </Menu.Item>
      ))}
    </Menu>;
  return (
    <Wrapper>
      {Tabs}
      <Grid.Row className='lists_and_filters'>
        {InsertableLists}
      </Grid.Row>

    </Wrapper>
  );
}

Lists.propTypes = {
  selectedTab: PropTypes.string,
  selectedList: PropTypes.object,
  insertableLists: PropTypes.object,

  selectTabAction: PropTypes.func,
  selectListAction: PropTypes.func
};

const mapStateToProps = state => ({
  selectedTab: state.ticktick.lists.selectedTab,
  selectedList: state.ticktick.lists.selectedList,
  insertableLists: state.ticktick.insertableLists
});

const mapDispatchToProps = dispatch => ({
  selectTabAction: (index) => dispatch(selectTab(index)),
  selectListAction: (index) => dispatch(selectList(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
