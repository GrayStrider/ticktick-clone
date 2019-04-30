import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { map, pickBy, keys, difference } from 'lodash';
import { Dropdown } from 'semantic-ui-react';
import { Wrapper } from './styles';
import { addTaskToList, deleteTaskFromList } from '../../actions';
import { selectList, selectTab } from '../../Lists/actions';

function Tags(props) {
  const { tags, taskID, deleteTaskFromListAction, addTaskToListAction, selectListAction, selectTabAction } = props;

  const allTags = map(
    tags, (tag) => (
      {
        key: tag.listID,
        text: tag.name,
        value: tag.listID,
      }
    ));

  const taskTags = keys(
    pickBy(
      tags, (tag) =>
        tag.tasks.includes(
          taskID,
        )));

  const handleChange = (e, { value }) =>
    taskTags.length < value.length

      ? addTaskToListAction(
      {
        taskID: taskID,
        type: 'tags',
        listID: difference(value, taskTags),
      },
      )

      : deleteTaskFromListAction(
      {
        taskID: taskID,
        type: 'tags',
        listID: difference(taskTags, value),
      },
      );
  const renderLabel = label => ({
    color: 'blue',
    content: `#${label.text}`,
    onClick: () => {
      selectTabAction('tags');
      selectListAction({
        type: 'tags',
        name: label.text,
        listID: label.value
      });
    },
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
        onChange={handleChange}
        renderLabel={renderLabel}
      />
    </Wrapper>
  );
}

Tags.propTypes = {
  tags: PropTypes.object,
  deleteTaskFromListAction: PropTypes.func,
  addTaskToListAction: PropTypes.func,
  selectListAction: PropTypes.func,
  selectTabAction: PropTypes.func,
  taskID: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
  taskTags: pickBy(
    state.ticktick.insertableLists.tags,
    (tag) => tag.tasks.includes(
      ownProps.taskID,
    )),
  tags: state.ticktick.insertableLists.tags,
});

const mapDispatchToProps = dispatch => ({
  deleteTaskFromListAction: (payload) => dispatch(deleteTaskFromList(payload)),
  addTaskToListAction: (payload) => dispatch(addTaskToList(payload)),
  selectListAction: (payload) => dispatch(selectList(payload)),
  selectTabAction: (payload) => dispatch(selectTab(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
