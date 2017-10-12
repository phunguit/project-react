import React, { Component } from 'react';
import Cource from './components/Cource'

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

        return (
            <div className="row">{courceEles}</div>
        );
    }
}
export default App;
