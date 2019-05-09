import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Icon, Popup, Dropdown } from 'semantic-ui-react';
import onClickOutside from 'react-onclickoutside';
import { Wrapper } from './styles';
import { InputButtonBar } from './inputButtonBar';
import { addTask } from '../../actions/index';
import { EPriorities } from 'app/types/types';
import { SDropdown } from 'app/components/Dropdown/styles';
import { DateTimeInput } from 'semantic-ui-calendar-react';



function InputNewTask(props) {
  const placeholder = `Add new task in ${props.selectedList.name}`;
  // @ts-ignore
  InputNewTask.handleClickOutside = () => toggleButtonBar(false);

  const [buttonBarActive, toggleButtonBar] = React.useState(false);
  const [selectedPriority, changeSelectedPriority] = React.useState(EPriorities.High);
  const [dateTime, setDateTime] = React.useState('');
  const [dueDateTimeMenuOpen, toggleDueDateTimeMenu] = React.useState(false)

  const handleSubmit = (event) => {
    const input = event.target.querySelector('input');
    if (input.value !== '') {
      props.addTask({
        title: input.value,
        priority: selectedPriority
      });
      input.value = '';
    }
  };

  let priorityOptions = [
    { key: EPriorities.High, text: 'High' },
    { key: EPriorities.Medium, text: 'Medium' },
    { key: EPriorities.Low, text: 'Low' },
    { key: EPriorities.None, text: 'None' }
  ];
  priorityOptions.forEach((entry) => {
    entry['onClick'] = () => changeSelectedPriority(entry.key);
    entry['active'] = entry.key === selectedPriority;
  });

  return (
    <Wrapper
      buttonBarActive={buttonBarActive}>
      <div role='presentation'
           onClick={() => toggleButtonBar(true)}>

        <Form onSubmit={handleSubmit}>
          <Form.Input placeholder={placeholder} fluid/>
        </Form>

      </div>


      <InputButtonBar active={buttonBarActive}
                      className='inputButtonBar'>
        <SDropdown
          icon={null}
          trigger={<Icon
            onClick={() => toggleDueDateTimeMenu(!dueDateTimeMenuOpen)}
            name='calendar alternate outline'/>}
          pointing='top right'>
          <Dropdown.Menu open={dueDateTimeMenuOpen}>
            <Dropdown.Item>
              <div>
                {dateTime}
                <DateTimeInput
                  closable
                  inline
                  value={dateTime}
                  onChange={(e, { value }) => {
                    setDateTime(value)
                    toggleDueDateTimeMenu(!dueDateTimeMenuOpen)
                  }}/>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </SDropdown>

        <SDropdown
          icon={null}
          options={priorityOptions}
          pointing='top right'
          // @ts-ignore
          trigger={<Icon name='exclamation circle' color={['grey', 'blue', 'yellow', 'red'][selectedPriority]}/>}/>

        <Icon name='folder outline'/>
      </InputButtonBar>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  selectedList: state.ticktick.ui.selectedList
});

const dispatchProps = {
  addTask
};


// @ts-ignore
const clickOutsideConfig = { handleClickOutside: () => InputNewTask.handleClickOutside };
export default connect(mapStateToProps, dispatchProps)
(onClickOutside(InputNewTask, clickOutsideConfig));
