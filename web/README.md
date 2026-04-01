# Review Doctor Frontend

리뷰닥터 프론트엔드는 Vite 기반 React + TypeScript 프로젝트입니다.  
상태 관리는 MobX를 사용하고, 컴포넌트 구조는 Atomic Design 기준으로 정리되어 있습니다.

## 사용 기술

- React 19
- TypeScript
- Vite
- MobX / mobx-react-lite
- React Router
- ESLint

## 디렉터리 구조

```text
src
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

## 개발 서버 실행

```bash
npm install
npm run dev
```

## 프로덕션 빌드

```bash
npm run build
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
