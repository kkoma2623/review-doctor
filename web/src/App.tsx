import type { ReactElement } from "react";
import { observer } from "mobx-react-lite";
import { Navigate, Route, Routes } from "react-router-dom";
import { Div, P } from "./components/atoms/html";
import { useStore } from "./stores/useStore";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminPlaceholderPage from "./pages/AdminPlaceholderPage";
import AdminSettingsPage from "./pages/AdminSettingsPage";
import AdminUsersPage from "./pages/AdminUsersPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import JoinSuccessPage from "./pages/JoinSuccessPage";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import SignupPage from "./pages/SignupPage";

const App = observer(() => {
  const { authStore } = useStore();

  if (authStore.authLoading) {
    return (
      <Div className="app-loading">
        <P className="app-loading__label">Review Doctor를 불러오는 중입니다.</P>
      </Div>
    );
  }

  const renderProtectedRoute = (element: ReactElement) => {
    if (!authStore.isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return element;
  };

  const renderAdminRoute = (element: ReactElement) => {
    if (!authStore.isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    if (!authStore.isAdmin) {
      return <Navigate to="/dashboard" replace />;
    }

    return element;
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

      <Route
        path="/login"
        element={authStore.isAuthenticated ? <Navigate to={authStore.primaryConsolePath} replace /> : <LoginPage />}
      />
      <Route
        path="/join"
        element={authStore.isAuthenticated ? <Navigate to={authStore.primaryConsolePath} replace /> : <SignupPage />}
      />
      <Route
        path="/join/success"
        element={authStore.isAuthenticated ? <Navigate to={authStore.primaryConsolePath} replace /> : <JoinSuccessPage />}
      />

      <Route path="/dashboard" element={renderProtectedRoute(<DashboardPage />)} />
      <Route path="/admin" element={renderAdminRoute(<AdminDashboardPage />)} />
      <Route path="/admin/users" element={renderAdminRoute(<AdminUsersPage />)} />
      <Route path="/admin/settings" element={renderAdminRoute(<AdminSettingsPage />)} />
      <Route
        path="/admin/stores"
        element={renderAdminRoute(
          <AdminPlaceholderPage
            title="가게 관리"
            description="등록된 매장 목록과 플랫폼 연동 상태를 한 화면에서 관리할 수 있도록 준비 중입니다."
          />,
        )}
      />
      <Route
        path="/admin/analysis"
        element={renderAdminRoute(
          <AdminPlaceholderPage
            title="분석 이력"
            description="분석 요청 내역, 실패 원인, 재실행 흐름을 분리된 히스토리 뷰로 확장할 예정입니다."
          />,
        )}
      />
      <Route
        path="/admin/reports"
        element={renderAdminRoute(
          <AdminPlaceholderPage
            title="리포트"
            description="주간 인사이트, PDF 내보내기, 공유 링크 기능을 한 번에 연결하는 리포트 허브를 준비 중입니다."
          />,
        )}
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
});

export default App;
