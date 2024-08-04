import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { useReduxSelector } from '../../hooks/useSelectore';
import { clearState } from '../../redux/userCode';
import useReduxDispatch from '../../hooks/useDispatchRedux';
import Editor, { useMonaco } from "@monaco-editor/react";
import OnChangeInput from "onchangeinput";
import AxiosIntance from '../../utils/thunkApi';
import './style.css'
import Popup from './popup';
export const Modal = ({openModal,setOpenModal}) => {
    const modalTriggerRef = useRef(null);
const [errorMsg,setErrorMsg]=useState("")
    const { values, handleChange, resetForm } = OnChangeInput({
        userName: "",
        descripation: "",
        publishType: ""
    }, {})
    const dispatch = useReduxDispatch()
    const monaco = useMonaco();
    const { code } = useReduxSelector(state => state.userCode)

    const uploadCode = async (e) => {
        e.preventDefault()
        try {
            const obj = {
                userCode: code[0]?.editorCode || "",
                zipFilePath: "" || "",
                userName: values?.userName || "",
                descripation: values?.descripation || "",
                publishType: values?.publishType || ""
            }
            const response = await AxiosIntance().post('/insert_code', obj)
            console.log(response, "kkk")
            if (response.status === 200) {
                let msg = response?.data?.message
                dispatch(clearState())
                resetForm()
                alert(msg)
            }

        } catch (error) {
            setErrorMsg(error.response.data?.message)
            console.log(error.response.data?.message);
            if (error) {
                // Trigger the modal programmatically
                if (modalTriggerRef.current) {
                    modalTriggerRef.current.click();
                }
            }
        }
    }
    console.log(values, "values")
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

    useEffect(()=>{

    },[])
    return (
        <div>
            {/* <!-- Main modal --> */}
            <div id="myModal" className="modal">
        <div className="modal-content">

          <div className="modal-header">
            <span className="close" onClick={()=>setOpenModal(false)}>&times;</span>
            <h4>Modal Header</h4>
          </div>
          
          <div className="modal-body">
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
          </div>

          <div className="modal-footer">
            <h3>Modal Footer</h3>
          </div>

        </div>
      </div>

            <Popup modalTriggerRef={modalTriggerRef} errorMsg={errorMsg} />
        </div>
    )
}
