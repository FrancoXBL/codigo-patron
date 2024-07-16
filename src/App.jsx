import HeaderContainer from "../components/main-page-component/header-components/header-container-component/HeaderContainer";
import FooterContainer from "../components/main-page-component/footer-components/footer-container-component/FooterContainer";
import MainViewContainer from "../components/main-page-component/main-view-components/main-view-container-component/MainViewContainer";
import PartidosView from "../components/partidos-patronato-page-component/main-container-partidos-page/PartidosView";
import UniqueNewPage from "../components/unique-new-page-component/UniqueNewPage";
import NotFoundPage from "../components/not-found/NotFound";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import MatchForm from "../components/admin/admin-forms/MatchForm";
import ArticleForm from "../components/admin/admin-forms/NewsForm";
import NextMatchForm from "../components/admin/admin-forms/NextMatchForm";
import Login from "../components/admin/admin-forms/LoginForm";

function App() {
  return (
    <>
      <div className="app">
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<MainViewContainer />}></Route>
          <Route path="/partidos-patronato" element={<PartidosView />}></Route>
          <Route path="/news/:id" element={<UniqueNewPage />}></Route>
          <Route path="/admin/match-form" element={<MatchForm />}></Route>
          <Route path="/admin/news-form" element={<ArticleForm />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin/next-match-form" element={<NextMatchForm />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <FooterContainer />
      </div>
    </>
  );
}

export default App;
