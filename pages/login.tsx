// pages/login.tsx
import React from "react";

const Login = () => {
  return (
    <div className="wrap">
      <div className="contents">
	  	<div className="join_wrap">
			<hgroup>
				<h2>회원가입</h2>
			</hgroup>
			<form action="">
				<div className="join_info">
				<div className="reg_form join_form">
						<h4>계정정보<span>필수 입력 사항</span></h4>
						<div className="row required">
							<label>이메일</label>
							<span className="email">
								<input type="email" name="user_email" required placeholder="이메일" />
							</span>
							<p className="comment">이미 가입된 이메일 주소가 있습니다.</p>
						</div>
						<div className="row required">
							<label>비밀번호</label>
							<span className="password">
								<input type="password" name="user_pw" required placeholder="비밀번호" />
							</span>
							<p className="comment">패스워드는 8~16자 영문, 숫자, 특수문자를 혼용하여 사용 가능합니다.</p>
						</div>
						<div className="row required">
							<label>비밀번호 확인</label>
							<span className="password">
								<input type="password" name="user_pw_confirm" required placeholder="비밀번호 확인" />
							</span>
							<p className="comment">비밀번호를 한번 더 입력해주세요.</p>
						</div>
						<br/><br/>
						<h4>개인정보</h4>
						<div className="row required">
							<label>이름</label>
							<span className="name">
								<input type="text" name="user_name" placeholder="이름"/>
							</span>
						</div>
						<div className="row required on">
							<label>휴대폰번호</label>
							<span className="phone">
								<input type="text" name="user_hp" placeholder="휴대폰번호"/>
								<button type="button" className="cert btn_cert">인증하기</button>
							</span>
							<span className="cert obj_cert_confirm">
								<input type="text" name="cert_num" placeholder="인증번호" />
								<i className="count obj_countdown">03:00</i>
								<button type="button" className="btn_cert_confirm">확인</button>
							</span>
						</div>
						<div className="row required">
							<label>생년월일</label>
							<span className="birth">
								<input type="text" name="user_birth" placeholder="생년월일" value=""/>
								<label className="male"><input type="radio" name="user_gender" value="M" checked/><i>남</i></label>
								<label className="female"><input type="radio" name="user_gender" value="W" /><i>여</i></label>
							</span>
						</div>
						<div className="row">
							<label>상담안내 수신동의</label>
							<span className="chk">
								<label className="child">
									<input type="checkbox" name="agree_ad[]" value="PUSH" checked/>
									<span>PUSH</span>
								</label>
								<label className="child">
									<input type="checkbox" name="agree_ad[]" value="SMS" checked/>
									<span>SMS</span>
								</label>
								<label className="child">
									<input type="checkbox" name="agree_ad[]" value="EMAIL" checked/>
									<span>이메일</span>
								</label>
							</span>
						</div>
						<br/><br/>
						<h4>약관동의</h4>
						<div className="agree_form">
							<div className="all">
								<label><input type="checkbox" name="agree_all" data-rol="agree_all"/><span>전체 동의하고 가입 하기</span></label>
							</div>
							<ul>
								<li className="required">
									<label><input type="checkbox" name="agree[]" value="policy" data-rol="agree"/><span>서비스 이용약관 동의 <b>(필수)</b></span></label>
									<a data-pop="policy"></a>
								</li>
								<li className="required">
									<label><input type="checkbox" name="agree[]" value="private" data-rol="agree"/><span>개인정보 이용/수집 동의 <b>(필수)</b></span></label>
									<a data-pop="private"></a>
								</li>
								<li>
									<label><input type="checkbox" name="agree[]" value="marketing" data-rol="agree"/><span>마케팅 제공 활용 동의 <b>(선택)</b></span></label>
									<a data-pop="marketing"></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</form>
		</div>
      </div>
    </div>
  );
};

export default Login;