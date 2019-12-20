import React from 'react'
import { LocationGroup } from './LocationGroup'

export const LocationList = () => {

    // const num = 6

    return(
        <div>
            <button className="btn btn-block btn-info">Game</button>
            <br />
            <button className="btn btn-block btn-success"><i className="fas fa-plus-square"></i> Location group</button>
            <br />
            <button className="btn btn-block btn-success"><i className="fas fa-plus-square"></i> Location</button>
            <br />
            <LocationGroup locationsCount={3}/><br />
            <LocationGroup locationsCount={1}/><br />
            <LocationGroup locationsCount={4}/><br />
        </div>
        
    )
}