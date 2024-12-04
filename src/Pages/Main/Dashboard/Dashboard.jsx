import React, { useEffect, useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [stats, setStats] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost/movieproject-api/getTrafficData.php')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Debugging output
        if (data.error) {
          setError(data.error);
        } else {
          setStats(data);
        }
      })
      .catch(error => {
        console.error('Fetch error:', error); // Debugging output
        setError(error.toString());
      });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="title">Dashboard Overview</div>
      </div>
      {error && <p>Error: {error}</p>}
      <div className="dashboard-section">
        <h2>Statistics & Analytics</h2>
        <p>Total Movies: {stats.totalMovies}</p>
        <p>Total Genres: {stats.totalGenres}</p>
        <p>Total Actors: {stats.totalActors}</p>
        <p>Total Reviews: {stats.totalReviews}</p>
      </div>
      <div className="dashboard-section">
        <h2>User Statistics</h2>
        <p>Total Users: {stats.userStats?.totalUsers}</p>
        <p>Active Users: {stats.userStats?.activeUsers}</p>
        <p>Admin Users: {stats.userStats?.adminUsers}</p>
      </div>
      <div className="dashboard-section">
        <h2>Website Performance</h2>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Daily Visitors</th>
              <th>Traffic Source</th>
            </tr>
          </thead>
          <tbody>
            {stats.performanceData?.map((performance, index) => (
              <tr key={index}>
                <td>{performance.date}</td>
                <td>{performance.dailyVisitors}</td>
                <td>{performance.trafficSource}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dashboard-section">
        <h2>Recent Activity Logs</h2>
        <ul className="dashboard-activity-list">
          {stats.recentActivities?.map((activity, index) => (
            <li key={index}>
              {activity.timestamp}: {activity.activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;