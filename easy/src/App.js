import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [],
    };
  }
  render() {
    return (
      <div>
        <p>Name: John Doe</p>
        <p>Phone: 555-555-5555</p>
        <p>DOB: 01/01/1990</p>
      </div>
    );
  }
}

export default App;
