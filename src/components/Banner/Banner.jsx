import heroImg from "../../assets/images/user.png";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <img src={heroImg} className="md:max-w-lg rounded-lg" />
        <div className="max-w-lg">
          {" "}
          {/* Limit the width */}
          <h1 className="text-5xl font-bold">
            One Step Closer To Your{" "}
            <span className="text-[#7E90FE]"> Dream Job</span>
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
