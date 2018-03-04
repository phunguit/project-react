import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
      super(props);

      this.state = {
        name: '',
        level: 1
      };
      this.handleClose  = this.handleClose.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
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
        var nameValue   = this.state.name;
        var levelValue  = this.state.level;

        var item = this.props.itemSelected;
        if(item.id) {
          nameValue = item.name;
          levelValue = item.level;
        }

        return (
            <div className="row">
               <div className="col-md-offset-7 col-md-5">
                  <form onSubmit={this.handleSubmit} className="form-inline">
                     <div className="form-group">
                        <label className="sr-only">label</label>
                        <input value={nameValue} name="name" onChange={this.handleChange} type="text" className="form-control" placeholder="Task Name" ref="task_name" />
                     </div>
                     <div className="form-group">
                        <label className="sr-only">label</label>
                        <select value={levelValue} onChange={this.handleChange} name="level" className="form-control" required="required" ref="task_level">
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
export default Form;