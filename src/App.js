import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import Jobs from './data/jobs';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items : Jobs,
            isShowForm: false,
            strSearch: ''
        }

        this.handleToggleForm   = this.handleToggleForm.bind(this);
        this.handleSearch       = this.handleSearch.bind(this);
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

    render() {
        let eleForm = null;

        var itemOrigins = this.state.items;
        var strSearch   = this.state.strSearch;
        var items       = []; 

        if(strSearch.length > 0) {
            itemOrigins.forEach(function(item, index) {
                if(item.name.indexOf(strSearch) != -1) {
                    items.push(item);
                }
            });

        } else {
            items = itemOrigins;
        }


        if(this.state.isShowForm) {
            eleForm = <Form onClickAdd={this.handleToggleForm} />
        }

        return (
            <div className='row'>

                <Title />
                
                <Control onClickAdd = {this.handleToggleForm}
                    onSearchSubmit = {this.handleSearch}
                    isShowForm = {this.state.isShowForm} />

                {eleForm}

                <List items = {items}/>
            </div>
        );
    }
}
export default App;
