import "../styles/globals.scss";
import "../styles/header.scss";
import "../styles/style_user.scss";
import "../styles/membership.scss";
import { AppProps } from "next/app";
import { useState, useEffect } from "react";
import IntroScreen from "../components/IntroScreen"; // IntroScreen 임포트

function MyApp({ Component, pageProps }: AppProps) {
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  // 3초 후에 인트로 화면을 숨기는 타이머 설정
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isIntroVisible && <IntroScreen />} {/* IntroScreen 컴포넌트를 조건부로 렌더링 */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;