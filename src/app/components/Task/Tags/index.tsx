import * as React from 'react';
import { connect } from 'react-redux';
import { map, pickBy, truncate, keys, pick } from 'lodash';
import { Label } from 'semantic-ui-react';
import { Wrapper } from './styles';
import { getTaskTags } from 'app/components/Task/Tags/selectors';

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


const mapStateToProps = (state, props) => ({
  taskTags: getTaskTags(state, props)
});


export default connect(mapStateToProps, null)(Tags);
