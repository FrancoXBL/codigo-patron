import React, { useState } from "react";
import axios from "axios";
import Login from "./LoginForm";
import { API_KEY } from "../../../const/API_KEY";
import { useNavigate } from "react-router-dom";
import NextMatchPreview from "../../previews/NextMatchPreview";

const NextMatchForm = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [logged, setLogged] = useState(false);
  const [match, setMatch] = useState({
    homeTeam: "Patronato",
    awayTeam: "Rival",
    hour: "00:00",
    date: "2024-07-15",
    venue: "Bartolome Grella",
    city: "Paraná",
    country: "Argentina",
    league: "B Nacional",
    season: "2024",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMatch({
      ...match,
      [name]: value,
    });
  };
  
  function mostrarVistaPrevia(sendNextMatch, setShowPreview){
    return (<><NextMatchPreview nextMatch={sendNextMatch} close={setShowPreview}/></>)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(match)
      // await axios.post(`${API_KEY}/api/next-match`, match);
      navigate("/partidos-patronato");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!logged ? (
        <>
          <div className={showPreview ? 'preview-hide' : "form-container"}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Patronato:</label>
                <input
                  type="text"
                  name="homeTeam"
                  value={match.homeTeam}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Equipo rival:</label>
                <input
                  type="text"
                  name="awayTeam"
                  value={match.awayTeam}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Hora del partido:</label>
                <input
                  type="time"
                  name="hour"
                  value={match.hour}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Fecha:</label>
                <input
                  type="date"
                  name="date"
                  value={match.date}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Estadio:</label>
                <input
                  type="text"
                  name="venue"
                  value={match.venue}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Ciudad:</label>
                <input
                  type="text"
                  name="city"
                  value={match.city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Pais:</label>
                <input
                  type="text"
                  name="country"
                  value={match.country}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Torneo:</label>
                <input
                  type="text"
                  name="league"
                  value={match.league}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Temporada:</label>
                <input
                  type="text"
                  name="season"
                  value={match.season}
                  onChange={handleChange}
                />
              </div>
              <button type="button" className="close-button" onClick={() => {setShowPreview(true)}}>Ver Vista Previa</button>
              <button type="submit" className="submit-button">
              Todo bien! Subir.
            </button>
            </form>
          </div>
          {!showPreview ? '' : mostrarVistaPrevia(match, setShowPreview)}
          
        </>
      ) : (
        <>
          <Login setLogged={setLogged} />
        </>
      )}
    </>
  );
};

export default NextMatchForm;
