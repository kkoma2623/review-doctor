import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setMessage("이메일과 비밀번호를 입력하세요.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <div className="hidden lg:flex w-1/2 bg-slate-900 text-white items-center justify-center p-16">
        <div className="max-w-md">
          <h1 className="text-6xl font-extrabold mb-6">ReviewDr</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            사장님을 위한 리뷰 분석 서비스. 흩어진 리뷰를 모아 강점, 약점,
            개선 포인트를 한눈에 확인하세요.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">로그인</h2>
          <p className="text-slate-500 mb-8">ReviewDr를 시작하세요</p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                이메일
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 rounded-xl border border-slate-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                비밀번호
              </label>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 rounded-xl border border-slate-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {message && (
              <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                {message}
              </div>
            )}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full h-12 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 disabled:bg-slate-400"
            >
              로그인
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-slate-600">
            계정이 없나요?{" "}
            <Link to="/join" className="font-semibold text-blue-600 hover:underline">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;