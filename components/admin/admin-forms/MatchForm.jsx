import React, { useState } from "react";
import axios from "axios";
import Login from "./LoginForm";
import { API_KEY } from "../../../const/API_KEY";
import { useNavigate } from "react-router-dom";

const MatchForm = () => {
  const [logged, setLogged] = useState(false)
  const [match, setMatch] = useState({
    homeTeam: "Local",
    awayTeam: "Vicitante",
    homeScore: 0,
    awayScore: 0,
    hour: "00:00",
    date: "Fecha",
    venue: "Estadio Presbítero Bartolomé Grella",
    city: "Paraná",
    country: "Argentina",
    league: "Primera B Nacional",
    season: "2024",
    homeGoalDetails: [],
    awayGoalDetails: [],
    referee: "Fernando Espinoza",
  });

  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMatch({
      ...match,
      [name]: value,
    });
  };

  const handleGoalDetailChange = (e, index, team) => {
    const { name, value } = e.target;
    const goalDetails =
      team === "home" ? [...match.homeGoalDetails] : [...match.awayGoalDetails];
    goalDetails[index] = { ...goalDetails[index], [name]: value };

    setMatch({
      ...match,
      [team === "home" ? "homeGoalDetails" : "awayGoalDetails"]: goalDetails,
    });
  };

  const handleScoreChange = (e, team) => {
    const value = parseInt(e.target.value, 10);
    const goalDetails =
      team === "home" ? [...match.homeGoalDetails] : [...match.awayGoalDetails];
    const currentLength = goalDetails.length;

    if (value > currentLength) {
      for (let i = currentLength; i < value; i++) {
        goalDetails.push({ player: "", minute: 0, type: "" });
      }
    } else {
      goalDetails.length = value;
    }

    setMatch({
      ...match,
      [team === "home" ? "homeScore" : "awayScore"]: value,
      [team === "home" ? "homeGoalDetails" : "awayGoalDetails"]: goalDetails,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_KEY}/api/matches`, match);
      navigate('/partidos-patronato')
    } catch (error) {
      console.log(error);
    }
  };

  return (<>
  {logged ? <div className="form-container">
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
          <label>Home Score:</label>
          <input
            type="number"
            name="homeScore"
            value={match.homeScore}
            onChange={(e) => handleScoreChange(e, "home")}
          />
        </div>
        <div>
          <h3>Home Team Goals</h3>
          {match.homeGoalDetails?.map((goal, index) => (
            <div key={index} className="goal-details">
              <label>Player:</label>
              <input
                type="text"
                name="player"
                value={goal.player}
                onChange={(e) => handleGoalDetailChange(e, index, "home")}
              />
              <label>Minute:</label>
              <input
                type="number"
                name="minute"
                value={goal.minute}
                onChange={(e) => handleGoalDetailChange(e, index, "home")}
              />
              <label>Type:</label>
              <input
                type="text"
                name="type"
                value={goal.type}
                onChange={(e) => handleGoalDetailChange(e, index, "home")}
              />
            </div>
          ))}
        </div>
        <div className="form-group">
          <label>Away Score:</label>
          <input
            type="number"
            name="awayScore"
            value={match.awayScore}
            onChange={(e) => handleScoreChange(e, "away")}
          />
        </div>
        <div>
          <h3>Away Team Goals</h3>
          {match.awayGoalDetails?.map((goal, index) => (
            <div key={index} className="goal-details">
              <label>Player:</label>
              <input
                type="text"
                name="player"
                value={goal.player}
                onChange={(e) => handleGoalDetailChange(e, index, "away")}
              />
              <label>Minute:</label>
              <input
                type="number"
                name="minute"
                value={goal.minute}
                onChange={(e) => handleGoalDetailChange(e, index, "away")}
              />
              <label>Type:</label>
              <input
                type="text"
                name="type"
                value={goal.type}
                onChange={(e) => handleGoalDetailChange(e, index, "away")}
              />
            </div>
          ))}
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
        <div className="form-group">
          <label>Referee:</label>
          <input
            type="text"
            name="referee"
            value={match.referee}
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
          <strong>Score:</strong> {match.homeScore} - {match.awayScore}
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
        <p>
          <strong>Referee:</strong> {match.referee}
        </p>
        <h3>Home Team Goals</h3>
        <ul>
          {match.homeGoalDetails.map((goal, index) => (
            <li key={index}>
              {goal.player} ({goal.minute}', {goal.type})
            </li>
          ))}
        </ul>
        <h3>Away Team Goals</h3>
        <ul>
          {match.awayGoalDetails.map((goal, index) => (
            <li key={index}>
              {goal.player} ({goal.minute}', {goal.type})
            </li>
          ))}
        </ul>
      </div>
    </div> : <><Login setLogged={setLogged} /></>}
  </>
    
  );
};

export default MatchForm;
