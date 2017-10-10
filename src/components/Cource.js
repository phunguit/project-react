import React, { Component } from 'react';
import Lession from './Lession'

class Cource extends Component {
  render() {
    return (
        <div className="col-xs-4 col-md-4 col-lg-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">React JS</h3>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  <Lession />
                  <Lession />
                  <Lession />
                </ul>
              </div>
            </div>
            <button className="btn btn-default">Registry</button>
        </div>
    );
  }
}
export default Cource;
