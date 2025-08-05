export default function Footer() {
  return (
    <footer
      style={{ fontFamily: "Roboto" }}
      className="bg-white mt-auto text-center border-t-1 border-[#D9D9D9] p-4 text-[14px] text-[#262626] shadow"
    >
      &copy; Copyright 2025 NetBramha Studio LLP. All Rights Reserved.
      <br />
      <div className="flex justify-evenly mt-3">
        <p
          style={{ fontFamily: "Roboto" }}
          className="text-[14px] font-[400] text-[#262626] underline"
        >
          FAQs
        </p>
        <p
          style={{ fontFamily: "Roboto" }}
          className="text-[14px] font-[400] text-[#262626] underline"
        >
          Terms and Conditions
        </p>
        <p
          style={{ fontFamily: "Roboto" }}
          className="text-[14px] font-[400] text-[#262626] underline"
        >
          Privacy Policy
        </p>
        <p
          style={{ fontFamily: "Roboto" }}
          className="text-[14px] font-[400] text-[#262626] underline"
        >
          Raise a Dispute
        </p>
      </div>
    </footer>
  );
}
