// pages/index.tsx
import React from "react";
import Header from "../components/Header";
import Link from "next/link"; // Link 컴포넌트 임포트

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>정신 차려~~ 이 각박한 세상속에서~~</h1>
        <div className="wrap">
          <div className="contents">
            <div className="cont_box fixed">
              <img src="/icon_login.png" alt="" />
              <div className="btn_box">
              <Link href="/login">LOGIN</Link>
                <Link href="/join">JOIN</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;