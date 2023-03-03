import Image from "next/image";
import InfoStyled from "./InfoStyled";

const InfoComponent = () => {
  
  return (
    <InfoStyled>
      <div className="text-info">
        <h3>Bringing you the <span>best</span> audio gear</h3>
        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
      <Image src="/assets/shared/desktop/image-best-gear.jpg" width="540" height="588" alt=""/>
    </InfoStyled>
  )
}

export default InfoComponent;