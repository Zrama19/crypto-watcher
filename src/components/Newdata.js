import React from 'react';

const Newdata = (props) => {
  console.log(props.modalData);
  return <div>{alert(props.modalData.symbol)}</div>;
};

export default Newdata;
