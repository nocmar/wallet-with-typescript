import 'bootstrap/dist/css/bootstrap.min.css'; 
import * as React from "react";
// tslint:disable-next-line:ordered-imports
import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox,FieldApi } from 'react-form';

const filedApi:FieldApi={
  getValue(){return "any"; },
  getError(){return "any";},
  getWarning() {return ""},
  getSuccess() {return ""},
  getTouched() {return true},
  getFieldName() {return ""},
  setValue() {return ""},
  setError(){return "any";},
  setWarning() {return ""},
  setSuccess() {return ""},
  setTouched() {return true}
}
const statusOptions = [
  {
    label: 'Single',
    value: 'single',
  },
  {
    label: 'In a Relationship',
    value: 'relationship',
  },
  {
    label: "It's Complicated",
    value: 'complicated',
  },
]
export default class ReactFormSample extends React.Component{
    public render(){
      
  return (
    <div>
      {/* tslint:disable-next-line:jsx-no-lambda*/}
      <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
    {formApi => (
      <form onSubmit={formApi.submitForm} id="form2">
        <label htmlFor="firstName">First name</label>
        <Text field="firstName" id="firstName" />
        <label htmlFor="lastName">Last name</label>
        <Text field="lastName" id="lastName" />
        <RadioGroup field="gender">
     <React.Fragment>
          <label htmlFor="male" className="mr-2">Male</label>
          <Radio group={filedApi} value="male" id="male" className="mr-3 d-inline-block" />
          <label htmlFor="female" className="mr-2">Female</label>
          <Radio group={filedApi} value="female" id="female" className="d-inline-block" />
          </React.Fragment>
        </RadioGroup>
        <label htmlFor="bio">Bio</label>
        <TextArea field="bio" id="bio" />
        <label htmlFor="authorize" className="mr-2">Authorize</label>
        <Checkbox field="authorize" id="authorize" className="d-inline-block" />
        <label htmlFor="status" className="d-block">Relationship status</label>
        <Select field="status" id="status" options={statusOptions} className="mb-4" />
        <button type="submit" className="mb-4 btn btn-primary">
          Submit
        </button>
      </form>
    )}
  </Form>
        
      </div>
  );
    }
};
