// src/pages/Select.jsx
import { useNavigate } from 'react-router-dom'

export default function Select() {
  const nav = useNavigate()
  const services = [
    { key: 'nail', label: 'Nail Trimming' },
    { key: 'vaccine', label: 'Vaccination' },
  ]

  return (
    <div className="container my-5">
      {/* welcome */}
      <h1 className="text-center text-primary mb-4">Welcome to CarePets Center 🐾</h1>
      <h2 className="text-center text-secondary mb-5">Choose a Service</h2>

      <div className="row justify-content-center gx-4 gy-4">
        {services.map(s => (
          <div key={s.key} className="col-12 col-sm-6 col-md-4 col-xl-3">
            <div className="card h-100 shadow-sm">
              <img
                src={`/images/${s.key}.png`}
                className="card-img-top img-fluid"
                alt={s.label}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{s.label}</h5>
                <div className="mt-auto text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => nav('/booking', { state: { service: s.key } })}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
