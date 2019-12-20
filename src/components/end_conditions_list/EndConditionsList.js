import React from 'react'
import { EndConditionsGroup } from './EndConditionsGroup'

export const EndConditionsList = () => {

    return (
        <div>
            <button class="btn btn-info btn-block" type="button">
                End of the game conditions
            </button>
            <br />
            <button class="btn btn-success btn-block"><i className="fas fa-plus-square"></i> Add the condition</button>
            <ul class="list-group" id="list-of-conditions">
                <EndConditionsGroup />
            </ul>
        </div>
    )
}