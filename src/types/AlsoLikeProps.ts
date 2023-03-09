export interface ItemTypes {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  }
}

export interface AlsoLikeProps {
  clickLinkRenderNewData: (nameToFind: string) => void;
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