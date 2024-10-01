import { CiDollar, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const Job = ({ jobs }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = jobs;
  return (
    <div className="bg-white shadow-lg p-10 drop-shadow">
      <img className="mb-8" src={logo} alt="" />
      <h3 className="text-2xl mb-2 font-extrabold">{job_title}</h3>
      <p className="text-[#757575] text-xl font-semibold mb-4">
        {company_name}
      </p>
      <button className="py-2 px-5 text-[#9873FF] border-2 border-[#9873FF] mr-3 rounded-md">
        {remote_or_onsite}
      </button>
      <button className="py-2 px-5 text-[#9873FF] border-2 border-[#9873FF] rounded-md">
        {job_type}
      </button>
      <div className="flex gap-6 mt-4">
        <p className="flex items-center gap-2">
          <CiLocationOn></CiLocationOn>
          {location}
        </p>
        <p className="flex items-center gap-2">
          <CiDollar></CiDollar> Salary: {salary}
        </p>
      </div>
      <Link to={`/jobs/${id}`}>
        <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white mt-6">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Job;
