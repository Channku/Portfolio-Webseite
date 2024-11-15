import { getImageUrl } from "../../utils";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, im Christoph </h1>
        <p className={styles.description}>
          {" "}
          Im a Way-Up apprentice in application development.{" "}
        </p>
      </div>
      <img
        className={styles.ichImg}
        src={getImageUrl("hero/ich.jpg")}
        alt="picture of me"
      ></img>
      <div className={styles.topBlur}> </div>
      <div className={styles.bottomBlur}> </div>
    </section>
  );
};
