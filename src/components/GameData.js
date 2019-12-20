import React from 'react'

export const GameData = () => {

    return(
        <div>
            <b>Game information</b><br /><br />
                <form action="" className="form-group">
                    <div className="form-group row">
                        <label for="game-name" className="col-sm-2 col-form-label">Game name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="game-name" value=""
                                placeholder="Name of the game"></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="game-description" className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <textarea type="text" className="form-control" id="game-description" value=""
                                placeholder="Description of the game" rows="5"></textarea>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="game-start-location" className="col-sm-2 col-form-label">Start location</label>
                        <div className="col-sm-10">
                            <select name="" id="game-start-location" className="form-control">
                                <option value="" selected disabled hidden></option>
                                <option value="" disabled>Location group 1</option>
                                <option value="">Location 1 (#Location 1 TechName)</option>
                                <option value="">Location 2 (#Location 2 TechName)</option>
                                <option value="">Location 3 (#Location 3 TechName)</option>
                                <option value="">Location 4 (#Location 4 TechName)</option>
                                <option value="">Location 5 (#Location 5 TechName)</option>
                                <option value="" disabled>Location group 2</option>
                                <option value="">Location 1 (#Location 1 TechName)</option>
                                <option value="">Location 2 (#Location 2 TechName)</option>
                                <option value="">Location 3 (#Location 3 TechName)</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className=""><button className="btn btn-sm btn-success">Save</button></div>
                        <div className="ml-1"><button className="btn btn-sm btn-warning">Cancel</button></div>
                        <div className="ml-auto"><button className="btn btn-sm btn-danger">Delete</button></div>
                    </div>

                </form>
        </div>
    )
}