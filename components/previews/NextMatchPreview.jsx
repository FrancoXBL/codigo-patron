export default function NextMatchPreview({nextMatch, close}){
    return (
        <div className="preview">
            <h2>Vista previa</h2>
            <p>
              <strong>Partido:</strong> {nextMatch.homeTeam} vs {nextMatch.awayTeam}
            </p>
            <p>
              <strong>Hora:</strong> {nextMatch.hour} on {nextMatch.date}
            </p>
            <p>
              <strong>Estadio:</strong> {nextMatch.venue}, {nextMatch.city},{" "}
              {nextMatch.country}
            </p>
            <p>
              <strong>Torneo:</strong> {nextMatch.league}
            </p>
            <p>
              <strong>Temporada:</strong> {nextMatch.season}
            </p>
            <button
              type="button"
              className="close-button"
              onClick={() => close(false)}
            >
              Cerrar y seguir editando
            </button>
          </div>
    )
}