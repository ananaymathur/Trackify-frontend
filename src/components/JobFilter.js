// src/components/JobFilter.js
import React, { useState } from 'react';
import './JobFilter.css'

const JobFilter = ({ onFilter, onAddJob }) => {
  const [filters, setFilters] = useState({
    company: '',
    position: '',
    status: '',
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const [newJob, setNewJob] = useState({
    company: '',
    position: '',
    status: 'applied',
  });

  const handleInputChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleNewJobInputChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const handleFilter = () => {
    onFilter(filters);
  };

  const handleAddJob = (e) => {
    e.preventDefault();
    onAddJob(newJob);
    setShowDropdown(false); // Close dropdown after adding job
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        name="company"
        placeholder="Filter by company"
        value={filters.company}
        onChange={handleInputChange}
        className="filter-input"
      />
      
      <input
        type="text"
        name="position"
        placeholder="Filter by position"
        value={filters.position}
        onChange={handleInputChange}
        className="filter-input"
      />
      
      <select
        name="status"
        value={filters.status}
        onChange={handleInputChange}
        className="filter-select"
      >
        <option value="">All Statuses</option>
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="offer">Offer</option>
        <option value="rejected">Rejected</option>
      </select>
      <button onClick={handleFilter} className="search-button">
        <span className='material-icons'>search</span>
      </button>
      <button className="add-job-button" onClick={() => setShowDropdown(!showDropdown)}>
        <span className='material-icons'>add</span>
      </button>
      
      {showDropdown && (
        <div className="dropdown">
          <form onSubmit={handleAddJob}>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={newJob.company}
              onChange={handleNewJobInputChange}
              required
            />
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={newJob.position}
              onChange={handleNewJobInputChange}
              required
            />
            <select
              name="status"
              value={newJob.status}
              onChange={handleNewJobInputChange}
              required
            >
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>
            <button type="submit" className="submit-button">
              Add Job
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default JobFilter;
