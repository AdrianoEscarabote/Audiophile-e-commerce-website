export default function getCartMockState() {
  return {
    productReducer: {
      name: "xx59-headphones"
    },
    cartReducer: {
      products: [
        {
          id: 3,
          imagePath: "xx99-mark-one-headphones",
          name: "XX99 Mark I Headphones",
          price: 1750,
          quantity: 1
        },
        {
          id: 2,
          imagePath: "xx59-headphones",
          name: "XX59 Headphones",
          price: 899,
          quantity: 1
        }
      ],
      productsTotalPrice: 0
    }
  }
}