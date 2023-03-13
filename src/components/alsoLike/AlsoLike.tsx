import { LinkSeeProduct } from "@/styles/shared/linkSeeProduct";
import Image from "next/image";
import AlsoLikeStyled from "./AlsoLikeStyled";
import { ItemTypes, AlsoLikeProps } from "@/types/AlsoLikeProps";

const AlsoLike: React.FC<AlsoLikeProps> = ({ others, clickLinkRenderNewData }) => {
  
  return (
    <AlsoLikeStyled>
      <h3>you may also like</h3>
      <div className="grid-items">
        <>
          {
            others &&
            others.map((item: ItemTypes, index) => (
              <div key={index + 1} className={"col" + (index + 1)}>
                <picture>
                  <source
                    srcSet={item.image.tablet}
                    media="(min-width: 685px) and (max-width: 848px)"
                  />
                  <source
                    srcSet={item.image.mobile}
                    media="(max-width: 685px)"
                    width={350}
                    height={318}
                  />
                  <Image src={item.image.desktop} alt="" width={350} height={318} />
                </picture>
                <h4>{item.name}</h4>
                <LinkSeeProduct onClick={() => clickLinkRenderNewData(item.slug)} backgroundcolor="#D87D4A" hoverbackground="#FBAF85" fontcolor="#FFFFFF" href="/ProductDetail">see product</LinkSeeProduct>
              </div>
            ))
          }
        </>
      </div>
    </AlsoLikeStyled>
  );
};

export default AlsoLike;