import HeaderContainer from "../components/main-page-component/header-components/header-container-component/HeaderContainer";
import FooterContainer from "../components/main-page-component/footer-components/footer-container-component/FooterContainer";
import MainViewContainer from "../components/main-page-component/main-view-components/main-view-container-component/MainViewContainer";
import PartidosView from "../components/partidos-patronato-page-component/main-container-partidos-page/PartidosView";
import UniqueNewPage from "../components/unique-new-page-component/UniqueNewPage";
import NotFoundPage from "../components/not-found/NotFound";
import EditNewsForm from '../components/admin/admin-forms/EditNewsForm'
import { Route, Routes } from "react-router-dom";

import "./App.css";
import MatchForm from "../components/admin/admin-forms/MatchForm";
import ArticleForm from "../components/admin/admin-forms/NewsForm";
import NextMatchForm from "../components/admin/admin-forms/NextMatchForm";
import Login from "../components/admin/admin-forms/LoginForm";
import AllNewsContainer from "../components/all-news-component/all-news-container";
import AdminPanel from "../components/admin/admin-forms/AdminPanel";
import FooterComponent from "../components/footer-component/FooterComponent";

function App() {
  return (
    <>
      <div className="app">
        <div className="background-header">
        </div>
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<MainViewContainer />}></Route>
          <Route path="/partidos-patronato" element={<PartidosView />}></Route>
          <Route path="/news/:id" element={<UniqueNewPage />}></Route>
          <Route path="/admin/match-form" element={<MatchForm />}></Route>
          <Route path="/admin/news-form" element={<ArticleForm />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin/next-match-form" element={<NextMatchForm />}></Route>
          <Route path="/all-news" element={<AllNewsContainer />}></Route>
          <Route path="/edit-new/:id" element={<EditNewsForm />}></Route>
          <Route path="/admin-panel" element={<AdminPanel />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
