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
        console.log(this.state.strSearch);
        let eleForm = null;

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

                <List items = {this.state.items}/>
            </div>
        );
    }
}
export default App;
