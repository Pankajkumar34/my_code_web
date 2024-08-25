// import React from 'react';
// import { FaCloudDownloadAlt } from 'react-icons/fa';
// import { useDrag } from 'react-dnd';

// const Tables = ({ item, index }) => {
//     const [{ opacity }, dragRef] = useDrag({
//         type: 'ITEM_TYPE',
//         item: { id: item._id, originalIndex: index },
//         collect: (monitor) => ({
//             opacity: monitor.isDragging() ? 0.5 : 1,
//         }),
//     });

//     return (
//         // <div
//         //     className="relative overflow-x-auto shadow-md sm:rounded-lg my-4 rounded-sm bg-white p-3"
//         //     ref={dragRef}
//         //     style={{ opacity }}
//         // >
//             {/* <table className="w-full    text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"> */}
//                 {/* <thead className="text-xs text-white rounded-[10px] uppercase bg-[#1f214e] dark:bg-gray-700 dark:text-gray-400">
//                     <tr className='rounded-sm'>
//                         <th scope="col" className="px-6 py-3">User Name</th>
//                         <th scope="col" className="px-6 py-3">File Name</th>
//                         <th scope="col" className="px-6 py-3">Category</th>
//                         <th scope="col" className="px-6 py-3">Description</th>
//                         <th scope="col" className="px-6 py-3">Action</th>
//                     </tr>
//                 </thead> */}
//                 {/* <tbody> */}
//                     <tr className="bg-white border-b border-gray-800 dark:bg-gray-800 dark:border-gray-700">
//                         <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item?.userName}</td>
//                         <td className="px-6 py-4">{item?.zipFilePath}</td>
//                         <td className="px-6 py-4">{item?.zipFilePath.split('.')[1]}</td>
//                         <td className="px-6 py-4">{item?.descripation}</td>
//                         <td className="px-6 py-4 w-[100px]">
//                             <a href={`http://localhost:4325/uploads/Zip/${item?.zipFilePath}`} download>
//                                 <button type="button" className="border border-black p-2 rounded w-[120px] flex items-center">
//                                     <span className="mr-5">Download</span>
//                                     <span className="text-[20px]"><FaCloudDownloadAlt /></span>
//                                 </button>
//                             </a>
//                         </td>
//                     </tr>
//                 {/* </tbody> */}
//             {/* </table> */}
//         // </div>
//     );
// };

// export default Tables;

import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useDrag } from "react-dnd";

const Tables = ({ item, index }) => {
  const [{ opacity }, dragRef] = useDrag({
    type: "ITEM_TYPE",
    item: { id: item._id, originalIndex: index },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <tr
      ref={dragRef}
      style={{ opacity }}
      className=" my-2 bg-white border-b border-gray-800 dark:bg-gray-800 dark:border-gray-700"
    >
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {item?.userName}
      </td>
      <td className="px-6 py-4">{item?.zipFilePath}</td>
      <td className="px-6 py-4">{item?.zipFilePath.split(".")[1]}</td>
      <td className="px-6 py-4">{item?.descripation}</td>
      <td className="px-6 py-4 w-[100px]">
        <a
          href={`http://localhost:4325/uploads/Zip/${item?.zipFilePath}`}
          download
        >
          <button
            type="button"
            className="border border-black p-2 rounded w-[120px] flex items-center"
          >
            <span className="mr-5">Download</span>
            <span className="text-[20px]">
              <FaCloudDownloadAlt />
            </span>
          </button>
        </a>
      </td>
    </tr>
  );
};

export default Tables;
