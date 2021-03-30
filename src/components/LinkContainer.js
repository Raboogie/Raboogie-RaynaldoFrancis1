import React from "react";
import Table from "./Table";
import Form from "./Form";

class LinkContainer extends React.Component {
  constructor(props) {
    super(props);
    /* TODO - Create state object for storing favLinks */
    //this.handleSubmit = this.handleChange.bind(this);
    this.state = {
      favLinks: [{ name: "Ray", URL: "Mywebsite" }],
    };
  }

  removeCharacter = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
  };

  handleSubmit = (e) => {
    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
    this.setState({ favLinks: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        {/*TODO - Add Table Component */}
        <Table pass={this.state.favLinks}></Table>
        <br />
        <h3>Add New</h3>
        {/*TODO - Add Form Component */}
        <Form val={this.state.favLinks}></Form>
      </div>
    );
  }
}

export default LinkContainer;
