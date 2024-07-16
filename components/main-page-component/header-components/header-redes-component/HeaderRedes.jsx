import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function HeaderRedes(){

    const openLink = (url) => {
        window.open(url, '_blank').focus()
    }

    return (
        <div className="redes-box-container">
            <div className="box-container">
                <FaFacebook className="icon-redes" onClick={() => openLink('https://www.facebook.com/profile.php?id=100085134386557')}/>
            </div>
            <div className="box-container">
                <FaInstagram className="icon-redes" onClick={() => openLink('https://www.instagram.com/codigopatron/')} />
            </div>
            <div className="box-container">
                <FaYoutube className="icon-redes" onClick={() => openLink('https://www.youtube.com/@codigopatron2336')} />
            </div>
            <div className="box-container">
                <FaXTwitter className="icon-redes" onClick={() => openLink('https://x.com/CodigoPatron_')}/>
            </div>
            <Link to={'/'} className="box-container color-red">
                <IoIosHome className="icon-redes"/>
            </Link>
            <Link to={'/partidos-patronato'} className="box-container color-red">
                <RiCalendarScheduleLine className="icon-redes"/>
            </Link>
        </div>
    )
}