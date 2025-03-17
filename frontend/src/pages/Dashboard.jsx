import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/devices";

function Dashboard() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setDevices(res.data))
      .catch((err) => setError("Failed to fetch devices"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Device Management Dashboard</h1>
      <label>
        Filter by Status:
        <select onChange={(e) => {}}>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </label>
      <table>
        <thead>
          <tr>
            <th>Device Name</th>
            <th>Status</th>
            <th>Telemetry Source</th>
            <th>Last Communication</th>
          </tr>
        </thead>
        <tbody>
          {filteredDevices.map((device) => (
            <tr key={device.id} onClick={() => {}}>
              <td>{device.name}</td>
              <td>{device.status}</td>
              <td>{device.telemetrySource}</td>
              <td>{new Date(device.lastCommunication).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
