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
          <QRCode
            value="https://tusitio.com"
            size={300}
            bgColor="#0c0c0c"
            fgColor="#CCCCCC"
            level="Q"
            includeMargin={true}
          />
        </div>
        <div className="footer-text">
          <p></p>
          <p>Hablamos en codigo Rojinegro.</p>
          <p>Publicite con nosotros.</p>
          <p>+54 9 3434 46-3389</p>
          <hr />
          <p>© 2024 - 2025 Código Patron. Todos los derechos reservados.</p>
        </div>
      </div>
    </>
  );
}
