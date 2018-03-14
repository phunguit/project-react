import React, {Component} from 'react';
import { connect } from 'react-redux';
import { AcToggerForm, AcUnSelectItem } from '../actions/index';

class ToggerForm extends Component {

	constructor(props) {
		super(props);

		this.state 				= {};
		this.handleToggerForm	= this.handleToggerForm.bind(this); 
	}

	handleToggerForm() {
		this.props.toggerForm();
	}

	render() {
		var btnName		= this.props.isShowForm ? 'Close' : 'Add Task';
		var btnClass	= this.props.isShowForm ? 'btn-success' : 'btn-info';

		return (
			<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
				<button onClick={this.handleToggerForm} type="button" className={`btn ${btnClass} btn-block`}>{btnName}</button>
			</div>
		)
	}

}

var mapStateToProps = function(state) {
	let isShowForm = state.isShowForm;
	return {
		isShowForm
	}
}

var mapDispatchToProps = dispatch => {
	return {
		toggerForm: () => {
			dispatch(AcToggerForm());
			dispatch(AcUnSelectItem());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggerForm);