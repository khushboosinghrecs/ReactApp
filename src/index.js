import React from "react";
import ReactDOM from "react-dom";
const date = new Date();
const dt = date.getHours();
let hr;
const hello = {
  color: "",
  borderBottom: "5px solid black"
};
if (dt < 12) {
  hr = "morning";
  hello.color = "red";
} else if (dt > 12 && dt < 19) {
  hr = "evening";
  hello.color = "green";
} else {
  hr = "night";
  hello.color = "black";
}

ReactDOM.render(
  <>
    <h1 style={hello}>
      Good {hr} {dt}
    </h1>
  </>,
  document.getElementById("root")
);
