import { LineName } from "../components/_common/LineBadge/LineBadge";

const lineData: { station: string; lines: LineName[] }[] = [
  { lines: ["1호선"], station: "소요산" },
  { lines: ["1호선"], station: "동두천" },
  { lines: ["1호선"], station: "보산" },
  { lines: ["1호선"], station: "동두천중앙" },
  { lines: ["1호선"], station: "지행" },
  { lines: ["1호선"], station: "덕정" },
  { lines: ["1호선"], station: "덕계" },
  { lines: ["1호선"], station: "양주" },
  { lines: ["1호선"], station: "녹양" },
  { lines: ["1호선"], station: "가능" },
  { lines: ["1호선"], station: "의정부" },
  { lines: ["1호선"], station: "회룡" },
  { lines: ["1호선"], station: "망월사" },
  { lines: ["1호선", "7호선"], station: "도봉산" },
  { lines: ["1호선"], station: "도봉" },
  { lines: ["1호선"], station: "방학" },
  { lines: ["1호선", "4호선"], station: "창동" },
  { lines: ["1호선"], station: "녹천" },
  { lines: ["1호선"], station: "월계" },
  { lines: ["1호선"], station: "광운대" },
  { lines: ["1호선", "6호선"], station: "석계" },
  { lines: ["1호선"], station: "신이문" },
  { lines: ["1호선"], station: "외대앞" },
  { lines: ["1호선", "경의중앙선", "경춘선"], station: "회기" },
  { lines: ["1호선", "경의중앙선", "경춘선", "수인분당선"], station: "청량리" },
  { lines: ["1호선"], station: "제기동" },
  { lines: ["1호선", "2호선", "우이신설선"], station: "신설동" },
  { lines: ["1호선", "6호선"], station: "동묘앞" },
  { lines: ["1호선", "4호선"], station: "동대문" },
  { lines: ["1호선"], station: "종로5가" },
  { lines: ["1호선", "3호선", "5호선"], station: "종로3가" },
  { lines: ["1호선"], station: "종각" },
  { lines: ["1호선", "2호선"], station: "시청" },
  { lines: ["1호선", "4호선", "경의중앙선", "공항철도"], station: "서울" },
  { lines: ["1호선"], station: "남영" },
  { lines: ["1호선", "경의중앙선"], station: "용산" },
  { lines: ["1호선", "9호선"], station: "노량진" },
  { lines: ["1호선"], station: "대방" },
  { lines: ["1호선", "5호선"], station: "신길" },
  { lines: ["1호선"], station: "영등포" },
  { lines: ["1호선", "2호선"], station: "신도림" },
  { lines: ["1호선"], station: "구로" },
  { lines: ["1호선"], station: "구일" },
  { lines: ["1호선"], station: "개봉" },
  { lines: ["1호선"], station: "오류동" },
  { lines: ["1호선", "7호선"], station: "온수" },
  { lines: ["1호선"], station: "역곡" },
  { lines: ["1호선", "서해선"], station: "소사" },
  { lines: ["1호선"], station: "부천" },
  { lines: ["1호선"], station: "중동" },
  { lines: ["1호선"], station: "송내" },
  { lines: ["1호선"], station: "부개" },
  { lines: ["1호선"], station: "부평" },
  { lines: ["1호선"], station: "백운" },
  { lines: ["1호선"], station: "동암" },
  { lines: ["1호선"], station: "간석" },
  { lines: ["1호선"], station: "주안" },
  { lines: ["1호선"], station: "도화" },
  { lines: ["1호선"], station: "제물포" },
  { lines: ["1호선"], station: "도원" },
  { lines: ["1호선"], station: "동인천" },
  { lines: ["1호선", "수인분당선"], station: "인천" },
  { lines: ["2호선"], station: "을지로입구" },
  { lines: ["2호선", "3호선"], station: "을지로3가" },
  { lines: ["2호선", "5호선"], station: "을지로4가" },
  { lines: ["2호선", "4호선", "5호선"], station: "동대문역사문화공원" },
  { lines: ["2호선", "6호선"], station: "신당" },
  { lines: ["2호선"], station: "상왕십리" },
  { lines: ["2호선", "5호선", "경의중앙선", "수인분당선"], station: "왕십리" },
  { lines: ["2호선"], station: "한양대" },
  { lines: ["2호선"], station: "뚝섬" },
  { lines: ["2호선"], station: "성수" },
  { lines: ["2호선", "7호선"], station: "건대입구" },
  { lines: ["2호선"], station: "구의" },
  { lines: ["2호선"], station: "강변" },
  { lines: ["2호선"], station: "잠실나루" },
  { lines: ["2호선", "8호선"], station: "잠실" },
  { lines: ["2호선"], station: "잠실새내" },
  { lines: ["2호선", "9호선"], station: "종합운동장" },
  { lines: ["2호선"], station: "삼성" },
  { lines: ["2호선", "수인분당선"], station: "선릉" },
  { lines: ["2호선"], station: "역삼" },
  { lines: ["2호선", "신분당선"], station: "강남" },
  { lines: ["2호선", "3호선"], station: "교대" },
  { lines: ["2호선"], station: "서초" },
  { lines: ["2호선"], station: "방배" },
  { lines: ["2호선", "4호선"], station: "사당" },
  { lines: ["2호선"], station: "낙성대" },
  { lines: ["2호선"], station: "서울대입구" },
  { lines: ["2호선"], station: "봉천" },
  { lines: ["2호선"], station: "신림" },
  { lines: ["2호선"], station: "신대방" },
  { lines: ["2호선"], station: "구로디지털단지" },
  { lines: ["2호선", "7호선"], station: "대림" },
  { lines: ["2호선"], station: "문래" },
  { lines: ["2호선", "5호선"], station: "영등포구청" },
  { lines: ["2호선", "9호선"], station: "당산" },
  { lines: ["2호선", "6호선"], station: "합정" },
  { lines: ["2호선", "경의중앙선", "공항철도"], station: "홍대입구" },
  { lines: ["2호선"], station: "신촌" },
  { lines: ["경의중앙선"], station: "신촌(경의중앙선)" },
  { lines: ["2호선"], station: "이대" },
  { lines: ["2호선"], station: "아현" },
  { lines: ["2호선", "5호선"], station: "충정로" },
  { lines: ["3호선"], station: "대화" },
  { lines: ["3호선"], station: "주엽" },
  { lines: ["3호선"], station: "정발산" },
  { lines: ["3호선"], station: "마두" },
  { lines: ["3호선"], station: "백석" },
  { lines: ["3호선", "경의중앙선", "서해선"], station: "대곡" },
  { lines: ["3호선"], station: "화정" },
  { lines: ["3호선"], station: "원당" },
  { lines: ["3호선"], station: "원흥" },
  { lines: ["3호선"], station: "삼송" },
  { lines: ["3호선"], station: "지축" },
  { lines: ["3호선"], station: "구파발" },
  { lines: ["3호선", "6호선"], station: "연신내" },
  { lines: ["3호선", "6호선"], station: "불광" },
  { lines: ["3호선"], station: "녹번" },
  { lines: ["3호선"], station: "홍제" },
  { lines: ["3호선"], station: "무악재" },
  { lines: ["3호선"], station: "독립문" },
  { lines: ["3호선"], station: "경복궁" },
  { lines: ["3호선"], station: "안국" },
  { lines: ["3호선", "4호선"], station: "충무로" },
  { lines: ["3호선"], station: "동대입구" },
  { lines: ["3호선", "6호선"], station: "약수" },
  { lines: ["3호선"], station: "금호" },
  { lines: ["3호선", "경의중앙선"], station: "옥수" },
  { lines: ["3호선"], station: "압구정" },
  { lines: ["3호선", "신분당선"], station: "신사" },
  { lines: ["3호선"], station: "잠원" },
  { lines: ["3호선", "7호선", "9호선"], station: "고속터미널" },
  { lines: ["3호선"], station: "남부터미널" },
  { lines: ["3호선", "신분당선"], station: "양재" },
  { lines: ["3호선"], station: "매봉" },
  { lines: ["3호선", "수인분당선"], station: "도곡" },
  { lines: ["3호선"], station: "대치" },
  { lines: ["3호선"], station: "학여울" },
  { lines: ["3호선"], station: "대청" },
  { lines: ["3호선"], station: "일원" },
  { lines: ["3호선", "수인분당선"], station: "수서" },
  { lines: ["3호선", "8호선"], station: "가락시장" },
  { lines: ["3호선"], station: "경찰병원" },
  { lines: ["3호선", "5호선"], station: "오금" },
  { lines: ["4호선"], station: "진접" },
  { lines: ["4호선"], station: "오남" },
  { lines: ["4호선"], station: "별내별가람" },
  { lines: ["4호선"], station: "당고개" },
  { lines: ["4호선"], station: "상계" },
  { lines: ["4호선", "7호선"], station: "노원" },
  { lines: ["4호선"], station: "쌍문" },
  { lines: ["4호선"], station: "수유" },
  { lines: ["4호선"], station: "미아" },
  { lines: ["4호선"], station: "미아사거리" },
  { lines: ["4호선"], station: "길음" },
  { lines: ["4호선", "우이신설선"], station: "성신여대입구" },
  { lines: ["4호선"], station: "한성대입구" },
  { lines: ["4호선"], station: "혜화" },
  { lines: ["4호선"], station: "명동" },
  { lines: ["4호선"], station: "회현" },
  { lines: ["4호선"], station: "숙대입구" },
  { lines: ["4호선", "6호선"], station: "삼각지" },
  { lines: ["4호선"], station: "신용산" },
  { lines: ["4호선", "경의중앙선"], station: "이촌" },
  { lines: ["4호선", "9호선"], station: "동작" },
  { lines: ["4호선", "7호선"], station: "총신대입구(이수)" },
  { lines: ["4호선"], station: "남태령" },
  { lines: ["4호선"], station: "선바위" },
  { lines: ["4호선"], station: "경마공원" },
  { lines: ["4호선"], station: "대공원" },
  { lines: ["4호선"], station: "과천" },
  { lines: ["4호선"], station: "정부과천청사" },
  { lines: ["4호선"], station: "인덕원" },
  { lines: ["4호선"], station: "평촌" },
  { lines: ["4호선"], station: "범계" },
  { lines: ["1호선", "4호선"], station: "금정" },
  { lines: ["4호선"], station: "산본" },
  { lines: ["4호선"], station: "수리산" },
  { lines: ["4호선"], station: "대야미" },
  { lines: ["4호선"], station: "반월" },
  { lines: ["4호선"], station: "상록수" },
  { lines: ["4호선", "수인분당선"], station: "한대앞" },
  { lines: ["4호선", "수인분당선"], station: "중앙" },
  { lines: ["4호선", "수인분당선"], station: "고잔" },
  { lines: ["4호선", "서해선", "수인분당선"], station: "초지" },
  { lines: ["4호선", "수인분당선"], station: "안산" },
  { lines: ["4호선", "수인분당선"], station: "신길온천" },
  { lines: ["4호선", "수인분당선"], station: "정왕" },
  { lines: ["4호선", "수인분당선"], station: "오이도" },
  { lines: ["5호선"], station: "방화" },
  { lines: ["5호선"], station: "개화산" },
  { lines: ["5호선", "9호선", "공항철도", "서해선"], station: "김포공항" },
  { lines: ["5호선"], station: "송정" },
  { lines: ["5호선"], station: "마곡" },
  { lines: ["5호선"], station: "발산" },
  { lines: ["5호선"], station: "우장산" },
  { lines: ["5호선"], station: "화곡" },
  { lines: ["2호선", "5호선"], station: "까치산" },
  { lines: ["5호선"], station: "신정(은행정)" },
  { lines: ["5호선"], station: "목동" },
  { lines: ["5호선"], station: "오목교(목동운동장앞)" },
  { lines: ["5호선", "경의중앙선"], station: "양평" },
  { lines: ["5호선"], station: "영등포시장" },
  { lines: ["5호선", "9호선"], station: "여의도" },
  { lines: ["5호선"], station: "여의나루" },
  { lines: ["5호선"], station: "마포" },
  { lines: ["5호선", "6호선", "경의중앙선", "공항철도"], station: "공덕" },
  { lines: ["5호선"], station: "애오개" },
  { lines: ["5호선"], station: "서대문" },
  { lines: ["5호선"], station: "광화문" },
  { lines: ["5호선", "6호선"], station: "청구" },
  { lines: ["5호선"], station: "신금호" },
  { lines: ["5호선"], station: "행당" },
  { lines: ["5호선"], station: "마장" },
  { lines: ["5호선"], station: "답십리" },
  { lines: ["5호선"], station: "장한평" },
  { lines: ["5호선", "7호선"], station: "군자(능동)" },
  { lines: ["5호선"], station: "아차산(어린이대공원후문)" },
  { lines: ["5호선"], station: "광나루(장신대)" },
  { lines: ["5호선", "8호선"], station: "천호(풍납토성)" },
  { lines: ["5호선"], station: "강동" },
  { lines: ["5호선"], station: "길동" },
  { lines: ["5호선"], station: "굽은다리(강동구민회관앞)" },
  { lines: ["5호선"], station: "명일" },
  { lines: ["5호선"], station: "고덕" },
  { lines: ["5호선"], station: "상일동" },
  { lines: ["5호선"], station: "강일" },
  { lines: ["5호선"], station: "미사" },
  { lines: ["5호선"], station: "하남풍산" },
  { lines: ["5호선"], station: "하남시청" },
  { lines: ["5호선"], station: "하남검단산" },
  { lines: ["6호선"], station: "응암순환(상선)" },
  { lines: ["6호선"], station: "역촌" },
  { lines: ["6호선"], station: "독바위" },
  { lines: ["6호선"], station: "구산" },
  { lines: ["6호선"], station: "새절(신사)" },
  { lines: ["6호선"], station: "증산(명지대앞)" },
  { lines: ["6호선", "경의중앙선", "공항철도"], station: "디지털미디어시티" },
  { lines: ["6호선"], station: "월드컵경기장(성산)" },
  { lines: ["6호선"], station: "마포구청" },
  { lines: ["6호선"], station: "망원" },
  { lines: ["6호선"], station: "상수" },
  { lines: ["6호선"], station: "광흥창" },
  { lines: ["6호선"], station: "대흥(서강대앞)" },
  { lines: ["6호선", "경의중앙선"], station: "효창공원앞" },
  { lines: ["6호선"], station: "녹사평" },
  { lines: ["6호선"], station: "이태원" },
  { lines: ["6호선"], station: "한강진" },
  { lines: ["6호선"], station: "버티고개" },
  { lines: ["6호선"], station: "창신" },
  { lines: ["6호선", "우이신설선"], station: "보문" },
  { lines: ["6호선"], station: "안암(고대병원앞)" },
  { lines: ["6호선"], station: "고려대" },
  { lines: ["6호선"], station: "월곡(동덕여대)" },
  { lines: ["6호선"], station: "상월곡(한국과학기술연구원)" },
  { lines: ["6호선"], station: "돌곶이" },
  { lines: ["6호선", "7호선"], station: "태릉입구" },
  { lines: ["6호선"], station: "화랑대(서울여대입구)" },
  { lines: ["6호선"], station: "봉화산" },
  { lines: ["6호선", "경춘선"], station: "신내" },
  { lines: ["서해선"], station: "시우" },
  { lines: ["서해선"], station: "원시" },
  { lines: ["7호선"], station: "장암" },
  { lines: ["7호선"], station: "수락산" },
  { lines: ["7호선"], station: "마들" },
  { lines: ["7호선"], station: "중계" },
  { lines: ["7호선"], station: "하계" },
  { lines: ["7호선"], station: "공릉(서울산업대입구)" },
  { lines: ["7호선"], station: "먹골" },
  { lines: ["7호선"], station: "중화" },
  { lines: ["7호선", "경의중앙선", "경춘선"], station: "상봉" },
  { lines: ["7호선"], station: "면목" },
  { lines: ["7호선"], station: "사가정" },
  { lines: ["7호선"], station: "용마산" },
  { lines: ["7호선"], station: "중곡" },
  { lines: ["7호선"], station: "어린이대공원(세종대)" },
  { lines: ["7호선"], station: "뚝섬유원지" },
  { lines: ["7호선"], station: "청담" },
  { lines: ["7호선", "수인분당선"], station: "강남구청" },
  { lines: ["7호선"], station: "학동" },
  { lines: ["7호선", "신분당선"], station: "논현" },
  { lines: ["7호선"], station: "반포" },
  { lines: ["7호선"], station: "내방" },
  { lines: ["7호선"], station: "남성" },
  { lines: ["7호선"], station: "숭실대입구(살피재)" },
  { lines: ["7호선"], station: "상도(중앙대앞)" },
  { lines: ["7호선"], station: "장승배기" },
  { lines: ["7호선"], station: "신대방삼거리" },
  { lines: ["7호선"], station: "보라매" },
  { lines: ["7호선"], station: "신풍" },
  { lines: ["7호선"], station: "남구로" },
  { lines: ["1호선", "7호선"], station: "가산디지털단지" },
  { lines: ["7호선"], station: "철산" },
  { lines: ["7호선"], station: "광명사거리" },
  { lines: ["7호선"], station: "천왕" },
  { lines: ["7호선"], station: "까치울" },
  { lines: ["7호선", "서해선"], station: "부천종합운동장" },
  { lines: ["7호선"], station: "춘의" },
  { lines: ["7호선"], station: "신중동" },
  { lines: ["7호선"], station: "부천시청" },
  { lines: ["7호선"], station: "상동" },
  { lines: ["7호선"], station: "삼산체육관" },
  { lines: ["7호선"], station: "굴포천" },
  { lines: ["7호선"], station: "부평구청" },
  { lines: ["7호선"], station: "산곡" },
  { lines: ["7호선"], station: "석남" },
  { lines: ["8호선"], station: "암사" },
  { lines: ["8호선"], station: "강동구청" },
  { lines: ["8호선"], station: "몽촌토성(평화의문)" },
  { lines: ["8호선", "9호선"], station: "석촌" },
  { lines: ["8호선"], station: "송파" },
  { lines: ["8호선"], station: "문정" },
  { lines: ["8호선"], station: "장지" },
  { lines: ["8호선", "수인분당선"], station: "복정" },
  { lines: ["8호선"], station: "남위례" },
  { lines: ["8호선"], station: "산성" },
  { lines: ["8호선"], station: "남한산성입구(성남법원,검찰청)" },
  { lines: ["8호선"], station: "단대오거리" },
  { lines: ["8호선"], station: "신흥" },
  { lines: ["8호선"], station: "수진" },
  { lines: ["8호선", "수인분당선"], station: "모란" },
  { lines: ["경의중앙선", "서해선"], station: "일산" },
  { lines: ["경의중앙선", "서해선"], station: "풍산" },
  { lines: ["경의중앙선", "서해선"], station: "백마" },
  { lines: ["경의중앙선", "서해선"], station: "곡산" },
  { lines: ["경의중앙선", "서해선"], station: "능곡" },
  { lines: ["서해선"], station: "원종" },
  { lines: ["서해선"], station: "소새울" },
  { lines: ["서해선"], station: "시흥대야" },
  { lines: ["서해선"], station: "신천" },
  { lines: ["서해선"], station: "신현" },
  { lines: ["서해선"], station: "시흥시청" },
  { lines: ["서해선"], station: "시흥능곡" },
  { lines: ["서해선"], station: "달미" },
  { lines: ["서해선"], station: "선부" },
  { lines: ["9호선"], station: "개화" },
  { lines: ["9호선"], station: "공항시장" },
  { lines: ["9호선"], station: "신방화" },
  { lines: ["9호선", "공항철도"], station: "마곡나루" },
  { lines: ["9호선"], station: "양천향교" },
  { lines: ["9호선"], station: "가양" },
  { lines: ["9호선"], station: "증미" },
  { lines: ["9호선"], station: "등촌" },
  { lines: ["9호선"], station: "염창" },
  { lines: ["9호선"], station: "신목동" },
  { lines: ["9호선"], station: "선유도" },
  { lines: ["9호선"], station: "국회의사당" },
  { lines: ["9호선"], station: "샛강" },
  { lines: ["9호선"], station: "노들" },
  { lines: ["9호선"], station: "흑석" },
  { lines: ["9호선"], station: "구반포" },
  { lines: ["9호선"], station: "신반포" },
  { lines: ["9호선"], station: "사평" },
  { lines: ["9호선", "신분당선"], station: "신논현" },
  { lines: ["9호선"], station: "언주" },
  { lines: ["9호선", "수인분당선"], station: "선정릉" },
  { lines: ["9호선"], station: "삼성중앙" },
  { lines: ["9호선"], station: "봉은사" },
  { lines: ["9호선"], station: "삼전" },
  { lines: ["9호선"], station: "석촌고분" },
  { lines: ["9호선"], station: "송파나루" },
  { lines: ["9호선"], station: "한성백제" },
  { lines: ["5호선", "9호선"], station: "올림픽공원(한국체대)" },
  { lines: ["9호선"], station: "둔촌오륜" },
  { lines: ["9호선"], station: "중앙보훈병원" },
  { lines: ["우이신설선"], station: "북한산우이" },
  { lines: ["우이신설선"], station: "솔밭공원" },
  { lines: ["우이신설선"], station: "4.19 민주묘지" },
  { lines: ["우이신설선"], station: "가오리" },
  { lines: ["우이신설선"], station: "화계" },
  { lines: ["우이신설선"], station: "삼양" },
  { lines: ["우이신설선"], station: "삼양사거리" },
  { lines: ["우이신설선"], station: "솔샘" },
  { lines: ["우이신설선"], station: "북한산보국문" },
  { lines: ["우이신설선"], station: "정릉" },
  { lines: ["1호선"], station: "병점" },
  { lines: ["1호선"], station: "세류" },
  { lines: ["1호선"], station: "독산" },
  { lines: ["1호선", "수인분당선"], station: "수원" },
  { lines: ["1호선"], station: "화서" },
  { lines: ["1호선"], station: "성균관대" },
  { lines: ["1호선"], station: "의왕" },
  { lines: ["1호선"], station: "군포" },
  { lines: ["1호선"], station: "명학" },
  { lines: ["1호선"], station: "안양" },
  { lines: ["1호선"], station: "관악" },
  { lines: ["1호선"], station: "석수" },
  { lines: ["1호선"], station: "금천구청" },
  { lines: ["1호선"], station: "진위" },
  { lines: ["1호선"], station: "신창" },
  { lines: ["1호선"], station: "온양온천" },
  { lines: ["1호선"], station: "배방" },
  { lines: ["1호선"], station: "탕정" },
  { lines: ["1호선"], station: "아산" },
  { lines: ["1호선"], station: "쌍용(나사렛대)" },
  { lines: ["1호선"], station: "봉명" },
  { lines: ["1호선"], station: "평택지제" },
  { lines: ["1호선"], station: "서동탄" },
  { lines: ["1호선"], station: "오산" },
  { lines: ["1호선"], station: "광명" },
  { lines: ["1호선"], station: "당정" },
  { lines: ["1호선"], station: "천안" },
  { lines: ["1호선"], station: "두정" },
  { lines: ["1호선"], station: "직산" },
  { lines: ["1호선"], station: "성환" },
  { lines: ["1호선"], station: "평택" },
  { lines: ["1호선"], station: "서정리" },
  { lines: ["1호선"], station: "송탄" },
  { lines: ["1호선"], station: "오산대" },
  { lines: ["1호선"], station: "세마" },
  { lines: ["2호선"], station: "용답" },
  { lines: ["2호선"], station: "양천구청" },
  { lines: ["2호선"], station: "신답" },
  { lines: ["2호선"], station: "신정네거리" },
  { lines: ["2호선"], station: "용두" },
  { lines: ["2호선"], station: "도림천" },
  { lines: ["5호선"], station: "둔촌동" },
  { lines: ["5호선"], station: "개롱" },
  { lines: ["5호선"], station: "거여" },
  { lines: ["5호선"], station: "마천" },
  { lines: ["5호선"], station: "방이" },
  { lines: ["경강선"], station: "경기광주" },
  { lines: ["경강선"], station: "삼동" },
  { lines: ["경강선"], station: "초월" },
  { lines: ["경강선"], station: "이천" },
  { lines: ["경강선", "신분당선"], station: "판교" },
  { lines: ["경강선"], station: "곤지암" },
  { lines: ["경강선"], station: "신둔도예촌" },
  { lines: ["경강선"], station: "부발" },
  { lines: ["경강선"], station: "세종대왕릉" },
  { lines: ["경강선"], station: "여주" },
  { lines: ["경강선", "수인분당선"], station: "이매" },
  { lines: ["경의중앙선"], station: "운천" },
  { lines: ["경의중앙선"], station: "서빙고" },
  { lines: ["경의중앙선"], station: "문산" },
  { lines: ["경의중앙선"], station: "파주" },
  { lines: ["경의중앙선"], station: "월롱" },
  { lines: ["경의중앙선"], station: "금촌" },
  { lines: ["경의중앙선"], station: "금릉" },
  { lines: ["경의중앙선"], station: "운정" },
  { lines: ["경의중앙선"], station: "야당" },
  { lines: ["경의중앙선"], station: "탄현" },
  { lines: ["경의중앙선"], station: "행신" },
  { lines: ["경의중앙선"], station: "강매" },
  { lines: ["경의중앙선"], station: "수색" },
  { lines: ["경의중앙선"], station: "가좌" },
  { lines: ["경의중앙선"], station: "서강대" },
  { lines: ["경의중앙선"], station: "지평" },
  { lines: ["경의중앙선"], station: "용문" },
  { lines: ["경의중앙선"], station: "원덕" },
  { lines: ["경의중앙선"], station: "오빈" },
  { lines: ["경의중앙선"], station: "아신" },
  { lines: ["경의중앙선"], station: "국수" },
  { lines: ["경의중앙선"], station: "신원" },
  { lines: ["경의중앙선"], station: "양수" },
  { lines: ["경의중앙선"], station: "운길산" },
  { lines: ["경의중앙선"], station: "팔당" },
  { lines: ["경의중앙선"], station: "도심" },
  { lines: ["경의중앙선"], station: "덕소" },
  { lines: ["경의중앙선"], station: "양정" },
  { lines: ["경의중앙선"], station: "도농" },
  { lines: ["경의중앙선"], station: "구리" },
  { lines: ["경의중앙선"], station: "양원" },
  { lines: ["경의중앙선", "경춘선"], station: "망우" },
  { lines: ["경의중앙선", "경춘선"], station: "중랑" },
  { lines: ["경의중앙선"], station: "응봉" },
  { lines: ["경의중앙선"], station: "한남" },
  { lines: ["경의중앙선"], station: "한국항공대" },
  { lines: ["경춘선"], station: "갈매" },
  { lines: ["경춘선"], station: "별내" },
  { lines: ["경춘선"], station: "사릉" },
  { lines: ["경춘선"], station: "금곡" },
  { lines: ["경춘선"], station: "평내호평" },
  { lines: ["경춘선"], station: "천마산" },
  { lines: ["경춘선"], station: "대성리" },
  { lines: ["경춘선"], station: "청평" },
  { lines: ["경춘선"], station: "상천" },
  { lines: ["경춘선"], station: "가평" },
  { lines: ["경춘선"], station: "강촌" },
  { lines: ["경춘선"], station: "퇴계원" },
  { lines: ["경춘선"], station: "마석" },
  { lines: ["경춘선"], station: "남춘천" },
  { lines: ["경춘선"], station: "춘천" },
  { lines: ["경춘선"], station: "굴봉산" },
  { lines: ["경춘선"], station: "김유정" },
  { lines: ["경춘선"], station: "백양리" },
  { lines: ["공항철도"], station: "계양" },
  { lines: ["공항철도"], station: "청라국제도시" },
  { lines: ["공항철도"], station: "운서" },
  { lines: ["공항철도"], station: "공항화물청사" },
  { lines: ["공항철도"], station: "인천공항1터미널" },
  { lines: ["공항철도"], station: "인천공항2터미널" },
  { lines: ["공항철도"], station: "영종" },
  { lines: ["공항철도"], station: "검암" },
  { lines: ["수인분당선"], station: "수원시청" },
  { lines: ["수인분당선"], station: "구룡" },
  { lines: ["수인분당선"], station: "개포동" },
  { lines: ["수인분당선"], station: "사리" },
  { lines: ["수인분당선"], station: "대모산입구" },
  { lines: ["수인분당선"], station: "한티" },
  { lines: ["수인분당선"], station: "영통" },
  { lines: ["수인분당선"], station: "망포" },
  { lines: ["수인분당선"], station: "청명" },
  { lines: ["수인분당선"], station: "상갈" },
  { lines: ["수인분당선"], station: "야탑" },
  { lines: ["수인분당선"], station: "매탄권선" },
  { lines: ["수인분당선"], station: "매교" },
  { lines: ["수인분당선"], station: "고색" },
  { lines: ["수인분당선"], station: "오목천" },
  { lines: ["수인분당선"], station: "어천" },
  { lines: ["수인분당선"], station: "야목" },
  { lines: ["수인분당선"], station: "달월" },
  { lines: ["수인분당선"], station: "월곶" },
  { lines: ["수인분당선"], station: "소래포구" },
  { lines: ["수인분당선"], station: "인천논현" },
  { lines: ["수인분당선"], station: "호구포" },
  { lines: ["수인분당선"], station: "남동인더스파크" },
  { lines: ["수인분당선"], station: "원인재" },
  { lines: ["수인분당선"], station: "연수" },
  { lines: ["수인분당선"], station: "송도" },
  { lines: ["수인분당선"], station: "인하대" },
  { lines: ["수인분당선"], station: "신포" },
  { lines: ["수인분당선"], station: "기흥" },
  { lines: ["수인분당선"], station: "신갈" },
  { lines: ["수인분당선"], station: "구성" },
  { lines: ["수인분당선"], station: "죽전" },
  { lines: ["수인분당선"], station: "보정" },
  { lines: ["수인분당선"], station: "오리" },
  { lines: ["수인분당선", "신분당선"], station: "미금" },
  { lines: ["수인분당선", "신분당선"], station: "정자" },
  { lines: ["수인분당선"], station: "수내" },
  { lines: ["수인분당선"], station: "서현" },
  { lines: ["수인분당선"], station: "숭의" },
  { lines: ["수인분당선"], station: "태평" },
  { lines: ["수인분당선"], station: "가천대" },
  { lines: ["수인분당선"], station: "압구정로데오" },
  { lines: ["수인분당선"], station: "서울숲" },
  { lines: ["신분당선"], station: "광교" },
  { lines: ["신분당선"], station: "광교중앙" },
  { lines: ["신분당선"], station: "수지구청" },
  { lines: ["신분당선"], station: "동천" },
  { lines: ["신분당선"], station: "상현" },
  { lines: ["신분당선"], station: "성복" },
  { lines: ["신분당선"], station: "양재시민의숲" },
  { lines: ["신분당선"], station: "청계산입구" },
];

export const getLines = (station: string): LineName[] => {
  return lineData.find((item) => item.station === station)?.lines || [];
};

const getAvailableStationList = (keyword: string, page: number) => {
  if (keyword === "") return lineData.slice(page * 15, (page + 1) * 15);
  const filteredList = lineData.filter(({ station }) =>
    `${station}역`.includes(keyword)
  );

  return filteredList.slice(page * 15, (page + 1) * 15);
};

export default getAvailableStationList;
