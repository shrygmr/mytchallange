// MYT Challenge 2025 – Profesyonel Puanlama Sistemi
// Track'e göre adil MAX_CORE uygulanıyor.

export function calculateScore(scores, track = "engineering") {
  const {
    leadership = 0,
    communication = 0,
    strategy = 0,
    technical = 0,
    ethics = 0,
    risk = 0,
    stress = 0,

    stratBonus = 0,
    leadBonus = 0,
    commBonus = 0,
    techBonus = 0,
    ethicsBonus = 0,
    riskPenalty = 0,
  } = scores;

  // --- ENGINEERING = 80 core hedefi
  // --- MANAGEMENT = 60 core hedefi (soru etkileri daha düşük)
  const MAX_CORE = track === "management" ? 60 : 80;

  const positiveCore =
    leadership + communication + strategy + technical + ethics;

  let coreNorm = (positiveCore / MAX_CORE) * 100;
  coreNorm = clamp(coreNorm, 0, 100);

  // --- BONUS ---
  const bonusSum =
    stratBonus +
    leadBonus +
    commBonus +
    techBonus +
    ethicsBonus;

  const MAX_BONUS = 8;
  let bonusNorm = (bonusSum / MAX_BONUS) * 100;
  bonusNorm = clamp(bonusNorm, 0, 100);

  // --- PENALTIES ---
  const penaltyRaw =
    riskPenalty +
    Math.max(0, risk) * 0.25 +
    Math.max(0, stress) * 0.15;

  const MAX_PENALTY = 8;
  let penaltyNorm = (penaltyRaw / MAX_PENALTY) * 100;
  penaltyNorm = clamp(penaltyNorm, 0, 100);

  // --- FINAL ---
  let percentage =
    0.6 * coreNorm + 0.4 * bonusNorm - 0.3 * penaltyNorm;

  // aşırı düşükleri toparla
  if (percentage < 35) {
    percentage = 35 + (percentage - 35) * 0.4;
  }

  // aşırı yüksekleri yumuşat
  if (percentage > 98) {
    percentage = 98 + (percentage - 98) * 0.3;
  }

  percentage = clamp(Math.round(percentage), 0, 100);

  // --- PROFILE ---
  const highest = Math.max(
    leadership,
    communication,
    strategy,
    technical,
    ethics
  );

  let profile = "Dengeli Aday";
  if (highest === leadership) profile = "Lider Odaklı";
  else if (highest === communication) profile = "İletişim Odaklı";
  else if (highest === strategy) profile = "Stratejik Aday";
  else if (highest === technical) profile = "Teknik Odaklı";
  else if (highest === ethics) profile = "Etik Odaklı";

  return {
    percentage,
    profile,
    breakdown: {
      leadership,
      communication,
      strategy,
      technical,
      ethics,
      risk,
      stress,
    },
    bonusBreakdown: {
      stratBonus,
      leadBonus,
      commBonus,
      techBonus,
      ethicsBonus,
      riskPenalty,
    },
  };
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
