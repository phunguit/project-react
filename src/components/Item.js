import React, { Component } from 'react';

class Item extends Component {

    constructor(props) {
      super(props);

      this.state = {};
    }

    render() {
        let {item} = this.props;
        console.log(this.props.item);
        let {index} = this.props;

        return (
            <tr>
               <td className="text-center">{index + 1}</td>
               <td>{item.name}</td>
               <td className="text-center">{this.getLevel(item.level)}</td>
               <td>
                  <button type="button" className="btn btn-warning">Edit</button>
                  <button type="button" className="btn btn-danger">Delete</button>
               </td>
            </tr>
        );
    }

    getLevel(level) {
      let eleLevel = <span className="label label-default">Small</span>;

      if(level === 1) {
        eleLevel = <span className="label label-info">Medium</span>;        
      } else if(level === 2) {
        eleLevel = <span className="label label-danger">Hight</span>;
      }
      return eleLevel;
    }
}
export default Item;