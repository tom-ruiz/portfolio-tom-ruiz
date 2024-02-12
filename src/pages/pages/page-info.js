import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import styles from "@/styles/Info.module.css";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import tete from "../../assets/info/tete.png";

export default function PageInfo() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <section className={styles.main}>
        <div className={styles.wrapper}>
          <ul className={styles.dynamictxts}>
            <li>
              <span>Dev web</span>
            </li>
            <li>
              <span>Musicien</span>
            </li>
            <li>
              <span>Artiste</span>
            </li>
            <li>
              <span>Ecologiste</span>
            </li>
          </ul>
        </div>
        <p data-aos="fade-up" data-aos-duration="1000">
          Je suis Tom, un développeur web front-end et intégrateur web de 23
          ans, titulaire d'un Master en Développement Web de Ynov Campus Aix.{" "}
          <br />
          <Image data-aos="flip-up" src={tete} alt="profilepic" />
          <br />
          Depuis mon enfance, j'ai été passionné par l'informatique et j'ai
          rapidement commencé à apprendre à coder. Je suis spécialisé dans la {" "}
          <span>création de sites web</span>, avec une expertise particulière
          dans le <span>développement d'interfaces utilisateur</span> intuitives
          et esthétiques (UI/UX).
          <br /> J'ai eu le privilège de concevoir et de développer des sites
          front-end pour divers prestataires. Mon engagement ne se limite pas à
          la simple présence en ligne ; je suis également impliqué dans des
          projets internes pour des clients à la recherche de{" "}
          <span>solutions front-end</span> sur des initiatives de plus grande
          envergure.
          <br /> Mon objectif est d'apporter ma créativité et mon expertise
          technique pour <span>renforcer votre visibilité</span> et offrir des
          {" "}<span>expériences utilisateur exceptionnelles.</span> En plus de ma
          carrière, je suis passionné par la musique, l'astronomie et l'art. Je
          suis un professionnel dynamique capable de relever les défis de vos
          projets.
          <br />
          <br />{" "}
        </p>

        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className={styles.contentEnd}
        >
          Si vous cherchez quelqu&apos;un de{" "}
          <span data-aos="flip-up">professionnel</span>,{" "}
          <span data-aos="flip-up">passionné</span> et{" "}
          <span data-aos="flip-up">polyvalent</span> pour vos projets de
          développement web et d&apos;intégration web, ne cherchez pas plus loin
          que moi ! <br /> 🤘
        </p>
      </section>
      <section className={styles.cv} data-aos="fade-up">
        <div className={styles.leftside}>
          <h3>Mes compétences</h3>
          <div className={styles.container}>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className={styles.text}>
                  <h4>HTML</h4>
                  <p>🌕🌕🌕🌕🌕</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faPaintBrush} />
                </div>
                <div className={styles.text}>
                  <h4>CSS / SCSS</h4>
                  <p>🌕🌕🌕🌕🌕</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className={styles.text}>
                  <h4>Javascript</h4>
                  <p>🌕🌕🌕🌕🌗</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className={styles.text}>
                  <h4>React.Js / Next.Js</h4>
                  <p>🌕🌕🌕🌑🌑</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faPaintBrush} />
                </div>
                <div className={styles.text}>
                  <h4>UX Design / Figma</h4>
                  <p>🌕🌕🌕🌑🌑</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className={styles.text}>
                  <h4>.NET (C#)</h4>
                  <p>🌕🌕🌗🌑🌑</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className={styles.text}>
                  <h4>Git (Hub/Lab)</h4>
                  <p>🌕🌕🌕🌕🌑</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className={styles.separator}></span>
        <div className={styles.rightside}>
          <h3>J&apos;ai travaillé avec</h3>
          <div className={styles.container}>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>i</div>
                <div className={styles.text}>
                  <h4>Apside</h4>
                  <p>3 ans</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>i</div>
                <div className={styles.text}>
                  <h4>Plan des devens</h4>
                  <p>6 mois (1 projet)</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>i</div>
                <div className={styles.text}>
                  <h4>Projets perso</h4>
                  <p>toute ma vie :)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
