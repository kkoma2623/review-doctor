import { useState } from "react";
import "./FeatureSlider.css";

const slides = [
  {
    title: "리뷰 통합 수집",
    desc: "네이버 지도 리뷰와 사장님이 직접 입력한 리뷰를 한곳에 모아 관리합니다.",
  },
  {
    title: "AI 강점/약점 분석",
    desc: "고객이 자주 언급한 칭찬과 불만을 자동으로 정리해 핵심만 보여줍니다.",
  },
  {
    title: "실행 가능한 개선 제안",
    desc: "배달 속도, 가격, 응대 품질처럼 바로 액션할 수 있는 개선점을 제안합니다.",
  },
  {
    title: "변화 추이 대시보드",
    desc: "주간·월간 기준으로 리뷰 분위기와 핵심 키워드가 어떻게 바뀌는지 확인합니다.",
  },
  {
    title: "사업주 맞춤 리포트",
    desc: "매장 운영에 바로 활용할 수 있는 요약 리포트와 인사이트를 제공합니다.",
  },
];

function FeatureSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="rd-slider-card">
      <div className="rd-slider-top">
        <span className="rd-slider-badge">핵심 기능</span>
        <div className="rd-slider-nav">
          <button onClick={prevSlide} className="rd-slider-arrow">
            ‹
          </button>
          <button onClick={nextSlide} className="rd-slider-arrow">
            ›
          </button>
        </div>
      </div>

      <div className="rd-slider-content">
        <h3>{slides[index].title}</h3>
        <p>{slides[index].desc}</p>
      </div>

      <div className="rd-slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={i === index ? "rd-slider-dot active" : "rd-slider-dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureSlider;