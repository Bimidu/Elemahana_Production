import React from "react";

import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import AddNewIncomeOrExpense from "../../components/finances/AddNewIncomeOrExpense.js";
import FinanceNavigation from "../../components/finances/FinanceNavigation.js";


export default function FinanceIncome() {
    return (
        <div className="">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
            <div className="">
                <div className="grid sm:grid-cols-6 ">
                    <div className="  col-span-1 sticky top-0">
                        <SideBar/>
                    </div>

                    <div className="w-full col-span-5 flex flex-col ">
                        <FinanceNavigation/>
                        <AddNewIncomeOrExpense/>

                    </div>
                </div>
            </div>

        </div>
    );
}
