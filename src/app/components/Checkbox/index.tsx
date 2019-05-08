import * as React from 'react';
import { connect } from 'react-redux';
import { Checkbox as CheckboxSemantic } from 'semantic-ui-react';
import { Wrapper } from './styles';
import { toggleDone } from '../Task/actions';
import { getCompleted } from 'app/components/Checkbox/selectors';

function Checkbox(props) {
  return (
    <Wrapper
      completed={props.completed}
      priority={props.priority}>

      <CheckboxSemantic
        checked={props.completed}
        onClick={() => props.toggleDone(props.taskID)}
      />
    </Wrapper>
  );
}

const mapStateToProps = (state, ownProps) => ({
  // completed: state.ticktick.data.tasks[ownProps.taskID].completed,
  completed: getCompleted(state, ownProps),
  priority: state.ticktick.data.tasks[ownProps.taskID].priority,
});

const mapDispatchToProps = dispatch => ({
  toggleDone: (index) => dispatch(toggleDone(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
