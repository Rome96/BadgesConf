import React from "react";

class BadgeForm extends React.Component {
  //state = {};

  // _handleChange = e => {
  //   // console.log({
  //   //   value: e.target.value,
  //   //   name: e.target.name
  //   // });
  //  //--------------------------
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  _handleClick = () => {
    console.warn("Click in the button");
  };

  _handleSubmit = e => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendand</h1>

        <form onSubmit={this._handleSubmit}>
          <div className="form-group">
            <label>First Nane</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Nane</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
              required
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.JobTitle}
              required
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
              required
            />
          </div>
          <button onClick={this._handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
