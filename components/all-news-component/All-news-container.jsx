import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../../const/API_KEY";
import AllNewsCard from "./All-news-card";
import LoadingScreen from "../loading-component/LoadingComponent";
export default function AllNewsContainer() {
  const [newNumber, setNewNumber] = useState(1);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${API_KEY}/api/news`, {
            params: { limit: 10 }
          });
        setNews(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <LoadingScreen></LoadingScreen>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="all-news-card-container">
        {news
          .slice()
          .reverse()
          .map((news, index) => (
            <div className="all-news-card-container" key={index}>
              <AllNewsCard
                title={news.title}
                img={news.img}
                type={news.type}
                id={news._id}
                body={news.body}
              />
            </div>
          ))}
      </div>
    </>
  );
}
