import { render, screen } from '@testing-library/react'
import AlsoLike from './AlsoLike'

const others = [
  {
    slug: "xx99-mark-one-headphones",
    name: "XX99 Mark I",
    image: {
      mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
      tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
      desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
    }
  },
  {
    slug: "xx59-headphones",
    name: "XX59",
    image: {
      mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
      tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
      desktop: "/assets/shared/desktop/image-xx59-headphones.jpg"
    }
  },
  {
    slug: "zx9-speaker",
    name: "ZX9 Speaker",
    image: {
      mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
      tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
      desktop: "/assets/shared/desktop/image-zx9-speaker.jpg"
    }
  }
]

describe("Also Like Component", () => {

  it("should render correctly", () => {

    render(
      <AlsoLike others={others} clickLinkRenderNewData={() => {}}  />
    )

  })

  it("should render correctly with the data passed", async () => {

    render(
      <AlsoLike others={others} clickLinkRenderNewData={() => {}}  />
    )

    const productName = await screen.findByText("XX99 Mark I")

    expect(productName).toBeInTheDocument()
    
  })

})