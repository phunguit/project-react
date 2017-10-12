import React, { Component } from 'react';
import Lession from './Lession'

class Cource extends Component {
    showRegistryBtn() {
        const isFree = this.props.free;
        if(isFree) {
            return <button className="btn btn-default">Registry</button>
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
