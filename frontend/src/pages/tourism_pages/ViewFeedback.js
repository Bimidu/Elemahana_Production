import React from "react";
import Navbar from "../../components/utility/Navbar";
import Subscribe_newsletter from "../../components/landingPage/subscribe_newsletter";
import Footer from "../../components/utility/Footer";
import FeedbackList from "../../components/AgroTourism/FeedbackList";


export default function FeedbackDisplay() {
    return (
        <div className="flex-col">
            {/* Navbar */}
            <div className="border-b sticky top-0 z-10">
                <Navbar />
            </div>
           <FeedbackList/>
            <Subscribe_newsletter/>
            <Footer/>
        </div>
    )
}