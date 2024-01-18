import React, { FC } from 'react';

interface ModalProps {
  title: string;
  description: string;
  response: (value: boolean) => void;
  modalResponseTitle: string;
}

const Modal: FC<ModalProps> = ({ title, description, response, modalResponseTitle }) => {
  return (
    <div style={{ background: "rgba(0, 0, 0, 0.25)" }} className="top-0 left-0 z-10 fixed w-full h-full">
      <div style={{ transform: "translate(-50%,-50%)", boxShadow: "0px 3px 8px -2px rgba(0, 0, 0, 0.20)" }} className="flex z-20 flex-col justify-center items-center fixed top-[50%] left-[50%] bg-white py-[25px] px-[25px] ">
        <p className="text-[#000] mb-2 text-[28px] font-semibold text-center">
          {title}
        </p>

        <p className="text-[#4F4F4F] mb-5 text-[18px] font-normal text-center max-w-[243px]">
          {description}
        </p>

        <div className="flex gap-[29px] ">
          <button className="border-[2px] h-[33px] border-[#BDBDBD] text-[#BDBDBD] rounded font-medium px-[20px] text-[16px]" onClick={() => response(false)}>
            Cancel
          </button>

          <button onClick={() => response(true)} className="bg-[#D63626] h-[33px] rounded px-[28px] text-white text-[16px] font-medium">
            {modalResponseTitle}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;