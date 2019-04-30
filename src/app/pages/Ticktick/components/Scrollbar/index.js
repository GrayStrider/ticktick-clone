import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

// TODO Don't hide track while mouse inside the container
// https://github.com/malte-wessel/react-custom-scrollbars/blob/master/src/Scrollbars/index.js
//TODO render only x amount of tasks dynamically based on scroll height/position

// https://github.com/malte-wessel/react-custom-scrollbars/blob/master/docs/API.md

export default class Scrollbar extends Component {

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
