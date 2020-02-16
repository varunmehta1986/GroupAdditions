import React from 'react';

function CompanySearch(){
    return (
        <div className="form-group">
            <label htmlFor = "companySearch" className ="control-label">Search </label>
            <input type = 'text' id="companySearch" className="form-control col-md-4"
                 placeholder = "Search for company"></input>
        </div>
    );
}
export default CompanySearch;