import Image from "next/image";
import ListProductsStyled from "./ListProductsStyled";

const ListProducts = () => {
  return (
    <ListProductsStyled>
      <li>
        <a href="/">
          <Image className='img' src="/assets/shared/desktop/image-category-thumbnail-headphones.png" width="200" height="200" alt=""  />
          <p>headphones
            <span>
              shop
              <Image src="/assets/shared/desktop/icon-arrow-right.svg" alt="" width="5" height="12" />
            </span>
          </p>
        </a>
      </li>
      <li>
        <a href="/">
          <Image className='img'  src="/assets/shared/desktop/image-category-thumbnail-speakers.png"  width="200" height="200" alt=""  />
          <p>speakers
            <span>
              shop
              <Image  src="/assets/shared/desktop/icon-arrow-right.svg" width="5" height="12" alt="" />
            </span>
          </p>
        </a>
      </li>
      <li>
        <a href="/">
          <Image className='img' src="/assets/shared/desktop/image-category-thumbnail-earphones.png"  width="200" height="200" alt=""  />
          <p>earphones
            <span>
              shop
              <Image src="/assets/shared/desktop/icon-arrow-right.svg" width="5" height="12" alt="" />
            </span>
          </p>
        </a>
      </li>
    </ListProductsStyled>
  )
}

export default ListProducts;