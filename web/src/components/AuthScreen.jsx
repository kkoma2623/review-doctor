import { useState } from "react";
import { supabase } from "../lib/supabase";

function AuthScreen() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email.trim() || !password.trim()) {
      setMessage("이메일과 비밀번호를 입력하세요.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("회원가입 완료. 이메일 인증을 확인하세요.");
    }

    setLoading(false);
  };

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

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("로그인 성공");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-center mb-2">ReviewDr</h1>
        <p className="text-center text-gray-500 mb-6">로그인 후 이용하세요</p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {mode === "login" ? (
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-blue-600 text-white rounded-xl py-3 font-semibold hover:bg-blue-700 disabled:bg-blue-300"
            >
              로그인
            </button>
          ) : (
            <button
              onClick={handleSignUp}
              disabled={loading}
              className="w-full bg-black text-white rounded-xl py-3 font-semibold hover:bg-gray-800 disabled:bg-gray-400"
            >
              회원가입
            </button>
          )}
        </div>

        {message && (
          <div className="mt-4 text-sm text-gray-700 bg-gray-100 rounded-xl p-3">
            {message}
          </div>
        )}

        <div className="mt-6 text-center text-sm">
          {mode === "login" ? (
            <button
              onClick={() => {
                setMode("signup");
                setMessage("");
              }}
              className="text-blue-600 hover:underline"
            >
              계정이 없나요? 회원가입
            </button>
          ) : (
            <button
              onClick={() => {
                setMode("login");
                setMessage("");
              }}
              className="text-blue-600 hover:underline"
            >
              이미 계정이 있나요? 로그인
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthScreen;