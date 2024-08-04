import React from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
const Card = ({ item }) => {
  return (
    <div className="border border-white rounded  mx-2 my-2">
      <div className="p-2">
<h3 className="border border-white rounded text-white my-2 p-2"><span className="font-extrabold">User :</span> {item?.userName} <span className="float-end">Edit</span></h3>
<p className="border border-white rounded text-white p-2  my-2"><span className="font-extrabold">Descripation :</span> {item?.descripation} <span className="float-end">Delete</span></p>
      </div>
      <Editor
        height="300px"
        width="100%"
        defaultLanguage="javascript"
        defaultValue=""
        theme="customTheme"
        value={item?.userCode}
        // onChange={handleEditorChange}
        options={{
          automaticLayout: true,
          fontSize: 14,
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
};

export default Card;
