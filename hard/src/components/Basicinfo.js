import React from "react";

class Basicinfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="data">
        <p>{this.props.person.name}</p>
        <p>{this.props.person.number}</p>
        <p>{this.props.person.birthDate}</p>
      </div>
    );
  }
}

export default Basicinfo;
