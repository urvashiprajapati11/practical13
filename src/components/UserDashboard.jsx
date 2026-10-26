
import React, { useState } from "react";
import "./UserDashboard.css";

function UserDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("Employee");
  const [employeeName, setEmployeeName] = useState("Alex Morgan");

  // Conditional rendering using if/else
  const renderDashboard = () => {
    if (!isLoggedIn) {
      return (
        <div className="guest-panel">
          <div className="dashboard-icon">🔒</div>
          <h2>Welcome, Guest!</h2>
          <p>
            Please log in to access your corporate dashboard
            and workplace resources.
          </p>
          <button
            className="primary-button"
            onClick={() => setIsLoggedIn(true)}
          >
            Login to Dashboard
          </button>
        </div>
      );
    } else if (role === "Admin") {
      return (
        <div className="admin-panel">
          <div className="dashboard-icon">🛡️</div>
          <h2>Administrator Control Panel</h2>
          <p>
            Welcome, {employeeName}. You have administrator
            access to the corporate system.
          </p>

          <div className="dashboard-cards">
            <div className="info-card">
              <span>👥</span>
              <h3>Employees</h3>
              <p>Manage employee records</p>
            </div>

            <div className="info-card">
              <span>📊</span>
              <h3>Reports</h3>
              <p>View company reports</p>
            </div>

            <div className="info-card">
              <span>⚙️</span>
              <h3>Settings</h3>
              <p>Manage system settings</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="employee-panel">
          <div className="dashboard-icon">👨‍💼</div>
          <h2>Employee Portal</h2>
          <p>
            Welcome back, {employeeName}! You are successfully
            logged in as an employee.
          </p>

          <div className="employee-info">
            <p><strong>Role:</strong> Employee</p>
            <p><strong>Status:</strong> Active</p>
            <p><strong>Access:</strong> Standard</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h1>Corporate Hub</h1>
          <p>Employee Login & Role Dashboard</p>
        </div>

        {/* Logical && operator */}
        {isLoggedIn && (
          <button
            className="logout-button"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        )}
      </div>

      <div className="dashboard-controls">
        <h3>Dashboard Visualizer</h3>

        <label htmlFor="employeeName">Employee Name</label>
        <input
          id="employeeName"
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          placeholder="Enter employee name"
        />

        <label htmlFor="role">Select User Role</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Employee">Employee</option>
          <option value="Admin">Administrator</option>
        </select>

        {/* Ternary operator */}
        <p className="login-status">
          Login Status:{" "}
          {isLoggedIn ? "Logged In ✅" : "Logged Out 🔒"}
        </p>

        <button
          className="toggle-button"
          onClick={() => setIsLoggedIn((prev) => !prev)}
        >
          {isLoggedIn ? "Switch to Guest" : "Login"}
        </button>
      </div>

      <div className="dashboard-content">
        {renderDashboard()}
      </div>
    </div>
  );
}

export default UserDashboard;
