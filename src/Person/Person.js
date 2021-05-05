import React from "react";

// const styledDiv = styled.div`
//   backgroundcolor: red;
// `;

// const styledButton = styled.button``;
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
