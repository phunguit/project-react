import React, {Component} from 'react';
import { connect } from 'react-redux';

class ToggerForm extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		var btnName		= this.props.isShowForm ? 'Close' : 'Add Task';
		var btnClass	= this.props.isShowForm ? 'btn-success' : 'btn-info';

		return (
			<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
				<button onClick={this.handleAdd} type="button" className={`btn ${btnClass} btn-block`}>{btnName}</button>
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

export default connect(mapStateToProps)(ToggerForm);