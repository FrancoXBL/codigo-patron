import { useState, useEffect } from "react";
import axios from "axios";
import PartidosPasados from "../card-historial-partidos/PartidosPasados";
import ProximoPartido from "../container-historial-partidos/HistorialPartidos";
import { API_KEY } from "../../../const/API_KEY.JS";
import LoadingScreen from "../../loading-component/LoadingComponent";

export default function PartidosView() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const responseMatches = await axios.get(`${API_KEY}/api/matches`);
        setMatches(responseMatches.data);
        setLoading(false);

        document.title = "Codigo Patron / Partidos";

      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <LoadingScreen></LoadingScreen>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="partidos-patronato-container">
      <div className="partido-proximo-container">
        <ProximoPartido />
      </div>
      <div className="partidos-pasados-container">
        {matches
          .slice()
          .reverse()
          .map((match, index) => (
            <div key={index}>
              <PartidosPasados pastMatch={match} />
            </div>
          ))}
      </div>
    </div>
  );
}
