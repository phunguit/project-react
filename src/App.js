import React, { Component } from 'react';
import Cource from './components/Cource';
import Lifecycle from './components/Lifecycle';

class App extends Component {
    render() {
        var cources = [
            {
                name: "React JS",
                free: true
            },
            {
                name: "Angular JS",
                free: false
            },
            {
                name: "Node JS",
                free: true
            }
        ];

        var courceEles = cources.map((cource, index) =>
            <Cource key={index} name={cource.name} free={cource.free} />
        )

        courceEles = null;

        return (
            <div className="row">
                {courceEles}
                <Lifecycle />
            </div>
        );
    }
}
export default App;
