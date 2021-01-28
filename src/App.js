import React from 'react';
import { Provider } from 'react-redux';

import Filter from './people/Filter';
import People from './people/People';
import store from './store'

import './App.css';

const App = () => {

    return (
      <div className='App'>
        <Provider store={store}>
            <Filter />
            <People />
        </Provider>
      </div>
    );
}

export default App;