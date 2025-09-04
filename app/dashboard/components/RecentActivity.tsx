export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: '김철수',
      action: '새로운 주문을 생성했습니다',
      timestamp: '5분 전',
    },
    {
      id: 2,
      user: '박영희',
      action: '제품을 업데이트했습니다',
      timestamp: '15분 전',
    },
    {
      id: 3,
      user: '이민수',
      action: '새로운 고객이 등록했습니다',
      timestamp: '30분 전',
    },
    {
      id: 4,
      user: '정수진',
      action: '결제가 완료되었습니다',
      timestamp: '1시간 전',
    },
  ]

  return (
    <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
      <h3 className="text-lg font-semibold mb-4">최근 활동</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between py-2 border-b border-border last:border-b-0"
          >
            <div className="flex-1">
              <p className="text-sm font-medium">{activity.user}</p>
              <p className="text-sm text-muted-foreground">
                {activity.action}
              </p>
            </div>
            <div className="text-xs text-muted-foreground">
              {activity.timestamp}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <button className="text-sm text-primary hover:text-primary/80 transition-colors">
          모든 활동 보기 →
        </button>
      </div>
    </div>
  )
}