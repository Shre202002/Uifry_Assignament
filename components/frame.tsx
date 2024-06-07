import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./frame.module.css";

export type FrameType = {
  className?: string;
};

const Frame: NextPage<FrameType> = ({ className = "" }) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
      <img
        className={styles.footerLinksIcon}
        loading="lazy"
        alt=""
        src="/star-3.svg"
      />
      <div className={styles.appTitle}>
        <div className={styles.wrapperAppName}>
          <img className={styles.appNameIcon} alt="" src="/frame-1.svg" />
        </div>
        <div className={styles.wrapperAppName1}>
          <img className={styles.appNameIcon1} alt="" src="/frame-2@2x.png" />
        </div>
        <div className={styles.bottomStar}>
          <b className={styles.uifryPremium}>Uifry Premium</b>
          <img
            className={styles.bottomStarChild}
            loading="lazy"
            alt=""
            src="/star-3.svg"
          />
          <img className={styles.bottomStarItem} alt="" src="/star-2.svg" />
        </div>
      </div>
      <img className={styles.frameChild} alt="" src="/rectangle-4.svg" />
      <div className={styles.wrapperDescription}>
        <img
          className={styles.descriptionIcon}
          loading="lazy"
          alt=""
          src="/frame-3.svg"
        />
      </div>
      <h1 className={styles.makeTheBest}>make the best financial decisions</h1>
      <div className={styles.callToAction}>
        <div className={styles.benefits}>
          <p className={styles.cumEtConvallis}>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
        <div className={styles.buttons}>
          <div className={styles.primaryButton}>
            <div className={styles.frameParent}>
              <Button
                className={styles.frameItem}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#000",
                  borderRadius: "4px",
                  "&:hover": { background: "#000" },
                  width: 180,
                  height: 60,
                }}
              >
                get started
              </Button>
              <div className={styles.secondaryButton}>
                <img
                  className={styles.secondaryButtonChild}
                  alt=""
                  src="/group-3.svg"
                />
              </div>
              <div className={styles.watchVideoButton}>
                <div className={styles.watchVideo}>watch video</div>
              </div>
            </div>
          </div>
          <div className={styles.financialBenefits}>
            <div className={styles.benefitCard}>
              <img
                className={styles.benefitCardChild}
                alt=""
                src="/rectangle-3.svg"
              />
              <div className={styles.makeTheBest1}>
                make the best financial decisions
              </div>
              <img
                className={styles.benefitCardItem}
                alt=""
                src="/group-35920@2x.png"
              />
            </div>
            <div className={styles.freeTrialButton}>
              <div className={styles.buttonContent}>
                <img
                  className={styles.buttonContentChild}
                  loading="lazy"
                  alt=""
                  src="/rectangle-5.svg"
                />
                <div className={styles.buttonContentItem} />
                <div className={styles.trialRating}>
                  <img
                    className={styles.trialRatingChild}
                    loading="lazy"
                    alt=""
                    src="/star-7.svg"
                  />
                </div>
                <div className={styles.premiumStar} />
                <div className={styles.trialLabel}>
                  <a className={styles.freeTrial}>free trial</a>
                </div>
                <b className={styles.a}>a</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
