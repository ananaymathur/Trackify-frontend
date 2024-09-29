// src/components/JobTable.js
import React from 'react';
import './JobTable.css';

const JobTable = ({ jobs, onUpdate, onDelete }) => {
  const handleStatusChange = (jobId, newStatus) => {
    onUpdate(jobId, newStatus);
  };

  const handleDelete = (jobId) => {
    // Confirm deletion to avoid accidental clicks
    if (window.confirm('Are you sure you want to delete this job?')) {
      onDelete(jobId);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Formats the date to YYYY-MM-DD
  };

  return (
    <div className="table-container">
      <table className="job-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Date Applied</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.company}</td>
              <td>{job.position}</td>
              <td>{formatDate(job.dateApplied)}</td>
              <td>
                <select
                  className={`status ${job.status.toLowerCase()}`}
                  value={job.status}
                  onChange={(e) => handleStatusChange(job._id, e.target.value)}
                >
                  <option value="applied">Applied</option>
                  <option value="interview">Interview</option>
                  <option value="offer">Offer</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
              <td>
                
                    <span className="delete-icon material-icons" onClick={() => handleDelete(job._id)}>delete</span>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
