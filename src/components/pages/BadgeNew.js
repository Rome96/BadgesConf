import React from "react";
import Navbar from "../Navbar";
import logo from "../images/logo.svg";
import "../styles/BadgeNew.css";
import Badge from "../Badge";
import BadgeForm from "../BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  _handleChange = e => {
    // const NextForm = this.state.form;
    // NextForm[e.target.name] = e.target.value;

    this.setState({
      // form: NextForm
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                twitter={this.state.form.twitter}
                avatarUrl="https://s.gravatar.com/avatar/d504fcbfc3b0940c812fd0e7e94e90ee?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this._handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
