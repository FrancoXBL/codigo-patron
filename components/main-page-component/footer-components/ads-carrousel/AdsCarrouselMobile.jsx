import FooterAds from '../footer-ads-component/FooterAds.jsx'
import { useState, useEffect } from 'react';

export default function AdCarouselMobile({ ads }) {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [ads.length]);
  
  const visibleAds = [];
  for (let i = 0; i < 3; i++) {
    visibleAds.push(ads[(currentIndex + i) % ads.length]);
  }

  return (
    <div className="ad-carousel">
      {visibleAds.map((ad, index) => (
        <FooterAds
          key={index}
          img={ad.img}
          title={ad.title}
          url={ad.url}
          body={ad.body}
        />
      ))}
    </div>
  );
}