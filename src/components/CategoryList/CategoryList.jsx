import accounts from "../../assets/icons/accounts.png";
import chip from "../../assets/icons/chip.png";
import creative from "../../assets/icons/creative.png";
import mareket from "../../assets/icons/marketing.png";
const CategoryList = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-5xl font-extrabold text-center mt-[130px] mb-3">
        Job Category List
      </h2>
      <p className="text-center mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 rounded-lg">
        <div className="bg-white shadow-lg drop-shadow p-10 flex flex-col items-center justify-center lg:items-start">
          <img className="mb-8" src={accounts} alt="" />
          <h3 className="text-[#474747] font-extrabold text-xl mb-2">
            Account & Finance
          </h3>
          <p className="text-[#A3A3A3] text-[16px]">300 Jobs Available</p>
        </div>
        <div className="bg-white shadow-lg drop-shadow p-10 flex flex-col items-center justify-center lg:items-start">
          <img className="mb-8" src={chip} alt="" />
          <h3 className="text-[#474747] font-extrabold text-xl mb-2">
            Account & Finance
          </h3>
          <p className="text-[#A3A3A3] text-[16px]">300 Jobs Available</p>
        </div>
        <div className="bg-white shadow-lg drop-shadow p-10 flex flex-col items-center justify-center lg:items-start">
          <img className="mb-8" src={creative} alt="" />
          <h3 className="text-[#474747] font-extrabold text-xl mb-2">
            Account & Finance
          </h3>
          <p className="text-[#A3A3A3] text-[16px]">300 Jobs Available</p>
        </div>
        <div className="bg-white shadow-lg drop-shadow p-10 flex flex-col items-center justify-center lg:items-start">
          <img className="mb-8" src={mareket} alt="" />
          <h3 className="text-[#474747] font-extrabold text-xl mb-2">
            Account & Finance
          </h3>
          <p className="text-[#A3A3A3] text-[16px]">300 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
