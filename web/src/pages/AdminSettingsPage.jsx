import { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import {
  getAdminEmails,
  addAdminEmail,
  removeAdminEmail,
} from "../lib/adminConfig";
import "./AdminSettingsPage.css";

function AdminSettingsPage({ currentUser }) {
  const [adminEmails, setAdminEmails] = useState(getAdminEmails());
  const [newEmail, setNewEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleAddAdmin = () => {
    if (!newEmail.trim()) {
      setMessage("추가할 관리자 이메일을 입력하세요.");
      return;
    }

    const email = newEmail.trim().toLowerCase();

    if (!email.includes("@")) {
      setMessage("올바른 이메일 형식을 입력하세요.");
      return;
    }

    const updated = addAdminEmail(email);
    setAdminEmails(updated);
    setNewEmail("");
    setMessage("관리자 이메일이 추가되었습니다.");
  };

  const handleRemoveAdmin = (email) => {
    if (email === currentUser?.email) {
      setMessage("현재 로그인한 관리자 계정은 여기서 삭제할 수 없습니다.");
      return;
    }

    const updated = removeAdminEmail(email);
    setAdminEmails(updated);
    setMessage("관리자 이메일이 삭제되었습니다.");
  };

  return (
    <AdminLayout>
      <div className="admin-settings-page">
        <div className="admin-settings-header">
          <h2>관리자 이메일 관리</h2>
          <p>현재 관리자 목록을 확인하고 추가/삭제할 수 있습니다.</p>
        </div>

        <div className="admin-settings-card">
          <h3>현재 관리자 목록</h3>

          {adminEmails.length === 0 ? (
            <p>등록된 관리자 이메일이 없습니다.</p>
          ) : (
            adminEmails.map((email) => (
              <div key={email} className="admin-email-row">
                <span>{email}</span>

                <button
                  className="delete-admin-btn"
                  onClick={() => handleRemoveAdmin(email)}
                  disabled={email === currentUser?.email}
                >
                  삭제
                </button>
              </div>
            ))
          )}
        </div>

        <div className="admin-settings-card">
          <h3>관리자 추가</h3>

          <div className="admin-add-row">
            <input
              type="email"
              placeholder="관리자 이메일 입력"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />

            <button className="add-admin-btn" onClick={handleAddAdmin}>
              추가
            </button>
          </div>

          {message && <div className="admin-settings-message">{message}</div>}
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminSettingsPage;