import React from "react";
import { NavBar } from "../index";
import InvestmentChart from "./InvestmentChart";
import BenefitsSection from "./BenefitsSection";
import InvestmentOpportunities from "./InvestmentOpportunities";
import EcoLabelledProducts from "./EcoLabelledProducts";
import Testimonial from "./Testimonial";
import UserProfile from "./UserProfile";
import TransactionList from "./TransactionList";

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col px-20  max-md:px-5 pb-10">
        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
                        <InvestmentChart />
                        <BenefitsSection />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <TransactionList />
                    </div>
                  </div>
                </div>
                <div className="mt-1.5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e72539460e57fef5bd387fce0545d129ab8e3e2a040332aace7c1e93fd4494bd?apiKey=a47822eff5b2450ea0b6389b3ea53a3d&"
                        alt="Investment visualization"
                        className="grow mt-3 w-full aspect-[2.56] max-md:mt-6 max-md:max-w-full"
                      />
                    </div>
                    <div className="flex flex-col mt-10 ml-5 w-[18%] max-md:ml-0 max-md:w-full">
                      <EcoLabelledProducts />
                    </div>
                    <div className="flex flex-col mt-10 ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                      <Testimonial />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
              <UserProfile />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
