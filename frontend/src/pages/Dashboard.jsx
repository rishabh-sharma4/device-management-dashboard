import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Dashboard.module.css";

const API_URL = "http://localhost:5000/devices";

function Dashboard() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setDevices(res.data))
      .catch((err) => setError("Failed to fetch devices"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const filteredDevices = filter === "All" ? devices : devices.filter(d => d.status === filter);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Device Management Dashboard</h1>
      <label className={styles.filterLabel}>
        Filter by Status:
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className={styles.selectBox}>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </label>
      <table className={styles.table} role="table" aria-label="Device Management Table">
        <thead>
          <tr>
            <th scope="col">Device Name</th>
            <th scope="col">Status</th>
            <th scope="col">Telemetry Source</th>
            <th scope="col">Last Communication</th>
          </tr>
        </thead>
        <tbody>
          {filteredDevices.map((device) => (
            <tr key={device.id} className={styles.tableRow} onClick={() => setSelectedDevice(device)} tabIndex="0">
              <td className={styles.deviceName}>{device.name}</td>
              <td className={device.status === "Active" ? styles.statusActive : styles.statusInactive}>{device.status}</td>
              <td className={styles.telemetrySource}>{device.telemetrySource}</td>
              <td className={styles.lastCommunication}>{new Date(device.lastCommunication).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDevice && (
        <div className={styles.drawer}>
          <h2>{selectedDevice.name} Details</h2>
          <p>{selectedDevice.id}</p>
          <p>{selectedDevice.model}</p>
          <p>{selectedDevice.dataSource}</p>
          <button
            className={selectedDevice.status === "Inactive" ? styles.buttonDisabled : styles.button}
            disabled={selectedDevice.status === "Inactive"}
            onClick={() => axios.post(`${API_URL}/${selectedDevice.id}/actions/update-apn`).then(alert("APN Updated"))}
          >
            Update APN
          </button>
          <button className={styles.button} onClick={() => setSelectedDevice(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
