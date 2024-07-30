import { horizontalAd } from "../../../test-data/adsTestData";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../../../const/API_KEY.JS";
import LoadingScreen from "../../loading-component/LoadingComponent";


const ProximoPartido = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextMatch, setNextMatch ] = useState() 

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const responseMatches = await axios.get(`${ API_KEY }/api/next-match`);
        setNextMatch(responseMatches.data[0]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <LoadingScreen>Loading...</LoadingScreen>;
  if (error) return <p>Error: {error}</p>;
    return (
      <div className="card">
      {/* Próximo Partido */}
      <div className="card-body">
        <h5 className="card-title">Próximo Partido</h5>
        <p className="text-muted">{new Date(nextMatch.date).toLocaleDateString()} - {nextMatch.hour}</p>
        <p>{nextMatch.venue}</p>
        <hr />
        <div className="content-teams">
          <div className="">
            <span className="team-name">{nextMatch.homeTeam}</span>
          </div>
          <div>
            -
          </div>
          <div className="">
            <span className="team-name">{nextMatch.awayTeam}</span>
          </div>
        </div>
        <hr />
      <div className="publi-card">
      </div>
      </div>
    </div>
    );
  };
  
  export default ProximoPartido;
