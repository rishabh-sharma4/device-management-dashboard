**Project Setup**

1. This is project called "DEVICE MANAGEMENT DASHBOARD" that is based on React.js for Frontend and Node.js + Express.js for Backend.
2. Data is fetched from http://localhost:5000/devices API and displayed in dashboard in a table format.
3. User can filter the devices listed in table by filtering "Active" and "Inactive" devices, from the dropdown provided above the table.
4. On clicking any device in the table, a side panel opens up and it displays "Device Name" at top followed by "Device ID", "Model" and "Data Source".
5. Below in panel we have to action buttons: "Update APN" and "Close"
6. "Update APN" is enabled only for devices with status as "active". On clicking update APN the API call is made to update the APN and a message is displayed accordingly.
7. On clicking "Close" button the side panel closes.

**Prerequisites**

--> Before running the app, ensure you have the following installed:

1. Node.js (LTS version recommended)

2. npm (comes with Node.js)

3. A running backend API at http://localhost:5000/devices or update the API_URL in the code if running on any other port. By default 5000 has been setup as port number for backend.

**Running the app locally**

1. Clone the repository https://github.com/rishabh-sharma4/device-management-dashboard.git

2. cd DEVICE-MANAGEMENT-DASHBOARD will take to root of project.

3. To start backend code run "cd backend"

4. run npm install to install dependencies for backend code.

5. run node server.js or you can use nodemon and run npx nodemon server.js

6. Backend server will be up and running

7. Open second terminal by changing directory to frontend: cd frontend 

8. Run npm install to install all frontend dependencies.

9. Run npm run dev to start frontend.
    
10. For this project demo visit : https://drive.google.com/file/d/1G3gUG2DTYQ0rBgGlQWrIettiPwKP2nJ8/view?usp=sharing
