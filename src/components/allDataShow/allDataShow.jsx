import React, { useEffect, useState } from "react";
import Card from "../card/card";
import AxiosIntance from "../../utils/thunkApi";
import Tables from "../tables/tables";

export const AllDataShow = () => {
  const [user_code, setUser_code] = useState([])
  const [user_file, setUser_file] = useState([])
  const [toggle, settoggle] = useState(false)


  console.log(user_file, "allCode")
  const getCode = async () => {
    try {
      const response = await AxiosIntance().get('/get_public_code')
      console.log(response, "kkk")
      if (response.status === 200) {
        const Resdata = response.data.body;
        const codes = [];
        const files = [];

        Resdata.forEach(element => {
          if (element.userCode !== '') {
            codes.push(element);
          } else if (element.zipFilePath !== '') {
            files.push(element);
          }
        });

        setUser_code(codes);
        setUser_file(files);
      }

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCode()
  }, [])
  return (
    <div className="bg-[#1f214e] ">
      <div className="container">
        <div className="">
          <h2 className="text-[60px] text-center font-semibold text-white">Read Code </h2>
          <p className="text-center text-white">Get Yor backup code </p>
          <div className="select_btn flex gap-3">
            <button onClick={() => settoggle(true)} style={{ backgroundColor: toggle ? "white" : "", color: toggle ? "black" : "" }} className="border border-white rounded text-white p-2 w-[100px]">Zip</button>
            <button onClick={() => settoggle(false)} style={{ backgroundColor: !toggle ? "white" : "", color: !toggle ? "black" : "" }} className="border border-white rounded text-white p-2  w-[100px]">Code</button>
          </div>
          <div className="">
            {toggle === false && <div className="Card grid grid-cols-2 py-[30px]">
              {
                user_code?.map((item, index) => {
                  return <Card item={item} />
                })
              }

            </div>}
            {toggle === true && <div className="userZipFile  py-[30px]">
              {
                user_file?.map((item, index) => {
                  return (
                    <Tables item={item} />
                  )
                })
              }
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};
