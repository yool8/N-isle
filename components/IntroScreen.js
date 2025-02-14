// components/IntroScreen.js
import { useEffect, useState } from "react";
import styles from "../styles/IntroScreen.module.scss"; // SCSS 파일 임포트

const IntroScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  // 인트로 화면을 3초 후에 숨기기
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3초 후 화면 전환
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null; // 화면이 사라지면 아무것도 렌더링하지 않음

  return (
    <div className={styles["intro-screen"]}>
      <h1>N-isle</h1>
    </div>
  );
};

export default IntroScreen;