import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import engineeringNodes from "../data/engineeringNodes.js";
import managementNodes from "../data/managementNodes.js";
import QuestionCard from "../components/QuestionCard.jsx";
import ResultScreen from "../components/ResultScreen.jsx";

export default function Game({ track }) {
  const location = useLocation();
  const playerName = location.state?.playerName;

  const [nodes, setNodes] = useState({});
  const [currentNodeId, setCurrentNodeId] = useState("intro");

  // TÜM STATELER — BONUSLAR DA BURADA
  const [stats, setStats] = useState({
    leadership: 0,
    communication: 0,
    strategy: 0,
    technical: 0,
    ethics: 0,
    risk: 0,
    stress: 0,

    stratBonus: 0,
    leadBonus: 0,
    commBonus: 0,
    techBonus: 0,
    ethicsBonus: 0,
    riskPenalty: 0,
  });

  useEffect(() => {
    if (track === "engineering") {
      setNodes(engineeringNodes);
    }
    if (track === "management") {
      setNodes(managementNodes);
    }
  }, [track]);

  const handleOptionClick = (option) => {
    // NORMAL PUANLAR
    if (option.effects) {
      setStats((prev) => {
        const updated = { ...prev };
        for (const key in option.effects) {
          updated[key] = (updated[key] || 0) + option.effects[key];
        }
        return updated;
      });
    }

    // BONUS PUANLAR — EN KRİTİK EKSİK OLAN KISIM BUYDU
    if (option.bonus) {
      setStats((prev) => {
        const updated = { ...prev };
        for (const key in option.bonus) {
          updated[key] = (updated[key] || 0) + option.bonus[key];
        }
        return updated;
      });
    }

    setCurrentNodeId(option.next);
  };

  if (currentNodeId === "END") {
    return (
      <ResultScreen
        stats={stats}
        track={track}
        playerName={playerName}
      />
    );
  }

  const node = nodes[currentNodeId];
  if (!node) return <div style={{ color: "white" }}>Node bulunamadı.</div>;

  return (
    <div className="game-container">
      <QuestionCard node={node} onOptionClick={handleOptionClick} />
    </div>
  );
}
