import { Link, useLocation } from "react-router-dom";
import "./AdminLayout.css";

function AdminLayout({ children }) {
  const location = useLocation();

  const menus = [
    { label: "대시보드", path: "/admin" },
    { label: "회원 관리", path: "/admin/users" },
    { label: "가게 관리", path: "/admin/stores" },
    { label: "분석 이력", path: "/admin/analysis" },
    { label: "리포트", path: "/admin/reports" },
    { label: "설정", path: "/admin/settings" },
  ];

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <div className="admin-logo-icon">📊</div>
          <div>
            <strong>Review Doctor</strong>
            <p>Admin Console</p>
          </div>
        </div>

        <nav className="admin-nav">
          {menus.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <Link
                key={menu.path}
                to={menu.path}
                className={isActive ? "admin-nav-link active" : "admin-nav-link"}
              >
                {menu.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="admin-main-wrap">
        <header className="admin-topbar">
          <div>
            <h1>관리자 페이지</h1>
            <p>리뷰닥터 서비스 현황을 확인하세요</p>
          </div>

          <div className="admin-topbar-right">
            <Link to="/" className="admin-home-link">
              서비스 홈
            </Link>
          </div>
        </header>

        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;