const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mock Device Data (10 devices)
const devices = [
  { id: "1", name: "Mobile A", status: "Active", telemetrySource: "Source A", lastCommunication: "2025-03-17T10:00:00Z", model: "Model X", dataSource: "API A" },
  { id: "2", name: "Mobile B", status: "Inactive", telemetrySource: "Source B", lastCommunication: "2025-03-17T09:30:00Z", model: "Model Y", dataSource: "API B" },
  { id: "3", name: "Camera C", status: "Active", telemetrySource: "Source C", lastCommunication: "2025-03-17T11:15:00Z", model: "Model Z", dataSource: "API C" },
  { id: "4", name: "Camera D", status: "Inactive", telemetrySource: "Source D", lastCommunication: "2025-03-17T08:45:00Z", model: "Model A", dataSource: "API D" },
  { id: "5", name: "Tablet E", status: "Active", telemetrySource: "Source E", lastCommunication: "2025-03-17T12:30:00Z", model: "Model B", dataSource: "API E" },
  { id: "6", name: "Tablet F", status: "Inactive", telemetrySource: "Source F", lastCommunication: "2025-03-17T07:10:00Z", model: "Model C", dataSource: "API F" },
  { id: "7", name: "Iphone G", status: "Active", telemetrySource: "Source G", lastCommunication: "2025-03-17T13:00:00Z", model: "Model D", dataSource: "API G" },
  { id: "8", name: "Iphone H", status: "Inactive", telemetrySource: "Source H", lastCommunication: "2025-03-17T06:50:00Z", model: "Model E", dataSource: "API H" },
  { id: "9", name: "Macbook I", status: "Active", telemetrySource: "Source I", lastCommunication: "2025-03-17T14:20:00Z", model: "Model F", dataSource: "API I" },
  { id: "10", name: "Macbook J", status: "Inactive", telemetrySource: "Source J", lastCommunication: "2025-03-17T05:30:00Z", model: "Model G", dataSource: "API J" }
];

// Get all devices
app.get("/devices", (req, res) => {
  res.json(devices);
});

// Get device details by ID
app.get("/devices/:id", (req, res) => {
  const device = devices.find(d => d.id === req.params.id);
  if (!device) return res.status(404).json({ error: "Device not found" });
  res.json(device);
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
