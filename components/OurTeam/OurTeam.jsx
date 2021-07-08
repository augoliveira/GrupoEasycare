import React from "react";
import TeamMember from "./components/TeamMember/TeamMember";

export default function OurTeam({ teamMembers = [] }) {
  return (
    <div className="row my-12">
      <div className="col-12">
        <h2 className="noo-sh-title">Time de profissionais</h2>
      </div>
      {teamMembers.map((memberDetails, index) => (
        <div className="col-sm-12 col-lg-6" key={index}>
          <TeamMember {...memberDetails} />
        </div>
      ))}
    </div>
  );
}
