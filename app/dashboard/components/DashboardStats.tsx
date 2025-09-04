export default function DashboardStats() {
  const stats = [
    {
      title: '총 방문자',
      value: '12,543',
      change: '+12%',
      changeType: 'positive',
    },
    {
      title: '활성 사용자',
      value: '2,341',
      change: '+5%',
      changeType: 'positive',
    },
    {
      title: '총 주문',
      value: '8,293',
      change: '-2%',
      changeType: 'negative',
    },
    {
      title: '수익',
      value: '₩1,234,567',
      change: '+18%',
      changeType: 'positive',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
        >
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-muted-foreground">
              {stat.title}
            </h3>
          </div>
          <div className="flex items-baseline space-x-2">
            <div className="text-2xl font-bold">{stat.value}</div>
            <div
              className={`text-xs ${
                stat.changeType === 'positive'
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}
            >
              {stat.change}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            지난달 대비
          </p>
        </div>
      ))}
    </div>
  )
}