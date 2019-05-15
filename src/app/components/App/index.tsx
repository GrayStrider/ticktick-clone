import * as React from 'react';
import { Button, Grid, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { Wrapper } from './styles';
import Lists from '../Lists';
import TaskList from '../TaskList';
import InputNewTask from '../InputNewTask';
import TaskDetails from '../TaskDetails';
import TaskListHeader from '../TaskList/TaskListHeader';
import { ping } from 'app/actions/pingPong';
import { throttle } from 'lodash';

function TickTick(props) {
  const { ping } = props;

  const AccountPane =
    <Grid.Row className='account_pane'>
      <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar/>
      <span>Username</span>

      {/*<Button onClick={throttle(() => ping(), 500, {leading: true})}>Ping</Button>*/}

      <Icon name='search'/>
      <Icon name='mail'/>
    </Grid.Row>


  return (
    <Wrapper>
      <Grid columns={3}>
        <Grid.Column
          className='left'>
          {AccountPane}
          <Lists/>
        </Grid.Column>

        <Grid.Column className='center'>
          <TaskListHeader/>
          <InputNewTask/>
          <TaskList/>
        </Grid.Column>

        <Grid.Column className='right'>
          <TaskDetails/>
        </Grid.Column>

      </Grid>
    </Wrapper>
  );
}

const dispatchProps = {
  ping
};

export default connect(null, dispatchProps)(TickTick);
