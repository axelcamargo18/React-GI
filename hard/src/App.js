import React from "react";
import Basicinfo from "./components/Basicinfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          name: "John",
          number: "555-555-5555",
          birthDate: "01/01/1990",
        },
      ],
      people: [
        {
          name: "Axel",
          number: "336-474-5555",
          birthDate: "01/22/1995",
        },
        {
          name: "Vicky",
          number: "704-222-2222",
          birthDate: "05/22/1999",
        },
        {
          name: "Shannon",
          number: "704-333-3333",
          birthDate: "01/02/2000",
        },
      ],
    };
  }
  render() {
    return this.state.people.map(function (person, index) {
      return <Basicinfo key={index} person={person}></Basicinfo>;
    });
  }
}

export default App;
