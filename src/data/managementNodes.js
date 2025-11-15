// MYT Challenge 2025 – Management Track (20 soru, Kurumsal Simülasyon Modeli)

const managementNodes = {
  // ---------------------------------------------------
  // GİRİŞ
  // ---------------------------------------------------
  intro: {
    id: "intro",
    stageLabel: "Aşama 1 – Başlangıç",
    title: "Yönetim Yoluna Hoş Geldin",
    text:
      "Yeni mezun bir yönetici adayı olarak kurumsal hayata ilk adımını atıyorsun. Verdiğin kararlar liderlik, strateji, iletişim, etik ve stres yönetimi profilini ortaya çıkaracak.",
    isQuestion: true,
    options: [{ text: "Başlayalım!", next: "Q1" }],
  },

  // ---------------------------------------------------
  // AŞAMA 1 – ADAPTASYON & İLK İZLENİM (Q1–Q5)
  // ---------------------------------------------------

  Q1: {
    id: "Q1",
    stageLabel: "Aşama 1 – İlk İzlenim",
    title: "Ofiste İlk Gün",
    text:
      "Yoğun toplantılar, dolu bir mail kutusu ve hızlı bir tempo ile güne başlıyorsun. Ofiste gözlemlediğin ilk şey ne olur?",
    isQuestion: true,
    options: [
      {
        text: "İş yükü yüksek ama ekip disiplinli; süreçler daha iyi planlanmalı.",
        next: "Q2",
        effects: { strategy: 3, leadership: 1 },
      },
      {
        text: "Ekip iletişimi güçlü fakat önceliklendirme eksik.",
        next: "Q2",
        effects: { communication: 3, strategy: 1 },
      },
      {
        text: "Ortam stresli görünüyor; sürdürülebilirlik için denge lazım.",
        next: "Q2",
        effects: { stress: 1, strategy: 3 },
      },
    ],
  },

  Q2: {
    id: "Q2",
    stageLabel: "Aşama 1 – İlk Görev",
    title: "İlk Görev Ataması",
    text:
      "Yöneticin seni üç kritik görevden birine atamak istiyor. Hangisini tercih edersin?",
    isQuestion: true,
    options: [
      {
        text: "Takım içi koordinasyon ve günlük işlerin takibi.",
        next: "Q3",
        effects: { leadership: 3, communication: 1 },
      },
      {
        text: "Önümüzdeki çeyrek için mini strateji analiz çalışması.",
        next: "Q3",
        effects: { strategy: 4, technical: 1 },
      },
      {
        text: "Müşteri tarafı beklenti ve geri bildirimlerinin analizi.",
        next: "Q3",
        effects: { communication: 3, ethics: 2 },
      },
    ],
  },

  Q3: {
    id: "Q3",
    stageLabel: "Aşama 1 – Çalışma Tarzı",
    title: "Çalışma Yaklaşımın",
    text:
      "Karmaşık bir problemi çözmen gerektiğinde hangi yaklaşımı daha çok kullanırsın?",
    isQuestion: true,
    options: [
      {
        text: "Verileri toplar, analiz eder ve alternatif senaryolar oluştururum.",
        next: "Q4",
        effects: { strategy: 3, technical: 1 },
      },
      {
        text: "Önce ekiple konuşur, fikirleri toplar sonra karar veririm.",
        next: "Q4",
        effects: { leadership: 2, communication: 2 },
      },
      {
        text: "Paydaşlarla hızlıca iletişime geçer, beklentileri netleştiririm.",
        next: "Q4",
        effects: { communication: 3,stress:1 },
      },
    ],
  },

  Q4: {
    id: "Q4",
    stageLabel: "Aşama 1 – Bilgi Yönetimi",
    title: "Eksik Bilgi Durumu",
    text:
      "Performans raporu hazırlarken bazı verilerin eksik olduğunu fark ettin. Teslim tarihi yakın.",
    isQuestion: true,
    options: [
      {
        text: "Mevcut verilerle eğilim analizi yapar, eksikleri açıkça belirtirim.",
        next: "Q5",
        effects: { strategy: 3, ethics: 2, technical: 1 },
        bonus: { stratBonus: 1 },
      },
      {
        text: "Kısa ek süre ister, veri kalitesini artırmaya odaklanırım.",
        next: "Q5",
        effects: { strategy: 2, communication: 1, risk: -1 },
        bonus: {commBonus:1}
      },
      {
        text: "Tahminleri kullanıp raporu zamanında yetiştiririm.",
        next: "Q5",
        effects: { risk: 3 },
      },
    ],
  },

  Q5: {
    id: "Q5",
    stageLabel: "Aşama 1 – Etik Hassasiyet",
    title: "Küçük Hata, Büyük Etki",
    text:
      "Hazırladığın tabloda hesaplamayı az da olsa etkileyen küçük bir hata fark ettin.",
    isQuestion: true,
    options: [
      {
        text: "Hemen düzeltir, gerekirse raporu yeniden gönderirim.",
        next: "Q6",
        effects: { ethics: 4, technical: 1 },
        bonus: { ethicsBonus: 1 },
      },
      {
        text: "Hatanın etkisini analiz eder, not düşerek düzeltirim.",
        next: "Q6",
        effects: { ethics: 3, strategy: 1 },
      },
      {
        text: "Gerçekten etkisinin düşük olduğuna karar verirse.,zamnımı harcamaz daha önemli noktalara odaklanırım",
        next: "Q6",
        effects: { risk: 2,stratBonus:2},
      },
    ],
  },

  // ---------------------------------------------------
  // AŞAMA 2 – TAKIM, İLETİŞİM & ROL (Q6–Q10)
  // ---------------------------------------------------

  Q6: {
    id: "Q6",
    stageLabel: "Aşama 2 – Takım Dinamiği",
    title: "Takım Toplantısı",
    text:
      "Takım toplantısında bazı kişiler çok konuşurken, bazıları neredeyse hiç söz almıyor.",
    isQuestion: true,
    options: [
      {
        text: "Toplantıda söz dağılımını dengelemek için herkese alan açarım.",
        next: "Q7",
        effects: { leadership: 3, communication: 2 },
        bonus: { leadBonus: 1 },
      },
      {
        text: "Toplantıdan sonra söz almayanlarla bire bir konuşurum.",
        next: "Q7",
        effects: { leadership: 2, communication: 1 },
      },
      {
        text: "Süreyi aşmamak için müdahale etmem.",
        next: "Q7",
        effects: { stress: 1 },
      },
    ],
  },

  Q7: {
    id: "Q7",
    stageLabel: "Aşama 2 – İş Yükü",
    title: "Yoğun Gün Planı",
    text:
      "Aynı güne hem rapor teslimi, hem müşteri görüşmesi, hem de iç toplantı planlanmış.",
    isQuestion: true,
    options: [
      {
        text: "Sabah odak işi (rapor), öğleden sonra görüşmeler ve toplantılar.",
        next: "Q8",
        effects: { strategy: 3, stress: -1 },
      },
      {
        text: "Önce müşteri görüşmesini ele alır, iç işlere sonra dönerim.",
        next: "Q8",
        effects: { communication: 2, strategy: 1 },
      },
      {
        text: "Görevlerin bir kısmını uygun ekiplere delege ederim.",
        next: "Q8",
        effects: { leadership: 3 },
      },
    ],
  },

  Q8: {
    id: "Q8",
    stageLabel: "Aşama 2 – Rol Beklentisi",
    title: "Rol Tanımlama",
    text:
      "Ekip seni resmi olarak bir role oturtmak istiyor. Hangi rol sana daha yakın?",
    isQuestion: true,
    options: [
      {
        text: "Operasyonel Takım Lideri (günlük iş akışını yöneten).",
        next: "Q9",
        effects: { leadership: 4, communication: 1 },
      },
      {
        text: "Strateji Analisti (veri, pazar, senaryo odaklı).",
        next: "Q9",
        effects: { strategy: 4, technical: 1 },
      },
      {
        text: "İletişim Koordinatörü (paydaş iletişimi ve imaj).",
        next: "Q9",
        effects: { communication: 4, ethics: 1 },
      },
    ],
  },

  Q9: {
    id: "Q9",
    stageLabel: "Aşama 2 – İkna & İletişim",
    title: "Çatışan Beklentiler",
    text:
      "Üst yönetim hızlı teslim isterken ekip daha fazla süreye ihtiyaç duyuyor.",
    isQuestion: true,
    options: [
      {
        text: "Her iki tarafın beklentisini analiz eder, gerçekçi bir ortak plan sunarım.",
        next: "Q10",
        effects: { communication: 2, strategy: 3, leadership: 1 },
      },
      {
        text: "Ekibin kapasitesini savunur, daha gerçekçi takvim talep ederim.",
        next: "Q10",
        effects: { leadership: 3, ethics: 1 },
      },
      {
        text: "Üst yönetimin isteğini önceliklendiririm, ekibe fazla mesai yaptırırım.",
        next: "Q10",
        effects: { risk: 2, stress: 2 },
      },
    ],
  },

  Q10: {
    id: "Q10",
    stageLabel: "Aşama 2 – Günün Özeti",
    title: "1 Dakikalık Özet",
    text:
      "Günün sonunda yöneticin senden 1 dakikada günü özetlemeni istiyor.",
    isQuestion: true,
    options: [
      {
        text: "Veri odaklı, net ve sayısal bir özet veririm.",
        next: "Q11",
        effects: { technical: 2, strategy: 2 },
        bonus: { techBonus: 1 },
      },
      {
        text: "Hikayeleştirilmiş, ekip odaklı bir öykü ile anlatırım.",
        next: "Q11",
        effects: { communication: 3 },
      },
      {
        text: "Riskler ve fırsatlar dengesine odaklanan bir çerçeve sunarım.",
        next: "Q11",
        effects: { strategy: 2, leadership: 1 },
      },
    ],
  },

  // ---------------------------------------------------
  // AŞAMA 3 – STRATEJİ, RAKAMLAR & RİSK (Q11–Q15)
  // ---------------------------------------------------

  Q11: {
    id: "Q11",
    stageLabel: "Aşama 3 – Performans Göstergeleri",
    title: "Düşen KPI’lar",
    text:
      "Bazı performans göstergeleri hedefin biraz altında kalmış.",
    isQuestion: true,
    options: [
      {
        text: "Veriyi detaylı analiz edip kök neden analizi yaparım.",
        next: "Q12",
        effects: { strategy: 3, technical: 2 },
        bonus: { stratBonus: 1 },
      },
      {
        text: "Takımla birlikte retrospektif toplantı düzenlerim.",
        next: "Q12",
        effects: { leadership: 2, communication: 2 },
      },
      {
        text: "Zamanla düzelebileceğini düşünerek süreci çok değiştirmem.",
        next: "Q12",
        effects: { risk: 2 },
      },
    ],
  },

  Q12: {
    id: "Q12",
    stageLabel: "Aşama 3 – Risk Yaklaşımı",
    title: "Yeni Fırsat",
    text:
      "Yeni ancak belirsiz bir pazara girme fırsatı gündeme geliyor.",
    isQuestion: true,
    options: [
      {
        text: "Senaryo analizi ve risk–getiri değerlendirmesi yaparım.",
        next: "Q13",
        effects: { strategy: 3, technical: 1 },
      },
      {
        text: "Önce küçük pilot proje ile sınırlı risk alırım.",
        next: "Q13",
        effects: { strategy: 2, risk: -1 },
      },
      {
        text: "Kısa vadeli kazanç için agresif giriş yaparım.",
        next: "Q13",
        effects: { risk: 3 },
      },
    ],
  },

  Q13: {
    id: "Q13",
    stageLabel: "Aşama 3 – Zaman & Öncelik",
    title: "Çakışan Öncelikler",
    text:
      "Üç proje yöneticisi aynı anda senden destek istiyor.",
    isQuestion: true,
    options: [
      {
        text: "Stratejik etkiye göre önceliklendirme yaparım.",
        next: "Q14",
        effects: { strategy: 3, leadership: 1 },
      },
      {
        text: "Önce en kritik müşteriyi etkileyen projeye destek veririm.",
        next: "Q14",
        effects: { communication: 2, ethics: 1 },
      },
      {
        text: "İlk isteyen kimse önce ona yardım ederim.",
        next: "Q14",
        effects: { stress: 1 },
      },
    ],
  },

  Q14: {
    id: "Q14",
    stageLabel: "Aşama 3 – Stres Seviyesi",
    title: "Yoğun Dönem",
    text:
      "Son haftalar oldukça yoğun geçti. Stres seviyeni nasıl yorumlarsın?",
    isQuestion: true,
    options: [
      {
        text: "Yönetilebilir, dinlenmeye de alan açıyorum.",
        next: "Q15",
        effects: { stress: -2 },
      },
      {
        text: "Zorlayıcı ama idare ediyorum.",
        next: "Q15",
        effects: { stress: 1 },
      },
      {
        text: "Oldukça yıpratıcı, tükenmiş hissediyorum.",
        next: "Q15",
        effects: { stress: 3 },
      },
    ],
  },

  Q15: {
    id: "Q15",
    stageLabel: "Aşama 3 – Kişisel Odak",
    title: "Güçlü Yanın",
    text:
      "Kendini şu an en çok hangi alanda güçlü hissediyorsun?",
    isQuestion: true,
    options: [
      {
        text: "Veri ve strateji tarafında.",
        next: "Q16",
        effects: { strategy: 2, technical: 1 },
      },
      {
        text: "İnsan yönetimi ve takım motivasyonunda.",
        next: "Q16",
        effects: { leadership: 2, communication: 1 },
      },
      {
        text: "İletişim ve paydaş yönetiminde.",
        next: "Q16",
        effects: { communication: 2 },
      },
    ],
  },

  // ---------------------------------------------------
  // AŞAMA 4 – KRİZ, İTİBAR & FİNAL KARARLARI (Q16–Q20)
  // ---------------------------------------------------

  Q16: {
    id: "Q16",
    stageLabel: "Aşama 4 – Kriz Yönetimi",
    title: "Hata ve İtibar",
    text:
      "Teslim edilen bir işte hata fark ediliyor ve müşteri tepki veriyor.",
    isQuestion: true,
    options: [
      {
        text: "Sorumluluğu alır, çözüm planı ile birlikte şeffaf iletişim kurarım.",
        next: "Q17",
        effects: { leadership: 3, ethics: 2, communication: 1 },
      },
      {
        text: "Önce ekipten detaylı bilgi alır, sonra müşteriye açıklama yaparım.",
        next: "Q17",
        effects: { leadership: 2, communication: 2 },
      },
      {
        text: "Hatayı minimize ederek anlatır, çok detay paylaşmam.",
        next: "Q17",
        effects: { risk: 3 },
      },
    ],
  },

  Q17: {
    id: "Q17",
    stageLabel: "Aşama 4 – Geri Bildirim",
    title: "Takım Geri Bildirimi",
    text:
      "Takım, çalışma tarzın hakkında geri bildirim paylaşıyor.",
    isQuestion: true,
    options: [
      {
        text: "Geri bildirimi aktif dinler, aksiyon planı çıkarırım.",
        next: "Q18",
        effects: { leadership: 2, communication: 2 },
      },
      {
        text: "Geri bildirimi süzer, öncelikli olanları ele alırım.",
        next: "Q18",
        effects: { strategy: 2 },
      },
      {
        text: "Eleştirilere mesafeli yaklaşırım.",
        next: "Q18",
        effects: { risk: 1 },
      },
    ],
  },

  Q18: {
    id: "Q18",
    stageLabel: "Aşama 4 – Gelişim Alanı",
    title: "Gelişim Tercihin",
    text:
      "Önümüzdeki dönemde en çok hangi alanda kendini geliştirmek istersin?",
    isQuestion: true,
    options: [
      {
        text: "Stratejik düşünme ve veri okuryazarlığı.",
        next: "Q19",
        effects: { strategy: 2, technical: 1 },
      },
      {
        text: "Liderlik ve delege etme becerisi.",
        next: "Q19",
        effects: { leadership: 3 },
      },
      {
        text: "İletişim ve sunum becerileri.",
        next: "Q19",
        effects: { communication: 2 },
      },
      {
        text: "Stres ve zaman yönetimi.",
        next: "Q19",
        effects: { stress: -2 },
      },
    ],
  },

  Q19: {
    id: "Q19",
    stageLabel: "Aşama 4 – Önceliklendirme",
    title: "Bütçe Kısıtı",
    text:
      "Bölüm bütçesinde kesinti yapman gerekiyor. Nereden başlarsın?",
    isQuestion: true,
    options: [
      {
        text: "Veriye dayalı analiz ile düşük getirili kalemleri budarım.",
        next: "Q20",
        effects: { technical: 2, strategy: 2 },
        bonus: { techBonus: 1 },
      },
      {
        text: "Kısa vadede etkisi az hissedilecek alanlarda kısıntı yaparım.",
        next: "Q20",
        effects: { strategy: 3 },
      },
      {
        text: "En görünmeyen giderleri hızlıca azaltırım, derin analiz zaman kaybettirebilir.",
        next: "Q20",
        effects: { risk: 3 },
      },
    ],
  },

  Q20: {
    id: "Q20",
    stageLabel: "Final – Son Karar",
    title: "Uzun Vadeli Odak",
    text:
      "Uzun vadede seni başarılı kılacak temel yaklaşımının hangisi olacağını düşünüyorsun?",
    isQuestion: true,
    options: [
      {
        text: "Veriye dayalı, stratejik ve analitik kararlar.",
        next: "END",
        effects: { strategy: 2, technical: 1 },
      },
      {
        text: "İnsan odaklı, kapsayıcı ve destekleyici liderlik.",
        next: "END",
        effects: { leadership: 3, communication: 1 },
      },
      {
        text: "Güçlü iletişim, şeffaflık ve etik duruş.",
        next: "END",
        effects: { communication: 2, ethics: 2 },
      },
    ],
  },
};

export default managementNodes;
