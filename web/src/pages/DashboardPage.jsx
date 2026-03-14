import { supabase } from "../lib/supabase";

function DashboardPage({ user }) {
  const isOwner = user?.user_metadata?.role === "owner";

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">ReviewDr</h1>
        <p className="text-slate-600 mb-2">{user.email} 님 로그인됨</p>
        <p className="text-slate-600 mb-8">
          가입 유형: {isOwner ? "사업주" : "일반 사용자"}
        </p>

        {isOwner && (
          <button className="mb-4 h-12 px-6 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700">
            가게 등록
          </button>
        )}

        <button
          onClick={handleLogout}
          className="h-12 px-6 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800"
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;