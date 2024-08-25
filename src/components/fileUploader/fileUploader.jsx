import React, { useEffect, useState } from "react";
import AxiosIntance from "../../utils/axios.config";
import useReduxDispatch from "../../hooks/useDispatchRedux";
import {fileAdd} from '../../redux/fileUploadData'
const FileUploader = ({setOpenModal,setZipFile}) => {
  const dispatch=useReduxDispatch()
  const [fileData,setFileData]=useState('')

  const fileUploadFun = async (e) => {
    try {
      const file = e.target.files[0]
      if (file) {
        setZipFile(file)
        dispatch(fileAdd(file))
        setFileData(file)
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
 if(fileData){
  setOpenModal(true)
 }
  },[fileData])
  return (
    <div className="flex items-center justify-center w-full">
      
      <label
        for="dropzone-file"
        className="backdrop-blur-sm flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700  dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          
          <p className="mb-2 text-sm text-white">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          {fileData ? (
                <div className="mt-4">
                    <p className="text-white">Uploaded file: {fileData.name}</p>
                </div>
            ):<p className="text-xs text-white">
            Zip file Upload Here
          </p>}
          
        </div>
        <input id="dropzone-file" type="file" className="hidden" onChange={fileUploadFun} />
      </label>
    </div>
  );
};

export default FileUploader