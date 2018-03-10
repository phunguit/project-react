import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {

    constructor(props) {
      super(props);

      this.state = {
        id: '',
        name: '',
        level: 1
      };
      this.handleClose  = this.handleClose.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
    }

    componentWillMount() {
      var item = this.props.itemSelected;
      if(item != null && item.id != null) {
        this.setState({
          id: item.id,
          name: item.name,
          level: item.level
        });
      }
    }

    componentWillReceiveProps(nextProps) {
      var item = nextProps.itemSelected;
      if(item != null && item.id != null) {
        this.setState({
          id: item.id,
          name: item.name,
          level: item.level
        });
      }
    }

    handleClose() {
      this.props.onClickAdd();
    }

    handleChange(e) {
      let target  = e.target;
      let value   = target.value;
      let name    = target.name;

      this.setState({
        [name]: value
      });
    }

    handleSubmit(e) {
      this.props.onClickSubmit(this.state);
      e.preventDefault();
    }

    render() {
        let { isShowForm } = this.props;
        if(!isShowForm) {
          return null;
        }
        return (
            <div className="row">
               <div className="col-md-offset-7 col-md-5">
                  <form onSubmit={this.handleSubmit} className="form-inline">
                     <div className="form-group">
                        <label className="sr-only">label</label>
                        <input value={this.state.name} name="name" onChange={this.handleChange} type="text" className="form-control" placeholder="Task Name" ref="task_name" />
                     </div>
                     <div className="form-group">
                        <label className="sr-only">label</label>
                        <select value={this.state.level} onChange={this.handleChange} name="level" className="form-control" required="required" ref="task_level">
                           <option value={0}>Small</option>
                           <option value={1}>Medium</option>
                           <option value={2}>High</option>                           
                        </select>
                     </div>
                     <button type="submit" className="btn btn-primary">Submit</button>
                     <button onClick={this.handleClose} type="button" className="btn btn-default">Cancel</button>
                  </form>
               </div>
            </div>
        );
    }
}

var mapStateToProps = state => {
  let isShowForm = state.isShowForm;
  return { isShowForm };
}

export default connect(mapStateToProps, null)(Form);