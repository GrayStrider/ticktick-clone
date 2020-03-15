import * as React from 'react';
import { connect } from 'react-redux';

import { Wrapper } from './styles';

function NewComponent(props) {
  const {} = props
  return (
    <Wrapper>
    </Wrapper>
  );
}

const mapStateToProps = (state, props) => ({

});

// const mapDispatchToProps = dispatch => ({
//   defaultActionAction: (payload) => dispatch(defaultAction(payload)),
// });

const dispatchProps = {

}

export default connect(mapStateToProps, dispatchProps)(NewComponent);
