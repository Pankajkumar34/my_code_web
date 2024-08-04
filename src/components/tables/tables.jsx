import React from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";

const Tables = ({ item }) => {
    return (


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full border border-white text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white  uppercase bg-[#1f214e] dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            user name
                        </th>

                        <th scope="col" className="px-6 py-3">
                            file name
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Descripation
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item?.userName}
                        </td>
                        <td className="px-6 py-4">
                            {item?.zipFilePath}
                        </td>
                        <td className="px-6 py-4">
                            {item?.zipFilePath.split('.')[1]}
                        </td>
                        <td className="px-6 py-4">
                            {item?.descripation}
                        </td>
                        <td className="px-6 py-4 w-[100px]">
                            <a href={`http://localhost:4325/uploads/Zip/${item?.zipFilePath}`} download>
                                <button type='button' className='border border-black p-2 rounded w-[120px] flex items-center'>
                                    <span className='mr-5'>Download</span>
                                    <span className='text-[20px]'>
                                        <FaCloudDownloadAlt />
                                    </span>
                                </button>
                            </a>                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
export default Tables