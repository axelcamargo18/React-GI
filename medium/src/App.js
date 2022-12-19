import React from "react";
import Basicinfo from "./components/Basicinfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          name: "John Doe",
          number: "555-555-5555",
          birthDate: "01/01/1990",
        },
      ],
    };
  }
  render() {
    return this.state.person.map(function (person, index) {
      return <Basicinfo key={index} person={person}></Basicinfo>;
    });
  }
}

export default App;
