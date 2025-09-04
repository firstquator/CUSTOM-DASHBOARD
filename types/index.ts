// 공통 타입 정의

export interface IUser {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface IActivity {
  id: number
  user: string
  action: string
  timestamp: string
}

export interface IStat {
  title: string
  value: string
  change: string
  changeType: 'positive' | 'negative'
}

// API 응답 타입
export interface IApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// 페이지네이션 타입
export interface IPagination {
  page: number
  limit: number
  total: number
  totalPages: number
}