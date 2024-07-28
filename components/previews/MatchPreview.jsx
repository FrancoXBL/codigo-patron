export default function MatchPreview({ match, close }){
    return (
        <> 
        <div className="preview">
            <h2>Viste Previa</h2>
            <p>
              <strong>Partido:</strong> {match.homeTeam} vs {match.awayTeam}
            </p>
            <p>
              <strong>Resultado:</strong> {match.homeScore} - {match.awayScore}
            </p>
            <p>
              <strong>Hora:</strong> {match.hour} on {match.date}
            </p>
            <p>
              <strong>Estadio:</strong> {match.venue}, {match.city},{" "}
              {match.country}
            </p>
            <p>
              <strong>Torneo:</strong> {match.league}
            </p>
            <p>
              <strong>Temporada:</strong> {match.season}
            </p>
            <p>
              <strong>Referee:</strong> {match.referee}
            </p>
            <h3>Goles de patronato</h3>
            <ul>
              {match.homeGoalDetails.map((goal, index) => (
                <li key={index}>
                  {goal.player} ({goal.minute}', {goal.type})
                </li>
              ))}
            </ul>
            <h3>Goles del rival</h3>
            <ul>
              {match.awayGoalDetails.map((goal, index) => (
                <li key={index}>
                  {goal.player} ({goal.minute}', {goal.type})
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="close-button"
              onClick={() => close(false)}
            >
              Cerrar Vista Previa
            </button>
          </div>
        </>
    )
}