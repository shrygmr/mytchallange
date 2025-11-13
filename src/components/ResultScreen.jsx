import { calculateScore } from "../utils/calculateScore";
import "./result.css"; // Yeni ekle! Tasarım için CSS dosyası

export default function ResultScreen({ stats, track, playerName }) {
  const result = calculateScore(stats, track);

  return (
    <div className="result-wrapper">
      {/* Başlık */}
      <h1 className="result-main-title">MYT Challenge 2025</h1>

      {/* Oyuncu adı */}
      <h2 className="result-player">{playerName}</h2>

      {/* Yüzdelik dairesi */}
      <div className="result-percentage-circle">
        <div className="inner-circle">
          <span>{result.percentage}%</span>
        </div>
      </div>

      {/* Profil Kartı */}
      <div className="result-profile-card">
        <h3>Profil Analizi</h3>
        <p>{result.profile}</p>
      </div>

      {/* Yetenek Dağılımı */}
      <div className="result-section">
        <h3>Yetenek Dağılımı</h3>
        <div className="grid">
          <div className="stat-box">Liderlik: <span>{result.breakdown.leadership}</span></div>
          <div className="stat-box">İletişim: <span>{result.breakdown.communication}</span></div>
          <div className="stat-box">Strateji: <span>{result.breakdown.strategy}</span></div>
          <div className="stat-box">Teknik: <span>{result.breakdown.technical}</span></div>
          <div className="stat-box">Etik: <span>{result.breakdown.ethics}</span></div>
          <div className="stat-box">Risk: <span>{result.breakdown.risk}</span></div>
          <div className="stat-box">Stres: <span>{result.breakdown.stress}</span></div>
        </div>
      </div>

      {/* Bonuslar */}
      <div className="result-section">
        <h3>Bonus Puanlar</h3>
        <div className="grid">
          <div className="bonus-box">Strateji Bonus: <span>{result.bonusBreakdown.stratBonus}</span></div>
          <div className="bonus-box">Liderlik Bonus: <span>{result.bonusBreakdown.leadBonus}</span></div>
          <div className="bonus-box">İletişim Bonus: <span>{result.bonusBreakdown.commBonus}</span></div>
          <div className="bonus-box">Teknik Bonus: <span>{result.bonusBreakdown.techBonus}</span></div>
          <div className="bonus-box">Etik Bonus: <span>{result.bonusBreakdown.ethicsBonus}</span></div>
          <div className="bonus-box">Risk Cezası: <span>{result.bonusBreakdown.riskPenalty}</span></div>
        </div>
      </div>

      {/* Buton */}
      <button className="restart-btn" onClick={() => (window.location.href = "/")}>
        Oyuna Yeniden Başla
      </button>
    </div>
  );
}
