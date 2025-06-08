import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Booking() {
  const { state } = useLocation();
  const nav = useNavigate();
  const [pet, setPet] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const isNail = state.service === 'nail';

  return (
    <div className="container my-5">
      <h2 className="text-primary mb-4">
        {isNail ? 'Nail Trimming Appointment' : 'Vaccine Appointment'}
      </h2>
      <div className="card p-4 mb-4" style={{ backgroundColor: '#fff8e1' }}>
        <div className="mb-3">
          <label className="form-label">Pet Name</label>
          <input
            className="form-control"
            value={pet}
            onChange={e => setPet(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Time</label>
          <input
            type="time"
            className="form-control"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          disabled={!pet || !date || !time}
          onClick={() =>
            nav('/confirm', { state: { service: state.service, pet, date, time } })
          }
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
}