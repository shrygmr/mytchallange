// ---------------------------------------------------------
// MYT Challenge 2025 – ENGINEERING TRACK (20 Questions)
// Model A (7 – 7 – 6) + Karma Bonus Sistemi (C)
// ---------------------------------------------------------

const nodes = {

  // -------------------------------------------------------
  // AŞAMA 1 – ORYANTASYON (7 soru)
  // -------------------------------------------------------

  intro: {
    id: "intro",
    stageLabel: "Aşama 1 – Oryantasyon",
    title: "Mühendislik Simülasyonuna Hoş Geldin",
    text: "Yeni mezun bir mühendis olarak ilk iş günündesin. Teknik bilgi, ekip çalışması, problem çözme ve risk yönetimi üzerine zorlu bir gün seni bekliyor.",
    isQuestion: true,
    options: [{ text: "Başlayalım!", next: "Q1" }],
  },

  Q1: {
    id: "Q1",
    stageLabel: "Aşama 1 – İlk İzlenim",
    title: "Ekiple İlk Temas",
    text: "Takım yoğun, baskı yüksek ve herkes hızlı hareket ediyor.",
    isQuestion: true,
    options: [
      { text: "Teknik detaylara hemen odaklanırım.", next: "Q2", effects: { technical: 4 } },
      { text: "Önce süreci anlamaya çalışırım.", next: "Q2", effects: { strategy: 4 } },
      { text: "Ekiple iletişim kurup uyumu anlamaya çalışırım.", next: "Q2", effects: { communication: 4 } },
    ],
  },

  Q2: {
    id: "Q2",
    stageLabel: "Aşama 1 – Görev Seçimi",
    title: "İlk Görevin",
    text: "Şef mühendis seni üç farklı mini projeden birine yönlendirmek istiyor.",
    isQuestion: true,
    options: [
      { text: "Konstrüksiyon analizi.", next: "Q3_TECH", effects: { technical: 5 } },
      { text: "Proje planlama.", next: "Q3_STRAT", effects: { strategy: 5 } },
      { text: "Takım koordine etme.", next: "Q3_LEAD", effects: { leadership: 4 } },
    ],
  },

  // --- Yol Ayrımı ---

  Q3_TECH: {
    id: "Q3_TECH",
    stageLabel: "Aşama 1 – Teknik Yol",
    title: "Tasarım Problemi",
    text: "Malzeme seçimi kritik. Yanlış seçim sonraki adımları etkiler.",
    isQuestion: true,
    options: [
      { text: "Yük altında davranışı analiz ederim.", next: "Q4", effects: { technical: 5, techBonus: 1 } }, // BONUS
      { text: "Maliyet / performans dengesi kurarım.", next: "Q4", effects: { strategy: 3 } },
      { text: "Daha deneyimli birine danışırım.", next: "Q4", effects: { communication: 3 } },
    ],
  },

  Q3_STRAT: {
    id: "Q3_STRAT",
    stageLabel: "Aşama 1 – Stratejik Yol",
    title: "Eksik Veri",
    text: "Rapor için gerekli verilerin %30'u eksik.",
    isQuestion: true,
    options: [
      { text: "Tahmini modeller kurarım.", next: "Q4", effects: { strategy: 4 } },
      { text: "Verileri doğrulayana kadar geciktiririm.", next: "Q4", effects: { ethics: 2, leadership: 2 } },
      { text: "Hızlıca veri toplamak için ekibi yönlendiririm.", next: "Q4", effects: { leadership: 4 } },
    ],
  },

  Q3_LEAD: {
    id: "Q3_LEAD",
    stageLabel: "Aşama 1 – Liderlik Yol",
    title: "Takım Çatışması",
    text: "İki ekip arkadaşı tartışıyor.",
    isQuestion: true,
    options: [
      { text: "Tarafsız dinler, ortak noktayı bulurum.", next: "Q4", effects: { leadership: 4, commBonus: 1 } },
      { text: "Direkt teknik çözüme yönlendiririm.", next: "Q4", effects: { technical: 3 } },
      { text: "Zamanla düzeleceğini düşünürüm.", next: "Q4", effects: { risk: 2 } },
    ],
  },

  // --- Etik Soru (BONUS) ---

  Q4: {
    id: "Q4",
    stageLabel: "Aşama 1 – Etik",
    title: "Etik İkilem",
    text: "Bir ekip arkadaşı rapordaki küçük bir hatayı 'önemsiz' diyerek gizlemeyi öneriyor.",
    isQuestion: true,
    options: [
      { text: "Şeffaf olur ve düzeltirim.", next: "Q5", effects: { ethics: 6, ethicsBonus: 1 } }, // BONUS
      { text: "Dili yumuşatıp gene doğru veririm.", next: "Q5", effects: { ethics: 3, strategy: 2 } },
      { text: "Önemli değil diyerek kabul ederim.", next: "Q5", effects: { riskPenalty: 1, risk: 3 } }, // CEZA
    ],
  },

  Q5: {
    id: "Q5",
    stageLabel: "Aşama 1 – Yaklaşım",
    title: "Mühendislik Yaklaşımın",
    text: "Bir sorunu çözerken hangi yolu izlersin?",
    isQuestion: true,
    options: [
      { text: "Veri toplar, analiz ederim.", next: "Q6", effects: { strategy: 4 } },
      { text: "Deneme–yanılma ile ilerlerim.", next: "Q6", effects: { risk: 2, technical: 2 } },
      { text: "Ekip fikirlerini toplarım.", next: "Q6", effects: { communication: 3 } },
    ],
  },

  // --- Strateji Bonus (BONUS) ---

  Q6: {
    id: "Q6",
    stageLabel: "Aşama 1 – Planlama",
    title: "İş Yükü Dağılımı",
    text: "Günün planını yapıyorsun.",
    isQuestion: true,
    options: [
      { text: "%40 analiz, %30 tasarım, %30 kontrol", next: "Q7", effects: { stratBonus: 1, strategy: 4 } }, // BONUS
      { text: "%60 tasarım, %20 kontrol, %20 iletişim", next: "Q7", effects: { technical: 3 } },
      { text: "%50 iletişim, %25 kontrol, %25 tasarım", next: "Q7", effects: { communication: 3 } },
    ],
  },

  Q7: {
    id: "Q7",
    stageLabel: "Aşama 1 – Öz Değerlendirme",
    title: "Kendini Nasıl Tanımlarsın?",
    text: "Mühendislik tarzın hangisi?",
    isQuestion: true,
    options: [
      { text: "Hızlı çözüm odaklı.", next: "Q8", effects: { technical: 2, risk: 1 } },
      { text: "Analitik ve sistematik.", next: "Q8", effects: { strategy: 3 } },
      { text: "Ekip çalışmasına yatkın.", next: "Q8", effects: { communication: 3 } },
    ],
  },

  // -------------------------------------------------------
  // AŞAMA 2 – ORTA SEVİYE SORUNLAR (7 soru)
  // -------------------------------------------------------

  Q8: {
    id: "Q8",
    stageLabel: "Aşama 2 – Rol",
    title: "Seni Bir Rola Aday Gösteriyorlar",
    text: "Yeni rolün:",
    isQuestion: true,
    options: [
      { text: "Tasarım Mühendisi", next: "Q9", effects: { technical: 4 } },
      { text: "Planlama Mühendisi", next: "Q9", effects: { strategy: 4 } },
      { text: "Takım Sorumlusu", next: "Q9", effects: { leadership: 4 } },
    ],
  },

  Q9: {
    id: "Q9",
    stageLabel: "Aşama 2 – Sorun Analizi",
    title: "Performans Düşüşü",
    text: "Analiz sonuçları beklenenden kötü.",
    isQuestion: true,
    options: [
      { text: "Detaylı neden–sonuç analizi yaparım.", next: "Q10", effects: { strategy: 4, stratBonus: 1 } }, // BONUS
      { text: "Ekipten görüş alırım.", next: "Q10", effects: { leadership: 2, communication: 2 } },
      { text: "Tahminlerle ilerlerim.", next: "Q10", effects: { risk: 3 } },
    ],
  },

  // --- Liderlik Bonus Soru ---

  Q10: {
    id: "Q10",
    stageLabel: "Aşama 2 – Liderlik",
    title: "Ekip Motivasyon Sorunu",
    text: "Bir ekip üyesi motivasyonunun düştüğünü söylüyor.",
    isQuestion: true,
    options: [
      { text: "Birebir görüşüp kök neden bulurum.", next: "Q11", effects: { leadership: 5, leadBonus: 1 } }, // BONUS
      { text: "Görev dağılımını optimize ederim.", next: "Q11", effects: { strategy: 3 } },
      { text: "Düzelmesini beklerim.", next: "Q11", effects: { stress: 2 } },
    ],
  },

  // --- İletişim Bonus Soru ---

  Q11: {
    id: "Q11",
    stageLabel: "Aşama 2 – İletişim",
    title: "1 Dakikalık Brief",
    text: "Takım lideri senden kısaca günün özetini istiyor.",
    isQuestion: true,
    options: [
      { text: "Kısa ve net teknik özet.", next: "Q12", effects: { technical: 3 } },
      { text: "Stratejik çerçeve ile anlatırım.", next: "Q12", effects: { communication: 3, commBonus: 1 } }, // BONUS
      { text: "Sorunları yumuşatarak aktarırım.", next: "Q12", effects: { leadership: 2 } },
    ],
  },

  Q12: {
    id: "Q12",
    stageLabel: "Aşama 2 – Karar",
    title: "Hız mı Doğruluk mu?",
    text: "Kritik bir rapor var. Teslim süresi dar.",
    isQuestion: true,
    options: [
      { text: "Hızlı ama kontrollü teslim.", next: "Q13", effects: { strategy: 3 } },
      { text: "Kaliteyi önceliklendiririm.", next: "Q13", effects: { technical: 3, ethics: 2 } },
      { text: "Ekipten ek destek isterim.", next: "Q13", effects: { communication: 2 } },
    ],
  },

  Q13: {
    id: "Q13",
    stageLabel: "Aşama 2 – Takım",
    title: "Takım Baskı Altında",
    text: "Ekip stresli görünüyor.",
    isQuestion: true,
    options: [
      { text: "Görevleri sadeleştiririm.", next: "Q14", effects: { leadership: 3 } },
      { text: "Mini mola öneririm.", next: "Q14", effects: { communication: 3 } },
      { text: "Zor dönem, devam ederiz.", next: "Q14", effects: { stress: 2 } },
    ],
  },

  Q14: {
    id: "Q14",
    stageLabel: "Aşama 2 – Yönetsel Düşünme",
    title: "Yöntem Seçimi",
    text: "Hangi yaklaşımı tercih edersin?",
    isQuestion: true,
    options: [
      { text: "Sistematik analiz.", next: "Q15", effects: { strategy: 4 } },
      { text: "İnsan odaklı çözüm.", next: "Q15", effects: { leadership: 3 } },
      { text: "İletişimi önceliklendiririm.", next: "Q15", effects: { communication: 3 } },
    ],
  },

  // -------------------------------------------------------
  // AŞAMA 3 – İLERİ SEVİYE KRİZ (6 soru)
  // -------------------------------------------------------

  Q15: {
    id: "Q15",
    stageLabel: "Aşama 3 – Büyük Kriz",
    title: "Kritik Arıza",
    text: "Yeni prototip testinde ciddi bir arıza çıktı.",
    isQuestion: true,
    options: [
      { text: "Kök neden analizi yaparım.", next: "Q16", effects: { strategy: 4, stratBonus: 1 } }, // BONUS
      { text: "Ekibi koordine edip şeffaf rapor hazırlarım.", next: "Q16", effects: { leadership: 4, leadBonus: 1 } }, // ALTERNATİF BONUS
      { text: "Sorunu geçici çözümlerle kapatırım.", next: "Q16", effects: { riskPenalty: 1 } },
    ],
  },

  Q16: {
    id: "Q16",
    stageLabel: "Aşama 3 – Risk",
    title: "Risk Değerlendirmesi",
    text: "Arızanın tekrarlanmaması için gerekli önlemler?",
    isQuestion: true,
    options: [
      { text: "Düşük risk – yavaş ilerleme.", next: "Q17", effects: { strategy: 3, risk: -1 } },
      { text: "Orta risk – optimum çözüm.", next: "Q17", effects: { strategy: 3, leadership: 2 } },
      { text: "Yüksek risk – hızlı ilerleme.", next: "Q17", effects: { risk: 4 } },
    ],
  },

  Q17: {
    id: "Q17",
    stageLabel: "Aşama 3 – Profil",
    title: "Mühendislik Tarzın",
    text: "Seni en iyi tanımlayan hangisi?",
    isQuestion: true,
    options: [
      { text: "Analitik mühendis.", next: "Q18", effects: { strategy: 3 } },
      { text: "Teknik uzman.", next: "Q18", effects: { technical: 3 } },
      { text: "İnsan odaklı çözümcü.", next: "Q18", effects: { leadership: 3 } },
      { text: "İletişim odaklı mühendis.", next: "Q18", effects: { communication: 3 } },
    ],
  },

  Q18: {
    id: "Q18",
    stageLabel: "Aşama 3 – Gelişim",
    title: "Gelişim Alanı",
    text: "Hangi alanda kendini geliştirmek istersin?",
    isQuestion: true,
    options: [
      { text: "Stratejik düşünme", next: "Q19", effects: { stratBonus: 1 } },
      { text: "Liderlik", next: "Q19", effects: { leadBonus: 1 } },
      { text: "Teknik uzmanlık", next: "Q19", effects: { techBonus: 1 } },
      { text: "İletişim becerileri", next: "Q19", effects: { commBonus: 1 } },
    ],
  },

  Q19: {
    id: "Q19",
    stageLabel: "Aşama 3 – Sürdürülebilirlik",
    title: "Sürdürülebilir Yaklaşım",
    text: "Uzun vadede nasıl bir mühendis olmak istiyorsun?",
    isQuestion: true,
    options: [
      { text: "Detaycı ve sistematik mühendis.", next: "Q20", effects: { strategy: 2 } },
      { text: "Yenilikçi ve çözüm odaklı.", next: "Q20", effects: { technical: 2 } },
      { text: "İletişim ve takım lideri.", next: "Q20", effects: { leadership: 2 } },
    ],
  },

  Q20: {
    id: "Q20",
    stageLabel: "Final",
    title: "Simülasyon Tamamlandı",
    text: "Kararların başarıyla değerlendirildi.",
    isQuestion: false,
    options: [
      { text: "Sonuçları Göster", next: "END", effects: { techBonus: 1 } } // mini bonus
    ],
  },

  END: { id: "END" },
};

export default nodes;
