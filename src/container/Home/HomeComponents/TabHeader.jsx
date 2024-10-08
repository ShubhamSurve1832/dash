"use client";
import React, { useState } from "react";
import PlusIcon from "@/images/icons/PlusIcon";
import SSNModal from "./SSNModal";
import DriverLicenseModal from "./DriverLicenseModal";

const TabHeader = ({ title, number, modal }) => {
  const [open, setOpen] = useState(false);
  const [showSsnModel, setShowSsnModel] = useState(false);
  const HandleIdentification = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="border-t-4 border-[#FBBC05] bg-[#FFFFFF] p-4 rounded-[4px] flex justify-between">
        <div className="flex justify-between items-center gap-2 ">
          <h3 className="text-[#000000B2] text-lg font-semibold">{title}</h3>
          <span className="text-sm p-3 border border-[#00000033] rounded-sm leading-[10px]">
            {number}
          </span>
        </div>
        {modal && (
          <div
            className="bg-[#572E91] rounded-[4px] flex items-center justify-center p-3 cursor-pointer"
            onClick={HandleIdentification}
          >
            <PlusIcon />
          </div>
        )}
      </div>
      {showSsnModel ? (
        <SSNModal
          open={open}
          setOpen={setOpen}
          setShowSsnModel={setShowSsnModel}
        />
      ) : (
        <DriverLicenseModal
          open={open}
          setOpen={setOpen}
          setShowSsnModel={setShowSsnModel}
        />
      )}
    </>
  );
};

export default TabHeader;
