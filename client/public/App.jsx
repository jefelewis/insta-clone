import React, { Component } from 'react';
import Banner from './components/Banner.jsx';
import View from './components/View.jsx';

class App extends Component {
    constructor(){
        super()
    }

    render() {
        return (
            <div>
              <Banner />
              <View />
            </div>
        )
    }
}

export default App;