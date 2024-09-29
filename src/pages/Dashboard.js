// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import API from '../utils/api';
import JobForm from '../components/JobForm';
import JobList from '../components/JobList';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const token = localStorage.getItem('token');
      const response = await API.get('/jobs', { headers: { 'x-auth-token': token } });
      setJobs(response.data);
    };

    fetchJobs();
  }, []);

  const addJob = async (jobData) => {
    const token = localStorage.getItem('token');
    const response = await API.post('/jobs', jobData, { headers: { 'x-auth-token': token } });
    setJobs([...jobs, response.data]);
  };

  const updateJobStatus = async (jobId, status) => {
    const token = localStorage.getItem('token');
    await API.put(`/jobs/${jobId}`, { status }, { headers: { 'x-auth-token': token } });
    setJobs(jobs.map((job) => (job._id === jobId ? { ...job, status } : job)));
  };

  return (
    <div className="main-content">
      <JobForm onSubmit={addJob} />
      {console.log(jobs)}
      <JobList jobs={jobs} onUpdate={updateJobStatus} />
    </div>
  );
};

export default Dashboard;
