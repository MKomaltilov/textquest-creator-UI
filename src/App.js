import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { GameEditor } from './pages/GameEditor'

let locations = new Array(5).fill('').map((v, i) => ({
  id: i + 1,
  gameId: 0,
  name: `Location №${i + 1}`,
  description: `Location №${i + 1}`,
  finish: false,
  actions: {}
}));

let Game = {
  properties: {
    id: 0,
    name: 'Game name',
    description: 'Game description',
    startLocation: null
  },
  locations: locations
}

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={GameEditor} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;