import React, { useState } from "react";
import axios from "axios";
import Login from "./LoginForm";
import { API_KEY } from "../../../const/API_KEY";
import { useNavigate } from "react-router-dom";

const NextMatchForm = () => {
  const [logged, setLogged] = useState(false);
  const [match, setMatch] = useState({
    homeTeam: "FC Barcelona",
    awayTeam: "Real Madrid",
    hour: "20:45",
    date: "2024-07-15",
    venue: "Camp Nou",
    city: "Barcelona",
    country: "Spain",
    league: "La Liga",
    season: "2023/2024",
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMatch({
      ...match,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      await axios.post(`${API_KEY}/api/next-match`, match);
      navigate('/partidos-patronato')
} catch (error) {
    console.log(error);
}
};

return (
  <>
    {logged ? (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Home Team:</label>
            <input
              type="text"
              name="homeTeam"
              value={match.homeTeam}
              onChange={handleChange}
              />
          </div>
          <div className="form-group">
            <label>Away Team:</label>
            <input
              type="text"
              name="awayTeam"
              value={match.awayTeam}
              onChange={handleChange}
              />
          </div>

          <div className="form-group">
            <label>Hour:</label>
            <input
              type="time"
              name="hour"
              value={match.hour}
              onChange={handleChange}
              />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={match.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Venue:</label>
            <input
              type="text"
              name="venue"
              value={match.venue}
              onChange={handleChange}
              />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={match.city}
              onChange={handleChange}
              />
          </div>
          <div className="form-group">
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={match.country}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>League:</label>
            <input
              type="text"
              name="league"
              value={match.league}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Season:</label>
            <input
              type="text"
              name="season"
              value={match.season}
              onChange={handleChange}
              />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        <div className="preview">
          <h2>Preview</h2>
          <p>
            <strong>Match:</strong> {match.homeTeam} vs {match.awayTeam}
          </p>
          <p>
            <strong>Time:</strong> {match.hour} on {match.date}
          </p>
          <p>
            <strong>Venue:</strong> {match.venue}, {match.city}, {match.country}
          </p>
          <p>
            <strong>League:</strong> {match.league}
          </p>
          <p>
            <strong>Season:</strong> {match.season}
          </p>
        </div>
      </div>
    ) : (
      <>
        <Login setLogged={setLogged} />
      </>
    )}
  </>
);
};

export default NextMatchForm;
