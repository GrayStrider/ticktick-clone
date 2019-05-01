import React from 'react';
import { connect } from 'react-redux';

import { defaultAction } from './actions';
import { Wrapper } from './styles';

function NewComponent(props) {
  const {defaultState} = props
  return (
    <Wrapper>
    </Wrapper>
  );
}

const mapStateToProps = (state, ownProps) => ({
  defaultState: state.default.defaultStateEntry
});

const mapDispatchToProps = dispatch => ({
  defaultActionAction: (payload) => dispatch(defaultAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewComponent);
