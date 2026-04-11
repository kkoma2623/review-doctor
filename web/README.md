# Review Doctor Frontend

리뷰닥터 프론트엔드는 Vite 기반 React + TypeScript 프로젝트입니다.  
상태 관리는 MobX를 사용하고, 컴포넌트 구조는 Atomic Design 기준으로 정리되어 있습니다.

## 사용 기술

- React 19
- TypeScript
- Vite
- MobX / mobx-react-lite
- React Router
- CSS Modules / CSS Custom Properties
- ESLint

## 디렉터리 구조

```text
src
├── app
├── components
│   ├── atoms
│   ├── molecules
│   ├── organisms
│   └── templates
├── data
├── lib
├── pages
├── stores
├── styles
├── types
└── utils
```

## 스타일 구조

컴포넌트와 페이지 스타일은 기본적으로 해당 파일 옆의 `*.module.css`에서 관리합니다.
전역 스타일은 최소화해서 `src/styles/global.css`가 `tokens.css`와 `reset.css`만 불러오도록 구성했습니다.

```text
src/styles
├── tokens.css
├── reset.css
└── global.css
```

새 UI를 추가할 때는 재사용 가능한 것은 `components/*/*.module.css`, 라우트 전용 배치는 `pages/**/page.module.css`처럼 가까운 위치에 두는 것을 권장합니다.

## 라우팅 구조

`src/pages/**/page.tsx` 파일은 자동으로 라우트가 됩니다.

예시:

```text
src/pages/index/page.tsx              -> /
src/pages/login/page.tsx              -> /login
src/pages/join/success/page.tsx       -> /join/success
src/pages/admin/users/page.tsx        -> /admin/users
```

접근 제어는 경로 기준으로 자동 적용됩니다.

- `/admin/**`: 관리자 전용
- `/dashboard/**`: 로그인 사용자 전용
- `/login`, `/join/**`: 비로그인 사용자 전용
- 나머지: 공개 페이지

## 개발 서버 실행

```bash
npm install
npm run dev
```

`npm run dev`는 Vite 개발 서버를 띄우며, 프론트 파일을 저장하면 즉시 다시 반영됩니다.  
HMR(Hot Module Replacement)과 polling watch 설정이 켜져 있어 수정 내용을 브라우저에서 바로 확인할 수 있습니다.

## 프로덕션 빌드

```bash
npm run build
```

## 파일 변경 시 자동 재빌드

브라우저에서 바로 보면서 개발할 때는 보통 `npm run dev`만 쓰면 됩니다.

배포용 `dist` 파일도 수정할 때마다 다시 만들고 싶다면:

```bash
npm run build:watch
```

타입 검사만 계속 돌리고 싶다면:

```bash
npm run typecheck:watch
```

## 린트

```bash
npm run lint
```

## 필요한 환경 변수

```bash
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

로컬에서는 `web/.env.local`에 넣어 사용하는 것을 권장합니다.
