import React from 'react'

export const ParameterItem = ({parameter}) => {

    return(
        <li className="list-group-item">
            <div className="d-flex">
                

            <div className="ml-auto">
                <i className="fas fa-arrow-up"></i>
                &nbsp;
                <i className="fas fa-arrow-down"></i>
            </div>
                
            </div><br />
            <form className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Name: </span>
                    </div>
                    <input type="text" name="" id="" className="form-control" value={parameter.name}
                        placeholder="Name of parameter"></input>
                </div>
                <br />
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Type: </span>
                    </div>
                    <select name="" id="" className="form-control">
                        <option value="" selected disabled hidden required></option>
                        <option value="">Type 1</option>
                        <option value="">Type 2</option>
                        <option value="">Type 3</option>
                    </select>
                </div>
                <br />
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Default value: </span>
                    </div>
                    <input type="text" name="" id="" className="form-control" value=""
                        placeholder="Enter the default value"></input>
                </div>
                <br />
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Visibility: </span>
                    </div>
                    <select name="" id="" className="form-control">
                        <option value="on">On</option>
                        <option value="off" selected>Off</option>
                    </select>
                </div>
                <br />
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Group: </span>
                    </div>
                    <select name="" id="" className="form-control">
                        <option value="" selected>Group 1</option>
                        <option value="">Group 2</option>
                        <option value="">Group 3</option>
                    </select>
                </div>
                <br />
                <div className="d-flex">
                    <div className=""><button className="btn btn-sm btn-success">Save</button></div>
                    <div className="ml-1"><button className="btn btn-sm btn-warning">Cancel</button></div>
                    <div className="ml-auto"><button className="btn btn-sm btn-danger">Delete</button></div>
                </div>
            </form>
        </li>
    )
}