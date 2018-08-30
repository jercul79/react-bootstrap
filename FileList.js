import React from "react";

function File(props) {
  return (
    <div>
      {props.name}
    </div>
    )
}

function FileList(props) {
  return (
    <div>
      {props.files.map(c => <File key={c.id} name={c.name} />)}
     </div>
  )
}

export default FileList;
