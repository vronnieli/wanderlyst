import React from 'react';

export default function LocationForm(props){
  // debugger;
  return(
    <div>
      <input type="text" onChange={props.onFormChange} />
    </div>
  )
}
