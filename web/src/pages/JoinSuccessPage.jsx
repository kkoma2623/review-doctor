import { Link } from "react-router-dom";

function JoinSuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl border border-slate-100 p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-3xl mx-auto mb-6">
          ✓
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          회원가입이 완료되었습니다
        </h1>

        <p className="text-slate-500 leading-relaxed mb-8">
          ReviewDr 가입이 정상적으로 완료되었습니다.
          이메일 인증이 필요한 경우 메일함을 확인한 뒤 로그인해주세요.
        </p>

        <Link
          to="/login"
          className="inline-flex h-12 px-6 rounded-xl bg-slate-900 text-white font-semibold items-center justify-center hover:bg-slate-800"
        >
          로그인 하러가기
        </Link>
      </div>
    </div>
  );
}

export default JoinSuccessPage;