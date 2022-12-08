import Patterns from "./Patterns";
// import bigIllustration from "public/big-illustration.gif";
import bigIllustration from "public/big-illustration-2.png";
import Image from "next/image";
import styles from "./landing.module.scss";

const LandingPage: React.FC<{}> = () => {
  return (
    <div className={styles.landingPage}>
      <Patterns />
      <div className="flex w-full justify-between">
        <div className="self-center w-5/12">
          <div className="flex flex-col justify-center">
            <h1 className="-mt-32">GAME OF THRONES</h1>
            <button>Browse</button>
          </div>
        </div>
        <Image src={bigIllustration} alt="illustration" className="w-6/12" />
      </div>
    </div>
  );
};

export default LandingPage;
