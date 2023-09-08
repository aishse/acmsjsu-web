import React from "react";
import Image from "next/image";
import LinkedIn from "@/public/icons/linkedin.png";

const OfficerCard = ({ photo, name, role, linkedin }) => {
  return (
    <div className="transition duration-200 ease-in-out hover:shadow-2xl flex flex-col justify-center items-center border-[3px] border-[#eabc4e] gap-2 py-2 text-[16px] sm:text-sm rounded-xl shadow-lg">
      <h1 className="font-bold">{role}</h1>
      <Image
        src={photo}
        alt="Officer"
        width={100}
        height={100}
        className="p-0 object-cover w-40 h-40"
      />
      <h1 className="font-bold">{name}</h1>
      <div>
        <a>
          <Image src={LinkedIn} width={100} height={100} className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default OfficerCard;
