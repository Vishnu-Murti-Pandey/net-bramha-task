import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const scoreRanges = [
  { label: "300-722", color: "bg-[#E15825]", percentage: 15 },
  { label: "723-747", color: "bg-[#F18200]", percentage: 22 },
  { label: "748-764", color: "bg-[#FCD800]", percentage: 26 },
  { label: "765-777", color: "bg-[#A9D161]", percentage: 18 },
  { label: "778-900", color: "bg-[#009900]", percentage: 20 },
];

export default function ScoreDistributionCard() {
  const score = 767;

  const getLeftPosition = () => {
    return "left-[50%]";
  };

  return (
    <div className="rounded-[12px] mb-10 bg-[#F7F9FA] shadow-sm p-4 mt-2 w-full max-w-[100%]">
      <div className="mt-3 space-y-6 bg-[#FFF] rounded-[6px] p-6">
        <div className="relative flex overflow-hidden rounded-md">
          {scoreRanges.map((range, index) => (
            <div
              key={index}
              style={{
                fontFamily: "Roboto",
                textAlign: "start",
                paddingLeft: "6px",
              }}
              className={`flex-1 ${range.color} text-white text-[18px] font-[700] py-2 text-center`}
            >
              {range.percentage}%
            </div>
          ))}

          <div
            className={`absolute -bottom-[10px] ${getLeftPosition()} transform -translate-x-1/2`}
          >
            <ArrowDropUpIcon />
          </div>
        </div>

        <div className="flex flex-col gap-2 text-center">
          <p
            style={{ fontFamily: "Roboto" }}
            className="text-[14px] text-[#262626] font-[700]"
          >
            Your NB Score
          </p>
          <p
            style={{ fontFamily: "Roboto" }}
            className="text-[40px] leading-[40px] font-[700] text-[#262626]"
          >
            {score}
          </p>
        </div>

        <div className="w-full h-px bg-[#D9D9D9]" />

        <div className="flex justify-evenly">
          <div
            style={{ color:"#262626", fontFamily: "Roboto", fontSize: "14px", fontWeight: 400 }}
          >
            Score Range
          </div>
          {scoreRanges.map((range, index) => (
            <div key={index} className="flex gap-2 items-center justify-center">
              <div className={`h-[18px] w-[18px] ${range.color}`}></div>
              <span
                style={{ fontFamily: "Roboto" }}
                className="text-[#595959] font-[700] text-[16px]"
              >
                {range.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{ fontFamily: "Roboto" }}
        className="text-center text-[16px] font-[400] text-[#262626] mt-6"
      >
        Your NB Score lies in the top 70% in All Of India.
        <br />
        <span
          style={{ fontFamily: "Roboto" }}
          className="text-[14px] font-[400] text-[#262626]"
        >
          Based on the NB Data
        </span>
      </div>
    </div>
  );
}
