import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'

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

ReactDOM.render(<App />,
	document.getElementById('root'));