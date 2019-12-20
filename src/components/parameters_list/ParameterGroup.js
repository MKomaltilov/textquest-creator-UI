import React from 'react'
import { ParameterItem } from './ParameterItem'

export const ParameterGroup = ({parametersCount}) => {

    const parameters = new Array(parametersCount).fill('').map((value , index) => ({
        name: `Параметр ${index + 1}`, 
        id: index+1,
        type: '',
        defaultValue: '',
        visibility: false,
        group: 1
    }))

    return(
        <div>
            <button className="btn btn-block btn-info">Parameter group</button>
            <button className="btn btn-block btn-info"><i className="fa fa-pen-square"></i></button>               
            
            <ul className="list-group">
                {parameters.map((parameter, i) => (
                    <ParameterItem parameter={parameter} key={i}/>
                ))}
            </ul>
            
        </div>
    )
}