import React, { Component } from 'react'

export class TestComponent extends Component {
  render() {
    return (
      <div>
        <h1> My Name is : {this.props.name}</h1>
      </div>
    )
  }
}

export default TestComponent;