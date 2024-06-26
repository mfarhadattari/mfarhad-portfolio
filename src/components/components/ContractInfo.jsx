"use client";
import db from "@/utils/db";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const ContractInfo = () => {
  const { contractInfo } = db;

  return (
    <Fade bottom duration={4000}>
      <div className="w-full">
        <div className="flex flex-col gap-5 items-center">
          <div className="text-2xl space-y-4">
            <p className="flex gap-5 items-center">
              <span className="text-2xl">
                <FaPhoneAlt></FaPhoneAlt>
              </span>
              {contractInfo.mobile}
            </p>
            <p className="flex gap-5 items-center">
              <span className="text-2xl">
                <FaEnvelope></FaEnvelope>
              </span>
              <a href={`mailto:${contractInfo.email}`}>{contractInfo.email}</a>
            </p>
            <p className="flex gap-5 items-center">
              <span className="text-2xl">
                <FaMapMarkerAlt></FaMapMarkerAlt>
              </span>
              {contractInfo.location}
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ContractInfo;
