import React from 'react'

export const LocationItem = ({ location }) => {

    return (
        <li className="list-group-item">
            <div className="d-flex">
                <div className="">
                    <a href="location.html">{location.name} ({location.techName})</a>
                </div>

                <div className="ml-auto">
                    <i className="fas fa-arrow-up"></i>
                    &nbsp;
                                <i className="fas fa-arrow-down"></i>
                </div>
            </div>
        </li>
    )
}