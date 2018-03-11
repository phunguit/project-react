import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { filter, includes } from 'lodash';

class List extends Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        var itemsOrigins = this.props.items;
        const { strSearch } = this.props;

        var items = itemsOrigins;
        if(strSearch !== null) {
          items = filter(itemsOrigins, function(item) {
            return includes(item.name, strSearch);
          });
        }

        const eleItem = items.map((item, index) => {
          return (
            <Item onClickEdit={this.props.onClickEdit} onClickDel={this.props.onClickDel} key={index} item={item} index={index} />
          );
        });
        return (
            <div className="panel panel-success">
               <div className="panel-heading">List Task</div>
               <table className="table table-hover ">
                  <thead>
                     <tr>
                        <th style={{width: '10%'}} className="text-center">#</th>
                        <th>Task</th>
                        <th style={{width: '20%'}} className="text-center">Level</th>
                        <th style={{width: '20%'}}>Action</th>
                     </tr>
                  </thead>
                  <tbody>{eleItem}</tbody>
               </table>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
  let { items, strSearch}   = state;
  let orderBy = state.sort.orderBy;
  let orderDir = state.sort.orderDir;

  return {
    items,
    orderBy,
    orderDir,
    strSearch
  }
}

export default connect(mapStateToProps, null)(List);