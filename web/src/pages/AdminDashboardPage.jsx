import AdminLayout from "../components/AdminLayout";
import "./AdminDashboardPage.css";

function AdminDashboardPage() {
  const stats = [
    { label: "총 회원 수", value: "128", change: "+12%" },
    { label: "사업주 계정", value: "37", change: "+5%" },
    { label: "등록된 가게", value: "24", change: "+3%" },
    { label: "이번 주 분석 요청", value: "412", change: "+18%" },
  ];

  const recentUsers = [
    { name: "홍성표", email: "sungpyo@example.com", role: "사업주", joined: "2026-03-14" },
    { name: "김민수", email: "minsuk@example.com", role: "일반", joined: "2026-03-13" },
    { name: "이하늘", email: "haneul@example.com", role: "사업주", joined: "2026-03-13" },
    { name: "박서연", email: "seoyeon@example.com", role: "일반", joined: "2026-03-12" },
  ];

  const recentJobs = [
    { store: "홍대 김밥천국", reviews: 132, status: "성공", time: "2026-03-14 18:20" },
    { store: "합정 카페블루", reviews: 89, status: "성공", time: "2026-03-14 17:10" },
    { store: "마포 떡볶이집", reviews: 44, status: "실패", time: "2026-03-14 16:35" },
    { store: "연남 우동집", reviews: 73, status: "성공", time: "2026-03-14 15:42" },
  ];

  return (
    <AdminLayout>
      <section className="admin-stats-grid">
        {stats.map((item) => (
          <div key={item.label} className="admin-stat-card">
            <p className="admin-stat-label">{item.label}</p>
            <strong className="admin-stat-value">{item.value}</strong>
            <span className="admin-stat-change">{item.change}</span>
          </div>
        ))}
      </section>

      <section className="admin-panel-grid">
        <div className="admin-panel">
          <div className="admin-panel-header">
            <h2>최근 가입자</h2>
          </div>

          <table className="admin-table">
            <thead>
              <tr>
                <th>이름</th>
                <th>이메일</th>
                <th>유형</th>
                <th>가입일</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="admin-panel">
          <div className="admin-panel-header">
            <h2>최근 분석 요청</h2>
          </div>

          <table className="admin-table">
            <thead>
              <tr>
                <th>가게명</th>
                <th>리뷰 수</th>
                <th>상태</th>
                <th>시간</th>
              </tr>
            </thead>
            <tbody>
              {recentJobs.map((job, idx) => (
                <tr key={idx}>
                  <td>{job.store}</td>
                  <td>{job.reviews}</td>
                  <td>
                    <span className={job.status === "성공" ? "status-badge ok" : "status-badge fail"}>
                      {job.status}
                    </span>
                  </td>
                  <td>{job.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminLayout>
  );
}

export default AdminDashboardPage;