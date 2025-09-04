export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full border-4 border-muted border-t-primary h-12 w-12"></div>
        <p className="text-sm text-muted-foreground">로딩 중...</p>
      </div>
    </div>
  )
}