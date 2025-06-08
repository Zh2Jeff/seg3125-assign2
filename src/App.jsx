// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import Select from './pages/Select'
import Booking from './pages/Booking'
import Confirm from './pages/Confirm'

function App() {
  return (
    <BrowserRouter>
      {/* top */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm w-100 px-3">
          <Link className="navbar-brand" to="/">CarePets</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/select">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/select">Contact</Link>
              </li>
            </ul>
          </div>
      </nav>

      {/* pages */}
      <Routes>
        <Route path="/" element={<Navigate to="/select" replace />} />
        <Route path="/select" element={<Select />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
