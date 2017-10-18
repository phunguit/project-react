import React, { Component } from 'react';

class Lifecycle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "Lifecycle"
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
    }

    handleChangeTitle() {
        this.setState({
            title: "This is Phung"
        });
    }

    render() {
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.state.title}</h3>
                </div>

                <div className="panel-body">
                    <button onClick={this.handleChangeTitle} type="button" className="btn btn-success">Change Title</button>
                </div>
            </div>
        );
    }

}
export default Lifecycle;
