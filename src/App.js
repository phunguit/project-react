import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

import {reject} from 'lodash';
const uuidv4 = require('uuid/v4');

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
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
        return (
            <div className='row'>
                <Title />                
                <Control />                
                <Form />
                <List onClickEdit={this.handleEdit} />
            </div>
        );
    }
}
export default App;