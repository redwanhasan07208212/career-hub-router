import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilities/localStorage";
import AppliedJob from "./AppliedJob";
const Applied = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJob] = useState([]);
  const [displayJobs,setDisplayJobs] = useState([]);
  //   console.log(jobs);
  useEffect(() => {
    const getStoredId = getStoredJobApplication();
    // if(jobs.length>0)
    // {
    //   const jobApplied = jobs.filter((job) => getStoredId.includes(job.id));
    // }
    if (jobs.length > 0) {
      const jobApplied = [];
      for (const id of getStoredId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }
      setAppliedJob(jobApplied);
      setDisplayJobs(jobApplied);
    }
  }, []);
  // console.log(appliedJobs);
  const handleJob = (filter)=>{
    if(filter === 'all')
    {
      setDisplayJobs(appliedJobs);
    }
    else if(filter === 'remote'){
      setDisplayJobs(appliedJobs.filter(job=>job.remote_or_onsite==='Remote'));
    }
    else if(filter === 'onsite')
    {
      setDisplayJobs(appliedJobs.filter(job=>job.remote_or_onsite==='Onsite'))
    }
  }
  return (
    <div className="container mx-auto">
      <h2 className="text-center mt-[123px] mb-[350px] text-[#1A1919] text-3xl font-extrabold">
        Applied Jobs
      </h2>
      <details className="dropdown mb-8 lg:absolute lg:right-24 lg:top-[450px]">
        <summary className="btn m-1">
          Filter By <IoIosArrowDown />
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow absolute right-0">
          <li onClick={()=>handleJob('all')}>
            <a>All</a>
          </li>
          <li onClick={()=>handleJob('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=>handleJob('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>

      <ul className="grid grid-cols-1 gap-5">
        {displayJobs.map((job, idx) => (
          <AppliedJob key={idx} job={job}></AppliedJob>
        ))}
      </ul>
    </div>
  );
};

export default Applied;
