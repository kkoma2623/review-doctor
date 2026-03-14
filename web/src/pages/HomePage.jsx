import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="landing-container landing-header-inner">
          <div className="landing-logo">
            <div className="landing-logo-icon">📊</div>
            <span>Review Doctor</span>
          </div>

          <nav className="landing-nav">
            <a href="#features">Features</a>
            <a href="#report">Report</a>
            <Link to="/login">Login</Link>
            <Link to="/join" className="header-cta">
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="landing-container hero-grid">
            <div className="hero-left">
              <div className="hero-badge">NEW · AI Review Intelligence</div>

              <h1 className="hero-title">
                사장님의 고민,
                <br />
                AI가 해결해드립니다
              </h1>

              <p className="hero-desc">
                네이버, 배민, 쿠팡이츠, 구글 리뷰를 한곳에 모아
                AI가 감정 분석, 키워드 분석, 강점/약점 정리를 자동으로 제공합니다.
              </p>

              <div className="hero-actions">
                <Link to="/join" className="primary-btn">
                  무료로 시작하기
                </Link>
                <button className="secondary-btn">데모 보기</button>
              </div>
            </div>

            <div className="hero-right">
              <div className="dashboard-preview">
                <div className="preview-floating-badge">
                  <span className="badge-dot" />
                  불만 키워드 18% 감소
                  <small>지난 주보다 개선됨</small>
                </div>

                <div className="preview-window-bar">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="preview-main-card preview-summary-card">
                  <div className="preview-summary-title">이번 주 리뷰 분석</div>
                  <div className="preview-summary-count">128</div>
                  <div className="preview-summary-sub">수집된 리뷰 수</div>

                  <div className="preview-summary-stats">
                    <div>
                      <strong>72%</strong>
                      <span>긍정</span>
                    </div>
                    <div>
                      <strong>18%</strong>
                      <span>부정</span>
                    </div>
                    <div>
                      <strong>10%</strong>
                      <span>중립</span>
                    </div>
                  </div>
                </div>

                <div className="preview-bottom-row">
                  <div className="preview-mini-card info-card">
                    <div className="mini-card-title">긍정 키워드</div>
                    <div className="mini-card-tags">맛 · 친절 · 청결</div>
                  </div>

                  <div className="preview-mini-card info-card">
                    <div className="mini-card-title">개선 필요</div>
                    <div className="mini-card-tags">배달시간 · 가격</div>
                  </div>
                </div>

                <div className="preview-graph-card">
                  <div className="graph-title-row">
                    <span>주간 평점 변화</span>
                    <strong>4.8</strong>
                  </div>

                  <div className="mini-bars">
                    <div className="mini-bar h-60" />
                    <div className="mini-bar h-68" />
                    <div className="mini-bar h-62" />
                    <div className="mini-bar h-74" />
                    <div className="mini-bar h-82 active" />
                    <div className="mini-bar h-76 active" />
                    <div className="mini-bar h-70" />
                  </div>

                  <div className="mini-bar-labels">
                    <span>월</span>
                    <span>화</span>
                    <span>수</span>
                    <span>목</span>
                    <span>금</span>
                    <span>토</span>
                    <span>일</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="platform-strip">
          <div className="landing-container">
            <p className="platform-strip-title">활용 중인 리뷰 플랫폼</p>

            <div className="platform-logos">
              <div>NAVER</div>
              <div>BAEMIN</div>
              <div>COUPANG</div>
              <div>GOOGLE MAPS</div>
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="landing-container">
            <div className="section-title-wrap">
              <h2>강력한 AI 리뷰 분석 서비스</h2>
              <p>국내 주요 리뷰 플랫폼의 고객 반응을 한눈에 모아보고 분석하세요.</p>
            </div>

            <div className="feature-card-grid">
              <div className="feature-card">
                <div className="feature-icon">☁️</div>
                <h3>자동 리뷰 수집</h3>
                <p>
                  네이버, 배민, 쿠팡이츠, 구글 지도의 리뷰를 자동으로 수집하고,
                  여러 플랫폼 데이터를 한곳에서 통합 관리합니다.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📍</div>
                <h3>AI 감정 분석</h3>
                <p>
                  단순한 평점이 아니라 리뷰의 실제 문맥을 파악하여,
                  고객 만족과 불만의 핵심 이유를 보여줍니다.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h3>키워드 트렌드</h3>
                <p>
                  고객이 자주 언급한 키워드와 최근 변화 데이터를 시각화해
                  운영 개선에 바로 활용할 수 있도록 돕습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="report" className="report-section">
          <div className="landing-container report-grid">
            <div className="report-left">
              <h2>리뷰 분석 리포트 예시</h2>
              <p>
                매주 제공되는 분석 리포트로 내 매장의 강점과 약점이 어떻게 변하는지
                확인해보세요. AI가 추천한 운영 개선 방향까지 함께 제공합니다.
              </p>

              <ul className="report-list">
                <li>실시간 키워드 급증 추적</li>
                <li>경쟁점 비교 분석</li>
                <li>고객 만족도 추이 확인</li>
              </ul>
            </div>

            <div className="report-right">
              <div className="report-card keyword-card">
                <div className="report-card-header">
                  <span>긍정 키워드 TOP 5</span>
                  <strong>+12%</strong>
                </div>

                <div className="keyword-top-line">
                  맛, 서비스, 청결, 가성비, 양
                </div>

                <div className="progress-row">
                  <label>맛</label>
                  <div className="progress-bar">
                    <div className="progress-fill fill-85" />
                  </div>
                </div>

                <div className="progress-row">
                  <label>서비스</label>
                  <div className="progress-bar">
                    <div className="progress-fill fill-72" />
                  </div>
                </div>
              </div>

              <div className="report-card chart-card">
                <div className="report-card-header">
                  <span>주간 평점 변화</span>
                  <strong className="negative">-0.1</strong>
                </div>

                <div className="chart-score">4.8</div>

                <div className="bar-chart">
                  <div className="bar h-60" />
                  <div className="bar h-66" />
                  <div className="bar h-58" />
                  <div className="bar h-72" />
                  <div className="bar h-84 active" />
                  <div className="bar h-74 active" />
                  <div className="bar h-68" />
                </div>

                <div className="chart-labels">
                  <span>MON</span>
                  <span>TUE</span>
                  <span>WED</span>
                  <span>THU</span>
                  <span>FRI</span>
                  <span>SAT</span>
                  <span>SUN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="landing-container">
            <div className="cta-box">
              <h2>지금 바로 2주간 무료로 체험해보세요</h2>
              <p>
                복잡한 설정 없이 가게 정보만 입력하면 AI가 즉시 분석을 시작합니다.
                사장님의 소중한 시간을 절약해 드립니다.
              </p>

              <div className="cta-actions">
                <Link to="/join" className="white-btn">
                  2주 무료 체험 시작하기
                </Link>
                <button className="ghost-btn">가격 플랜 확인</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="landing-container footer-inner">
          <div className="footer-brand">
            <div className="landing-logo">
              <div className="landing-logo-icon">📊</div>
              <span>Review Doctor</span>
            </div>
            <p>
              AI 기반 리뷰 분석으로
              <br />
              자영업자 운영을 돕습니다.
            </p>
          </div>

          <div className="footer-columns">
            <div>
              <h4>서비스</h4>
              <a href="#features">기능 소개</a>
              <a href="#report">리포트 예시</a>
              <a href="/">API 연동</a>
            </div>

            <div>
              <h4>고객 지원</h4>
              <a href="/">자주 묻는 질문</a>
              <a href="/">문의하기</a>
              <a href="/">공지사항</a>
            </div>

            <div>
              <h4>법적 고지</h4>
              <a href="/">이용약관</a>
              <a href="/">개인정보처리방침</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;