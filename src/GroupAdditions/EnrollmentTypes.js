import React from 'react';

const enrollmentTypesList = ["New Enrollee", "Add a family Member"];
function EnrollmentTypes({onEnrollmentTypeSelection}) {
    return (
        <div className="form-group">
            <label htmlFor="enrollmentTypeSelect" className="control-label">Enrollment Type</label>
            <select placeholder="Select a form type" id="enrollmentTypeSelect" 
                onChange = {onEnrollmentTypeSelection} className="form-control col-md-4">
                <option>Select Enrollment type</option>
                {enrollmentTypesList.map((type) => <option value={type} key={type}>{type} </option>)}
            </select>
        </div>
    );
}
export default EnrollmentTypes;