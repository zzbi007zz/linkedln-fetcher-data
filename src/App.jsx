import React, { useState } from 'react';

const LinkedInJobSearch = () => {
  const [keywords, setKeywords] = useState('');
  const [locationId, setLocationId] = useState('92000000');
  const [datePosted, setDatePosted] = useState('anyTime');
  const [jobType, setJobType] = useState('');
  const [salary, setSalary] = useState('');
  const [onsiteRemote, setOnsiteRemote] = useState('');
  const [jobs, setJobs] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setJobs(null);
    setIsLoading(true);

    let url = `https://linkedin-data-api.p.rapidapi.com/search-jobs?keywords=${encodeURIComponent(keywords)}&locationId=${locationId}&datePosted=${datePosted}&sort=mostRelevant`;

    if (jobType) url += `&jobType=${jobType}`;
    if (salary) url += `&salary=${salary}`;
    if (onsiteRemote) url += `&onsiteRemote=${onsiteRemote}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com',
          'x-rapidapi-key': 'your_rapidapi_key_here'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setJobs(data);
    } catch (err) {
      setError('Error fetching job data: ' + err.message);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
      <h1 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px'}}>LinkedIn Job Search</h1>
      <form onSubmit={handleSubmit} style={{marginBottom: '20px'}}>
        <div style={{marginBottom: '10px'}}>
          <input 
            type="text" 
            value={keywords} 
            onChange={(e) => setKeywords(e.target.value)} 
            placeholder="Enter job keywords (e.g., golang)"
            style={{padding: '10px', marginRight: '10px', width: '200px'}}
          />
          <input 
            type="text" 
            value={locationId} 
            onChange={(e) => setLocationId(e.target.value)} 
            placeholder="Location ID (default: 92000000)"
            style={{padding: '10px', marginRight: '10px', width: '200px'}}
          />
        </div>
        <div style={{marginBottom: '10px'}}>
          <select 
            value={datePosted} 
            onChange={(e) => setDatePosted(e.target.value)}
            style={{padding: '10px', marginRight: '10px', width: '120px'}}
          >
            <option value="anyTime">Any Time</option>
            <option value="pastMonth">Past Month</option>
            <option value="pastWeek">Past Week</option>
            <option value="past24Hours">Past 24 Hours</option>
          </select>
          <select 
            value={jobType} 
            onChange={(e) => setJobType(e.target.value)}
            style={{padding: '10px', marginRight: '10px', width: '120px'}}
          >
            <option value="">Any Job Type</option>
            <option value="fullTime">Full Time</option>
            <option value="partTime">Part Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
          <select 
            value={salary} 
            onChange={(e) => setSalary(e.target.value)}
            style={{padding: '10px', marginRight: '10px', width: '120px'}}
          >
            <option value="">Any Salary</option>
            <option value="40K+">$40K+</option>
            <option value="60K+">$60K+</option>
            <option value="80K+">$80K+</option>
            <option value="100K+">$100K+</option>
            <option value="120K+">$120K+</option>
          </select>
          <select 
            value={onsiteRemote} 
            onChange={(e) => setOnsiteRemote(e.target.value)}
            style={{padding: '10px', marginRight: '10px', width: '120px'}}
          >
            <option value="">Any Location</option>
            <option value="onsite">On-site</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <button type="submit" style={{padding: '10px', backgroundColor: '#0077B5', color: 'white', border: 'none', cursor: 'pointer'}}>Search Jobs</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}

      {jobs && jobs.data && (
        <div>
          <h2 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '10px'}}>Job Results:</h2>
          <p>Total jobs found: {jobs.total}</p>
          <ul style={{listStyleType: 'none', padding: 0}}>
            {jobs.data.map((job, index) => (
              <li key={index} style={{marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '4px'}}>
                <h3 style={{fontWeight: 'bold'}}>{job.title}</h3>
                <p>Company: {job.company.name}</p>
                <p>Location: {job.location}</p>
                <p>Type: {job.type}</p>
                <p>Posted: {job.postDate}</p>
                {job.benefits && <p>Benefits: {job.benefits}</p>}
                <a href={job.url} target="_blank" rel="noopener noreferrer" style={{color: '#0077B5'}}>View Job</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LinkedInJobSearch;
