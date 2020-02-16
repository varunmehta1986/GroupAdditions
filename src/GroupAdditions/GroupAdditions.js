import React, { Component } from 'react';
import '../GroupAdditions.css';
import '../bootstrap.min.css'
import FormTypes from './FormTypes';
import EnrollmentTypes from './EnrollmentTypes'
import CompanySearch from './CompanySearch';

class GroupAdditions extends Component {
  constructor(props){
    super(props);
    this.state = {
      showEnrollmentTypes: false, 
      showCompanySearch : false
    };
  }
  render() {
    return <div className="container">
      <div className="jumbotron"><h1>Group Additions App</h1></div>
      <FormTypes onFormTypeSelection={this.handleFormTypeSelection.bind(this)}></FormTypes>
      {this.state.showEnrollmentTypes ? <EnrollmentTypes 
                    onEnrollmentTypeSelection={this.handleEnrollmentTypeSelection.bind(this)} /> : null}
      {this.state.showCompanySearch ? <CompanySearch /> : null }
    </div>
  }
  handleEnrollmentTypeSelection(e){
    if(e.target.value === "New Enrollee"){
      this.setState({showCompanySearch : true});
    }
    else{
      this.setState({showCompanySearch : false});
    }
  }
  handleFormTypeSelection(selectedForm) {
    debugger;
    this.setState({showEnrollmentTypes: selectedForm.useWebApp})
  }
}


export default GroupAdditions;
