import * as React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Menu, Popup } from 'semantic-ui-react';
import onClickOutside from 'react-onclickoutside';
import { Wrapper } from './styles';
import { InputButtonBar } from './inputButtonBar';
import { addTask } from '../../actions/index';
import { EPriorities } from 'app/types/types';
import { SDropdown } from 'app/components/Dropdown/styles';


function InputNewTask(props) {
  const placeholder = `Add new task in ${props.selectedList.name}`;
  // @ts-ignore
  InputNewTask.handleClickOutside = () => toggleButtonBar(false);

  const [buttonBarActive, toggleButtonBar] = React.useState(false);

  const handleSubmit = (event) => {
    const input = event.target.querySelector('input')
    props.addTask({
      title: input.value,
      priority: EPriorities.None
    });
    input.value = '';

  };

  const options = [
    {key: 1,
    text: '1'},
    {key: 2,
    text: '2'}
  ]

  const priorityOptions = [
    {key: 1, text: 'High'},
    {key: 2, text: 'Medium'},
    {key: 3, text: 'Low'},
    {key: 4, text: 'None'},
  ]

  return (
    <Wrapper buttonBarActive={buttonBarActive}>
      <div role='presentation'
           onClick={() => toggleButtonBar(true)}>

        <Form onSubmit={handleSubmit}>
          <Form.Input placeholder={placeholder} fluid/>
        </Form>

      </div>


      <InputButtonBar active={buttonBarActive}
                      className='inputButtonBar'>

        {/*<Popup trigger={<Icon name='calendar alternate outline'/>}*/}
               {/*content='popup content'*/}
               {/*on='click'*/}
               {/*horizontalOffset={12}*/}
               {/*verticalOffset={5}/>*/}
        <SDropdown
          icon={null}
          options={options}
          pointing='top right'
          trigger={<Icon name='calendar alternate outline'/>}/>

        <SDropdown
          icon={null}
          options={priorityOptions}
          pointing='top right'
          trigger={<Icon name='exclamation circle'/>}/>

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
