export default function Sidebar() {
  return (
    <aside className="w-64 bg-green-800 text-white hidden md:flex flex-col p-4 space-y-4">
      <div className="text-2xl font-bold mb-6">NETBRAMHA</div>
      <nav className="space-y-2">
        {[
          "Overview",
          "Score & Report",
          "Summary",
          "History",
          "Where You Stand",
          "Alerts",
          "Education",
          "Upgrade My Plan",
          "Rewards Program",
        ].map((item) => (
          <a
            key={item}
            href="#"
            className="block hover:bg-green-700 p-2 rounded"
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
}
