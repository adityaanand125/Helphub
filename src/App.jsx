import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppRoutes from './routes/AppRoutes'
import { AuthProvider } from './context/AuthContext'
import { DonationProvider } from './context/DonationContext'
import { NotificationProvider } from './context/NotificationContext'
import store from './redux/store'
import './styles/globals.css'
import './styles/animations.css'

const App = () => (
  <Provider store={store}>
    <AuthProvider>
      <DonationProvider>
        <NotificationProvider>
          <Router>
            <AppRoutes />
          </Router>
        </NotificationProvider>
      </DonationProvider>
    </AuthProvider>
  </Provider>
)

export default App
