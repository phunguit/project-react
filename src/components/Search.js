import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AcSearch } from '../actions/index';

class Search extends Component {

    constructor(props) {
      super(props);

      this.state = {
        strSearch: ''
      };

      this.handleSearch = this.handleSearch.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleClear  = this.handleClear.bind(this);
    }

    handleSearch() {
      this.props.mapSearch(this.state.strSearch);
    }

    handleChange(event) {
      this.setState({
        strSearch: event.target.value
      });
    }

    handleClear() {
      this.setState({
        strSearch: ''
      });
      this.props.mapSearch('');
    }

    render() {

        return (
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
              <input value={this.state.strSearch} onChange={this.handleChange} type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                <button onClick={this.handleSearch} className="btn btn-info" type="button">Go!</button>
                <button onClick={this.handleClear} className="btn btn-warning" type="button">Clear</button>
              </span>
            </div>
          </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
  return {
    mapSearch: (strSearch) => {
      dispatch(AcSearch(strSearch))
    }
  }
}

export default connect(null, mapDispatchToProps)(Search);