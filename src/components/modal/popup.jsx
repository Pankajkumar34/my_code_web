import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { CiCircleAlert } from "react-icons/ci";

const Popup = ({ setOpenPopup, errorMsg }) => {
    const navigate = useNavigate()
    console.log(errorMsg, "errorMsg")
    const onclosePopup = () => {
        setOpenPopup(false)
    }
    return (
        <>
            <div className="modal1">
                <div className="modal-content1 !border-none">
                    <div className="modal-header1 p-3 h-[300px]">
                        <div className='flex justify-end '>
                            <button onClick={onclosePopup} type="button" className="m-2 border rounded text-white bg-red-600 hover:bg-red-800 hover:text-white  text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className='icon w-[50px] m-auto '>
                            <span className='text-[50px] text-white '><CiCircleAlert /></span>
                        </div>
                        <div className='message text-white '>
                            <p className='w-[350px] text-center mx-auto text-[20px]'>{errorMsg}</p>
                        </div>
                        <div className='footerPopup w-[55%] mx-auto '>
                        <button  onClick={() => navigate('/signup')} data-modal-hide="popup-modal" type="button" className= " ml-7 mt-8 text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:bg-gray-100 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                Sign up
                            </button>
                            <button data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-600 rounded-lg border border-gray-200 hover:bg-red-800  hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100   ">No, cancel</button>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}
export default Popup