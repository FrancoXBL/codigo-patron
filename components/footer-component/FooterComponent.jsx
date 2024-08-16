import QRCode from "qrcode.react";
import FooterContainer from "../main-page-component/footer-components/footer-container-component/FooterContainer";
export default function FooterComponent() {
  return (
    <>
    <div className="footer-ads-container">
      <FooterContainer />
    </div>
      <div className="footer-container">
        <div className="footer-logo-qr">
          <p>Unirse a la comunidad de whatsapp</p>
          <QRCode
            value="https://chat.whatsapp.com/CVPHnvKdvrq73SsSCTNn0n"
            size={300}
            bgColor="#0c0c0c"
            fgColor="#CCCCCC"
            level="Q"
            includeMargin={true}
          />
        </div>
        <div className="footer-text">
          <p>Hablamos en codigo Rojinegro.</p>
          <p>Publicite con nosotros.</p>
          <p>+54 9 3434 46-3389</p>
          <p>codigopatron1@gmail.com</p>
          <hr />
          <p>© 2024 - 2025 Código Patron. Todos los derechos reservados.</p>
          <hr />
          <p>Desarrollador</p>
          <p>Contacto: +54 9 3435 18-4226 </p>
        </div>
      </div>
    </>
  );
}
