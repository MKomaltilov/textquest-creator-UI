import React from 'react'
import { ParameterGroup } from './ParameterGroup'

export const ParameterList = () => {

    // const num = 6

    return(
        <div>
            <button className="btn btn-block btn-success"><i className="fas fa-plus-square"></i> Parameter group</button>
            <br />
            <button className="btn btn-block btn-success"><i className="fas fa-plus-square"></i> Parameter</button>
            <br />
            <ParameterGroup parametersCount={3}/><br />
            <ParameterGroup parametersCount={1}/><br />
            <ParameterGroup parametersCount={4}/><br />
        </div>
        
    )
}