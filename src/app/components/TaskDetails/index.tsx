import * as React from 'react';
import { connect } from 'react-redux';
import { Form, TextArea } from 'semantic-ui-react';
import { Wrapper } from './styles';
import Checkbox from '../Checkbox';
import Tags from './Tags'
import { TTaskID, TTasks } from 'app/types/types';

type Props = {
  selectedTaskID: TTaskID,
  tasks: TTasks
}

const TaskDetails: React.FC<any> = (props: Props) => {
  const { selectedTaskID, tasks } = props;

  return (
    <Wrapper>
      {selectedTaskID ?
        <div>
          <span>
            <Checkbox taskID={selectedTaskID}/>
            {tasks[selectedTaskID].title}
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

const mapStateToProps = state => ({
  tasks: state.ticktick.data.tasks,
  selectedTaskID: state.ticktick.ui.selectedTask
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
