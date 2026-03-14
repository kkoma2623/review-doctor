import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="rd-header">
      <div className="rd-header-inner">
        <Link to="/" className="rd-header-logo">
          ReviewDr
        </Link>

        <div className="rd-header-right">
          <button
            className="rd-menu-button"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            기능
          </button>

          <Link to="/login" className="rd-login-link">
            로그인
          </Link>

          <Link to="/join" className="rd-start-link">
            시작하기
          </Link>
        </div>

        {menuOpen && (
          <div className="rd-menu-panel">
            <Link to="/dashboard" className="rd-menu-item">
              대시보드
            </Link>
            <Link to="/stores/new" className="rd-menu-item">
              가게 등록
            </Link>
            <Link to="/analysis" className="rd-menu-item">
              리뷰 분석
            </Link>
            <Link to="/reports" className="rd-menu-item">
              리포트
            </Link>
            <Link to="/mypage" className="rd-menu-item">
              마이페이지
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;