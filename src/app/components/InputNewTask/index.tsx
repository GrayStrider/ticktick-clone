import * as React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Popup } from 'semantic-ui-react';
import onClickOutside from 'react-onclickoutside';
import { Wrapper } from './styles';
import { InputButtonBar } from './inputButtonBar';
import { addTask } from '../../actions/index';
import { EPriorities } from 'app/types/types';


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

        <Popup trigger={

          <Icon name='calendar alternate outline'/>
        }
               content='popup content'
               on='click'
               horizontalOffset={12}
               verticalOffset={5}

        />


        <Icon name='exclamation circle'/>
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
