import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Game from "./routes/Game.jsx";
import "./styles.css";

export default function App() {
  return (
    <Routes>
      {/* Yeni giriş ekranı */}
      <Route path="/" element={<Home />} />

      {/* Oyun yolları */}
      <Route path="/engineering" element={<Game track="engineering" />} />
      <Route path="/management" element={<Game track="management" />} />

      {/* 404 */}
      <Route
        path="*"
        element={
          <div style={{ padding: 40, color: "white" }}>
            Sayfa Bulunamadı.
          </div>
        }
      />
    </Routes>
  );
}
