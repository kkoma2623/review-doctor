import { Link } from "react-router-dom";
import Header from "../components/Header";
import FeatureSlider from "../components/FeatureSlider";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="rd-home">
      <Header />

      <section className="rd-hero">
        <div className="rd-hero-overlay" />

        <div className="rd-hero-inner">
          <div className="rd-hero-left">
            <p className="rd-hero-kicker">소상공인을 위한 AI 리뷰 분석 서비스</p>

            <h1 className="rd-hero-title">
              ReviewDr로
              <br />
              흩어진 리뷰를
              <br />
              운영 인사이트로 바꾸세요
            </h1>

            <p className="rd-hero-desc">
              네이버 지도 리뷰, 수동 입력 리뷰, 고객 피드백을 한곳에 모아
              강점·약점·개선 포인트를 빠르게 확인하세요.
            </p>

            <div className="rd-hero-buttons">
              <Link to="/join" className="rd-primary-btn">
                무료로 시작하기
              </Link>
              <Link to="/login" className="rd-secondary-btn">
                로그인
              </Link>
            </div>

            <div className="rd-hero-notes">
              <p>• 리뷰를 한 번에 모아서 매장 운영 포인트를 빠르게 파악</p>
              <p>• AI가 반복 키워드를 분석해 강점과 불만을 자동 정리</p>
            </div>
          </div>

          <div className="rd-hero-right">
            <FeatureSlider />
          </div>
        </div>
      </section>

      <section className="rd-feature-grid-section">
        <div className="rd-feature-grid-inner">
          <div className="rd-feature-card">
            <h3>가게 등록</h3>
            <p>운영 중인 매장을 등록하고 리뷰 분석을 시작하세요.</p>
          </div>

          <div className="rd-feature-card">
            <h3>리뷰 분석</h3>
            <p>리뷰 분위기와 자주 언급되는 키워드를 빠르게 확인하세요.</p>
          </div>

          <div className="rd-feature-card">
            <h3>리포트</h3>
            <p>주간·월간 기준으로 정리된 인사이트 리포트를 받아보세요.</p>
          </div>

          <div className="rd-feature-card">
            <h3>마이페이지</h3>
            <p>계정 정보와 가입 유형, 등록 가게 정보를 관리할 수 있습니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;