# 리뷰닥터

리뷰닥터는 음식점/매장 리뷰를 모아 운영에 도움이 되는 인사이트를 제공하는 풀스택 웹 애플리케이션입니다.  
현재 프론트엔드는 React + TypeScript + MobX + Atomic Design 구조로 정리되어 있고, 백엔드는 FastAPI 기반으로 구성되어 있습니다.

## 현재 스택

### Frontend
- React 19
- TypeScript
- Vite
- MobX / mobx-react-lite
- React Router
- Atomic Design

### Backend
- FastAPI
- Python
- requests / BeautifulSoup 기반 크롤링 로직

### Auth / External
- Supabase Auth

## 프론트 구조

`web/src`는 Atomic Design 기준으로 정리되어 있습니다.

```text
web/src
├── components
│   ├── atoms
│   ├── molecules
│   ├── organisms
│   └── templates
├── data
├── lib
├── pages
├── stores
├── types
└── utils
```

핵심 포인트:
- HTML 태그 래퍼를 `atoms/html.tsx`에 두고 공통 atom 계층으로 사용
- 화면 조립은 `molecules -> organisms -> templates -> pages` 순서로 구성
- 전역 인증/관리자 상태는 MobX store로 관리
- 라우팅과 접근 제어는 `web/src/App.tsx`에서 처리

## 주요 파일

- `web/src/App.tsx`: 라우트 구성 및 인증/관리자 접근 제어
- `web/src/stores/AuthStore.ts`: 로그인, 회원가입, 비밀번호 변경, 인증 상태 관리
- `web/src/stores/AdminStore.ts`: 관리자 이메일 목록 및 관리자 판별 로직
- `web/src/components/atoms/html.tsx`: 기본 HTML atom 래퍼
- `web/src/components/templates/*`: 화면 단위 템플릿
- `web/src/pages/*`: 실제 페이지 진입 컴포넌트

## 실행 방법

### 1. 백엔드 실행

```bash
cd api
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### 2. 프론트엔드 실행

```bash
cd web
npm install
npm run dev
```

기본적으로 Vite 개발 서버를 사용하며, `/api` 요청은 `http://127.0.0.1:8000`으로 프록시되도록 설정되어 있습니다.

## 프론트 환경 변수

프론트 인증 기능을 사용하려면 `web` 디렉터리에서 아래 환경 변수가 필요합니다.

```bash
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

보통 `web/.env.local` 파일에 넣어 사용하면 됩니다.

## 검증 커맨드

```bash
cd web
npm run lint
npm run build
```

## 현재 포함된 화면

- 랜딩 페이지
- 로그인
- 회원가입
- 가입 완료
- 비밀번호 재설정
- 사용자 대시보드
- 관리자 대시보드
- 관리자 회원 관리
- 관리자 설정

## 메모

- 관리자 이메일 목록은 현재 브라우저 `localStorage` 기반으로 관리됩니다.
- 관리자 전용 추가 메뉴(가게 관리, 분석 이력, 리포트)는 동일한 Atomic Design 구조 위에서 확장할 수 있도록 자리만 먼저 구성되어 있습니다.
