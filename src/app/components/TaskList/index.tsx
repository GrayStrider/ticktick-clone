import * as React from 'react';
import { connect } from 'react-redux';

import { map} from 'lodash';
import { Wrapper } from './styles';
import Task from '../Task';
import Scrollbar from '../Scrollbar';
import { getCurrentListTasks } from 'app/components/TaskList/selectors';

function TaskList(props) {
  const { filteredTasks } = props;
  const ListWrapper = <>
    {
      map(filteredTasks,
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

const mapStateToProps = (state) => ({
  filteredTasks: getCurrentListTasks(state),
});

export default connect(mapStateToProps, null)(TaskList);
