export interface DataProps {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  }
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  }
  new: boolean;
  price: number;
  description: string;
  feature1: string;
  feature2: string;
  includes: [
    {
      quantity: number;
      item: string;
    },
    {
      quantity: number;
      item: string;
    },
    {
      quantity: number;
      item: string;
    },
    {
      quantity: number;
      item: string;
    },
    {
      quantity: number;
      item: string;
    }
  ]
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    }
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    }
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    }
  }
  others: [
    {
      slug: string;
      name: string;
      image: {
        mobile: string;
        tablet: string;
        desktop: string;
      }
    },
    {
      slug: string;
      name: string;
      image: {
        mobile: string;
        tablet: string;
        desktop: string;
      }
    },
    {
      slug: string;
      name: string;
      image: {
        mobile: string;
        tablet: string;
        desktop: string;
      }
    }
  ]
}

export interface ProductTypeCart {
  name: string,
  price: number,
  imagePath: string,
  quantity: number,
  id: number
}

export interface productState {
  name: string
};

export interface RootStateProduct {
  productReducer: productState;
};