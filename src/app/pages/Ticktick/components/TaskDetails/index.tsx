import * as React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import { Form, TextArea } from 'semantic-ui-react';
import { Wrapper } from './styles';
import Checkbox from '../Checkbox';
import Tags from './Tags'
function TaskDetails(props) {
  const { selectedTaskID, tasks } = props;

  return (
    <Wrapper>
      {selectedTaskID ?
        <div>
          <span>
            <Checkbox taskID= {selectedTaskID}/>
            {tasks[selectedTaskID].taskContent}
          </span>
          <hr/>
          Description: {tasks[selectedTaskID].description}
          <hr/>
          <Form>
            <TextArea value={tasks[selectedTaskID].description}/>
          </Form>
          <Tags taskID={selectedTaskID}/>
          <hr/>
          {tasks[selectedTaskID].timeCreated}
          <hr/>
          {tasks[selectedTaskID].timeLastModified}
        </div>
        : 'Please, select a task from the list.'
      }
    </Wrapper>
  );
}

TaskDetails.propTypes = {
  selectedTaskID: PropTypes.string,
  tasks: PropTypes.object,
};

const mapStateToProps = state => ({
  tasks: state.typedTickTick.tasks,
  selectedTaskID: state.ticktick.tasksList.selectedTaskID
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
