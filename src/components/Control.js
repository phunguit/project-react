import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
import ToggerForm from './ToggerForm';

class Control extends Component {

	constructor(props) {
		super(props);

		this.state = {};
		this.handleAdd = this.handleAdd.bind(this);
		// this.props.onSearchSubmit
	}

	handleAdd() {
		this.props.onClickAdd();
	}

    render() {
    	var {orderBy, orderDir} = this.props;

        return (
            <div className="row">
			   <Search onSearchGo={this.props.onSearchSubmit} />

			   <Sort onClickSort={this.props.onClickSort} orderBy={orderBy} orderDir={orderDir} />

			   <ToggerForm />
			   
			</div>
        );
    }
}
export default Control;