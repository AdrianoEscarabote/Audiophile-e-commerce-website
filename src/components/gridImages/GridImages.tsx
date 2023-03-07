import GridImagesStyled from "./GridImagesStyled";

interface GridImagesProps {
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    },
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    },
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    }
  }
}

const GridImages: React.FC<GridImagesProps> = ({ gallery }) => {

  return (
    <GridImagesStyled first={gallery.first} second={gallery.second} third={gallery.third} >
      <div className="col1">
        <div className="img1"></div>
        <div className="img2"></div>
      </div>
      <div className="col2">
        <div className="img3"></div>
      </div>
    </GridImagesStyled>
  )
}

export default GridImages;