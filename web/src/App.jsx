import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { supabase } from "./lib/supabase";
import { isAdminEmail } from "./lib/adminConfig";

import ResetPasswordPage from "./pages/ResetPasswordPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import JoinSuccessPage from "./pages/JoinSuccessPage";
import DashboardPage from "./pages/DashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminUsersPage from "./pages/AdminUsersPage";
import AdminSettingsPage from "./pages/AdminSettingsPage";

function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [adminVersion, setAdminVersion] = useState(0);

  useEffect(() => {
    const initAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user ?? null);
      setAuthLoading(false);
    };

    initAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });

    const handleAdminUpdate = () => {
      setAdminVersion((prev) => prev + 1);
    };

    window.addEventListener("admin-emails-updated", handleAdminUpdate);

    return () => {
      subscription.unsubscribe();
      window.removeEventListener("admin-emails-updated", handleAdminUpdate);
    };
  }, []);

  if (authLoading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        로딩 중...
      </div>
    );
  }
  const ADMIN_EMAILS = [
  "reviewdrtest01@gmail.com",
  "sungpyo9053@kookmin.ac.kr",
];

  const isAdmin = !!user && isAdminEmail(user.email);

  return (
    <Routes>
      <Route path="/" element={<HomePage user={user} isAdmin={isAdmin} />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

      {!user ? (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<SignupPage />} />
          <Route path="/join/success" element={<JoinSuccessPage />} />
        </>
      ) : (
        <>
          <Route path="/dashboard" element={<DashboardPage user={user} />} />

          <Route
            path="/admin"
            element={
              isAdmin ? (
                <AdminDashboardPage key={adminVersion} />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            }
          />

          <Route
            path="/admin/users"
            element={
              isAdmin ? (
                <AdminUsersPage key={adminVersion} />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            }
          />

          <Route
            path="/admin/settings"
            element={
              isAdmin ? (
                <AdminSettingsPage currentUser={user} />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            }
          />
        </>
      )}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;