import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState("");

  const startGame = (path) => {
    if (!playerName.trim()) {
      alert("Lütfen adını gir 😊");
      return;
    }
    navigate(path, { state: { playerName } });
  };

  return (
    <div className="home-container">
      <div className="glow-bg"></div>

      <h1 className="title">MYT Challenge 2025</h1>
      <p className="subtitle">Kendi yolunu seç, kendi hikayeni yaz!</p>

      {/* İsim Girişi */}
      <input
        className="name-input"
        placeholder="Adını yaz..."
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />

      {/* Kartlar */}
      <div className="cards-row">

        {/* Engineering Card */}
        <div
          className="select-card"
          onClick={() => startGame("/engineering")}
        >
          <h2>⚙️ Mühendislik</h2>
          <p>Teknik kararlar, analizler, problem çözme.</p>
        </div>

        {/* Management Card */}
        <div
          className="select-card"
          onClick={() => startGame("/management")}
        >
          <h2>📊 Yönetim</h2>
          <p>Strateji, liderlik, iletişim ve etik kararlar.</p>
        </div>

      </div>
    </div>
  );
}
