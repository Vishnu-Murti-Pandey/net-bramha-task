import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import TranslateIcon from "@mui/icons-material/Translate";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header() {
  return (
    <header className="flex justify-end items-center bg-white shadow px-6 py-4 sticky top-0 z-10">
      <div className="flex items-center gap-6">
        <div className="flex items-center text-lg font-medium gap-1 cursor-pointer">
          <HelpOutlineIcon
            sx={{ color: "#004364", height: "19px", width: "19px" }}
          />
          <div
            style={{ fontFamily: "Roboto", fontWeight:400, color: "#262626", fontSize: "14px" }}
          >
            How It Works
          </div>
        </div>
        <div className="flex items-center text-lg font-medium gap-1">
          <GTranslateIcon
            sx={{ color: "#004364", height: "19px", width: "19px" }}
          />
          <TranslateIcon
            sx={{ color: "#004364", height: "19px", width: "19px" }}
          />
          <select className="rounded p-1 text-sm cursor-pointer font-normal">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
        <div className="flex items-center text-lg font-medium gap-1 cursor-pointer">
          <AccountCircleOutlinedIcon
            sx={{ color: "#004364", height: "19px", width: "19px" }}
          />
          <div
            style={{ fontFamily: "Roboto", fontWeight:400, color: "#262626", fontSize: "14px" }}
          >
            My Account
          </div>
        </div>
        <div className="flex items-center text-lg font-medium gap-1 cursor-pointer">
          <LogoutIcon
            sx={{ color: "#004364", height: "19px", width: "19px" }}
          />
          <div
            style={{ fontFamily: "Roboto", fontWeight:400, color: "#262626", fontSize: "14px" }}
          >
            Logout
          </div>
        </div>
      </div>
    </header>
  );
}
