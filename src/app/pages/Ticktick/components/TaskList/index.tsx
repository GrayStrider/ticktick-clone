import * as React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import { map, forEach } from 'lodash';
import { Wrapper } from './styles';
import Task from '../Task';
import Scrollbar from '../Scrollbar';

function TaskList(props) {
  const {filteredTasks} = props
  const ListWrapper = <>
    {
      map(filteredTasks(),
        (task) => (
          <Task taskID={task.id} key={task.id}/>
          ))
    }
  </>;
  return (
    <Wrapper>
      <Scrollbar style={{ height: '100%' }} autoHide>
        {ListWrapper}
      </Scrollbar>
    </Wrapper>
  );
}

TaskList.propTypes = {
  filteredTasks: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filteredTasks: function filteredTasks() {
    const filtered = {}
    forEach(state.ticktick.data
      [state.ticktick.ui.selectedList.type]
      [state.ticktick.ui.selectedList.id].tasks,
      (taskID) => {filtered[taskID] =
        state.ticktick.data.tasks[taskID]}
      )
    return filtered
  }

});

export default connect(mapStateToProps, null)(TaskList);
