import { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NBScoreCard from "./components/NBScoreCard";
import NBReportSection from "./components/NBReportSection";
import AccountSummary from "./components/AccountSummary";
import NBScoreHistory from "./components/NBScoreHistory";
import ScoreDistributionCard from "./components/ScoreDistributionCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-auto">
        <Header />
        <main className="space-y-6">
          <div className="flex flex-col items-center lg:flex-row gap-4 justify-evenly pt-6 pb-6">
            <NBScoreCard />
            <NBReportSection />
          </div>

          <div className=" bg-[#FFF] p-10 ">
            <AccountSummary />
            <div className="flex flex-col mt-15">
              <div
                style={{ fontFamily: "Roboto" }}
                className="flex items-center gap-2 text-[#046899] font-[700] text-[18px] mb-1"
              >
                NB SCORE HISTORY <span className="text-[#004364]">ⓘ</span>
              </div>
              <NBScoreHistory />
            </div>
            <div className="flex flex-col mt-15">
              <div
                style={{ fontFamily: "Roboto" }}
                className="flex items-center gap-2 text-[#046899] font-[700] text-[18px] mb-1"
              >
                WHERE YOU STAND <span className="text-[#004364]">ⓘ</span>
              </div>
              <ScoreDistributionCard />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      <p className="text-sm text-gray-500">Details about {title}</p>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="bg-white p-4 rounded shadow h-64">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="h-full">{children}</div>
    </div>
  );
}
