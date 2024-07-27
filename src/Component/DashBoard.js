import React from "react";
import DashboardStatsGrid from "./DashboardStatsGrid";
import TransactionChart from "./TransactionChart";
import BuyerProfileChart from "./BuyerProfileChart";
import Orders from "./Orders"
import PopularProduct from "./PopularProduct";

const DashBoard = () => {
  return (
    <div className="py-2 px-2 bg-neutral-100">
      <DashboardStatsGrid />
      <div className="flex flex-row w-full gap-2">
        <TransactionChart />
        <BuyerProfileChart />
      </div>
      <div className="flex flex-row w-full gap-2">
        <Orders/>
        <PopularProduct/>
      </div>
    </div>
  );
};

export default DashBoard;
