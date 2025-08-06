import { useState } from "react";
import {
  FaBell,
  FaGraduationCap,
  FaGift,
  FaPen,
  FaFileAlt,
  FaChevronDown,
} from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [overviewOpen, setOverviewOpen] = useState(true);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-[#008A00] p-2 rounded"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <HiMenu size={24} />
      </button>

      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-[#00970F] text-white transform transition-transform duration-300 ease-in-out
        ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex flex-col`}
      >
        <div
          style={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "24px" }}
          className="flex items-center gap-2 tracking-wide p-8"
        >
          <div className="w-4 h-4 bg-[#FFDD00]"></div>
          NETBRAMHA
        </div>

        <nav className="space-y-2 text-sm">
          <div className="bg-[#007C0C]">
            <button
              onClick={() => setOverviewOpen(!overviewOpen)}
              className="w-full gap-3 cursor-pointer flex items-center hover:bg-[#007C0C] pt-4 pb-4 pr-8 pl-8 rounded"
            >
              <div className="flex items-center gap-4">
                <IoHome size={16} />
                <span
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  Overview
                </span>
              </div>
              <FaChevronDown
                size={12}
                className={`transition-transform ${
                  overviewOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {overviewOpen && (
              <div className="flex gap-5 pl-[40px]">
                <div className="h-[150px] w-[2px] bg-[#FFFFFF]"></div>
                <div className="flex flex-col gap-4 pb-6 mt-1 space-y-1">
                  <div
                    style={{ fontFamily: "Roboto", fontWeight: 400 }}
                    className="cursor-pointer text-[#F2F2F2] text-[14px]"
                  >
                    Score & Report
                  </div>
                  <div
                    style={{ fontFamily: "Roboto" }}
                    className="font-[700] text-[#FFFFFF] text-[14px]"
                  >
                    Summary
                  </div>
                  <div
                    style={{ fontFamily: "Roboto", fontWeight: 400 }}
                    className="cursor-pointer text-[#F2F2F2] text-[14px]"
                  >
                    History
                  </div>
                  <div
                    style={{ fontFamily: "Roboto", fontWeight: 400 }}
                    className="cursor-pointer text-[#F2F2F2] text-[14px]"
                  >
                    Where You Stand
                  </div>
                </div>
              </div>
            )}
          </div>
          <MenuItem icon={<FaFileAlt size={14} />} label="Your Report" />
          <MenuItem icon={<FaBell size={14} />} label="Alerts" badge="4" />
          <MenuItem icon={<FaPen size={14} />} label="Simulator" />
          <MenuItem icon={<FaGraduationCap size={14} />} label="Education" />
          <MenuItem icon={<FaGift size={14} />} label="Upgrade My Plan" />
          <MenuItem icon={<FaGift size={14} />} label="Rewards Program" />
        </nav>
      </aside>
    </>
  );
}

const MenuItem = ({ icon, label, badge }) => (
  <div className="flex items-center gap-4 pt-4 pb-4 pr-8 pl-8 cursor-pointer hover:bg-[#007C0C] rounded">
    <div className="flex items-center gap-4">
      {icon}
      <span style={{ fontFamily: "Roboto", fontWeight: 400, fontSize: "16px" }}>
        {label}
      </span>
    </div>
    {badge && (
      <div className="bg-[#FDDC02] h-[24px] w-[24px] text-[#262626] text-xs font-bold rounded-full px-2 py-0.5">
        {badge}
      </div>
    )}
  </div>
);
