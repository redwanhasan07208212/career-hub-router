import { CiDollar, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const AppliedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="bg-white border-2 rounded-lg shadow-lg p-10 drop-shadow">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="flex md:flex-row flex-col justify-center items-center gap-8">
          <div className="bg-[#F4F4F4] w-[240px] h-[240px] rounded-lg py-[95px] px-[47px] shadow-lg drop-shadow">
            <img className="mb-8" src={logo} alt="" />
          </div>
          <div>
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
          </div>
        </div>
        <div>
          <Link to={`/jobs/${id}`}>
            <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white mt-6">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
