import * as React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import { Wrapper } from './styles';
import { selectTask } from './actions';
import Checkbox from '../Checkbox';
import { modifyTask } from '../actions';
import Tags from './Tags';

function Task(props) {
  const {
    taskID,
    taskContent,
    selectTaskAction,
    taskIsSelected,
    modifyTaskAction,
  } = props;

  const inputRef = React.createRef<HTMLInputElement>();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // @ts-ignore
      inputRef.current.blur();
    }
  };

  const handleChange = (e) => {
    modifyTaskAction({
      taskID: taskID,
      data: { taskContent: e.target.value },
    });
  };

  return (
    <Wrapper onClick={() => selectTaskAction(taskID)}
             taskIsSelected={taskIsSelected}>

      <Checkbox taskID={taskID}/>
      <input ref={inputRef}
             spellCheck={false}
             value={taskContent}
             onChange={handleChange}
             onKeyDown={handleKeyDown}
      />
      <Tags taskID={taskID}/>
    </Wrapper>
  );
}

Task.propTypes = {
  taskID: PropTypes.string,
  taskContent: PropTypes.string,
  taskIsSelected: PropTypes.bool,
  selectTaskAction: PropTypes.func,
  modifyTaskAction: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  taskContent: state.ticktick.tasks[ownProps.taskID].taskContent,
  taskIsSelected: state.ticktick.tasksList.selectedTaskID === ownProps.taskID,
});

const mapDispatchToProps = dispatch => ({
  selectTaskAction: (taskID) => dispatch(selectTask(taskID)),
  modifyTaskAction: ({ taskID, data }) => dispatch(modifyTask({ taskID, data })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
