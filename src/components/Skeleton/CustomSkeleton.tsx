import Head from "next/head";
import Skeleton from "react-loading-skeleton";
import styles from "./SkeletonStyles.module.css";

const CustomSkeleton = () => (
  <>
  <Head>
    <title>Audiophile e-commerce website</title>
  </Head>
  <div className={styles["custom-skeleton"]}>
    <Skeleton
      count={3}
      duration={2}
    />
    <p className={styles["typing-animation-text"]}>welcome to audiophile e-commerce website! </p>
  </div>
  </>
);

export default CustomSkeleton;