import React, { Component } from 'react';
import Lession from './Lession'

class Cource extends Component {

    constructor(props) {
        super(props);
        this.handleRegistry = this.handleRegistry.bind(this);
    }

    handleRegistry() {
        console.log(this.refs.username.value);
    }

    showRegistryBtn() {
        const isFree = this.props.free;
        if(isFree) {
            return <button className="btn btn-default">Registry</button>
        } else {
            return (
                <div className="input-group">
                    <span className="input-group-btn">
                        <button onClick={this.handleRegistry} className="btn btn-default" type="button">Registry</button>
                    </span>
                    <input type="text" className="form-control" placeholder="Username" ref="username" />
                </div>
            )
        }
    }

    render() {
        return (
            <div className="col-xs-4 col-md-4 col-lg-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">{this.props.name}</h3>
                  </div>
                  <div className="panel-body">
                    <ul className="list-group">
                      <Lession />
                      <Lession />
                      <Lession />
                    </ul>
                  </div>
                </div>
                {this.showRegistryBtn()}
            </div>
        );
    }
}
export default Cource;
