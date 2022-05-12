import * as S from "./signup.styles";

export default function SignupUI() {
    return (
        <S.Wrapper>
            <S.SignUpContents>
                <S.SignUpTop>
                    <S.SignUpTitle>회원가입</S.SignUpTitle>
                    <S.SignUpProfileButton></S.SignUpProfileButton>
                    <S.SignUpProfileSelect>프로필 사진 선택</S.SignUpProfileSelect>
                </S.SignUpTop>
                <S.SignUpInfo>
                    <S.SignUpName>이름</S.SignUpName>
                    <S.SignupInput placeholder="이름을 입력해주세요"></S.SignupInput>
                    <S.SignUpEmail>이메일</S.SignUpEmail>
                    <S.SignupInput placeholder="이메일을 입력해주세요"></S.SignupInput>
                    <S.SignUpPassword>비밀번호</S.SignUpPassword>
                    <S.PasswordInput1 placeholder="비밀번호를 입력해주세요"></S.PasswordInput1>
                    <br />
                    <br />
                    <S.PasswordInput2 placeholder="비밀번호를 입력해주세요"></S.PasswordInput2>
                </S.SignUpInfo>
                <S.SignupPhone>
                    <S.SignUpNumber>휴대폰번호</S.SignUpNumber>
                    <S.SignUpcertification>
                        <span>
                            <S.SignUpPhoneInput placeholder="010123456678"></S.SignUpPhoneInput>
                            <S.SignUpPhoneSendButton>인증번호 전송</S.SignUpPhoneSendButton>
                        </span>
                        <br />
                        <span>
                            <br />
                            <S.SignUpPhoneInput placeholder="인증받는 번호를 남겨주세요"></S.SignUpPhoneInput>
                            <S.SignUpPhoneSendButton>인증하기</S.SignUpPhoneSendButton>
                        </span>
                    </S.SignUpcertification>
                </S.SignupPhone>
                <S.SignAboutMe>
                    <S.SignAboutTitle>자기소개</S.SignAboutTitle>
                    <S.SignAboutInput placeholder="자기소개를 입력해주세요"></S.SignAboutInput>
                </S.SignAboutMe>
                <S.SignButtonWrapper>
                    <S.SignSubmitButton>회원가입</S.SignSubmitButton>
                </S.SignButtonWrapper>
            </S.SignUpContents>
        </S.Wrapper>
    );
}
