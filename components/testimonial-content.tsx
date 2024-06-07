import type { NextPage } from "next";
import styles from "./testimonial-content.module.css";

export type TestimonialContentType = {
  className?: string;
};

const TestimonialContent: NextPage<TestimonialContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.testimonialContent, className].join(" ")}>
      <blockquote className={styles.arcuAtDictum}>
        “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
        blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
        nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
        suspendisse aliquam.”
      </blockquote>
      <div className={styles.userImageContainer}>
        <img
          className={styles.userImageContainerChild}
          loading="lazy"
          alt=""
          src="/group-28@2x.png"
        />
        <div className={styles.imageWrapper}>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-27@2x.png"
            />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-29@2x.png"
            />
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/group-30@2x.png"
            />
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-31@2x.png"
            />
          </div>
        </div>
      </div>
      <b className={styles.nickJonas}>nick jonas</b>
    </div>
  );
};

export default TestimonialContent;
