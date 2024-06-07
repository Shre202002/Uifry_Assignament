import type { NextPage } from "next";
import Frame from "../components/frame";
import S2Parent from "../components/s2-parent";
import TestimonialContent from "../components/testimonial-content";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const AppLandingPage: NextPage = () => {
  return (
    <div className={styles.appLandingPage}>
      <div className={styles.contentParent}>
        <header className={styles.content}>
          <div className={styles.navBarParent}>
            <div className={styles.navBar}>
              <div className={styles.logo}>
                <div className={styles.menu}>
                  <a className={styles.tm}>TM</a>
                </div>
                <div className={styles.navigation}>
                  <a className={styles.home}>home</a>
                  <a className={styles.aboutUs}>about us</a>
                  <a className={styles.pricing}>pricing</a>
                  <a className={styles.features}>features</a>
                </div>
              </div>
            </div>
            <div className={styles.downloadWrapper}>
              <a className={styles.download}>download</a>
            </div>
          </div>
        </header>
        <Frame />
        <S2Parent />
      </div>
      <div className={styles.testimonialContainerWrapper}>
        <div className={styles.testimonialContainer}>
          <TestimonialContent />
          <div className={styles.appDescriptionContainer}>
            <h3 className={styles.theBestFinancial}>
              the best financial accounting app ever!
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.appLandingPageInner}>
        <div className={styles.fAQHeadingParent}>
          <div className={styles.fAQHeading}>
            <div className={styles.faq}>faq</div>
            <h1 className={styles.frequentlyAskedQuestions}>
              Frequently asked questions
            </h1>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frame}>
              <div className={styles.theBestFinancialAccountingParent}>
                <h3 className={styles.theBestFinancial1}>
                  the best financial accounting app ever!
                </h3>
                <div className={styles.arcuAtDictumSapienMollisWrapper}>
                  <p className={styles.arcuAtDictum}>
                    “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                    ultricies. In ultrices malesuada elit mauris.
                  </p>
                </div>
              </div>
              <div className={styles.theBestFinancialAccountingGroup}>
                <h3 className={styles.theBestFinancial2}>
                  the best financial accounting app ever!
                </h3>
                <div className={styles.questionEntry}>
                  <p className={styles.arcuAtDictum1}>
                    “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                    ultricies. In ultrices malesuada elit mauris.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.frame1}>
              <div className={styles.frameGroup}>
                <div className={styles.theBestFinancialAccountingWrapper}>
                  <h3 className={styles.theBestFinancial3}>
                    the best financial accounting app ever!
                  </h3>
                </div>
                <div className={styles.frame2}>
                  <p className={styles.arcuAtDictum2}>
                    “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                    ultricies. In ultrices malesuada elit mauris.
                  </p>
                </div>
              </div>
              <div className={styles.theBestFinancialAccountingContainer}>
                <h3 className={styles.theBestFinancial4}>
                  the best financial accounting app ever!
                </h3>
                <div className={styles.arcuAtDictumSapienMollisContainer}>
                  <p className={styles.arcuAtDictum3}>
                    “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                    ultricies. In ultrices malesuada elit mauris.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.frame3}>
              <div className={styles.frameContainer}>
                <div className={styles.theBestFinancialAccountingFrame}>
                  <h3 className={styles.theBestFinancial5}>
                    the best financial accounting app ever!
                  </h3>
                </div>
                <div className={styles.frame4}>
                  <p className={styles.arcuAtDictum4}>
                    “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                    ultricies. In ultrices malesuada elit mauris.
                  </p>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <h3 className={styles.theBestFinancial6}>
                  the best financial accounting app ever!
                </h3>
                <div className={styles.arcuAtDictumSapienMollisFrame}>
                  <p className={styles.arcuAtDictum5}>
                    “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                    ultricies. In ultrices malesuada elit mauris.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent1 />
      <main className={styles.logoContainerParent}>
        <section className={styles.logoContainer}>
          <img
            className={styles.logoContainerChild}
            alt=""
            src="/star@2x.png"
          />
          <div className={styles.s3Heading}>
            <div className={styles.testimonialWrapper}>
              <div className={styles.testimonial}>testimonial</div>
            </div>
            <h1 className={styles.whatOurUsers}>
              what our users say about us?
            </h1>
          </div>
        </section>
        <img
          className={styles.footerLinksIcon}
          loading="lazy"
          alt=""
          src="/frame-12.svg"
        />
        <img
          className={styles.helpfrybixcomIcon}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame-13.svg"
        />
        <img
          className={styles.frameIcon1}
          loading="lazy"
          alt=""
          src="/frame-14.svg"
        />
        <div className={styles.wrapperGroup1000002356}>
          <img
            className={styles.wrapperGroup1000002356Child}
            loading="lazy"
            alt=""
            src="/group-1000002356.svg"
          />
        </div>
        <img
          className={styles.footerLinksIcon1}
          loading="lazy"
          alt=""
          src="/star-3.svg"
        />
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/star-1.svg"
        />
        <img
          className={styles.footerLinksIcon2}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className={styles.footerLinksIcon3}
          loading="lazy"
          alt=""
          src="/frame-12.svg"
        />
        <img
          className={styles.emptyContainerIcon}
          loading="lazy"
          alt=""
          src="/frame-16.svg"
        />
        <div className={styles.wrapperS3BgGradientParent}>
          <div className={styles.wrapperS3BgGradient}>
            <img
              className={styles.s3BgGradientIcon}
              loading="lazy"
              alt=""
              src="/s3-bg-gradient.svg"
            />
          </div>
          <div className={styles.wrapperS3TestionmonialImage}>
            <img
              className={styles.s3TestionmonialImageIcon}
              alt=""
              src="/s3-testionmonial-image.svg"
            />
          </div>
        </div>
      </main>
      <FrameComponent />
    </div>
  );
};

export default AppLandingPage;
