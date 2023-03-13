import GridImagesStyled from "./GridImagesStyled";
import { GridImagesProps } from "@/types/GridImagesProps";
import Image from "next/image";

const GridImages: React.FC<GridImagesProps> = ({ gallery }) => {
  
  return (
    <GridImagesStyled>
      <div className="col1">
        <picture>
          <source
            srcSet={gallery.first.tablet}
            media="(min-width: 480px) and (max-width: 1148px)"
            height={285}
          />
          <source
            srcSet={gallery.first.mobile}
            media="(max-width: 480px)"
            height={174}
          />
          <Image
            src={gallery.first.desktop}
            alt=""
            width={445}
            height={280}
          />
        </picture>
        <picture>
          <source
              srcSet={gallery.second.tablet}
              media="(min-width: 480px) and (max-width: 1148px)"
              height={285}
            />
            <source
              srcSet={gallery.second.mobile}
              media="(max-width: 480px)"
              height={174}
            />
            <Image
              src={gallery.second.desktop}
              alt=""
              height={280}
              width={445}
            />
        </picture>
      </div>
      <div className="col2">
        <picture>
          <source
            srcSet={gallery.third.tablet}
            media="(min-width: 480px) and (max-width: 948px)"
          />
          <source
            srcSet={gallery.third.mobile}
            media="(max-width: 480px)"
            height={368}
          />
          <Image
            src={gallery.third.desktop}
            alt=""
            width={615}
            height={592}
          />
        </picture>
      </div>
    </GridImagesStyled>
  )
}

export default GridImages;