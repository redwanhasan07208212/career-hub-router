import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import calender from "../../assets/icons/calendar.png";
import email from "../../assets/icons/email.png";
import location from "../../assets/icons/location2.png";
import money from "../../assets/icons/money.png";
import phone from "../../assets/icons/phone.png";
import bg2 from "../../assets/images/bg2.png";
import { saveJobApplication } from "../../utilities/localStorage";
import "./JobDetails.css";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);
  // console.log(job);

  const handleJobClick = () => {
    saveJobApplication(intId);
    toast("You Have Applied Successfully");
  };
  return (
    <div className="background1">
      <img src={bg2} className="absolute top-0 right-0" alt="" />
      <div className="container mx-auto">
        <h2 className="text-center text-3xl mb-[270px] mt-[123px]">
          Job Details
        </h2>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="border md:col-span-3 bg-white shadow-lg drop-shadow p-5 rounded-lg">
            <h2 className="text-[#1A1919] font-extrabold leading-7 text-[16px] mb-6">
              Job Description:{" "}
              <span className="text-[#757575] font-medium">
                {job.job_description}
              </span>
            </h2>

            <h2 className="text-[#1A1919] font-extrabold leading-7 text-[16px] mb-6">
              Job Responsibility:{" "}
              <span className="text-[#757575] font-medium">
                {" "}
                {job.job_responsibility}
              </span>
            </h2>

            <h2 className="text-[#1A1919] font-extrabold leading-7 text-[16px] mb-6">
              Educational Requirements:
            </h2>
            <span className="text-[#757575] font-medium">
              {job.educational_requirements}
            </span>

            <h2 className="text-[#1A1919] font-extrabold leading-7 text-[16px] mb-6">
              Experiences:
            </h2>
            <span className="text-[#757575] font-medium">
              {job.experiences}
            </span>
          </div>
          <div className="border bg-white shadow-lg drop-shadow p-[30px]">
            <h2 className="mb-6 text-[#1A1919] text-xl font-extrabold">
              Job Details
            </h2>
            <div className="border-t flex items-start gap-3 pt-6">
              <img src={money} alt="" />
              <h2>
                {" "}
                <span className="text-[#474747] font-bold">Salary:</span>
                <span className="text-[#757575] font-medium">
                  {job.salary}(per Month)
                </span>
              </h2>
            </div>
            <div className="flex items-start gap-3 pt-6">
              <img src={calender} alt="" />
              <h2>
                <span className="text-[#474747] font-bold">Job Title: </span>
                <span className="text-[#757575] font-medium">
                  {job.job_title}
                </span>
              </h2>
            </div>
            <h2 className="text-[#1A1919] text-xl font-extrabold mt-7 mb-6">
              Contact Information
            </h2>
            <div className="flex items-start border-t gap-3 pt-6">
              <img src={phone} alt="" />
              <h2>
                <span className="text-[#474747] font-bold">Phone: </span>
                <span className="text-[#757575] font-medium">
                  {job.contact_information.phone}
                </span>
              </h2>
            </div>
            <div className="flex items-start gap-3 pt-6">
              <img src={email} alt="" />
              <h2>
                <span className="text-[#474747] font-bold">Email: </span>
                <span className="text-[#757575] font-medium">
                  {job.contact_information.email}
                </span>
              </h2>
            </div>
            <div className="flex items-start gap-3 pt-6">
              <img src={location} alt="" />
              <h2>
                <span className="text-[#474747] font-bold">Phone: </span>
                <span className="text-[#757575] font-medium">
                  {job.contact_information.address}
                </span>
              </h2>
            </div>
            <button
              onClick={handleJobClick}
              className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white w-full mt-6"
            >
              Apply Now
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
