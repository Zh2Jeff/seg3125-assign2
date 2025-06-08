import { useLocation, useNavigate } from 'react-router-dom';

export default function Confirm() {
  const { state } = useLocation();
  const nav = useNavigate();
  const { service, pet, date, time } = state;

  return (
    <div className="container my-5 text-center">
      <h2 className="text-success mb-4">🎉 Appointment Confirmed! 🎉</h2>
      <div className="card p-4 mb-4" style={{ backgroundColor: '#fff8e1' }}>
        <p><strong>Service:</strong> {service === 'nail' ? 'Nail Trimming' : 'Vaccines'}</p>
        <p><strong>Pet:</strong> {pet}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
      </div>
      <button className="btn btn-outline-primary me-2" onClick={() => nav('/select')}>
        Back to Services
      </button>
      
    </div>
  );
}