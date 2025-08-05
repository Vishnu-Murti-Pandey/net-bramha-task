import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { useState } from "react";

ChartJS.register(ArcElement, Tooltip);

const AccountSummary = () => {
  const [activeTab, setActiveTab] = useState("All");
  const totalAccounts = 13;

  const allData = [
    {
      label: "Closed credit cards",
      count: 4,
      color: "#7E79DD",
      type: "Closed",
    },
    { label: "Closed loans", count: 1, color: "#FDE866", type: "Closed" },
    { label: "Open credit cards", count: 2, color: "#99DBEA", type: "Open" },
    { label: "Open loans", count: 6, color: "#67D995", type: "Open" },
  ];

  const filteredData =
    activeTab === "All"
      ? allData
      : allData.filter((item) => item.type === activeTab);

  const chartData = {
    labels: filteredData.map((item) => item.label),
    datasets: [
      {
        data: filteredData.map((item) => item.count),
        backgroundColor: filteredData.map((item) => item.color),
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
  };

  const totalCount = filteredData.reduce((acc, item) => acc + item.count, 0);

  return (
    <div className="flex gap-4 w-full max-w-5xl mx-auto">
      <div className="bg-white shadow p-5 flex-2 rounded-[8px] border-t-2 border-[#00A6CA]">
        <div className="flex justify-between items-center mb-4">
          <div
            style={{ fontWeight: 700, fontSize: "16px", fontFamily: "Roboto" }}
            className="text-[#046899] font-medium text-sm flex gap-2"
          >
            Your Accounts
            <span className="text-[#004364] h-[19px] w-[19px]">ⓘ</span>
          </div>
          <div className="flex items-center gap-1 text-sm bg-[#F5F7FA] p-1 rounded-[10px]">
            {["All", "Open", "Closed"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-1 rounded-[10px] cursor-pointer transition ${
                  activeTab === tab
                    ? "bg-[#0052CC] text-white"
                    : "text-[#595959]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="w-50 h-50 relative">
            <Doughnut data={chartData} options={chartOptions} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-sm">
              <div
                style={{ fontFamily: "Roboto", fontWeight: 700 }}
                className="text-[#262626] font-[16px]"
              >
                Total Accounts
              </div>
              <div
                style={{ fontFamily: "Roboto", fontWeight: 400 }}
                className="text-[20px] font-[16px] text-[#262626]"
              >
                {totalAccounts}
              </div>
            </div>
          </div>

          <div className="flex flex-col text-sm space-y-2 gap-4 w-[100%]">
            <LegendItem color="#7E79DD" label="Closed credit cards" count={4} />
            <LegendItem color="#FDE866" label="Closed loans" count={1} />
            <LegendItem color="#99DBEA" label="Open credit cards" count={2} />
            <LegendItem color="#67D995" label="Open loans" count={6} />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 w-[230px]">
        <InfoCard
          title="Total Disputes"
          count="12"
          description="Learn more about credit reporting and related policies."
          link="Read More"
          icon="⚠️"
        />
        <InfoCard
          title="Total Enquiries"
          count="05"
          description="(In last 3 years)"
          icon="📄"
        />
      </div>
    </div>
  );
};

// Legend Item
const LegendItem = ({ color, label, count }) => (
  <div className="flex items-center gap-2">
    <span
      className="w-3 h-3 rounded-full"
      style={{ backgroundColor: color }}
    ></span>
    <span
      style={{
        fontFamily: "Roboto",
        fontSize: "14px",
        fontWeight: 700,
        color: "#262626",
      }}
    >
      {label}
    </span>
    <span
      style={{ fontFamily: "Roboto", fontSize: "16px", color: "#262626" }}
      className="ml-auto font-[400] pr-[10px]"
    >
      {count}
    </span>
  </div>
);

// Info Card
const InfoCard = ({ title, count, description, link, icon }) => (
  <div className="bg-white rounded-[8px] border-t-2 border-[#00A6CA] shadow flex gap-3 items-start">
    <div className="w-12 h-full bg-[#E0F9FF] flex items-start pt-3 pr-2 pl-2 justify-center text-xl">
      {icon}
    </div>
    <div className="w-[100%] flex flex-col gap-2 pt-4 pb-4 pr-4">
      <div className="flex justify-between items-center">
        <div
          style={{ fontFamily: "Roboto", fontWeight: 700 }}
          className="text-[#046899] text-[16px]"
        >
          {title}
        </div>
        <div
          style={{ fontFamily: "Roboto", fontWeight: 700 }}
          className="text-[#262626] text-[18px]"
        >
          {count}
        </div>
      </div>
      {description && (
        <p
          style={{ fontFamily: "Roboto", fontWeight: 400 }}
          className="text-[14px] text-[#595959]"
        >
          {description}
        </p>
      )}
      {link && (
        <a
          style={{ fontFamily: "Roboto" }}
          href="#"
          className="text-[#066A9B] text-[14px] font-[500] underline"
        >
          {link}
        </a>
      )}
    </div>
  </div>
);

export default AccountSummary;
