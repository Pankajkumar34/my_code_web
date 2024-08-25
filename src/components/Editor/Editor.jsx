import React, { useEffect, useState } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import useReduxDispatch from "../../hooks/useDispatchRedux";
import { AddCode } from '../../redux/userCode'
const CodeEditor = ({ setIsPreview, setOutput, output,setOpenModal }) => {

  const dispatch = useReduxDispatch()
  const monaco = useMonaco();
  const [codeText, setCodeText] = useState(
    "// Write your code here or paste here"
  );

  const handleEditorChange = (value) => {
    setCodeText(value);
  };

  const executeCode = (e) => {
    e.preventDefault()
    setIsPreview(true)
    let capturedOutput = '';
    const originalConsoleLog = console.log;
    console.log = (...args) => {
      capturedOutput += args.join(' ') + '\n';
      originalConsoleLog.apply(console, args);
    };

    try {
      const result = eval(codeText);
      setOutput(capturedOutput + (result !== undefined ? result.toString() : ''));
    } catch (error) {
      setOutput(capturedOutput + error.toString());
    } finally {
      console.log = originalConsoleLog;
    }
  };
  const saveData = (e) => {
    e.preventDefault()
    const obj = {
      editorCode: codeText

    }
    setOpenModal(true)
    dispatch(AddCode(obj))
  }

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("customTheme", {
        base: "vs-dark", // or 'vs'
        inherit: true,
        rules: [{ token: "tag", foreground: "#25184c" }],
        colors: {
          "editor.background": "#1f214e",
        },
      });
      monaco.editor.setTheme("customTheme");
    }
  }, [monaco]);


  return (
    <div>
      <form>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-[#1f214e] dark:bg-gray-700 dark:border-gray-600">
          <div className="flex items-center justify-between border-b dark:border-gray-600">
            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
            
            </div>
            <div className="mx-1" >
              <button
                type="submit" onClick={executeCode}
                className="border-l px-2 h-[35px] text-white"
              >
                Preview Code
              </button>
              <button
                type="submit" onClick={saveData}
              data-modal-target="static-modal" data-modal-toggle="static-modal"
              className="border-l px-2 h-[35px] text-white"              >
                Save
              </button>

            </div>
          </div>
          <div className="  rounded-b-lg dark:bg-gray-800">
            <Editor
            height="400px"
              width="100%"
              defaultLanguage="javascript"
              defaultValue={codeText}
              theme="customTheme"
              value={codeText}
              onChange={handleEditorChange}
              options={{
                automaticLayout: true,
                fontSize: 14,
                scrollBeyondLastLine: false,
              }}
            />
          </div>
        </div>
      </form>

    </div>
  );
};

export default CodeEditor;
