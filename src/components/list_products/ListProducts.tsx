import Image from "next/image";
import Link from "next/link";
import ListProductsStyled from "./ListProductsStyled";
import { ListProductsProps } from "@/types/ListProductsProps";

const ListProducts: React.FC<ListProductsProps> = ({ className }) => {
  
  return (
    <ListProductsStyled className={className}>
      <li>
        <Link href="/Headphones">
          <Image className='img' src="/assets/shared/desktop/image-category-thumbnail-headphones.png" width="200" height="200" alt=""  />
          <p>headphones
            <span>
              shop
              <Image src="/assets/shared/desktop/icon-arrow-right.svg" alt="" width="5" height="12" />
            </span>
          </p>
        </Link>
      </li>
      <li>
        <Link href="/Speakers">
          <Image className='img'  src="/assets/shared/desktop/image-category-thumbnail-speakers.png"  width="200" height="200" alt=""  />
          <p>speakers
            <span>
              shop
              <Image  src="/assets/shared/desktop/icon-arrow-right.svg" width="5" height="12" alt="" />
            </span>
          </p>
        </Link>
      </li>
      <li>
        <Link href="/Earphones">
          <Image className='img' src="/assets/shared/desktop/image-category-thumbnail-earphones.png"  width="200" height="200" alt=""  />
          <p>earphones
            <span>
              shop
              <Image src="/assets/shared/desktop/icon-arrow-right.svg" width="5" height="12" alt="" />
            </span>
          </p>
        </Link>
      </li>
    </ListProductsStyled>
  );
};

export default ListProducts;