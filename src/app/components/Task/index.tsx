import * as React from 'react';
import { connect } from 'react-redux';
import { Wrapper } from './styles';
import { selectTask } from './actions';
import Checkbox from '../Checkbox';
import { modifyTask } from '../../actions';
import Tags from './Tags';
import { getTitle } from 'app/components/Task/selectors';
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

function Task(props) {
  const { taskID, title, taskIsSelected } = props;
  const inputRef = React.createRef<HTMLInputElement>();
  const [value, changeValue] = useState(title);
  // let editableTitle = (document.getElementById('editableTitle') as HTMLInputElement);
  // useEffect(() => {
  //   // @ts-ignore
  //   inputRef.current.value = title;
  // }, []);
  const debouncedFunction = debounce(() => {
    console.log('debounced');
  }, 1000, {maxWait: 2000});
  const handleKeyDown = (e) => {
    debouncedFunction();
    if (e.key === 'Enter') {
      e.preventDefault();
      // @ts-ignore
      inputRef.current.blur();
    }
    // @ts-ignore
    // setTimeout(() => console.log(inputRef.current.value), 1000)
  };

  const handleChange = (e) => {
    // props.modifyTaskAction({
    //   taskID: taskID,
    //   data: { title: e.target.value }
    // });
    changeValue(e.target.value);
  };

  return (
    <Wrapper onClick={() => props.selectTaskAction(taskID)}
             taskIsSelected={taskIsSelected}>

      <Checkbox taskID={taskID}/>
      <input
        ref={inputRef}
        spellCheck={false}
        defaultValue={title}
        // value={value}
        // onChange={handleChange}
        onKeyDown={handleKeyDown}
        // id='editableTitle'
      />
      <Tags taskID={taskID}/>
    </Wrapper>
  );
}

const mapStateToProps = (state, ownProps) => ({
  title: getTitle(state, ownProps),
  taskIsSelected: state.ticktick.ui.selectedTask === ownProps.taskID
});

const mapDispatchToProps = dispatch => ({
  selectTaskAction: (taskID) => dispatch(selectTask(taskID)),
  modifyTaskAction: ({ taskID, data }) => dispatch(modifyTask({ taskID, data }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
