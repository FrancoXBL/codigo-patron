import HeaderLogo from "../header-logo-component/HeaderLogo";
import HeaderRedes from "../header-redes-component/HeaderRedes";

export default function HeaderContainer() {
    return (
        <div className="header-container">
            <HeaderLogo />
            <HeaderRedes />
        </div>
    );
}
