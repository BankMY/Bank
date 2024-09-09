import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeroColumns.module.css";

export interface HeroColumnsType {
  className?: string;
  investment?: string;
  products?: string;
  exploreOurRangeOfInvestme?: string;
  pickAPlan?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const HeroColumns: FunctionComponent<HeroColumnsType> = ({
  className = "",
  investment,
  products,
  exploreOurRangeOfInvestme,
  pickAPlan,
  propAlignSelf,
  propWidth,
}) => {
  const heroColumnsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const navigate = useNavigate();

  const onHeroFaqClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  return (
    <div
      className={[styles.heroColumns, className].join(" ")}
      style={heroColumnsStyle}
    >
      <div className={styles.heroFeatures}>
        <div className={styles.heroHighlights}>
          <div className={styles.featureNames}>
            <h1 className={styles.investmentProducts}>
              <span className={styles.products}>{investment}</span>
              <span className={styles.col} >{products}</span>
            </h1>
          </div>
          <div className={styles.exploreOurRange}>
            {exploreOurRangeOfInvestme}
          </div>
        </div>
        <div className={styles.heroCallToAction}>
          <div className={styles.heroButtons}>
            <button className={styles.component2}>
              <b className={styles.pickAPlan}>{pickAPlan}</b>
            </button>
            <button className={styles.heroFaq} onClick={onHeroFaqClick}>
              <b className={styles.faq}>FAQ</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroColumns;
