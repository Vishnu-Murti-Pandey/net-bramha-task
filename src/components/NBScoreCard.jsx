import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const NBScoreCard = () => {
  const score = 767;
  const scoreDate = "19th Apr ‘22";
  const [refresh, setrefresh] = useState(true);


  const data = {
    labels: [],
    datasets: [
      {
        data: [400, 100, 100, 100, 100],
        backgroundColor: [
          "#E15825",
          "#F18200",
          "#FCD800",
          "#A9D161",
          "#009900",
        ],
        borderWidth: 0,
        cutout: "90%",
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  return (
    <div className="flex flex-col justify-between w-[412px] rounded-xl bg-white shadow-custom-deep text-center space-y-2">
      <div className="flex flex-col pt-6 pr-6 pl-6">
        <h2
          style={{ fontWeight: 700, fontFamily: "Roboto", fontSize: "22px" }}
          className=" text-[#262626]"
        >
          Hello, Rahul L.
        </h2>
        <div className="relative w-full h-[200px] flex justify-center items-center">
          <Doughnut
            key={`${refresh}data`}
            data={data}
            options={{
              plugins: {
                legend: { display: false },
                tooltip: { enabled: false },
              },
              maintainAspectRatio: false,
            }}
          />
          <div className="absolute top-[120px] transform -translate-y-1/2 text-center">
            <div className="flex flex-col">
              <img
                src="src/assets/image2.png"
                alt="windows-explorer"
                className="w-14 h-20"
              />
              <div className="text-[32px] font-[700] text-[#262626]">
                {score}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "14px",
              color: "#BFBFBF",
            }}
          >
            300
          </p>
          <p className="text-gray-600 text-sm">
            is your <span className="font-medium text-blue-500">NB</span> Score
            as of {scoreDate}
          </p>
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "14px",
              color: "#BFBFBF",
            }}
          >
            900
          </p>
        </div>
      </div>
      <div className="flex justify-around items-center p-4 border-t bg-[#FFFFFF] border-gray-200">
        <a href="#" className="text-blue-500 font-medium text-sm underline">
          Score Analysis
        </a>
        <button onClick={() => setrefresh(!refresh)} className="w-[200px] h-[48px] bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-semibold px-4 py-1.5 rounded-full shadow cursor-pointer">
          Refresh Now
        </button>
      </div>
    </div>
  );
};

export default NBScoreCard;
