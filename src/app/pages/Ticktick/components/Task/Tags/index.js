import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { map, pickBy, truncate, keys, pick } from 'lodash';
import { Label } from 'semantic-ui-react';
import { Wrapper } from './styles';

function Tags(props) {
  const { taskTags } = props;
  return (
    <Wrapper>
      {
        map(pick(taskTags, keys(taskTags).slice(0, 3)),
        (tag) => (<React.Fragment key={tag.listID}>
            <Label size='mini'>
              {truncate(tag.name, {length: 8})}
            </Label>
          </React.Fragment>
        ))
      }
      {keys(taskTags).length > 3 ?
        <Label size='mini'>
          {`+${keys(taskTags).length - 3}`}
        </Label> : null
      }
    </Wrapper>
  );
}

Tags.propTypes = {
  taskTags: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  taskTags: pickBy(
    state.ticktick.insertableLists.tags,
    (tag) => tag.tasks.includes(
      ownProps.taskID,
    )),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
