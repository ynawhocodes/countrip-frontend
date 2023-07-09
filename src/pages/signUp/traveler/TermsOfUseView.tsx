import React from 'react'
import styled from 'styled-components'
import GoBackHeader from '../../../components/common/GoBackHeader';
import { StyledCommonBlackBottomButton, StyledCommonWhiteWrap } from '../../../styles/common';
import { StyledTitle } from '../../../styles/signUp-styles';
import { colors } from '../../../styles/variables'

const TermsOfUseView = () => {
  return (
    <>
      <GoBackHeader />
      <StyledCommonWhiteWrap>
        <StyledTitle>서비스 이용약관</StyledTitle>
        <StyledContent>{text}</StyledContent>
      </StyledCommonWhiteWrap>
      <StyledCommonBlackBottomButton>확인 및 동의</StyledCommonBlackBottomButton>
    </>
  )

};
export default TermsOfUseView;

const StyledContent = styled.p`
  font-size: 14px;
  white-space: pre-wrap;
`

const text = `제 1 조 (목적)
본 약관은 ㈜컨트립(이하“회사”)이 제공하는 컨트립 및 컨트립 관련 제반 서비스의 이용과 관련하여 회사와 이용자와의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.

제 2 조 (정의)
본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
“서비스”라 함은 컨트립이 제공하는 여행 정보 플랫폼 관련 서비스로서, 구현되는 단말기(PC, TV, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 “이용자”가 이용할 수 있는 “회사”가 제공하는 컨트립 및 컨트립 관련 웹(Web)∙앱(App) 등의 제반 서비스를 의미합니다.
“이용자”라 함은 회사의 “서비스”에 접속하여 본 약관에 따라 “회사”가 제공하는 “서비스”를 이용하는 회원 및 비회원을 말합니다.
“회원”이라 함은 회사의 “서비스”에 접속하여 본 약관에 따라 “회사”와 이용계약을 체결하고 “회사”가 제공하는 “서비스”를 이용하는 고객을 말합니다.
“비회원”이라 함은 회원가입을 하지 않고 회사의 “서비스”에 접속하여 이 약관에 따라 “회사”와 이용계약을 체결하고 “회사”가 제공하는 “서비스”를 이용하는 고객을 말합니다.
“아이디(ID)”라 함은 “회원”의 식별과 “서비스” 이용을 위하여 “회원”이 정하고 “회사”가 승인하는 전자우편 주소를 의미합니다.
“비밀번호”라 함은 “회원”이 부여받은 아이디와 일치되는 “회원”임을 확인하고 비밀보호를 위해 ”회원” 자신이 정한 문자 또는 숫자의 조합을 의미합니다.
“판매자”라 함은 “회사”가 제공하는 “서비스”를 이용하여 자신의 상품, 용역, 서비스 등을 판매, 제공하는 자를 의미하며, 회사로부터 예약, 판매대행, 광고 서비스 등을 제공받는 자를 의미하며, “회사”가 “이용자”에게 상품 등을 직접 판매, 제공하는 경우 “판매자”의 지위를 갖습니다.
“유료 서비스“라 함은 ”회사”가 제공하는 숙박업소 예약 등 기타 유료로 이용할 수 있는 상품 및 제반서비스를 의미합니다.
“콘텐츠”라 함은 다음 각 목의 내용과 관련하여 “회사”, 에디터 또는 회원이 동영상, 이미지, 음원, 텍스트 등을 편집하여 “회사”가 운영하는 “서비스”에 업로드 할 목적으로 제작되는 창작물을 의미합니다.

가. 여행 관련 소식

나. 추천 여행 일정

다. 여행기록

라. 그 밖에 여행과 관련된 지식 또는 정보

“에디터”라 함은 “회사”와 고용계약, 업무위탁계약 또는 업무제휴계약 등을 체결하여 “서비스” 내지 “서비스”와 관련된 페이지에 업로드 할 목적으로 “콘텐츠”를 제작 및 공급하는 개인 또는 기업을 의미합니다.`