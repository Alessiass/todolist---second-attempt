import React, { Component, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/actions';

class App extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      task: ""
    }
  }

handleChange(e:SyntheticEvent){
  this.setState({
    task: e.target.value
  })
}

handleSubmit(e:SyntheticEvent){
  e.preventDefault();
  let task = {
    task: this.state.task
  }
  this.props.newTask(task);

  })
}

render() {
 return(
  <div>
    <ul>
      {this.props.tasks.map((tasks, i) => <li key={i}>{tasks.task}</li>)}
    </ul>
    <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleChange} />
      <input type="submit"/>
    </form>
  </div>
 )
}
}

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    newTask: task => dispatch(addTodo(task))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
