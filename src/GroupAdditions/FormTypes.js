import React, { Component } from 'react';


class FormTypes extends Component {
    constructor(props) {
        super(props);
        this.state = { forms: [] };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(e) {
        var selectedFrom = this.state.forms.find((form)=>form.formId.toString() === e.target.value);
        debugger;
        console.log(selectedFrom);
        this.props.onFormTypeSelection(selectedFrom);
    }
    render() {
        return <div className="form-group">
            <label htmlFor="formTypesSelect" className="control-label">Form Type</label>
            <select placeholder="Select a form type"
                onChange={this.handleSelect}
                id="formTypesSelect"
                className="form-control col-md-4">
                <option>Select a Form Type</option>
                {this.state.forms.map((form) =>
                    <option value={form.formId} key={form.formId}>
                        {form.formName}
                    </option>)}
            </select>
        </div>
    }

    componentDidMount() {
        var formList = [];
        fetch("http://my-json-server.typicode.com/varunmehta1986/sampleData/forms")
            .then(res => res.json())
            .then((data) => {
                this.setState({ forms: data });;
            })
            .catch(console.log);
        return formList;
    }
}
// function FormTypes({ onFormTypeSelection }) {
//     return (
//         <div  className="form-group">
//             <label htmlFor="formTypesSelect" className="control-label">Form Type</label>
//             <select placeholder="Select a form type" onChange={(e) => onFormTypeSelection(e)}
//                 id="formTypesSelect"
//                 className="form-control col-md-4">
//                 <option>Select a Form Type</option>
//                 {GetFormTypes.map((formId) => <option value={formId} key={formId}>{formId} </option>)}
//             </select>
//         </div>
//     );

export default FormTypes;