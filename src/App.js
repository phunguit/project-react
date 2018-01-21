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
            items : Jobs
        }
    }

    render() {

        return (
            <div className='row'>
                {/* TITLE : START */}
                <Title />
                {/* TITLE : END */}

                {/* CONTROL (SEARCH + SORT + ADD) : START */}                
                <Control />
                {/* CONTROL (SEARCH + SORT + ADD) : END */}

                {/* FORM : START */}
                <Form />
                {/* FORM : END */}

                {/* LIST : START */}
                <List items={this.state.items}/>
            </div>
        );
    }
}
export default App;
