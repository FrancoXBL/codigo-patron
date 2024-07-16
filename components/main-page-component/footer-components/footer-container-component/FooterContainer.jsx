import { footerAds } from "../../../../test-data/adsTestData.js";
import AdCarousel from "../ads-carrousel/AdsCarrousel.jsx";
import AdCarouselMobile from "../ads-carrousel/AdsCarrouselMobile.jsx";
export default function FooterContainer() {
  return (
    <div className="footer-container">
      <div className="ads-pc-container">
          <AdCarousel ads={footerAds}
          />
      </div>
      <div className="ads-mobile-container">
          <AdCarouselMobile ads={footerAds}
          />
      </div>
    </div>
  );
}
