import * as React from 'react';
import { connect } from 'react-redux';

import { difference, keys, map, pickBy } from 'lodash';
import { Dropdown } from 'semantic-ui-react';
import { Wrapper } from './styles';
import { addTaskToList2, deleteTaskFromList } from '../../../actions';
import { selectList, selectTab } from '../../Lists/actions';
import { ETabs, TTags, TTaskID } from 'app/types/types';
import { RootState } from 'app/reducers';
import { getTaskTags } from 'app/components/Task/Tags/selectors';

type Props = {
  taskID: TTaskID
  tags: TTags
  addTaskToList: typeof addTaskToList2
  deleteTaskFromList: typeof deleteTaskFromList
  selectList: typeof selectList
}

type OwnProps = {
  taskID: TTaskID
}

const Tags: React.FC<any> = (props: Props) => {
  const { tags, selectList, deleteTaskFromList, addTaskToList, taskID } = props;
  const allTags = map(
    tags, (tag) => (
      {
        key: tag.id,
        text: tag.name,
        value: tag.id
      }
    ));

  const taskTags = keys(
    pickBy(
      tags, (tag) =>
        tag.tasks.includes(
          taskID
        )));

  const handleChange = (e, { value }) =>
    taskTags.length < value.length

      ? addTaskToList(
      {
        taskID: taskID,
        type: ETabs.tags,
        listID: difference(value, taskTags)[0]
      }
      )

      : deleteTaskFromList(
      {
        taskID: taskID,
        type: 'tags',
        listID: difference(taskTags, value)
      }
      );
  const renderLabel = label => ({
    color: 'blue',
    content: `#${label.text}`,
    onClick: () => {
      selectTab(ETabs.tags);
      selectList({
        type: ETabs.tags,
        name: label.text,
        id: label.value
      });
    }
  });

  return (
    <Wrapper>

      <Dropdown
        fluid
        multiple
        options={allTags}
        placeholder='Add tags..'
        search
        selection
        value={taskTags}
        // @ts-ignore
        onChange={handleChange}
        renderLabel={renderLabel}
      />
    </Wrapper>
  );
}

interface StateFromProps {
  taskTags: TTags
}

interface DispatchFromProps {
  deleteTaskFromList: typeof deleteTaskFromList
  addTaskToList: typeof addTaskToList2
  selectList: typeof selectList
  selectTab: typeof selectTab
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
  taskTags: getTaskTags(state, props),
  tags: state.ticktick.data.tags
});

const mapDispatchToProps = dispatch => ({
  deleteTaskFromList: (payload) => dispatch(deleteTaskFromList(payload)),
  addTaskToList: (payload) => dispatch(addTaskToList2(payload)),
  selectList: (payload) => dispatch(selectList(payload)),
  selectTab: (payload) => dispatch(selectTab(payload))
});

export default connect<StateFromProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(Tags);
