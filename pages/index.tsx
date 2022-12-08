import Image from "next/image";
import Navbar from "../components/common/Navbar";
import Header from "../components/Head";
import LandingPage from "../components/LandingPage/LandingPage";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />

      <main >
        <LandingPage />
      </main>
    </div>
  );
}
