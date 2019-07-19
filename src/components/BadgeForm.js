import React from "react";

class BadgeForm extends React.Component {
  _handleChange = (e) => {
    console.log({ 
      value: e.target.value,
      name: e.target.name
     })
  }
  _handleClick = () => {
    console.warn('Click in the button')
  }
  render() {
    return (
      <div>
        <h1>New Attendand</h1>
        <form>
          <div className='form-group'>
            <label>First Nane</label>
            <input onChange={this._handleChange} className='form-control' type='text' name='firstName'/>
          </div>
          <button type='button' onClick={this._handleClick} className='btn btn-primary'>Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
