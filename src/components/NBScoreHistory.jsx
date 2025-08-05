import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from "chart.js";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowForward from "@mui/icons-material/ArrowForward";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
);

const NBScoreHistory = () => {
  const scores = [
    { month: "JAN", value: null },
    { month: "FEB", value: null },
    { month: "MAR", value: null },
    { month: "APR", value: 520 },
    { month: "MAY", value: 580 },
    { month: "JUN", value: 493 },
    { month: "JUL", value: null },
    { month: "AUG", value: 510 },
    { month: "SEP", value: null },
    { month: "OCT", value: null },
    { month: "NOV", value: null },
    { month: "DEC", value: null },
  ];

  const chartData = {
    labels: scores.map((s) => s.month),
    datasets: [
      {
        label: "NB Score",
        data: scores.map((s) => s.value),
        fill: false,
        borderColor: "#00A9E0",
        backgroundColor: "#00A9E0",
        tension: 0.2,
        pointRadius: 5,
        pointHoverRadius: 6,
        pointBackgroundColor: (ctx) => {
          const val = ctx.raw;
          return val === 510 ? "#FDCB6E" : "#00A9E0"; // Highlight August point
        },
        pointBorderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `Score: ${ctx.raw}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 12 },
          color: "#7D8BA1",
        },
      },
      y: {
        min: 300,
        max: 900,
        ticks: {
          stepSize: 100,
          font: { size: 12 },
          color: "#7D8BA1",
        },
        grid: {
          color: "#E0E0E0",
          borderDash: [4, 4],
        },
      },
    },
  };

  const historyList = [
    { score: 493, date: "18/08/2022", trend: "up" },
    { score: 490, date: "16/08/2022", trend: "down" },
    { score: 510, date: "14/08/2022", trend: "up" },
    { score: 509, date: "12/08/2022", trend: "flat" },
    { score: "N/H", date: "09/08/2022", trend: "none" },
  ];

  const trendIcon = {
    up: <ArrowOutwardIcon sx={{ color: "#008A00" }} />,
    down: <ArrowForward sx={{ color: "#EB0000" }} />,
    flat: <ArrowDownwardIcon sx={{ color: "#00A6CA" }} />,
    none: <div className="w-[24px]"></div>,
  };

  return (
    <div className="rounded-[12px] bg-[#F7F9FA] shadow p-5 mt-2 flex gap-4 max-w-5xl">
      <div className="flex-1 min-w-0">
        <p
          style={{ fontFamily: "Roboto", fontWeight: 400 }}
          className="text-[16px] text-[#262626] mb-3"
        >
          Trended view of the changes in your NB Score with every refresh.
        </p>
        <div className="h-[280px] w-full">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      <div className="w-[225px] h-[230px] bg-[#FFF] p-4 overflow-auto">
        <h4
          style={{ fontFamily: "Roboto", borderBottom: "1px solid #262626" }}
          className="text-sm font-[700] text-[16px] text-[#25324B] pb-2"
        >
          August 2022
        </h4>
        <ul className="space-y-3 pt-1 text-sm text-[#25324B]">
          {historyList.map((item, i) => (
            <li key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">{trendIcon[item.trend]}</span>
                <span
                  style={{
                    color: item.score === "N/H" ? "#BFBFBF" : "#262626",
                    fontFamily: "Roboto",
                  }}
                  className="font-[700] text-[16px]"
                >
                  {item.score}
                </span>
              </div>
              <span
                style={{ fontFamily: "Roboto", color: "#262626" }}
                className="font-[400] text-[14px]"
              >
                {item.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NBScoreHistory;
