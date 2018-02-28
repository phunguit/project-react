import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

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

    	var eleBtn = <button onClick={this.handleAdd} type="button" className="btn btn-info btn-block">Add Task</button>;
    	if(this.props.isShowForm === true) {
    		eleBtn = <button onClick={this.handleAdd} type="button" className="btn btn-success btn-block">Close</button>;
    	}

        return (
            <div className="row">
			   <Search onSearchGo={this.props.onSearchSubmit} />

			   <Sort onClickSort={this.props.onClickSort} orderBy={orderBy} orderDir={orderDir} />

			   <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">{eleBtn}</div>
			   
			</div>
        );
    }
}
export default Control;