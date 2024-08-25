import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReduxSelector } from "../../hooks/useSelectore";
import { clearState } from "../../redux/userCode";
import useReduxDispatch from "../../hooks/useDispatchRedux";
import Editor, { useMonaco } from "@monaco-editor/react";
import OnChangeInput from "onchangeinput";
import AxiosIntance from "../../utils/axios.config";
import { toast } from "react-toastify";
import "./style.css";

import Popup from "./popup";
export const Modal = ({ openModal,zipFile, setOpenModal,typeCode }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { values, handleChange, resetForm } = OnChangeInput(
    {
      userName: "",
      descripation: "",
      publishType: "",
    },
    {}
  );

  const dispatch = useReduxDispatch();
  const monaco = useMonaco();
  const { code } = useReduxSelector((state) => state.userCode);
  const data =useReduxSelector(state=>state.fileUpload)

  const uploadCode = async (e, typeCode) => {
    e.preventDefault();
    try {
      if (!values.publishType) {
        return toast.error('Please select option public or private');
      }

      const obj = {
        userCode: code[0]?.editorCode || '',
        zipFilePath: data?.ZipFile?.name || '',
        userName: values?.userName || '',
        descripation: values?.descripation || '',
        publishType: values?.publishType || '',
      };

      let response;
      if (typeCode === 'Zip') {
        const formData = new FormData();
        formData.append('file', zipFile);
        formData.append('userCode', code[0]?.editorCode || '');
        formData.append('userName', values?.userName || '');
        formData.append('descripation', values?.descripation || '');
        formData.append('publishType', values?.publishType || '');
        console.log(formData,"formData")

       let response = await AxiosIntance().post('/fileUpload', formData);
       if(response.status==200){
        setOpenModal(false);
       }
      } else if (typeCode === 'editor') {
        let response = await AxiosIntance().post('/insert_code', obj);
        if(response.status==200){
          setOpenModal(false);
         }
      }
 
    } catch (error) {
      console.log(error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
        setErrorMsg(error.response.data.message)
        setOpenPopup(true)
      } else {
        toast.error('An error occurred. Please try again.');
      }
    }
  };
  const closeModal = () => {
    dispatch(clearState());
    setOpenModal(false);
  };
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
      {/* <!-- Main modal --> */}
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="flex justify-end ">
              <button
                onClick={closeModal}
                type="button"
                className="m-2 border rounded text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900  text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <input
              type="text"
              placeholder="Enter Your Name..."
              name="userName"
              value={values.userName}
              onChange={handleChange}
              className="w-[300px] mr-3 text-white bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Enter some discripation..."
              name="descripation"
              value={values.descripation}
              onChange={handleChange}
              className=" w-[300px] text-white bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-3   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="  ">
           { typeCode ==="editor" && <Editor
              height="300px"
              width="100%"
              defaultLanguage="javascript"
              defaultValue=""
              theme="customTheme"
              value={code[0]?.editorCode}
              // onChange={handleEditorChange}
              options={{
                automaticLayout: true,
                fontSize: 14,
                scrollBeyondLastLine: false,
              }}
            />}
            { typeCode ==="Zip" && <p className="text-white mx-5">File Name : {zipFile.name}</p>}
          </div>

          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 justify-between">
            <div>
              <button
                data-modal-hide="static-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e)=>uploadCode(e,typeCode)}
              >
                Upload
              </button>
              <button
                data-modal-hide="static-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => dispatch(clearState())}
              >
                Cancle{" "}
              </button>
            </div>
            <div className="text-white">
              <input
                type="radio"
                name="publishType"
                value="0"
                onChange={handleChange}
              />
              <label htmlFor="" className="mx-3">
                Public
              </label>

              <input
                type="radio"
                name="publishType"
                value="1"
                onChange={handleChange}
              />
              <label htmlFor="" className="mx-3">
                Pravite
              </label>
            </div>
          </div>
        </div>
      </div>

      {openPopup && <Popup setOpenPopup={setOpenPopup} errorMsg={errorMsg} />}
    </div>
  );
};
