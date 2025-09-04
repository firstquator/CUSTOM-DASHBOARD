# CLAUDE.md

이 파일은 이 저장소에서 코드 작업을 할 때 Claude Code (claude.ai/code)에 대한 가이드를 제공합니다.

---

## 언어 설정

**모든 응답과 커뮤니케이션은 한국어로 진행하세요.** 
코드 주석, 커밋 메시지, 문서화, 사용자와의 대화 등 모든 상황에서 한국어를 사용합니다.

---

## MCP

다음과 같은 MCP 를 적극 활용하기 바람.

- context7 MCP
- sequential-thinking MCP
- playwright MCP
- supabase MCP

## Next.js: Route Handler 우선 사용

-   **모든 API 엔드포인트는 Route Handler를 사용하여 구현하세요.**
-   **데이터베이스 작업, 외부 API 호출, 인증 등 복잡한 서버 작업은 반드시 Route Handler를 사용하세요.**
-   **Server Action은 단순 폼 제출 또는 간단한 데이터 처리에만 사용하세요.**

---

## Next.js 라우팅: App Router 사용

-   **프로젝트 내 라우팅은 Pages Router 대신 App Router를 사용하세요.**

---

## 프로젝트 구조: 주요 폴더 구조 예시

-   **프로젝트 구조는 다음과 같이 설정하세요. `src` 폴더는 사용하지 않습니다.**

```

your-nextjs-project/
├──CLAUDE.md
├── app/                         # App Router 라우트 폴더
│   ├── api/                     # API 엔드포인트
│   │   └── auth/
│   │       └── route.ts
│   ├── dashboard/               # 대시보드 페이지
│   │   ├── page.tsx             # 대시보드 메인 페이지
│   │   ├── components/          # 대시보드 전용 컴포넌트
│   │   │   ├── DashboardStats.tsx
│   │   │   ├── RecentActivity.tsx
│   │   │   └── index.ts
│   │   ├── hooks/               # 대시보드 전용 훅
│   │   │   ├── useDashboardData.ts
│   │   │   └── index.ts
│   │   └── types.ts             # 대시보드 전용 타입
│   ├── profile/                 # 프로필 페이지 (예시)
│   │   ├── page.tsx
│   │   ├── components/
│   │   └── hooks/
│   ├── layout.tsx               # 루트 레이아웃
│   ├── page.tsx                 # 홈 페이지
│   ├── loading.tsx              # 로딩 UI
│   ├── error.tsx                # 에러 UI
│   └── not-found.tsx            # 404 페이지
│
│
├── lib/                         # 라이브러리 및 유틸리티
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   ├── middleware.ts
│   │   ├── types.ts
│   │   └── queries/
│   ├── components/                  # 공통 컴포넌트
│   │   ├── ui/                      
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── toast.tsx
│   │   │   └── toaster.tsx
│   │   ├── layout/                  # 레이아웃 관련 컴포넌트
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── OptionsDropdown.tsx
│   │   ├── PromptInput.tsx
│   │   └── GeneratedImagePreview.tsx
│   │            ├── auth.ts
│   │            ├── users.ts
│   │            └── posts.ts
│   ├── hooks/                   # 공통 커스텀 훅
│   │   ├── use-toast.ts
│   │   ├── use-auth.ts
│   │   └── use-media.ts
│   └── utils/                   # 유틸리티 함수
│       ├── cn.ts               # clsx/tailwind-merge 유틸
│       ├── fetcher.ts
│       └── mockData.ts
│
├── store/                       # 상태 관리 (Zustand/Redux 등)
│   ├── gallery.ts
│   ├── auth.ts
│   ├── community.ts
│   └── index.ts
│
├── types/                       # 공통 타입 정의
│   └── index.ts
│
├── styles/                      # 글로벌 스타일
│   └── globals.css
│
├── public/                      # 정적 파일
│   ├── favicon.ico
│   ├── images/
│   └── icons/
│
├── .env                         # 환경 변수
├── middleware.ts                # Next.js 미들웨어
├── next.config.mjs              # Next.js 설정
├── package.json                 # 패키지 정보
├── tailwind.config.ts           # Tailwind 설정
├── tsconfig.json                # TypeScript 설정
└── components.json              # ShadCN UI 설정

```

---

## TypeScript 사용: TS 사용 권장

-   **프로젝트 전반에 TypeScript를 사용하세요.**
-   **타입 안정성을 위해 모든 컴포넌트와 서버 로직에 TypeScript를 적용하세요.**

---

## TypeScript 인터페이스 정의 규칙: 'I' 접두사 사용

-   **인터페이스 정의 시 이름 앞에 'I'를 접두사로 추가하세요.**
-   예시:
    ```typescript
    export interface IComment {
        id: string
        text: string
        author: string
    }
    ```
-   인터페이스 생성은 types/index.ts 파일에 작성하세요.

---

## Git 커밋 메시지 작성 규칙

**포맷:**

```
<type>: <subject>

<body>
```

**커밋 타입 (Type):**

-   feat: 새로운 기능 추가
-   fix: 버그 수정
-   docs: 문서 수정
-   style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
-   refactor: 코드 리팩토링
-   test: 테스트 코드, 리팩토링 테스트 코드 추가
-   chore: 빌드 업무 수정, 패키지 매니저 수정

**제목 (Subject):**

-   변경 사항에 대한 간단한 설명
-   50자 이내로 작성
-   마침표 없이 작성
-   현재 시제 사용

**본문 (Body):**

-   변경 사항에 대한 자세한 설명
-   어떻게 보다는 무엇을, 왜 변경했는지 설명
-   여러 줄의 메시지를 작성할 땐 "-"로 구분

**예시:**

```plaintext
feat: 로그인 화면 키보드 UX 개선
- TextInput ref를 사용하여 자동 포커스 기능 추가
- returnKeyType 설정으로 키보드 엔터키 동작 개선
- 전화번호 입력 후 자동으로 비밀번호 입력창으로 포커스 이동
- 비밀번호 입력 후 엔터키로 로그인 가능하도록 개선
```
---