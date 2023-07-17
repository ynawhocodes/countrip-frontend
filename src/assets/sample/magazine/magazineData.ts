import now01 from "./image/now_01.jpg";
import now02 from "./image/now_02.jpg";
import now03 from "./image/now_03.jpg";
import img01 from "./image/magazine_01.jpg";
import img02 from "./image/magazine_02.jpg";
import img03 from "./image/magazine_03.jpg";
import img04 from "./image/magazine_04.jpg";
import img05 from "./image/magazine_05.jpg";
import img06 from "./image/magazine_06.jpg";
import img07 from "./image/magazine_07.jpg";
import { title } from "process";

// now
export const magazineNowData = [
	{ id: 5, title: "호박소 계곡", imageUrl: now01 },
	{ id: 6, title: "두물 머리", imageUrl: now02 },
	{ id: 7, title: "두암초당", imageUrl: now03 },
];

// 농촌 체험
export const magazineRuralExperienceData = [
	{
		id: 1,
		title: "양평 보릿고개 마을 여름프로그램 송어 체험 패키지",
		description: "1인 37,000원",
		imageUrl: img01,
	},
	{
		id: 2,
		title: "양평 외갓집 체험마을",
		description: "1인 29,000원",
		imageUrl: img02,
	},
	{
		id: 3,
		title: "큰삼촌 농촌체험ㆍ휴양마을 ",
		description: "1인 50,000원 ~",
		imageUrl: img03,
	},
	{
		id: 4,
		title: "청운 농촌체험",
		description: "1인 37,000원",
		imageUrl: img04,
	},
];

export const magazineRuralExperienceDetailData = [
	{
		id: 1,
		title: "양평 보릿고개 마을 여름프로그램 송어 체험 패키지",
		imageUrl: img01,
		date: "5월 ~ 9월 (당일체험 오전 10시 30분 시작)",
		address: "경기도 양평군 용문면 연수리 167번지",
		price: "1인당 37,000원",
		telephone: "031-774-7786 / 010-4400-7786",
		homepage: "https://ypnadri.com/shop/item.php?it_id=1686207708",
	},
	{
		id: 2,
		title: "양평 외갓집 체험마을",
		imageUrl: img02,
		date: "상시",
		address: "경기도 양평군 청운면 신론로 344 (외갓집체험마을 사무실)",
		price: "당일 프로그램 : 49,000원",
		telephone: "010-4050-9477",
		homepage: "http://stayfarm.modoo.at",
	},
	{
		id: 3,
		title: "큰삼촌 농촌체험ㆍ휴양마을",
		imageUrl: img03,
		date: "5월 ~ 10월",
		address: "경기도 양평군 청운면 신론로 358",
		price: "당일 프로그램 : 49,000원",
		telephone: "010-4050-9477",
		homepage: "http://stayfarm.modoo.at",
	},
  {
    id: 4,
    title: '청운 농촌 체험',
		imageUrl: img04,
		date: "7월 ~ 8월",
		address: "경기도 양평군 용문면 연수리 167번지",
		price: "1인당 37,000원",
		telephone: "031-774-4301",
		homepage: "http://www.chungwoonfarm.kr",
	},
  {
    id: 5,
    title: '호박소 계곡',
		imageUrl: img05,
		date: "7월 ~ 8월",
		address: "경기도 양평군 용문면 연수리 167번지",
		price: "1인당 37,000원",
		telephone: "031-774-4301",
		homepage: "http://www.chungwoonfarm.kr",
	},
  {
    id: 6,
    title: '두물머리',
		imageUrl: img06,
		date: "7월 ~ 8월",
		address: "경기도 양평군 용문면 연수리 167번지",
		price: "1인당 37,000원",
		telephone: "031-774-4301",
		homepage: "http://www.chungwoonfarm.kr",
	},
  {
    id: 7,
    title: '두암초',
		imageUrl: img07,
		date: "7월 ~ 8월",
		address: "경기도 양평군 용문면 연수리 167번지",
		price: "1인당 37,000원",
		telephone: "031-774-4301",
		homepage: "http://www.chungwoonfarm.kr",
	},
];
