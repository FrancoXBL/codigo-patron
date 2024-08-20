import { horizontalAd } from "../../../../test-data/adsTestData.js";
import AdHorizontal from "../../ads-horizontal/AdHorizontal.jsx";
import LastNewsCard from "../last-news-card-component/LastNewsCard.jsx";
import NormalNewsCard from "../normal-news-card-component/NormalNewsCard.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../../../../const/API_KEY.js";
import { LuArrowLeftSquare, LuArrowRightSquare } from "react-icons/lu";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BiNews } from "react-icons/bi";
import LoadingScreen from "../../../loading-component/LoadingComponent.jsx";

export default function MainViewContainer() {
  const [newNumber, setNewNumber] = useState();
  const [blink, setBlink] = useState("news-card");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const openLink = (url) => {
    window.open(url, "_blank").focus();
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${API_KEY}/api/news`);
        setNews(response.data);
        setLoading(false);
        setNewNumber(response.data.length);

        document.title = "Codigo Patron";
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    setBlink(`${blink} blink`);
    setTimeout(() => {
      setBlink("news-card");
    }, 300);
  }, [newNumber]);

  if (loading) return <LoadingScreen></LoadingScreen>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <div className="title-arrows">
        <h1 className="">Ultimas Noticias</h1>
        <div className="arrows-box">
          <LuArrowLeftSquare
            className="arrow"
            onClick={() =>
              setNewNumber(news.length != newNumber ? newNumber + 1 : newNumber)
            }
          />
          <LuArrowRightSquare
            className="arrow"
            onClick={() =>
              setNewNumber(
                news.length - 5 != newNumber ? newNumber - 1 : newNumber
              )
            }
          />
        </div>
      </div>
      <div className="main-view-container">
        <div className="last-news-card-container">
          <LastNewsCard
            blink={blink}
            type={news[news.length - newNumber].type}
            title={news[news.length - newNumber].title}
            img={news[news.length - newNumber].img}
            body={news[news.length - newNumber].body}
            date={news[news.length - newNumber].date}
            id={news[news.length - newNumber]._id}
          />
          <div className="link-news-container">
            <div className="box-links-container">
              <h2>Todas las noticias</h2>
              <Link to={"/all-news"} className="box-container-news">
                <BiNews className="icon-redes" />
              </Link>
            </div>
            <div className="box-links-container">
              <h2>Historial de partidos</h2>
              <Link to={"/partidos-patronato"} className="box-container-news">
                <RiCalendarScheduleLine className="icon-redes" />
              </Link>
            </div>
          </div>
        </div>
        <h2 className="title-another-news">Puede interesarte</h2>
        <div className="sm-news-card-container">
          {news.slice(6, 10).map((news, index) => (
            <div className="normal-news-card-container" key={index}>
              <NormalNewsCard
                title={news.title}
                img={news.img}
                type={news.type}
                id={news._id}
              />
            </div>
          ))}
        </div>
        <Link to={'/all-news'}>
        <div className="see-more">
          <h1>Ver mas noticias...</h1>
        </div>
        </Link>
      </div>
      <div className="last-news-card-container-small">
        <LastNewsCard
          blink={blink}
          type={news[news.length - newNumber].type}
          title={news[news.length - newNumber].title}
          img={news[news.length - newNumber].img}
          body={news[news.length - newNumber].body}
          date={news[news.length - newNumber].date}
          id={news[news.length - newNumber]._id}
        />
      </div>
      <div className="link-news-container-small">
        <div className="box-links-container">
          <h2>Todas las noticias</h2>
          <Link to={"/all-news"} className="box-container-news">
            <BiNews className="icon-redes" />
          </Link>
        </div>
        <div className="box-links-container">
          <h2>Historial de partidos</h2>
          <Link to={"/partidos-patronato"} className="box-container-news">
            <RiCalendarScheduleLine className="icon-redes" />
          </Link>
        </div>
      </div>

      <hr />
      <div className="codigo-stream-container">
        <h1 className="codgo-stream-title">Recorda vernos en Código Stream!</h1>
        <div
          onClick={() => openLink("https://www.youtube.com/@codigopatron2336")}
          className="codigo-stream-img-container"
        >
          <img
            className="codigo-stream-img"
            src="https://i.postimg.cc/W3yGdVV5/CPportada.png"
            alt="Imagen de portada de codigo stream"
          />
        </div>
      </div>
      <hr />
    </>
  );
}
