import { useEffect, useState } from 'react'
import { connectSocket, disconnectSocket, getSocket } from '../services/socketService'
import { useAuth } from './useAuth'

export const useSocket = () => {
  const { token } = useAuth()
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    if (!token) {
      return
    }

    const client = connectSocket(token)
    setSocket(client)

    return () => {
      disconnectSocket()
      setSocket(null)
    }
  }, [token])

  return { socket, isConnected: Boolean(getSocket()?.connected) }
}
