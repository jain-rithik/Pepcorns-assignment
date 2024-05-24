import React, { useState } from "react";
import CompanyDetailsHead from "./CompanyDetailsHead";
import CompanyDetailsBody from "./CompanyDetailsBody";
import CompanyUpdates from "./CompanyUpdates";
import CompanyReviews from "./CompanyReviews";
import CompanyDicussion from "./CompanyDicussion";

const CompanyDetails = () => {
    const [activeTab, setActiveTab] = useState("Pitch");

    const renderContent = () => {
        switch (activeTab) {
            case "Pitch":
                return <CompanyDetailsBody />;
            case "Discussion":
                return <CompanyDicussion />;
            case "Updates": 
                return <CompanyUpdates />;
            case "Reviews":
                return <CompanyReviews />;
            default:
                return <CompanyDetailsBody />;
        }
    }
  return (
    <div>
        <CompanyDetailsHead activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderContent()}
    </div>
    
  );
};

export default CompanyDetails;
