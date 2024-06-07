import type { NextPage } from "next";
import styles from "./s2-parent.module.css";

export type S2ParentType = {
  className?: string;
};

const S2Parent: NextPage<S2ParentType> = ({ className = "" }) => {
  return (
    <div className={[styles.s2Parent1, className].join(" ")}>
      <div className={styles.featureList}>
        <h1 className={styles.uifryPremium}>uifry premium</h1>
        <div className={styles.features}>features</div>
        <b className={styles.budgetingIntervals}>budgeting intervals</b>
        <p className={styles.cumEtConvallis}>
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <b className={styles.budgetingIntervals1}>budgeting intervals</b>
        <p className={styles.cumEtConvallis1}>
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <b className={styles.budgetingIntervals2}>budgeting intervals</b>
        <p className={styles.cumEtConvallis2}>
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className={styles.featureIcons}>
          <img className={styles.star05Icon} alt="" src="/star05.svg" />
          <img className={styles.cube02Icon} alt="" src="/cube02.svg" />
          <img className={styles.cube04Icon} alt="" src="/cube04.svg" />
          <img
            className={styles.featureIconsChild}
            alt=""
            src="/group-35933@2x.png"
          />
        </div>
        <div className={styles.wrapperGroup35897}>
          <img
            className={styles.wrapperGroup35897Child}
            loading="lazy"
            alt=""
            src="/group-35897.svg"
          />
        </div>
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame-4.svg"
        />
      </div>
      <div className={styles.advantageHeading}>
        <p className={styles.arcuAtDictum}>
          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
          blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
          nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
          suspendisse aliquam.
        </p>
        <div className={styles.advantageList}>
          <div className={styles.frameParent}>
            <div className={styles.advatnagesParent}>
              <div className={styles.advatnages}>advatnages</div>
              <h1 className={styles.whyChooseUifry}>why choose Uifry?</h1>
            </div>
            <div className={styles.notification}>
              <img
                className={styles.notificationChild}
                loading="lazy"
                alt=""
                src="/group-35899.svg"
              />
              <div className={styles.cleverNotificationsWrapper}>
                <h3 className={styles.cleverNotifications}>
                  clever notifications
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.spacingIcon} alt="" src="/frame-5.svg" />
      <div className={styles.testimonials}>
        <div className={styles.testimonialCard}>
          <div className={styles.arcuAtDictumSapienMollisParent}>
            <p className={styles.arcuAtDictum1}>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-35899-1.svg"
            />
            <img
              className={styles.frameItem}
              alt=""
              src="/group-35937@2x.png"
            />
            <div className={styles.userImage}>
              <img
                className={styles.userImageChild}
                alt=""
                src="/group-35932@2x.png"
              />
              <div className={styles.frame}>
                <div className={styles.callToAction}>
                  <div className={styles.cardDetails}>
                    <div className={styles.cardType}>
                      <img
                        className={styles.groupIcon}
                        loading="lazy"
                        alt=""
                        src="/group@2x.png"
                      />
                      <div className={styles.brandName}>
                        <b className={styles.tm}>TM</b>
                      </div>
                    </div>
                    <div className={styles.cardProvider}>
                      <img
                        className={styles.creditCardvisaTypewhite}
                        loading="lazy"
                        alt=""
                        src="/credit-cardvisa-typewhite.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.validity}>
                    <div className={styles.expiryDate}>
                      <div className={styles.validThruLabel}>
                        <div className={styles.validThru}>VALID THRU</div>
                      </div>
                      <div className={styles.creditCardDate}>07/24</div>
                    </div>
                  </div>
                </div>
                <div className={styles.creditCardSpacer}>
                  0000 8888 2222 3333
                </div>
              </div>
            </div>
            <img
              className={styles.cardElementsIcon}
              alt=""
              src="/frame-6.svg"
            />
            <img
              className={styles.cardElementsIcon1}
              alt=""
              src="/frame-7.svg"
            />
            <img
              className={styles.cardElementsIcon2}
              loading="lazy"
              alt=""
              src="/frame-8.svg"
            />
            <img
              className={styles.cardElementsIcon3}
              loading="lazy"
              alt=""
              src="/frame-9.svg"
            />
          </div>
          <div className={styles.statusBadge}>
            <div className={styles.badgeContainer}>
              <div className={styles.progressIndicator}>
                <div className={styles.progressCircles} />
                <div className={styles.progressCircles1} />
              </div>
              <img
                className={styles.badgeContainerChild}
                alt=""
                src="/group-35935@2x.png"
              />
              <div className={styles.onHold}>
                <img
                  className={styles.arcuAtDictumSapienMollisV}
                  loading="lazy"
                  alt=""
                  src="/rectangle-13@2x.png"
                />
                <div className={styles.fromName}>
                  <div className={styles.fromAdom}>From Adom</div>
                </div>
                <div className={styles.deliveryTime}>
                  <b className={styles.bannerUserName}>$560.00</b>
                </div>
              </div>
            </div>
            <div className={styles.customizationFeature}>
              <h3 className={styles.fullyCustomizable}>fully customizable</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default S2Parent;
