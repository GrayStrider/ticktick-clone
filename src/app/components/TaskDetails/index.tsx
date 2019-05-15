import * as React from 'react';
import { connect } from 'react-redux';
import { Form, TextArea } from 'semantic-ui-react';
import { Wrapper } from './styles';
import Checkbox from '../Checkbox';
import Tags from './Tags'
import { TTaskID, TTasks } from 'app/types/types';
import * as moment from 'moment';

type Props = {
  selectedTaskID: TTaskID,
  tasks: TTasks
}

const TaskDetails: React.FC<any> = (props: Props) => {
  const { selectedTaskID, tasks } = props;

  let
    timeCreated,
    timeLastModified = '';

  if (selectedTaskID) {
    timeCreated =
      moment.unix(tasks[selectedTaskID].timeCreated  / 1000)
        .format("dddd, MMMM Do YYYY, h:mm:ss a")
    timeLastModified =
      moment.unix(tasks[selectedTaskID].timeLastModified / 1000)
        .format("dddd, MMMM Do YYYY, h:mm:ss a")
  }
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
          Created: {timeCreated}
          <hr/>
          Modified: {timeLastModified}
          <hr/>
          {
            tasks[selectedTaskID].completedAt ?
              `Completed at:
              ${moment.unix(tasks[selectedTaskID].completedAt / 1000)
                .format("dddd, MMMM Do YYYY, h:mm:ss a")}` : null
          }
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
