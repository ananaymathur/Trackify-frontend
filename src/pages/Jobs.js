// src/pages/Jobs.js
import React, { useState, useEffect } from 'react';
import API from '../utils/api';
import JobTable from '../components/JobTable';
import JobFilter from '../components/JobFilter'; // Import the new JobFilter component
import './Jobs.css';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]); // State to manage filtered jobs

  useEffect(() => {
    const fetchJobs = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await API.get('/jobs', { headers: { 'x-auth-token': token } });
        setJobs(response.data);
        setFilteredJobs(response.data); // Initialize filtered jobs with all jobs
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const addJob = async (jobData) => {
    const token = localStorage.getItem('token');
    try {
      const response = await API.post('/jobs', jobData, { headers: { 'x-auth-token': token } });
      setJobs([...jobs, response.data]);
      setFilteredJobs([...jobs, response.data]); // Update filtered jobs as well
    } catch (error) {
      console.error('Failed to add job:', error);
    }
  };

  const updateJobStatus = async (jobId, status) => {
    const token = localStorage.getItem('token');
    try {
      await API.put(`/jobs/${jobId}`, { status }, { headers: { 'x-auth-token': token } });
      setJobs(jobs.map((job) => (job._id === jobId ? { ...job, status } : job)));
      setFilteredJobs(filteredJobs.map((job) => (job._id === jobId ? { ...job, status } : job))); // Update filtered jobs
    } catch (error) {
      console.error('Failed to update job status:', error);
    }
  };

  const deleteJob = async (jobId) => {
    const token = localStorage.getItem('token');
    try {
      await API.delete(`/jobs/${jobId}`, { headers: { 'x-auth-token': token } });
      const updatedJobs = jobs.filter((job) => job._id !== jobId);
      setJobs(updatedJobs);
      setFilteredJobs(updatedJobs); // Update filtered jobs after deletion
    } catch (error) {
      console.error('Failed to delete job:', error);
    }
  };

  const handleFilter = (filters) => {
    const { company, position, status } = filters;

    // Filter jobs based on the input fields
    const filtered = jobs.filter((job) => {
      return (
        (company === '' || job.company.toLowerCase().includes(company.toLowerCase())) &&
        (position === '' || job.position.toLowerCase().includes(position.toLowerCase())) &&
        (status === '' || job.status.toLowerCase() === status.toLowerCase())
      );
    });

    setFilteredJobs(filtered);
  };

  // return (
  //   <div className="main-content">
  //     {/* <JobForm onSubmit={addJob} /> */}
  //     <JobFilter onFilter={handleFilter} /> {/* Filtering component */}
  //     <JobTable jobs={filteredJobs} onUpdate={updateJobStatus} onDelete={deleteJob} /> {/* Table below filter */}
  //   </div>
  // );

  return (
    <div className="main-content">
      
      <JobFilter onFilter={handleFilter} onAddJob={addJob} />
      <JobTable jobs={filteredJobs} onUpdate={updateJobStatus} onDelete={deleteJob} />
    </div>
  );
};

export default Jobs;
