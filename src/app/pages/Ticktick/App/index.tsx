import * as React from 'react';
import { Grid, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Lists from '../components/Lists';
import TaskList from '../components/TaskList';
import InputNewTask from '../components/InputNewTask';
import TaskDetails from '../components/TaskDetails';
import TaskListHeader from '../components/TaskList/TaskListHeader';

function TickTick(props) {

  return (
    <Wrapper>
      <Grid columns={3}>
        <Grid.Column
          className='left'>
          <Grid.Row className='account_pane'>
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar/>
            <span>Username</span>
            <Icon name='search'/>
            <Icon name='mail'/>
          </Grid.Row>

          {/*<Lists/>*/}

        </Grid.Column>

        <Grid.Column className='center'>
          {/*<TaskListHeader/>*/}
          {/*<InputNewTask/>*/}
          {/*<TaskList/>*/}
        </Grid.Column>

        <Grid.Column className='right'>
          {/*<TaskDetails/>*/}
        </Grid.Column>

      </Grid>
    </Wrapper>
  );
}

TickTick.propTypes = {
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  // setCounter: (value) => dispatch(setCounter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TickTick);
