import React, { useState } from "react";

const Popup = () => {
  const [model, setModal] = useState(false);
  const toggleModel = () => {
    setModal(!model);
  };
  return (
    <>
      <span
        onClick={toggleModel}
        className="px-5 py-4 bg-AlphaBlue font-[500]  text-white cursor-pointer rounded-sm"
      >
        Submit
      </span>
      {model && (
        <div className="w-full h-screen flex justify-center items-center z-10">
          <div className=" bg-white border-[#091739] border-2 shadow-lg  w-80 h-36 pt-5">
            <p className="text-2xl font-[500] text-center text-[#091739]">Save changes ?</p>
            <div className="flex justify-between  mt-5  w-3/5 mx-auto">
              <span
                className="bg-[#236C00] text-white font-[500] py-3 px-4 rounded-md"
                onClick={toggleModel}
              >
                Yes
              </span>
              <span
                className="bg-[#E10000] text-white font-[500] py-3 px-4 rounded-md"
                onClick={toggleModel}
              >
                No
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup

