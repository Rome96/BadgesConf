import React from "react";

class BadgeForm extends React.Component {
  render() {
    return (
      <div>
        <h1>New Attendand</h1>
        <from>
          <div className='form-group'>
            <label>First Nane</label>
            <input className='form-control' type='text' name='firstName'/>
          </div>
          <button className='btn btn-primary'>Save</button>
        </from>
      </div>
    );
  }
}

export default BadgeForm;
