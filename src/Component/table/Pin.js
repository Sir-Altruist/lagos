import React from "react";

const Pin = ({ pin }) => {
  //   console.log(
  //     pin.map((single) => {
  //       return single;
  //     })
  //   );
  //   console.log(...pin);
  let result = pin.map((single) => {
    return single;
  });
  //   const newValue = [...pin];
  return (
    <>
      {/* {pin.map((single, i) => {
        return <p key={i}>{single}</p>;
      })} */}
      {result}
    </>
  );
};

export default Pin;
