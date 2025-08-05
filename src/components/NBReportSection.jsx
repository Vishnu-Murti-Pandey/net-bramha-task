import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const NBReportSection = () => {
  return (
    <div className="space-y-4 w-full max-w-md">
      <div className="rounded-xl shadow bg-white p-5 space-y-3">
        <div className="flex justify-between items-start gap-3">
          <div>
            <h3 className="text-sm font-[700] text-[#046899] ">NB REPORT</h3>
            <p className="text-sm text-gray-600 mt-1 w-70">
              Get your personalized NB Report to plan your financial future.
            </p>
          </div>
          <div className="w-20 h-20 bg-[#E6F4FF] rounded-full flex items-center justify-center">
            <img
              src="https://img.icons8.com/bubbles/100/windows-explorer.png"
              alt="windows-explorer"
              className="w-20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <a
            href="#"
            style={{ fontFamily: "Roboto", fontWeight: 500 }}
            className="text-sm font-medium flex items-center gap-1 underline"
          >
            <RemoveRedEyeOutlinedIcon style={{ fontSize: "18px", color:"#262626" }} />
            <div className="text-[#066A9B]">View Your NB Report</div>
            <ArrowForwardIosOutlinedIcon style={{ fontSize: "12px", color:"#262626" }} />
          </a>
          <a
            href="#"
            style={{ fontFamily: "Roboto", fontWeight: 500 }}
            className="text-sm font-medium text-[#066A9B] flex items-center gap-1 underline"
          >
            <SaveAltOutlinedIcon style={{ fontSize: "18px", color:"#262626" }} />
            <div className="text-[#066A9B]">Download Your NB Report With Summary</div>
            <ArrowForwardIosOutlinedIcon style={{ fontSize: "12px", color:"#262626" }} />
          </a>
        </div>
      </div>

      <div className="rounded-xl bg-[#FEEF93] p-4 flex items-center justify-between gap-3">
        <p className="text-sm text-[#25324B] w-[220px]">
          You currently have an active subscription. You will be able to access
          Free Annual NB Score & Report after the subscription period expires.
        </p>
        <div className="w-45 h-30">
          <img
            src="src/assets/image1.png"
            alt="subscription gauge"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default NBReportSection;
