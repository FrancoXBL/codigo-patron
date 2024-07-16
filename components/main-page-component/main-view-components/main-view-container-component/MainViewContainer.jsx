
import { horizontalAd } from "../../../../test-data/adsTestData.js"
import AdHorizontal from "../../ads-horizontal/AdHorizontal.jsx";
import LastNewsCard from "../last-news-card-component/LastNewsCard.jsx";
import NormalNewsCard from "../normal-news-card-component/NormalNewsCard.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../../../../const/API_KEY.js";

export default function MainViewContainer() {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${API_KEY}/api/news`);
        setNews(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
    <div className="main-view-container">
      <div className="last-news-card-container">
        <LastNewsCard
          type={news[news.length - 1].type}
          title={news[news.length - 1].title}
          img={news[news.length - 1].img}
          body={news[news.length - 1].body}
          date={news[news.length - 1].date}
          id={news[news.length - 1]._id}
        />
      </div>
      <div className="sm-news-card-container">
        {news.slice().reverse().map((news, index) => (
          <div className="normal-news-card-container" key={index}>
            <NormalNewsCard title={news.title} img={news.img} type={news.type} id={news._id} />
          </div>
        ))}
      </div>
    </div>
    <div className="horizontal-ad-container">
      <AdHorizontal img={horizontalAd[0].img} body={horizontalAd[0].body} title={horizontalAd[0].title} url={horizontalAd[0].url}/>
      <AdHorizontal img={horizontalAd[1].img} body={horizontalAd[1].body} title={horizontalAd[1].title} url={horizontalAd[1].url}/>
    </div>
    </>
  );
}
