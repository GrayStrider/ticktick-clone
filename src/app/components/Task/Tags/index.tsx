import * as React from 'react';
import { connect } from 'react-redux';
import { map, pickBy, truncate, keys, pick } from 'lodash';
import { Label } from 'semantic-ui-react';
import { Wrapper } from './styles';

function Tags (props){
  const {taskTags} = props;

  return (
    <Wrapper>
      {
        map(pick(taskTags, keys(taskTags).slice(0, 3)),
          (tag) => (
            <React.Fragment key={tag.id}>
              <Label size='mini'>
                {truncate(tag.name, { length: 8 })}
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


const mapStateToProps = (state, ownProps) => ({
  taskTags: pickBy(
    state.ticktick.data.tags,
    (tag) => tag.tasks.includes(
      ownProps.taskID
    ))
});


export default connect(mapStateToProps, null)(Tags);
