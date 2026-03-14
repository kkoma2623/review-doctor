import AdminLayout from "../components/AdminLayout";
import "./AdminUsersPage.css";

function AdminUsersPage() {
  const users = [
    { name: "홍성표", email: "sungpyo@example.com", role: "admin", phone: "01012345678", joined: "2026-03-14" },
    { name: "김민수", email: "minsuk@example.com", role: "user", phone: "01023456789", joined: "2026-03-13" },
    { name: "이하늘", email: "haneul@example.com", role: "owner", phone: "01034567890", joined: "2026-03-13" },
    { name: "박서연", email: "seoyeon@example.com", role: "owner", phone: "01098765432", joined: "2026-03-12" },
  ];

  return (
    <AdminLayout>
      <div className="admin-users-page">
        <div className="admin-users-header">
          <h2>회원 관리</h2>
          <p>리뷰닥터 가입자 목록을 확인합니다.</p>
        </div>

        <div className="admin-panel">
          <table className="admin-table">
            <thead>
              <tr>
                <th>이름</th>
                <th>이메일</th>
                <th>권한</th>
                <th>전화번호</th>
                <th>가입일</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`role-badge ${user.role}`}>{user.role}</span>
                  </td>
                  <td>{user.phone}</td>
                  <td>{user.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminUsersPage;