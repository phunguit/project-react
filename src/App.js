import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import Jobs from './data/jobs';

import {orderBy as functionSort, reject} from 'lodash';
const uuidv4 = require('uuid/v4');

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items : Jobs,
            isShowForm: false,
            strSearch: '',
            orderBy: 'name',
            orderDir: 'desc',
            itemSelected: null
        }
        this.handleSubmit       = this.handleSubmit.bind(this);
        this.handleEdit         = this.handleEdit.bind(this);
    }

    componentWillMount() {

        let items = JSON.parse(localStorage.getItem('jobs'));
        
        if(items === null) {
            items = this.state.items;
        }

        this.setState({
            items: items
        });
    }

    handleSubmit(item) {
        let items = this.state.items;
        let id  = null;

        if(item.id !== '') {
            id = item.id;
            items = reject(items, {id: item.id});            
        } else {
            id = uuidv4();
        }        

        items.push(
            {
                id: id,
                name: item.name,
                level: +item.level
            }
        );

        this.setState({
            items: items,
            isShowForm: false
        });
        
        localStorage.setItem('jobs', JSON.stringify(items));
    }

    handleEdit(item) {

        this.setState({
            itemSelected: item,
            isShowForm: true
        });
    }

    render() {

        //var itemOrigins = this.state.items;
        //var items       = [];
        let {itemSelected}          = this.state;

        /*items = filter(itemOrigins, function(item) {
            return includes(item.name, strSearch);
        });

        items = functionSort(items, [orderBy], [orderDir]);*/

        return (
            <div className='row'>

                <Title />
                
                <Control />
                
                <Form 
                    onClickSubmit={this.handleSubmit}
                    itemSelected={itemSelected} />

                <List onClickEdit={this.handleEdit} />
            </div>
        );
    }
}
export default App;