<<<<<<< HEAD
import React from 'react';

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'

import './app.css';


const App = () => {

	const todoData = [
		{label: 'Drink Cofee', important: false, id: 1},
		{label: 'Make Awsome App', important: true, id: 2},
		{label: 'Have a lunch', important: false, id: 3}
	]

	return(
		<div className="container">
			<AppHeader toDo={1} done={3} />			
			<SearchPanel />
			<TodoList todos={todoData} />
		</div>
		);
}

export default App;
=======
import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component{

  state = {    
   todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  }
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      console.log(idx);
    }
      )
    }


  render(){
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList 
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
         />
      </div>
    );    
  }
}
>>>>>>> d7e0110a06b5bae13d7d5596bd347d5ab5e7a46a
