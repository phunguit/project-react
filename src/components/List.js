import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { filter, includes, orderBy as lodashOrder } from 'lodash';

class List extends Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        console.log(this.props.items);
        var itemsOrigins = this.props.items;
        const { strSearch, orderBy, orderDir } = this.props;

        var  items = filter(itemsOrigins, function(item) {
          return includes(item.name, strSearch);
        });

        items = lodashOrder(items, [orderBy], [orderDir]);

        const eleItem = items.map((item, index) => {
          return (
            <Item onClickEdit={this.props.onClickEdit} key={index} item={item} index={index} />
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
  let { items, strSearch }   = state;
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