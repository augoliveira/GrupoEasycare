import React from "react";
import OurTeam from "./OurTeam";

export default function OurTeamContainer() {
  const teamMembers = useSelector((state) => state.teamMembers);
  return <OurTeam teamMembers={teamMembers} />;
}
