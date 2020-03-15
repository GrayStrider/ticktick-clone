import * as React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { Wrapper } from './styles';
import { Icon, Image } from 'semantic-ui-react';
import { ping } from 'app/actions/pingPong';

function AccountPane(props) {
  const {ping} = props;
  return (
    <Wrapper>
      <Grid.Row>
        <Image
          avatar
          src='https://react.semantic-ui.com/images/wireframe/square-image.png'/>
        <span>Username</span>

        {/*<Button onClick={throttle(() => ping(), 500, {leading: true})}>Ping</Button>*/}

        <span className='buttons'>
          <Icon name='search'/>
          <Icon name='mail'/>
        </span>
      </Grid.Row>
    </Wrapper>
  );
}

const mapStateToProps = (state, props) => ({

});

const dispatchProps = {
  ping
};

export default connect(mapStateToProps, dispatchProps)(AccountPane);
