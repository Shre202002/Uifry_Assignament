import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.columnContainerWrapper, className].join(" ")}>
      <div className={styles.columnContainer}>
        <div className={styles.brandInfo}>
          <div className={styles.brandNameContainer}>
            <div className={styles.brandLogoWrapper}>
              <div className={styles.frameParent}>
                <div className={styles.tmWrapper}>
                  <div className={styles.tm}>TM</div>
                </div>
                <div className={styles.contactInfo}>
                  <div className={styles.helpfrybixcom}>help@frybix.com</div>
                  <div className={styles.contactDetails}>+1 234 456 678 89</div>
                </div>
              </div>
            </div>
            <div className={styles.navigationContainer}>
              <h2 className={styles.links}>links</h2>
              <div className={styles.home}>home</div>
              <div className={styles.aboutUs}>about us</div>
              <div className={styles.bookings}>bookings</div>
            </div>
            <div className={styles.legalContainer}>
              <div className={styles.legalLinks}>
                <div className={styles.frameGroup}>
                  <div className={styles.legalParent}>
                    <h2 className={styles.legal}>legal</h2>
                    <div className={styles.termsOfUse}>terms of use</div>
                  </div>
                  <div className={styles.cookiePolicy}>cookie policy</div>
                </div>
                <div className={styles.productContainer}>
                  <h2 className={styles.product}>product</h2>
                  <div className={styles.takeTour}>take tour</div>
                  <div className={styles.liveChat}>live chat</div>
                </div>
              </div>
              <div className={styles.blogContainer}>
                <div className={styles.blog}>blog</div>
              </div>
            </div>
            <div className={styles.newsletterContainer}>
              <h2 className={styles.newsletter}>Newsletter</h2>
              <div className={styles.newsletterDescriptionContain}>
                <div className={styles.stayUpTo}>Stay up to date</div>
              </div>
              <div className={styles.emailInput}>
                <div className={styles.frameContainer}>
                  <div className={styles.privacyPolicyParent}>
                    <div className={styles.privacyPolicy}>
                      <div className={styles.privacyPolicy1}>
                        privacy policy
                      </div>
                      <div className={styles.emailField}>
                        <div className={styles.yourEmail}>{`Your email `}</div>
                      </div>
                    </div>
                    <div className={styles.subscribeButton}>
                      <Button
                        className={styles.frame}
                        disableElevation={true}
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "16",
                          background: "#000",
                          borderRadius: "4px",
                          "&:hover": { background: "#000" },
                          width: 160,
                          height: 61,
                        }}
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                  <div className={styles.reviews}>
                    <div className={styles.reveiws}>reveiws</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.frame1}>
          <div className={styles.copyright2022Uifrycom}>
            Copyright 2022 uifry.com all rights reserved
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FrameComponent;
