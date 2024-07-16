import { Link } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <Link to={'/'}>
    <div
      className="logo-container"
    >
      <img className="header-logo" src="../public/logo-header.png"></img>
    </div>
    </Link>
  );
}
