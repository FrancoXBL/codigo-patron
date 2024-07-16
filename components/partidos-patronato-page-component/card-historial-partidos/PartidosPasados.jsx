import { useEffect } from "react";
import { useState } from "react";

export default function PartidosPasados({ pastMatch }) {
  const [border, setBorder] = useState("card");

  useEffect(() => {
    pastMatch.awayScore == pastMatch.homeScore
      ? setBorder(border + " border-yellow")
      : "";
    pastMatch.awayScore > pastMatch.homeScore
      ? setBorder(border + " border-red")
      : "";
    pastMatch.awayScore < pastMatch.homeScore
      ? setBorder(border + " border-green")
      : "";
  }, []);

  return (
    <div className={border}>
      {/* Próximo Partido */}
      <div className="card-body">
        <p className="text-muted">
          {new Date(pastMatch.date).toLocaleDateString()} - {pastMatch.hour}
        </p>
        <p>{pastMatch.venue}</p>
        <hr />
        <div className="content-teams">
          <div className="">
            <span className="team-name">{pastMatch.homeTeam}</span>
          </div>
          <div>
            {pastMatch.homeScore} - {pastMatch.awayScore}
          </div>
          <div className="">
            <span className="team-name">{pastMatch.awayTeam}</span>
          </div>
        </div>
        <hr />
        <div className="goal-details">
          <div>
            {pastMatch.homeGoalDetails
              ? pastMatch.homeGoalDetails.map((goal,index) => (
                    <p key={index}>{`${goal.player} - ${goal.minute}' ${goal.type}`}</p>
                ))
              : ""}
          </div>
          <div>
            {pastMatch.awayGoalDetails
              ? pastMatch.awayGoalDetails.map((goal, index) => (
                    <p key={index}>{`${goal.player} - ${goal.minute}' ${goal.type}`}</p>
                ))
              : ""}
          </div>
        </div>
        <p className="text-muted">Árbitro: {pastMatch.referee}</p>
      </div>
    </div>
  );
}
