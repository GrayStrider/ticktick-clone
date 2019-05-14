import * as React from 'react';
import { connect } from 'react-redux';

import { map } from 'lodash';
import { Wrapper } from './styles';
import Task from '../Task';
import Scrollbar from '../Scrollbar';
import { getCurrentListTasks, getCurrentListTasks2 } from 'app/components/TaskList/selectors';
import { from, interval } from 'rxjs';
import { useEffect, useState } from 'react';
import { delay } from 'rxjs/operators';

function useObservable(observable, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const subscription = observable.subscribe(newValue => {
      setValue(newValue);
    });
    return () => subscription.unsubscribe();
  }, []);

  return value;
}

function TaskList(props) {
  const { filteredTasks } = props;

  const asyncFiltered = async () => {

    return await map(filteredTasks,
      (task) => <Task taskID={task.id} key={task.id}/>);
  };

  const promise  = new Promise(asyncFiltered) //doest work. Go to sleep

  // const value = useObservable(interval(1000), 0);

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
  filteredTasks: getCurrentListTasks2(state),
  filteredTasks2: getCurrentListTasks2(state)
});

export default connect(mapStateToProps, null)(TaskList);
