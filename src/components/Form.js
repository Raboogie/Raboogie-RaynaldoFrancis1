import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    /* TODO - set initial state for link name and URL */
    this.state = { Name: "ray", URL: "fran" };
    this.handleSubmit = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */

    this.setState({ Name: event.target.value });
    this.setState({ URL: event.target.value });
  };

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault();

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
    alert(this.state.Name + " " + this.state.URL);

    let formData = { Name: this.state.Name, URL: this.state.URL };
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
        <div>
          <label htmlFor="websiteName">Name</label>
          <input
            size="175"
            type="text"
            value={this.state.Name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="urlName">URL</label>
          <input
            size="175"
            type="text"
            value={this.state.URL}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
