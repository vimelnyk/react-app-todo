import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
	state = {
		label:""
	};
	onSubmit = (e) => {
		e.preventDefault();
		this.props.onItemAdded(this.state.label);
	}
	onLabelChange = (e) =>{
		this.setState({label:e.target.value});
	};
	render(){
		  return (
		  	<form
		  		className="item-add-form mt-3 d-flex"
		  		onSubmit={this.onSubmit}>
		  		<input 
		  			className="form-control mr-1"
	  				onChange={this.onLabelChange}
	  				placeholder="What needs to be done"
		  		/>
			    <button className="btn btn-outline-secondary">
			    	Add item
			    </button>
		    </form>
		  );
		
	}
};