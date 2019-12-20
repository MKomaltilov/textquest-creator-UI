import React from 'react'
import { LocationItem } from './LocationItem'

export const LocationGroup = ({locationsCount}) => {

    const locations = new Array(locationsCount).fill('').map((value , index) => ({name: `Локация ${index + 1}`, techName: `Тех.Имя Локации №${index + 1}`, id: index+1}))

    return(
        <div>
            <button className="btn btn-block btn-info">Location group</button>
            <button className="btn btn-block btn-info"><i className="fa fa-pen-square"></i></button>               
            
            <ul className="list-group">
                {locations.map((location, i) => (
                    <LocationItem location={location} key={i}/>
                ))}
            </ul>
            
        </div>
    )
}