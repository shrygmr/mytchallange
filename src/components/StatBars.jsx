export default function StatBars({ stats }) {
  const statConfig = [
    { key: "leadership", label: "Liderlik", color: "#4db8ff" },
    { key: "communication", label: "İletişim", color: "#ff7aca" },
    { key: "strategy", label: "Strateji", color: "#8fff8f" },
    { key: "ethics", label: "Etik", color: "#ffd36b" },
    { key: "risk", label: "Risk", color: "#ff5757" },
    { key: "stress", label: "Stres", color: "#b48cff" },
  ];

  return (
    <div className="statbars-container">
      {statConfig.map((stat) => {
        let value = stats[stat.key] ?? 0;

        // Görsel sınırlama (UI için)
        let barWidth = Math.max(0, Math.min(100, value + 50));

        return (
          <div key={stat.key} className="stat-row">
            <span className="stat-label">{stat.label}</span>
            <div className="stat-bar">
              <div
                className="stat-bar-fill"
                style={{
                  width: `${barWidth}%`,
                  backgroundColor: stat.color,
                }}
              ></div>
            </div>
            <span className="stat-value">{value}</span>
          </div>
        );
      })}
    </div>
  );
}
