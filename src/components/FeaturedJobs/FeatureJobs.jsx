import { useEffect, useState } from "react";
import Job from "./Job";
const FeatureJobs = () => {
  const [FeatureJob, setFeatureJob] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setFeatureJob(data));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="text-center mt-[130px]">
        <h2 className="text-5xl mb-4">Featured Jobs</h2>
        <p className="mb-[32px]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {FeatureJob.slice(0, dataLength).map((jobs) => (
          <Job key={jobs.id} jobs={jobs}></Job>
        ))}
      </div>
      <div className={dataLength===FeatureJob.length?'hidden':''}>
        <div className="flex justify-center mb-[130px] mt-10">
          <button onClick={()=>setDataLength(FeatureJob.length)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white mt-6">
            Show All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureJobs;
