import React from "react";
import Table from "./Table";
import Form from "./Form";

class LinkContainer extends React.Component {
  constructor(props) {
    super(props);
    /* TODO - Create state object for storing favLinks */
    this.state = {
      favLinks: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  removeCharacter = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
    let myFavLinksArray = this.state.favLinks;
    this.setState(myFavLinksArray.splice(index, 1));
  };

  handleSubmit = (Name, URL) => {
    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
    //console.log(Name + " " + URL);
    let temp = this.state.favLinks;
    this.setState({ favLinks: temp.concat({ name: Name, URL: URL }) });
  };

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        {/*TODO - Add Table Component */}
        <Table pass={this.state.favLinks} del={this.removeCharacter}></Table>
        <br />
        <h3>Add New</h3>
        {/*TODO - Add Form Component */}
        <Form val2={this.handleSubmit}></Form>
      </div>
    );
  }
}

export default LinkContainer;
