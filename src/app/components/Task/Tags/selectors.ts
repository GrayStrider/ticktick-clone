import { createSelector } from 'reselect';
import { TTags, TTaskID} from 'app/types/types';
import { getTags} from 'app/selectors-global';
import { pickBy } from 'lodash';


export const getTaskTags = createSelector(
  getTags,
  (_, props) => props.taskID,
  (tags:TTags, taskID:TTaskID) => pickBy(
    tags, (tag) => tag.tasks.includes(taskID))
);

