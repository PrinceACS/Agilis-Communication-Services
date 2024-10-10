import React from "react";

const MarketAnalysis = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 px-6">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center text-yellow-500 mb-10">
        Market Analysis
      </h1>

      {/* Research Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <ul className="space-y-8">
          <li>
            <ResearchCard
              title="Rapid Growth:"
              description="The cloud telephony market has been experiencing significant growth in recent years, driven by advancements in technology and increasing adoption by businesses across various industries."
            />
          </li>
          <li>
            <ResearchCard
              title="Market Size:"
              description="According to recent studies, the global cloud telephony market size is projected to reach billions of dollars by [insert projected year], reflecting a compound annual growth rate (CAGR) of [insert CAGR] over the forecast period."
            />
          </li>
          <li>
            <ResearchCard
              title="Adoption Rates:"
              description="Businesses of all sizes are increasingly turning to cloud telephony solutions for their communication and marketing needs, with small and medium-sized enterprises (SMEs) accounting for a significant portion of the market demand."
            />
          </li>
        </ul>
        <div className="grid grid-cols-1 gap-y-10 p-10 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-50 rounded-lg shadow-lg">
          <IVResearch
            title="10 Digit IVR"
            marketcap="150"
            description="Hypothetically, the market for IVR could see a percentage growth of 150% over the past year."
          />
          <IVResearch
            title="Incoming/Outgoing"
            marketcap="200"
            description="Adoption of Incoming/Outgoing as a marketing channel, the introduction of automated calls, and the increasing integration of CRM API by businesses across various industries."
          />
          <IVResearch
            title="Toll-Free IVR"
            marketcap="110"
            description="The Toll-Free market witnesses substantial growth of 110% driven by the popularity of instant Call platforms for business communication."
          />
        </div>
      </div>

      {/* IV Research Section */}
    </div>
  );
};

export default MarketAnalysis;

const ResearchCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="p-5 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-yellow-500 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const IVResearch = ({
  title,
  marketcap,
  description,
}: {
  title: string;
  marketcap: string;
  description: string;
}) => {
  return (
    <div className="text-center p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-yellow-500 mb-2">{title}</h2>
      <h3 className="text-5xl font-bold text-gray-800 mb-4">{marketcap}%</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};
