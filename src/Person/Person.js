import React from "react";
import styled from "styled-component";

const styledDiv = styled.div`
backgroundColor:red,

`;
const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        hello, I'm {props.name} and I'm {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default person;
