import React, { useEffect, useState } from "react";
import Card from "../card/card";
import AxiosIntance from "../../utils/axios.config";
import Tables from "../tables/tables";
import { useDrop } from "react-dnd";

export const AllDataShow = () => {
  const [user_code, setUser_code] = useState([]);
  const [user_file, setUser_file] = useState([]);
  const [toggle, settoggle] = useState(false);
  const [{ isOver }, drop] = useDrop({
    accept: "ITEM_TYPE",
    drop: (item, monitor) => handleDrop(item, monitor),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleDrop = (item, monitor) => {
    const { originalIndex } = item;

    const clientOffset = monitor.getClientOffset();

    const targetIndex = getTargetIndex(clientOffset);

    setUser_file((prevFiles) => {
      const updatedFiles = [...prevFiles];
      const [movedItem] = updatedFiles.splice(originalIndex, 1);
      updatedFiles.splice(targetIndex, 0, movedItem);
      return updatedFiles;
    });
  };

  const getTargetIndex = (clientOffset) => {
    const rect = document.querySelector(".userZipFile").getBoundingClientRect();
    const itemHeight = rect.height / user_file.length;
    const dropY = clientOffset.y - rect.top;
    const targetIndex = Math.floor(dropY / itemHeight);

    return Math.max(0, Math.min(user_file.length - 1, targetIndex)); // Ensure targetIndex is within bounds
  };

  const getCode = async () => {
    try {
      const response = await AxiosIntance().get("/get_public_code");
      if (response.status === 200) {
        const Resdata = response.data.body;
        const codes = [];
        const files = [];

        Resdata.forEach((element) => {
          if (element.userCode !== "") {
            codes.push(element);
          } else if (element.zipFilePath !== "") {
            files.push(element);
          }
        });

        setUser_code(codes);
        setUser_file(files);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCode();
  }, []);

  return (
    <div className="bg-[#1f214e] ">
      <div className="container">
        <div className="">
          <h2 className="text-[60px] text-center font-semibold text-white">
            Read Code
          </h2>
          <p className="text-center text-white">Get Your backup code</p>
          <div className="select_btn flex gap-3">
            <button
              onClick={() => settoggle(true)}
              style={{
                backgroundColor: toggle ? "white" : "",
                color: toggle ? "black" : "",
              }}
              className="border border-white rounded text-white p-2 w-[100px]"
            >
              Zip
            </button>
            <button
              onClick={() => settoggle(false)}
              style={{
                backgroundColor: !toggle ? "white" : "",
                color: !toggle ? "black" : "",
              }}
              className="border border-white rounded text-white p-2  w-[100px]"
            >
              Code
            </button>
          </div>
          <div className="">
            {toggle === false && (
              <div className="Card grid grid-cols-2 py-[30px]">
                {user_code?.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </div>
            )}
            {toggle === true && (
              <div
                ref={drop}
                className="userZipFile py-[30px]"
                style={{
                  padding: "2rem",
                  backgroundColor: isOver ? "lightgreen" : "",
                }}
              >
                <table className="w-full    text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className=" text-xs border-t border-l border-r text-white rounded-[10px] uppercase bg-[#1f214e] dark:bg-gray-700 dark:text-gray-400">
                    <tr className="rounded-sm " >
                      <th scope="col" className="px-6 py-3">
                        User Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        File Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {user_file?.map((item, index) => (
                      <Tables
                        key={`${item._id}-${index}`}
                        item={item}
                        index={index}
                      />
                 
                  ))}
                     </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
