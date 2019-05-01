import * as React from 'react';
import { connect } from 'react-redux';
import { map, pickBy, truncate, keys, pick } from 'lodash';
import { Label } from 'semantic-ui-react';
import { Wrapper } from './styles';
import { ITag, TTags, TTaskID } from 'app/pages/Ticktick/types/types';
import { RootState } from 'app/reducers';

interface OwnProps {
  taskID: TTaskID;
}

interface State {
  taskTags: TTags;
}

const Tags: React.FC<any> = (props: OwnProps & State) => {
  const { taskTags } = props;
  return (
    <Wrapper>
      {
        map(pick(taskTags, keys(taskTags).slice(0, 3)),
          (tag: ITag) => (<React.Fragment key={tag.id}>
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


const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  taskTags: pickBy(
    state.ticktick.data.tags,
    (tag) => tag.tasks.includes(
      ownProps.taskID
    ))
});

const mapDispatchToProps = dispatch => ({});

export default connect<any>(mapStateToProps, mapDispatchToProps)(Tags);
