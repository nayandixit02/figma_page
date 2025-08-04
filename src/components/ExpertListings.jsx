import React from "react";
import ExpertCard from "./ExpertCard";

const ExpertListings = ({ experts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {experts.length > 0 ? (
        experts.map((expert) => <ExpertCard key={expert.id} expert={expert} />)
      ) : (
        <p className="col-span-full text-center text-gray-600 text-lg">
          No experts found matching your criteria.
        </p>
      )}
    </div>
  );
};

export default ExpertListings;
