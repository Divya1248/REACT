import React from "react";
import WithCars from "../HOC/WithCars";
const Bangalore = props => {
  let carDetails = props.state.map(c => (
    <ul>
      <li>{c.carname}</li>
      <li>{c.color}</li>
    </ul>
  ));
  return (
    <div>
      <h1>Car details:</h1>
      <h2>{carDetails}</h2>
    </div>
  );
};

export default WithCars(Bangalore);
