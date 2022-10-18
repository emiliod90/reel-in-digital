import styles from "./home.module.css";
import insta from "../../assets/Instagram_icon.png";
import ben from "../../assets/Ben_camera_hero.png";
import mywork_image from "../../assets/home_page_mywork_image.jpg";

export default function Home() {
  return (
    <>
      <section>
        <div className={styles.heroSection}>
          <div>
            {/* <h1>Reel in Digital</h1> */}
            <h1 style={{ margin: "0px" }}>Reel</h1>
            <h1 style={{ margin: "0px" }}>in</h1>
            <h1 style={{ margin: "0px" }}>Digital</h1>
          </div>
          <div className={styles.hero_container}>
            <img className={styles.hero} src={ben} alt="Ben" />
          </div>
        </div>
        {/* <h3>
        <div className={styles.text_slide_first}>a Content Producer.</div>
        <div className={styles.text_slide_second}>a Videographer.</div>
        <div className={styles.text_slide_third}>an Audio Engineer.</div>
      </h3> */}
      </section>
      <section className={styles.introText}>
        <h2>Hi, I'm Benny</h2>
        <h3 style={{ display: "flex" }}>
          I'm a&nbsp;
          <div className={styles.text_slide_one}>Content Producer</div>
          <div className={styles.text_slide_two}>, Videographer</div>
          <div className={styles.text_slide_three}>
            &nbsp;and Audio Engineer.
          </div>
        </h3>
        <p>
          Welcome to my site, where I showcase some of my <b>work</b>.
        </p>
        <p style={{ display: "flex", alignItems: "center" }}>
          Looking for support on a project? Please feel free to contact me, or
          connect for the future:
          <div style={{ display: "flex" }}>
            <a href="https://www.linkedin.com/in/benjamin-dsouza-3b4a44128/">
              <div className={styles.linkedin}>
                <b style={{ color: "#fff" }}>in</b>
              </div>
            </a>
            <a href="https://www.instagram.com/reelindigital/">
              <img src={insta} alt="Reel in Digital Instagram" width={26} />
            </a>
          </div>
        </p>
      </section>
      <section className={styles.myWork}>
        <img className={styles.mywork_image} src={mywork_image} alt="my work" />
        <h2>My Work</h2>
      </section>
    </>
  );
}
