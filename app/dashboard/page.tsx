import { DashboardStats, RecentActivity } from './components'

export default function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">대시보드</h1>
        <p className="text-muted-foreground mt-2">
          애플리케이션 현황을 한눈에 확인하세요.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <DashboardStats />
        <RecentActivity />
      </div>
    </main>
  )
}