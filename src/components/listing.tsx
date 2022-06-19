import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTodo, removeTodo } from '../actions/actions';

class Listing extends Component {

  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = {
      task: ""
    }
  }

  handleDelete (id) {
    this.props.deleteButton(id);
  }

  handleEdit (id) {
    const value = prompt("Edit task");
    let task = {
      task: value
    }
    this.props.editValue(id,task)
  }

render() {
 return(
  <div>
    <ul>
      {this.props.tasks.map((tasks, i) => <li key={i}>{tasks.task} <button onClick={()=>this.handleDelete(i)}></button> <button onClick={()=>this.handleEdit(i)}></button></li>)}
    </ul>
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
    deleteButton: id => dispatch(removeTodo(id)),
    editValue: (id, task) => dispatch(editTodo(id,task))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
