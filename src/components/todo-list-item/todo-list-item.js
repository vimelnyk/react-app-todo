import React, { Component } from 'react';

import './todo-list-item.css';

<<<<<<< HEAD
export default class TodoListItem extends Component {
  render(){
    const { label, important = false } = this.props;
    const style = {
    
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
=======
export default class TodoListItemFunc extends Component {
  // constructor(){
  //   super();
  //   this.onLabelClick = ()=>console.log(`Done: ${this.props.label}`);
  // }

  state = {
    done:false,
    important:false
  };

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    });
  };

   onMarkImportant = () => {
    this.setState(({important}) => {
      return {
        important: !important
      }
    });
  };

  render(){
    const { label, onDeleted} = this.props;
    const { done, important } = this.state;
    
    let classNames = 'todo-list-item';

    if(done){
      classNames += ' done';
    }

     if(important){
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"          
          onClick={ this.onLabelClick }>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={ this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={ onDeleted } >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
>>>>>>> d7e0110a06b5bae13d7d5596bd347d5ab5e7a46a
  }
}

// const TodoListItemFunc = ({ label, important = false }) => {

//   const style = {
//     color: important ? 'steelblue' : 'black',
//     fontWeight: important ? 'bold' : 'normal'
//   };

//   return (
<<<<<<< HEAD
//     <span className="todo-list-item">
//       <span
//         className="todo-list-item-label"
//         style={style}>
//         {label}
//       </span>

//       <button type="button"
//               className="btn btn-outline-success btn-sm float-right">
//         <i className="fa fa-exclamation" />
//       </button>

//       <button type="button"
//               className="btn btn-outline-danger btn-sm float-right">
//         <i className="fa fa-trash-o" />
//       </button>
//     </span>
//   );
// };

//export default TodoListItem;
=======
//         <span className="todo-list-item">
//         <span
//           className="todo-list-item-label"
//           style={style}>
//           {label}
//         </span>

//         <button type="button"
//                 className="btn btn-outline-success btn-sm float-right">
//           <i className="fa fa-exclamation" />
//         </button>

//         <button type="button"
//                 className="btn btn-outline-danger btn-sm float-right">
//           <i className="fa fa-trash-o" />
//         </button>
//       </span>
//   );
// };

// export default TodoListItemFunc;
>>>>>>> d7e0110a06b5bae13d7d5596bd347d5ab5e7a46a
