import React from 'react'
import { EndConditionsItem } from './EndConditionsItem'

export const EndConditionsGroup = () => {

    return (
        <div>
            <li class="list-group-item">
                <div class="d-flex">
                    <div><h4>Condition 1</h4></div>
                    <div class="ml-auto">
                        <i className="fas fa-arrow-up"></i>
                        &nbsp;
                                <i className="fas fa-arrow-down"></i>
                    </div>
                </div><br />

                <form action="" class="form-group">
                    <div class="form-group row">
                        <label for="end-condition-1-name" class="col-sm-2 col-form-label">Condition name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="end-condition-1-name" value="Condition 1"
                                placeholder="Name of the game" />
                        </div>
                    </div>
                    <hr />

                    <EndConditionsItem />

                    <hr />

                    <EndConditionsItem />

                    <hr />
                    <div class="d-flex">

                        <div class="mr-auto"><button class="btn btn-sm btn-primary">Add parameter</button></div>
                    </div>
                    <hr />

                    <div class="form-group row">
                        <label for="end-condition-1-location" class="col-sm-2 col-form-label">End location</label>
                        <div class="col-sm-10">
                            <select name="" id="end-condition-1-location" class="form-control">
                                <option value="" selected disabled hidden></option>
                                <option value="" disabled>Location group 1</option>
                                <option value="">Location 2 (#Location 2 TechName)</option>
                                <option value="" disabled>Location group 2</option>
                                <option value="">Location 1 (#Location 1 TechName)</option>
                                <option value="">Location 3 (#Location 3 TechName)</option>
                            </select>
                        </div>
                    </div>

                </form>


                <div class="d-flex">
                    <div class=""><button class="btn btn-sm btn-success">Save condition</button></div>
                    <div class="ml-1"><button class="btn btn-sm btn-warning">Reset changes</button></div>
                    <div class="ml-auto"><button class="btn btn-sm btn-danger">Delete condition</button></div>
                </div>
            </li>
        </div>
    )
}