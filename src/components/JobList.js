import React from 'react';

const JobList = ({ jobs, onUpdate }) => {
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job._id}>
          {job.company} - {job.position} - {job.status}
          <select onChange={(e) => onUpdate(job._id, e.target.value)} value={job.status}>
            <option value="applied">Applied</option>
            <option value="interviewing">Interviewing</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>
        </li>
      ))}
    </ul>
  );
};

export default JobList;
