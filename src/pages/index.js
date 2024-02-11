import Head from "next/head";
import { Jost } from "next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { useEffect } from "react";
import AOS from "aos";

const jost = Jost({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio - Tom Ruiz</title>
        <meta name="description" content="Le portfolio de Tom Ruiz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./TR.svg" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <section className={styles.home}>
          <div className={styles.name}>
            <div className={styles.prenom}>
              {/*T*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="162"
                fill="currentColor"
                viewBox="0 0 126 162"
              >
                <path fill="#000" d="M0 0h126v42H0z" />
                <path
                  fill="#A53C3C"
                  d="M48 162V42h29v120z"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                />
              </svg>
              {/*O*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="165"
                fill="currentColor"
                viewBox="0 0 126 165"
              >
                <path
                  data-aos="flip-up"
                  data-aos-duration="2000"
                  data-aos-delay="2000"
                  fill="#A53C3C"
                  fill-rule="evenodd"
                  d="M63 125c34.794 0 63-27.982 63-62.5S97.794 0 63 0 0 27.982 0 62.5 28.206 125 63 125Zm0-42c11.598 0 21-9.402 21-21s-9.402-21-21-21-21 9.402-21 21 9.402 21 21 21Z"
                />
                <path fill="#000" d="M0 136h126v29H0z" />
              </svg>
              {/*M*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="165"
                fill="currentColor"
                viewBox="0 0 126 165"
              >
                <path
                  fill="#A53C3C"
                  data-aos="zoom-in-left"
                  data-aos-duration="2000"
                  data-aos-delay="500"
                  fill-rule="evenodd"
                  d="M63.083 34.083 29 0v59.397l34.044 34.044 9.2-9.2.04.039 24.724-24.724V.158L63.083 34.083Z"
                />
                <path fill="#000" d="M97 165V0h29v165zm-97 0V0h29v165z" />
              </svg>
            </div>
          </div>
          <div className={styles.nom}>
            {/*R*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="126"
              height="164"
              fill="currentColor"
              viewBox="0 0 126 164"
            >
              <path fill="#000" d="M21 0h43v29H21z" />
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M126 62.5c0 34.518-28.206 62.5-63 62.5-16.182 0-30.939-6.052-42.096-16V83H63c11.598 0 21-9.402 21-21s-9.402-21-21-21H20.904V16C32.06 6.052 46.818 0 63 0c34.794 0 63 27.982 63 62.5Z"
              />
              <path fill="#000" d="M21 96h49v29H21z" />
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M81.466 163.381h30.861L81.251 78 54 87.919l27.466 75.462Z"
              />
              <path
                fill="#0F5971"
                d="M0 163V0h29v163z"
                data-aos="fade-right"
                data-aos-duration="1500"
              />
            </svg>

            {/*U*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="126"
              height="163"
              fill="currentColor"
              viewBox="0 0 126 163"
            >
              <path
                fill="#0F5971"
                d="M0 134h126v29H0z"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1500"
              />
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M42.006 60.5H0a62.07 62.07 0 0 0 4.796 23.918 62.466 62.466 0 0 0 13.656 20.276 63.015 63.015 0 0 0 20.439 13.548A63.437 63.437 0 0 0 63 123a63.437 63.437 0 0 0 24.11-4.758 63.015 63.015 0 0 0 20.438-13.548 62.465 62.465 0 0 0 13.656-20.276A62.07 62.07 0 0 0 126 60.5H83.994c-.236 10.117-7.627 18.464-17.309 20.178a20.835 20.835 0 0 1-7.37 0c-9.682-1.714-17.073-10.061-17.31-20.178Z"
              />
              <path fill="#000" d="M0 61V0h42v61zm84 0V0h42v61z" />
            </svg>
            {/*I*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="163"
              fill="currentColor"
              viewBox="0 0 29 163"
            >
              <path fill="#000" d="M0 163V40h29v123z" />
              <path
                fill="#0F5971"
                d="M0 29V0h29v29z"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              />
            </svg>
            {/*Z*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="127"
              height="163"
              fill="currentColor"
              viewBox="0 0 127 163"
            >
              <path
                fill="#0F5971"
                d="M0 163v-29L95.18 0h30.965v28.934L30.918 163H0Z"
                data-aos="flip-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              />
              <path
                fill="#000"
                d="M126.145 0h-126v29h126V0Zm0 134h-126v29h126v-29Z"
              />
            </svg>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
