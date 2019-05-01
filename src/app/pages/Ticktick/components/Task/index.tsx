import * as React from 'react';
import { connect } from 'react-redux';
import { Wrapper } from './styles';
import { selectTask } from './actions';
import Checkbox from '../Checkbox';
import { modifyTask } from '../actions';
import Tags from './Tags';

function Task(props) {
  const {
    taskID,
    title,
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
      id: taskID,
      data: { title: e.target.value },
    });
  };

  return (
    <Wrapper onClick={() => selectTaskAction(taskID)}
             taskIsSelected={taskIsSelected}>

      <Checkbox taskID={taskID}/>
      <input ref={inputRef}
             spellCheck={false}
             value={title}
             onChange={handleChange}
             onKeyDown={handleKeyDown}
      />
      <Tags taskID={taskID}/>
    </Wrapper>
  );
}

const mapStateToProps = (state, ownProps) => ({
  title: state.typedTickTick.data.tasks[ownProps.taskID].title,
  taskIsSelected: state.typedTickTick.ui.selectedTask === ownProps.taskID,
});

const mapDispatchToProps = dispatch => ({
  selectTaskAction: (taskID) => dispatch(selectTask(taskID)),
  modifyTaskAction: ({ taskID, data }) => dispatch(modifyTask({ taskID, data })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
