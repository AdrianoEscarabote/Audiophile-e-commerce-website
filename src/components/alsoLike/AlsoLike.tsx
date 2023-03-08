import { LinkSeeProduct } from "@/styles/shared/linkSeeProduct";
import Image from "next/image";
import AlsoLikeStyled from "./AlsoLikeStyled";

interface ItemTypes {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  }
}

interface AlsoLikeProps {
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
}

const AlsoLike: React.FC<AlsoLikeProps> = ({ others }) => {

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
                    media="(max-width: 828px)"
                  />
                  <source
                    srcSet={item.image.mobile}
                    media="(max-width: 480px)"
                    width={350}
                    height={318}
                  />
                  <Image src={item.image.desktop} alt="" width={350} height={318} />
                </picture>
                <h4>{item.name}</h4>
                <LinkSeeProduct backgroundcolor="#D87D4A" hoverbackground="#FBAF85" fontcolor="#FFFFFF" href="/">see product</LinkSeeProduct>
              </div>
            ))
          }
        </>
      </div>
    </AlsoLikeStyled>
  )
}

export default AlsoLike;