import { api } from './api'

const DEMO_USER = {
  email: 'demo@helphub.com',
  password: 'Demo@123',
  user: {
    id: 'demo-user',
    name: 'Demo User',
    email: 'demo@helphub.com',
    role: 'donor',
  },
  token: 'demo-token-123',
}

export const loginService = async (credentials) => {
  const isDemo =
    credentials.email === DEMO_USER.email && credentials.password === DEMO_USER.password

  if (isDemo) {
    return Promise.resolve({ user: DEMO_USER.user, token: DEMO_USER.token })
  }

  const response = await api.post('/auth/login', credentials)
  return response.data
}

export const logoutService = () => {
  return Promise.resolve({ success: true })
}
