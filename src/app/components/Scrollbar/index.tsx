import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';

// TODO Don't hide track while mouse inside the container
// https://github.com/malte-wessel/react-custom-scrollbars/blob/master/src/Scrollbars/index.js
//TODO render only x amount of tasks dynamically based on scroll height/position

// https://github.com/malte-wessel/react-custom-scrollbars/blob/master/docs/API.md

type Props = {
  children: React.ReactNode
  style: object
  autoHide: boolean
}

export default class Scrollbar extends React.Component<Props> {

  constructor(props, ...rest) {
    super(props, ...rest);
    Scrollbar.renderThumb = Scrollbar.renderThumb.bind(this);
  }


  static renderThumb({ style, ...props }) {
    const thumbStyle = {
      backgroundColor: `gray`,
      borderRadius: '3px'
    };
    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props}/>
    );
  }

  render() {
    return (
      <Scrollbars
        renderThumbHorizontal={Scrollbar.renderThumb}
        renderThumbVertical={Scrollbar.renderThumb}
        {...this.props}/>
    );
  }
}
