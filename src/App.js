import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import Jobs from './data/jobs';
import {filter, includes, orderBy as functionSort, remove} from 'lodash';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items : Jobs,
            isShowForm: false,
            strSearch: '',
            orderBy: 'name',
            orderDir: 'desc'
        }

        this.handleToggleForm   = this.handleToggleForm.bind(this);
        this.handleSearch       = this.handleSearch.bind(this);
        this.handleSort         = this.handleSort.bind(this);
        this.handleDel          = this.handleDel.bind(this);
    }

    handleToggleForm() {
        this.setState({
            isShowForm: !this.state.isShowForm
        });
    }

    handleSearch(value) {
        this.setState({
            strSearch: value
        });
    }

    handleSort(a, b) {
        this.setState({
            orderBy: a,
            orderDir: b
        });
    }

    handleDel(id) {
        
        let items = this.state.items;
        remove(items, (item) => {
            return item.id === id;
        });

        this.setState({
            items: items
        });
    }

    render() {
        let eleForm = null;

        var itemOrigins = this.state.items;
        var items       = [];
        let {strSearch, orderBy, orderDir}          = this.state;
        
        items = filter(itemOrigins, function(item) {
            return includes(item.name, strSearch);
        });

        items = functionSort(items, [orderBy], [orderDir]);

        if(this.state.isShowForm) {
            eleForm = <Form onClickAdd={this.handleToggleForm} />
        }

        return (
            <div className='row'>

                <Title />
                
                <Control onClickSort = {this.handleSort} orderBy = {orderBy} orderDir = {orderDir} onClickAdd = {this.handleToggleForm}
                    onSearchSubmit = {this.handleSearch}
                    isShowForm = {this.state.isShowForm} />
                
                {eleForm}

                <List onClickDel={this.handleDel} items = {items}/>
            </div>
        );
    }
}
export default App;
