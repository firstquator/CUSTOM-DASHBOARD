import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          커스텀 대시보드에 오신 것을 환영합니다
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <Link
            href="/dashboard"
            className="group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              대시보드{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                →
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              사용자 대시보드로 이동하여 데이터를 확인하세요.
            </p>
          </Link>

          <div className="group rounded-lg border px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">
              프로필{' '}
              <span className="inline-block">
                →
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              사용자 프로필 관리 (준비 중)
            </p>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>Next.js App Router와 TypeScript, Tailwind CSS로 구축됨</p>
        </div>
      </div>
    </main>
  )
}