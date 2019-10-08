import React from 'react';

import './SearchBar.scss';

import {Amount} from './../amount/Amount';
import {Search} from './../search/Search';


export class Searchbar extends React.Component {
	render() {
		return (
		
			<div className="searchBar">
				<Amount onChange={this.props.onChange} amount={this.props.amount}/>
				<Search />
			</div>
		
		)
	}
}