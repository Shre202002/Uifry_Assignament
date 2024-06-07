import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.section5Wrapper, className].join(" ")}>
      <div className={styles.section5}>
        <img className={styles.leftContentIcon} alt="" src="/frame-10.svg" />
        <div className={styles.rightContent}>
          <div className={styles.buttonContainer}>
            <div className={styles.wrapperButtonWrapper}>
              <img
                className={styles.buttonWrapperIcon}
                loading="lazy"
                alt=""
                src="/frame-11.svg"
              />
            </div>
            <div className={styles.wrapperS5Immages}>
              <img
                className={styles.s5ImmagesIcon}
                alt=""
                src="/s-5-immages@2x.png"
              />
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.descriptionContent}>
              <h1 className={styles.readyToGet}>ready to get started?</h1>
              <div className={styles.frame} />
              <div className={styles.benefitsContainer}>
                <div className={styles.risusHabitantLeoEgestasMauParent}>
                  <p className={styles.risusHabitantLeo}>
                    Risus habitant leo egestas mauris diam eget morbi tempus
                    vulputate.
                  </p>
                  <div className={styles.ratingContainer}>
                    <Button
                      className={styles.ratingContainerChild}
                      endIcon={
                        <img
                          width="25.8px"
                          height="31.6px"
                          src="/play-store-icon.svg"
                        />
                      }
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#000",
                        fontSize: "18",
                        background: "#fff",
                        borderRadius: "4px",
                        "&:hover": { background: "#fff" },
                      }}
                    >
                      download app
                    </Button>
                  </div>
                  <img
                    className={styles.fAQStar}
                    loading="lazy"
                    alt=""
                    src="/star-6-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
