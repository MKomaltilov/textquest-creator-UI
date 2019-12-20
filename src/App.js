import React from 'react';
import { LocationList } from './components/location_list/LocationList';
import { ParameterList } from './components/parameters_list/ParameterList';
import { GameData } from './components/GameData';
import { EndConditionsList } from './components/end_conditions_list/EndConditionsList';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <LocationList />
        </div>
        <div className="col-md-3">
          <ParameterList />
        </div>
        <div className="col-md-6">
          <GameData />
          <EndConditionsList />
        </div>
      </div>

    </div>
  );
}

export default App;