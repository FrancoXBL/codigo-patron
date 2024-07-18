import { Link } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <Link to={'/'}>
    <div
      className="logo-container"
    >
      <img className="header-logo" src="https://i.postimg.cc/G2v39Lmp/logoheader.png"></img>
    </div>
    </Link>
  );
}
