import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import "./SignupPage.css";

function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("none");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [isOwner, setIsOwner] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name.trim() || !email.trim() || !password.trim() || !passwordConfirm.trim()) {
      setMessage("필수 항목을 모두 입력하세요.");
      return;
    }

    if (password !== passwordConfirm) {
      setMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (password.length < 6) {
      setMessage("비밀번호는 6자 이상이어야 합니다.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          birth,
          gender,
          phone,
          role: isOwner ? "owner" : "user",
          store_name: storeName,
        },
      },
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    navigate("/join/success");
  };

  return (
    <div className="join-page">
      <div className="join-header">
        <Link to="/login" className="join-logo">
          ReviewDr
        </Link>
      </div>

      <div className="join-wrap">
        <div className="join-title-box">
          <p className="join-title-main">회원가입</p>
          <p className="join-title-sub">회원가입 정보를 입력해주세요</p>
        </div>

        <div className="join-card">
          <div className="join-card-top-label">계정 정보</div>

          <div className="join-field">
            <label>이름</label>
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="join-field">
            <label>이메일</label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="join-field">
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="join-field">
            <label>비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
        </div>

        <div className="join-card">
          <div className="join-card-top-label">추가 정보</div>

          <div className="join-field">
            <label>생년월일 8자리</label>
            <input
              type="text"
              placeholder="예: 19900101"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
            />
          </div>

          <div className="join-field">
            <label>성별</label>
            <div className="gender-row">
              <button
                type="button"
                className={gender === "male" ? "gender-btn active" : "gender-btn"}
                onClick={() => setGender("male")}
              >
                남자
              </button>
              <button
                type="button"
                className={gender === "female" ? "gender-btn active" : "gender-btn"}
                onClick={() => setGender("female")}
              >
                여자
              </button>
              <button
                type="button"
                className={gender === "none" ? "gender-btn active" : "gender-btn"}
                onClick={() => setGender("none")}
              >
                선택안함
              </button>
            </div>
          </div>

          <p className="join-guide-text">
            입력한 정보는 가입 유형 분류 및 사용자 식별에 활용됩니다.
          </p>

          <div className="join-field">
            <label>휴대전화번호</label>
            <input
              type="text"
              placeholder="01012345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="join-card">
          <div className="join-card-top-label">가입 유형</div>

          <label className="owner-check-row">
            <input
              type="checkbox"
              checked={isOwner}
              onChange={(e) => setIsOwner(e.target.checked)}
            />
            <span>사업주로 가입합니다</span>
          </label>

          <p className="owner-help-text">
            사업주 계정은 가게 등록, 리뷰 분석 리포트, 대시보드 기능을 사용할 수 있습니다.
          </p>

          {isOwner && (
            <div className="join-field owner-extra-field">
              <label>가게명</label>
              <input
                type="text"
                placeholder="예: 홍대 김밥천국"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
            </div>
          )}
        </div>

        {message && <div className="join-error-box">{message}</div>}

        <div className="join-action-box">
          <button
            type="button"
            className="join-submit-btn"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? "가입 중..." : "회원가입"}
          </button>

          <Link to="/login" className="join-login-link-btn">
            이미 계정이 있나요? 로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;