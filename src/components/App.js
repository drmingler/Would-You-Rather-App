import React from 'react';

class  App extends React.Component{
    componentDidMount() {
        console.log("I was here first")
    }

    render() {
        return (
            <div className="App">
                <p>Hello React</p>
            </div>
        );
    }

}

export default App;
