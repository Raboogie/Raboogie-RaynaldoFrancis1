import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    /* TODO - set initial state for link name and URL */
    this.state = { Name: "", URL: "" };
  }

  handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
    // console.log({ Name: event.target.value });
    // console.log({ URL: event.target.value });
    this.setState({ Name: event.target.value });
    this.setState({ URL: event.target.value });
  };

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault();

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    //console.log({ Name: event.target.value });
    //alert(this.state.Name + " " + this.state.URL);

    //console.log(formData.Name + " " + formData.URL);
    //this.props.val2(this.state);
    this.props.val2(this.state.Name, this.state.URL);
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
            onChange={(e) => this.setState({ Name: e.target.value })} // (e) => this.setState({ Name: e.target.value })
          />
        </div>
        <div>
          <label htmlFor="urlName">URL</label>
          <input
            size="175"
            type="text"
            value={this.state.URL}
            onChange={(e) => this.setState({ URL: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
