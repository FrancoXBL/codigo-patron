import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../../const/API_KEY";
import AllNewsCard from "./All-news-card";
import LoadingScreen from "../loading-component/LoadingComponent";
import { LuArrowLeftSquare, LuArrowRightSquare } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";

export default function AllNewsContainer() {
  const [pageNumber, setPageNumber] = useState(1);
  const [filterText, setFilterText] = useState('');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLastPage, setIsLastPage] = useState(false);

  const fetchNews = async (page, search) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_KEY}/api/news`, {
        params: {
          page: page,
          search: search,
        },
      });
      setNews(response.data);

      document.title = "Codigo Patron / Noticias";

      // Si la cantidad de noticias devueltas es menor a 10, estamos en la última página
      setIsLastPage(response.data.length < 10);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(pageNumber, filterText);
  }, [pageNumber]);

  const handleNextPage = () => {
    if (!isLastPage) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(prevPageNumber => prevPageNumber - 1);
    }
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const applyFilter = () => {
    setPageNumber(1); // Reiniciar a la página 1 al aplicar el filtro
    fetchNews(1, filterText);
  };

  if (loading) return <LoadingScreen />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <div className="title-filter">
    <h1 className="title-in-filter">Todas las noticias</h1>
      <div className="filter-container">
        <input
        className="filter-input"
          type="text"
          placeholder="Filtrar por título"
          value={filterText}
          onChange={handleFilterChange}
        />
        <button className="filter-button" onClick={applyFilter}><FaSearch/></button>
      </div>
    </div>
      <div className="all-news-card-container">
        {news.map((newsItem, index) => (
          <div className="all-news-card-container" key={index}>
            <AllNewsCard
              title={newsItem.title}
              img={newsItem.img}
              type={newsItem.type}
              id={newsItem._id}
              body={newsItem.body}
            />
          </div>
        ))}
      </div>
      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={pageNumber === 1}>
        <LuArrowLeftSquare className="arrow" />
        </button>
        <button onClick={handleNextPage} disabled={isLastPage}>
          <LuArrowRightSquare className="arrow" />
        </button>
      </div>
    </>
  );
}
