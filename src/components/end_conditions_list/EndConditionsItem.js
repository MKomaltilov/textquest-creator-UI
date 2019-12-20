import React from 'react'

export const EndConditionsItem = () => {

    return (
        <div>
            <div class="form-group row">
                <label for="end-condition-1-parameter-1" class="col-sm-2 col-form-label">Parameter</label>
                <div class="col-sm-10">
                    <select name="" id="end-condition-1-parameter-1" class="form-control">
                        <option value="" selected disabled hidden></option>
                        <option value="" disabled>Parameter group 1</option>
                        <option value="">Parameter 1</option>
                        <option value="">Parameter 2</option>
                        <option value="">Parameter 3</option>
                        <option value="" disabled>Parameter group 2</option>
                        <option value="">Parameter 1</option>
                        <option value="">Parameter 2</option>
                        <option value="" disabled>Parameter group 3</option>
                        <option value="">Parameter 1</option>
                        <option value="">Parameter 2</option>
                        <option value="">Parameter 3</option>
                        <option value="">Parameter 4</option>
                        <option value="" disabled>Parameter group 4</option>
                    </select>
                </div>

            </div>
            <div class="form-group row">
                <label for="end-condition-1-parameter-1-condition" class="col-sm-2 col-form-label">Condition</label>
                <div class="col-sm-10">
                    <select name="" id="end-condition-1-parameter-1-condition" class="form-control">
                        <option value="" selected disabled hidden></option>
                        <option value="">Conditon 1</option>
                        <option value="">Conditon 2</option>
                        <option value="">Conditon 3</option>
                    </select>
                </div>

            </div>

            <div class="form-group row">
                <label for="end-condition-1-parameter-1-check" class="col-sm-2 col-form-label">Value to check</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="end-condition-1-parameter-1-check" value=""
                        placeholder="Value to check" />
                </div>
            </div>
            <div class="d-flex">
                <div class="ml-auto"><button class="btn btn-sm btn-danger">Delete parameter</button></div>
            </div>



        </div>
    )
}