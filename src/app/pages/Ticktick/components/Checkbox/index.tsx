import * as React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import { Checkbox as CheckboxSemantic } from 'semantic-ui-react';
import { Wrapper } from './styles';
import { toggleDone } from '../Task/actions';

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

Checkbox.propTypes = {
  completed: PropTypes.bool,
  toggleDone: PropTypes.func,
  taskID: PropTypes.string,
  priority: PropTypes.number,
};

const mapStateToProps = (state, ownProps) => ({
  completed: state.ticktick.tasks[ownProps.taskID].completed,
  priority: state.ticktick.tasks[ownProps.taskID].priority,
});

const mapDispatchToProps = dispatch => ({
  toggleDone: (index) => dispatch(toggleDone(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
