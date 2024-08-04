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
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="flex items-center justify-between border-b dark:border-gray-600">
            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
              <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                {/* <button
                type="button"
                onClick={() => setIsPreview(true)}
                data-tooltip-target="tooltip-fullscreen"
                className=" !m-[4px] p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 19 19"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"
                  />
                </svg>
                <span class="sr-only">Full screen</span>
              </button> */}
              </div>
            </div>
            <div className="mx-1" >
              <button
                type="submit" onClick={executeCode}
                className="p-2 mx-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                Preview Code
              </button>
              <button
                type="submit" onClick={saveData}
              data-modal-target="static-modal" data-modal-toggle="static-modal"
                className="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                Save
              </button>

            </div>
          </div>
          <div className="  rounded-b-lg dark:bg-gray-800">
            <Editor
              height="600px"
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
