
import { RiFacebookBoxLine, RiTwitterXLine, RiYoutubeLine, RiInstagramLine } from "react-icons/ri";
export default function HeaderRedes(){

    const openLink = (url) => {
        window.open(url, '_blank').focus()
    }

    return (
        <div className="redes-box-container">
            <div className="box-container">
                <RiFacebookBoxLine className="icon-redes" onClick={() => openLink('https://www.facebook.com/profile.php?id=100085134386557')}/>
            </div>
            <div className="box-container">
                <RiInstagramLine className="icon-redes" onClick={() => openLink('https://www.instagram.com/codigopatron/')} />
            </div>
            <div className="box-container">
                <RiYoutubeLine className="icon-redes" onClick={() => openLink('https://www.youtube.com/@codigopatron2336')} />
            </div>
            <div className="box-container">
                <RiTwitterXLine className="icon-redes" onClick={() => openLink('https://x.com/CodigoPatron_')}/>
            </div>
        </div>
    )
}