import { LineName } from "../../components/_common/LineBadge/LineBadge";

export type StationId = string;

export type StationInfo = {
  line_num: LineName | string;
  station_cd: string;
  station_nm_eng: string;
  station_nm: string;
  coordinate: {
    lat: number;
    lng: number;
  };
};

export const stationInfo: Record<StationId, StationInfo> = {
  "100": {
    line_num: "1호선",
    station_cd: "1916",
    station_nm_eng: "Soyosan",
    station_nm: "소요산",
    coordinate: {
      lat: 37.9481,
      lng: 127.061034,
    },
  },
  "101": {
    line_num: "1호선",
    station_cd: "1915",
    station_nm_eng: "Dongducheon",
    station_nm: "동두천",
    coordinate: {
      lat: 37.927878,
      lng: 127.05479,
    },
  },
  "102": {
    line_num: "1호선",
    station_cd: "1914",
    station_nm_eng: "Bosan",
    station_nm: "보산",
    coordinate: {
      lat: 37.913702,
      lng: 127.057277,
    },
  },
  "103": {
    line_num: "1호선",
    station_cd: "1913",
    station_nm_eng: "Dongducheon jungang",
    station_nm: "동두천중앙",
    coordinate: {
      lat: 37.901885,
      lng: 127.056482,
    },
  },
  "104": {
    line_num: "1호선",
    station_cd: "1912",
    station_nm_eng: "Jihaeng",
    station_nm: "지행",
    coordinate: {
      lat: 37.892334,
      lng: 127.055716,
    },
  },
  "105": {
    line_num: "1호선",
    station_cd: "1911",
    station_nm_eng: "Deokjeong",
    station_nm: "덕정",
    coordinate: {
      lat: 37.843188,
      lng: 127.061277,
    },
  },
  "106": {
    line_num: "1호선",
    station_cd: "1910",
    station_nm_eng: "Deokgye",
    station_nm: "덕계",
    coordinate: {
      lat: 37.818486,
      lng: 127.056486,
    },
  },
  "107": {
    line_num: "1호선",
    station_cd: "1909",
    station_nm_eng: "Yangju",
    station_nm: "양주",
    coordinate: {
      lat: 37.774381,
      lng: 127.044708,
    },
  },
  "108": {
    line_num: "1호선",
    station_cd: "1908",
    station_nm_eng: "Nogyang",
    station_nm: "녹양",
    coordinate: {
      lat: 37.75938,
      lng: 127.042292,
    },
  },
  "109": {
    line_num: "1호선",
    station_cd: "1907",
    station_nm_eng: "Ganeung",
    station_nm: "가능",
    coordinate: {
      lat: 37.748577,
      lng: 127.044213,
    },
  },
  "110": {
    line_num: "1호선",
    station_cd: "1906",
    station_nm_eng: "Uijeongbu",
    station_nm: "의정부",
    coordinate: {
      lat: 37.738415,
      lng: 127.045958,
    },
  },
  "111": {
    line_num: "1호선",
    station_cd: "1905",
    station_nm_eng: "Hoeryong",
    station_nm: "회룡",
    coordinate: {
      lat: 37.724846,
      lng: 127.046895,
    },
  },
  "112": {
    line_num: "1호선",
    station_cd: "1904",
    station_nm_eng: "Mangwolsa",
    station_nm: "망월사",
    coordinate: {
      lat: 37.709914,
      lng: 127.047455,
    },
  },
  "113": {
    line_num: "1호선",
    station_cd: "1903",
    station_nm_eng: "Dobongsan",
    station_nm: "도봉산",
    coordinate: {
      lat: 37.689313,
      lng: 127.046222,
    },
  },
  "114": {
    line_num: "1호선",
    station_cd: "1902",
    station_nm_eng: "Dobong",
    station_nm: "도봉",
    coordinate: {
      lat: 37.679563,
      lng: 127.045595,
    },
  },
  "115": {
    line_num: "1호선",
    station_cd: "1901",
    station_nm_eng: "Banghak",
    station_nm: "방학",
    coordinate: {
      lat: 37.667503,
      lng: 127.044273,
    },
  },
  "116": {
    line_num: "1호선",
    station_cd: "1022",
    station_nm_eng: "Chang-dong",
    station_nm: "창동",
    coordinate: {
      lat: 37.653166,
      lng: 127.047731,
    },
  },
  "117": {
    line_num: "1호선",
    station_cd: "1021",
    station_nm_eng: "Nokcheon",
    station_nm: "녹천",
    coordinate: {
      lat: 37.644799,
      lng: 127.051269,
    },
  },
  "118": {
    line_num: "1호선",
    station_cd: "1020",
    station_nm_eng: "Wolgye",
    station_nm: "월계",
    coordinate: {
      lat: 37.633212,
      lng: 127.058831,
    },
  },
  "119": {
    line_num: "1호선",
    station_cd: "1019",
    station_nm_eng: "Kwangwoon Univ.",
    station_nm: "광운대",
    coordinate: {
      lat: 37.623632,
      lng: 127.061835,
    },
  },
  "120": {
    line_num: "1호선",
    station_cd: "1018",
    station_nm_eng: "Seokgye",
    station_nm: "석계",
    coordinate: {
      lat: 37.614805,
      lng: 127.065851,
    },
  },
  "121": {
    line_num: "1호선",
    station_cd: "1017",
    station_nm_eng: "Sinimun",
    station_nm: "신이문",
    coordinate: {
      lat: 37.601854,
      lng: 127.067325,
    },
  },
  "122": {
    line_num: "1호선",
    station_cd: "1016",
    station_nm_eng: "Hankuk Univ. of Foreign Studies",
    station_nm: "외대앞",
    coordinate: {
      lat: 37.596073,
      lng: 127.063549,
    },
  },
  "123": {
    line_num: "1호선",
    station_cd: "1015",
    station_nm_eng: "Hoegi",
    station_nm: "회기",
    coordinate: {
      lat: 37.58946,
      lng: 127.057583,
    },
  },
  "124": {
    line_num: "1호선",
    station_cd: "0158",
    station_nm_eng: "Cheongnyangni",
    station_nm: "청량리",
    coordinate: {
      lat: 37.580178,
      lng: 127.046835,
    },
  },
  "125": {
    line_num: "1호선",
    station_cd: "0157",
    station_nm_eng: "Jegi-dong",
    station_nm: "제기동",
    coordinate: {
      lat: 37.578103,
      lng: 127.034893,
    },
  },
  "126": {
    line_num: "1호선",
    station_cd: "0156",
    station_nm_eng: "Sinseol-dong",
    station_nm: "신설동",
    coordinate: {
      lat: 37.575297,
      lng: 127.025087,
    },
  },
  "127": {
    line_num: "1호선",
    station_cd: "0159",
    station_nm_eng: "Dongmyo",
    station_nm: "동묘앞",
    coordinate: {
      lat: 37.572627,
      lng: 127.016429,
    },
  },
  "128": {
    line_num: "1호선",
    station_cd: "0155",
    station_nm_eng: "Dongdaemun",
    station_nm: "동대문",
    coordinate: {
      lat: 37.57142,
      lng: 127.009745,
    },
  },
  "129": {
    line_num: "1호선",
    station_cd: "0154",
    station_nm_eng: "Jongno 5(o)-ga",
    station_nm: "종로5가",
    coordinate: {
      lat: 37.570926,
      lng: 127.001849,
    },
  },
  "130": {
    line_num: "1호선",
    station_cd: "0153",
    station_nm_eng: "Jongno 3(sam)-ga",
    station_nm: "종로3가",
    coordinate: {
      lat: 37.571607,
      lng: 126.991806,
    },
  },
  "131": {
    line_num: "1호선",
    station_cd: "0152",
    station_nm_eng: "Jonggak",
    station_nm: "종각",
    coordinate: {
      lat: 37.570161,
      lng: 126.982923,
    },
  },
  "132": {
    line_num: "1호선",
    station_cd: "0151",
    station_nm_eng: "City Hall",
    station_nm: "시청",
    coordinate: {
      lat: 37.564718,
      lng: 126.977108,
    },
  },
  "133": {
    line_num: "1호선",
    station_cd: "0150",
    station_nm_eng: "Seoul Station",
    station_nm: "서울",
    coordinate: {
      lat: 37.55455089424185,
      lng: 126.97059508458507,
    },
  },
  "134": {
    line_num: "1호선",
    station_cd: "1002",
    station_nm_eng: "Namyeong",
    station_nm: "남영",
    coordinate: {
      lat: 37.541021,
      lng: 126.9713,
    },
  },
  "135": {
    line_num: "1호선",
    station_cd: "1003",
    station_nm_eng: "Yongsan",
    station_nm: "용산",
    coordinate: {
      lat: 37.529849,
      lng: 126.964561,
    },
  },
  "136": {
    line_num: "1호선",
    station_cd: "1004",
    station_nm_eng: "Noryangjin",
    station_nm: "노량진",
    coordinate: {
      lat: 37.514219,
      lng: 126.942454,
    },
  },
  "137": {
    line_num: "1호선",
    station_cd: "1005",
    station_nm_eng: "Daebang",
    station_nm: "대방",
    coordinate: {
      lat: 37.513342,
      lng: 126.926382,
    },
  },
  "138": {
    line_num: "1호선",
    station_cd: "1032",
    station_nm_eng: "Singil",
    station_nm: "신길",
    coordinate: {
      lat: 37.517122,
      lng: 126.917169,
    },
  },
  "139": {
    line_num: "1호선",
    station_cd: "1006",
    station_nm_eng: "Yeongdeungpo",
    station_nm: "영등포",
    coordinate: {
      lat: 37.515504,
      lng: 126.907628,
    },
  },
  "140": {
    line_num: "1호선",
    station_cd: "1007",
    station_nm_eng: "Sindorim",
    station_nm: "신도림",
    coordinate: {
      lat: 37.508725,
      lng: 126.891295,
    },
  },
  "141": {
    line_num: "1호선",
    station_cd: "1701",
    station_nm_eng: "Guro",
    station_nm: "구로",
    coordinate: {
      lat: 37.503039,
      lng: 126.881966,
    },
  },
  "142": {
    line_num: "1호선",
    station_cd: "1813",
    station_nm_eng: "Guil",
    station_nm: "구일",
    coordinate: {
      lat: 37.496756,
      lng: 126.870793,
    },
  },
  "143": {
    line_num: "1호선",
    station_cd: "1801",
    station_nm_eng: "Gaebong",
    station_nm: "개봉",
    coordinate: {
      lat: 37.494594,
      lng: 126.85868,
    },
  },
  "144": {
    line_num: "1호선",
    station_cd: "1802",
    station_nm_eng: "Oryu-dong",
    station_nm: "오류동",
    coordinate: {
      lat: 37.494526,
      lng: 126.845365,
    },
  },
  "145": {
    line_num: "1호선",
    station_cd: "1821",
    station_nm_eng: "Onsu",
    station_nm: "온수",
    coordinate: {
      lat: 37.492258,
      lng: 126.823388,
    },
  },
  "146": {
    line_num: "1호선",
    station_cd: "1803",
    station_nm_eng: "Yeokgok",
    station_nm: "역곡",
    coordinate: {
      lat: 37.485178,
      lng: 126.811502,
    },
  },
  "147": {
    line_num: "1호선",
    station_cd: "1814",
    station_nm_eng: "Sosa",
    station_nm: "소사",
    coordinate: {
      lat: 37.482753,
      lng: 126.79544,
    },
  },
  "148": {
    line_num: "1호선",
    station_cd: "1804",
    station_nm_eng: "Bucheon",
    station_nm: "부천",
    coordinate: {
      lat: 37.48405,
      lng: 126.782686,
    },
  },
  "149": {
    line_num: "1호선",
    station_cd: "1822",
    station_nm_eng: "Jung-dong",
    station_nm: "중동",
    coordinate: {
      lat: 37.486562,
      lng: 126.764843,
    },
  },
  "150": {
    line_num: "1호선",
    station_cd: "1805",
    station_nm_eng: "Songnae",
    station_nm: "송내",
    coordinate: {
      lat: 37.4876,
      lng: 126.753664,
    },
  },
  "151": {
    line_num: "1호선",
    station_cd: "1815",
    station_nm_eng: "Bugae",
    station_nm: "부개",
    coordinate: {
      lat: 37.488418,
      lng: 126.74109,
    },
  },
  "152": {
    line_num: "1호선",
    station_cd: "1806",
    station_nm_eng: "Bupyeong",
    station_nm: "부평",
    coordinate: {
      lat: 37.489493,
      lng: 126.724805,
    },
  },
  "153": {
    line_num: "1호선",
    station_cd: "1807",
    station_nm_eng: "Baegun",
    station_nm: "백운",
    coordinate: {
      lat: 37.483664,
      lng: 126.707704,
    },
  },
  "154": {
    line_num: "1호선",
    station_cd: "1808",
    station_nm_eng: "Dongam",
    station_nm: "동암",
    coordinate: {
      lat: 37.471408,
      lng: 126.702896,
    },
  },
  "155": {
    line_num: "1호선",
    station_cd: "1816",
    station_nm_eng: "Ganseok",
    station_nm: "간석",
    coordinate: {
      lat: 37.464737,
      lng: 126.694181,
    },
  },
  "156": {
    line_num: "1호선",
    station_cd: "1809",
    station_nm_eng: "Juan",
    station_nm: "주안",
    coordinate: {
      lat: 37.464941,
      lng: 126.679923,
    },
  },
  "157": {
    line_num: "1호선",
    station_cd: "1823",
    station_nm_eng: "Dohwa",
    station_nm: "도화",
    coordinate: {
      lat: 37.46607,
      lng: 126.668672,
    },
  },
  "158": {
    line_num: "1호선",
    station_cd: "1810",
    station_nm_eng: "Jemulpo",
    station_nm: "제물포",
    coordinate: {
      lat: 37.466769,
      lng: 126.656666,
    },
  },
  "159": {
    line_num: "1호선",
    station_cd: "1817",
    station_nm_eng: "Dowon",
    station_nm: "도원",
    coordinate: {
      lat: 37.468446,
      lng: 126.642706,
    },
  },
  "160": {
    line_num: "1호선",
    station_cd: "1811",
    station_nm_eng: "Dongincheon",
    station_nm: "동인천",
    coordinate: {
      lat: 37.475276,
      lng: 126.632802,
    },
  },
  "161": {
    line_num: "1호선",
    station_cd: "1812",
    station_nm_eng: "Incheon",
    station_nm: "인천",
    coordinate: {
      lat: 37.476691,
      lng: 126.616936,
    },
  },
  "201": {
    line_num: "2호선",
    station_cd: "0201",
    station_nm_eng: "City Hall",
    station_nm: "시청",
    coordinate: {
      lat: 37.564718,
      lng: 126.977108,
    },
  },
  "202": {
    line_num: "2호선",
    station_cd: "0202",
    station_nm_eng: "Euljiro 1(il)-ga",
    station_nm: "을지로입구",
    coordinate: {
      lat: 37.566014,
      lng: 126.982618,
    },
  },
  "203": {
    line_num: "2호선",
    station_cd: "0203",
    station_nm_eng: "Euljiro 3(sam)-ga",
    station_nm: "을지로3가",
    coordinate: {
      lat: 37.566295,
      lng: 126.99191,
    },
  },
  "204": {
    line_num: "2호선",
    station_cd: "0204",
    station_nm_eng: "Euljiro 4(sa)-ga",
    station_nm: "을지로4가",
    coordinate: {
      lat: 37.566941,
      lng: 126.998079,
    },
  },
  "205": {
    line_num: "2호선",
    station_cd: "0205",
    station_nm_eng: "Dongdaemun History  Culture Park",
    station_nm: "동대문역사문화공원",
    coordinate: {
      lat: 37.565138,
      lng: 127.007896,
    },
  },
  "206": {
    line_num: "2호선",
    station_cd: "0206",
    station_nm_eng: "Sindang",
    station_nm: "신당",
    coordinate: {
      lat: 37.565972,
      lng: 127.01782,
    },
  },
  "207": {
    line_num: "2호선",
    station_cd: "0207",
    station_nm_eng: "Sangwangsimni",
    station_nm: "상왕십리",
    coordinate: {
      lat: 37.564354,
      lng: 127.029354,
    },
  },
  "208": {
    line_num: "2호선",
    station_cd: "0208",
    station_nm_eng: "Wangsimni",
    station_nm: "왕십리",
    coordinate: {
      lat: 37.561533,
      lng: 127.037732,
    },
  },
  "209": {
    line_num: "2호선",
    station_cd: "0209",
    station_nm_eng: "Hanyang Univ.",
    station_nm: "한양대",
    coordinate: {
      lat: 37.555273,
      lng: 127.043655,
    },
  },
  "210": {
    line_num: "2호선",
    station_cd: "0210",
    station_nm_eng: "Ttukseom",
    station_nm: "뚝섬",
    coordinate: {
      lat: 37.547184,
      lng: 127.047367,
    },
  },
  "211": {
    line_num: "2호선",
    station_cd: "0211",
    station_nm_eng: "Seongsu",
    station_nm: "성수",
    coordinate: {
      lat: 37.544581,
      lng: 127.055961,
    },
  },
  "212": {
    line_num: "2호선",
    station_cd: "0212",
    station_nm_eng: "Konkuk Univ.",
    station_nm: "건대입구",
    coordinate: {
      lat: 37.540693,
      lng: 127.07023,
    },
  },
  "213": {
    line_num: "2호선",
    station_cd: "0213",
    station_nm_eng: "Guui",
    station_nm: "구의",
    coordinate: {
      lat: 37.537077,
      lng: 127.085916,
    },
  },
  "214": {
    line_num: "2호선",
    station_cd: "0214",
    station_nm_eng: "Gangbyeon",
    station_nm: "강변",
    coordinate: {
      lat: 37.535095,
      lng: 127.094681,
    },
  },
  "215": {
    line_num: "2호선",
    station_cd: "0215",
    station_nm_eng: "Jamsillaru",
    station_nm: "잠실나루",
    coordinate: {
      lat: 37.520733,
      lng: 127.10379,
    },
  },
  "216": {
    line_num: "2호선",
    station_cd: "0216",
    station_nm_eng: "Jamsil",
    station_nm: "잠실",
    coordinate: {
      lat: 37.51395,
      lng: 127.102234,
    },
  },
  "217": {
    line_num: "2호선",
    station_cd: "0217",
    station_nm_eng: "Jamsilsaenae",
    station_nm: "잠실새내",
    coordinate: {
      lat: 37.511687,
      lng: 127.086162,
    },
  },
  "218": {
    line_num: "2호선",
    station_cd: "0218",
    station_nm_eng: "Sports Complex",
    station_nm: "종합운동장",
    coordinate: {
      lat: 37.510997,
      lng: 127.073642,
    },
  },
  "219": {
    line_num: "2호선",
    station_cd: "0219",
    station_nm_eng: "Samseong",
    station_nm: "삼성",
    coordinate: {
      lat: 37.508844,
      lng: 127.06316,
    },
  },
  "220": {
    line_num: "2호선",
    station_cd: "0220",
    station_nm_eng: "Seolleung",
    station_nm: "선릉",
    coordinate: {
      lat: 37.504503,
      lng: 127.049008,
    },
  },
  "221": {
    line_num: "2호선",
    station_cd: "0221",
    station_nm_eng: "Yeoksam",
    station_nm: "역삼",
    coordinate: {
      lat: 37.500622,
      lng: 127.036456,
    },
  },
  "222": {
    line_num: "2호선",
    station_cd: "0222",
    station_nm_eng: "Gangnam",
    station_nm: "강남",
    coordinate: {
      lat: 37.497175,
      lng: 127.027926,
    },
  },
  "223": {
    line_num: "2호선",
    station_cd: "0223",
    station_nm_eng: "Seoul Nat`l Univ. of Education",
    station_nm: "교대",
    coordinate: {
      lat: 37.493415,
      lng: 127.01408,
    },
  },
  "224": {
    line_num: "2호선",
    station_cd: "0224",
    station_nm_eng: "Seocho",
    station_nm: "서초",
    coordinate: {
      lat: 37.491897,
      lng: 127.007917,
    },
  },
  "225": {
    line_num: "2호선",
    station_cd: "0225",
    station_nm_eng: "Bangbae",
    station_nm: "방배",
    coordinate: {
      lat: 37.481426,
      lng: 126.997596,
    },
  },
  "226": {
    line_num: "2호선",
    station_cd: "0226",
    station_nm_eng: "Sadang",
    station_nm: "사당",
    coordinate: {
      lat: 37.47653,
      lng: 126.981685,
    },
  },
  "227": {
    line_num: "2호선",
    station_cd: "0227",
    station_nm_eng: "Nakseongdae",
    station_nm: "낙성대",
    coordinate: {
      lat: 37.47693,
      lng: 126.963693,
    },
  },
  "228": {
    line_num: "2호선",
    station_cd: "0228",
    station_nm_eng: "Seoul Nat`l Univ.",
    station_nm: "서울대입구",
    coordinate: {
      lat: 37.481247,
      lng: 126.952739,
    },
  },
  "229": {
    line_num: "2호선",
    station_cd: "0229",
    station_nm_eng: "Bongcheon",
    station_nm: "봉천",
    coordinate: {
      lat: 37.482362,
      lng: 126.941892,
    },
  },
  "230": {
    line_num: "2호선",
    station_cd: "0230",
    station_nm_eng: "Sillim",
    station_nm: "신림",
    coordinate: {
      lat: 37.484201,
      lng: 126.929715,
    },
  },
  "231": {
    line_num: "2호선",
    station_cd: "0231",
    station_nm_eng: "Sindaebang",
    station_nm: "신대방",
    coordinate: {
      lat: 37.487462,
      lng: 126.913149,
    },
  },
  "232": {
    line_num: "2호선",
    station_cd: "0232",
    station_nm_eng: "Guro Digital Complex",
    station_nm: "구로디지털단지",
    coordinate: {
      lat: 37.485266,
      lng: 126.901401,
    },
  },
  "233": {
    line_num: "2호선",
    station_cd: "0233",
    station_nm_eng: "Daerim",
    station_nm: "대림",
    coordinate: {
      lat: 37.49297,
      lng: 126.895801,
    },
  },
  "234": {
    line_num: "2호선",
    station_cd: "0234",
    station_nm_eng: "Sindorim",
    station_nm: "신도림",
    coordinate: {
      lat: 37.508725,
      lng: 126.891295,
    },
  },
  "235": {
    line_num: "2호선",
    station_cd: "0235",
    station_nm_eng: "Mullae",
    station_nm: "문래",
    coordinate: {
      lat: 37.517933,
      lng: 126.89476,
    },
  },
  "236": {
    line_num: "2호선",
    station_cd: "0236",
    station_nm_eng: "Yeongdeungpo-gu Office",
    station_nm: "영등포구청",
    coordinate: {
      lat: 37.52497,
      lng: 126.895951,
    },
  },
  "237": {
    line_num: "2호선",
    station_cd: "0237",
    station_nm_eng: "Dangsan",
    station_nm: "당산",
    coordinate: {
      lat: 37.53438,
      lng: 126.902281,
    },
  },
  "238": {
    line_num: "2호선",
    station_cd: "0238",
    station_nm_eng: "Hapjeong",
    station_nm: "합정",
    coordinate: {
      lat: 37.549463,
      lng: 126.913739,
    },
  },
  "239": {
    line_num: "2호선",
    station_cd: "0239",
    station_nm_eng: "Hongik Univ.",
    station_nm: "홍대입구",
    coordinate: {
      lat: 37.557192,
      lng: 126.925381,
    },
  },
  "240": {
    line_num: "2호선",
    station_cd: "0240",
    station_nm_eng: "Sinchon",
    station_nm: "신촌",
    coordinate: {
      lat: 37.555134,
      lng: 126.936893,
    },
  },
  "241": {
    line_num: "2호선",
    station_cd: "0241",
    station_nm_eng: "Ewha Womans Univ.",
    station_nm: "이대",
    coordinate: {
      lat: 37.556733,
      lng: 126.946013,
    },
  },
  "242": {
    line_num: "2호선",
    station_cd: "0242",
    station_nm_eng: "Ahyeon",
    station_nm: "아현",
    coordinate: {
      lat: 37.557345,
      lng: 126.956141,
    },
  },
  "243": {
    line_num: "2호선",
    station_cd: "0243",
    station_nm_eng: "Chungjeongno",
    station_nm: "충정로",
    coordinate: {
      lat: 37.559973,
      lng: 126.963672,
    },
  },
  "309": {
    line_num: "3호선",
    station_cd: "1958",
    station_nm_eng: "Daehwa",
    station_nm: "대화",
    coordinate: {
      lat: 37.676087,
      lng: 126.747569,
    },
  },
  "310": {
    line_num: "3호선",
    station_cd: "1957",
    station_nm_eng: "Juyeop",
    station_nm: "주엽",
    coordinate: {
      lat: 37.670072,
      lng: 126.761334,
    },
  },
  "311": {
    line_num: "3호선",
    station_cd: "1956",
    station_nm_eng: "Jeongbalsan",
    station_nm: "정발산",
    coordinate: {
      lat: 37.659477,
      lng: 126.773359,
    },
  },
  "312": {
    line_num: "3호선",
    station_cd: "1955",
    station_nm_eng: "Madu",
    station_nm: "마두",
    coordinate: {
      lat: 37.652206,
      lng: 126.77762,
    },
  },
  "313": {
    line_num: "3호선",
    station_cd: "1954",
    station_nm_eng: "Baekseok",
    station_nm: "백석",
    coordinate: {
      lat: 37.643114,
      lng: 126.78787,
    },
  },
  "314": {
    line_num: "3호선",
    station_cd: "1953",
    station_nm_eng: "Daegok",
    station_nm: "대곡",
    coordinate: {
      lat: 37.631626,
      lng: 126.811024,
    },
  },
  "315": {
    line_num: "3호선",
    station_cd: "1952",
    station_nm_eng: "Hwajeong",
    station_nm: "화정",
    coordinate: {
      lat: 37.634592,
      lng: 126.83265,
    },
  },
  "316": {
    line_num: "3호선",
    station_cd: "1951",
    station_nm_eng: "Wondang",
    station_nm: "원당",
    coordinate: {
      lat: 37.653324,
      lng: 126.843041,
    },
  },
  "317": {
    line_num: "3호선",
    station_cd: "1948",
    station_nm_eng: "Wonheung",
    station_nm: "원흥",
    coordinate: {
      lat: 37.650658,
      lng: 126.872642,
    },
  },
  "318": {
    line_num: "3호선",
    station_cd: "1950",
    station_nm_eng: "Samsong",
    station_nm: "삼송",
    coordinate: {
      lat: 37.653083,
      lng: 126.895558,
    },
  },
  "319": {
    line_num: "3호선",
    station_cd: "0309",
    station_nm_eng: "Jichuk",
    station_nm: "지축",
    coordinate: {
      lat: 37.648048,
      lng: 126.913951,
    },
  },
  "320": {
    line_num: "3호선",
    station_cd: "0310",
    station_nm_eng: "Gupabal",
    station_nm: "구파발",
    coordinate: {
      lat: 37.636763,
      lng: 126.918821,
    },
  },
  "321": {
    line_num: "3호선",
    station_cd: "0311",
    station_nm_eng: "Yeonsinnae",
    station_nm: "연신내",
    coordinate: {
      lat: 37.619001,
      lng: 126.921008,
    },
  },
  "322": {
    line_num: "3호선",
    station_cd: "0312",
    station_nm_eng: "Bulgwang",
    station_nm: "불광",
    coordinate: {
      lat: 37.610469,
      lng: 126.929887,
    },
  },
  "323": {
    line_num: "3호선",
    station_cd: "0313",
    station_nm_eng: "Nokbeon",
    station_nm: "녹번",
    coordinate: {
      lat: 37.600927,
      lng: 126.935756,
    },
  },
  "324": {
    line_num: "3호선",
    station_cd: "0314",
    station_nm_eng: "Hongje",
    station_nm: "홍제",
    coordinate: {
      lat: 37.589066,
      lng: 126.943736,
    },
  },
  "325": {
    line_num: "3호선",
    station_cd: "0315",
    station_nm_eng: "Muakjae",
    station_nm: "무악재",
    coordinate: {
      lat: 37.582299,
      lng: 126.950291,
    },
  },
  "326": {
    line_num: "3호선",
    station_cd: "0316",
    station_nm_eng: "Dongnimmun",
    station_nm: "독립문",
    coordinate: {
      lat: 37.574571,
      lng: 126.957748,
    },
  },
  "327": {
    line_num: "3호선",
    station_cd: "0317",
    station_nm_eng: "Gyeongbokgung",
    station_nm: "경복궁",
    coordinate: {
      lat: 37.575762,
      lng: 126.97353,
    },
  },
  "328": {
    line_num: "3호선",
    station_cd: "0318",
    station_nm_eng: "Anguk",
    station_nm: "안국",
    coordinate: {
      lat: 37.576477,
      lng: 126.985443,
    },
  },
  "329": {
    line_num: "3호선",
    station_cd: "0319",
    station_nm_eng: "Jongno 3(sam)-ga",
    station_nm: "종로3가",
    coordinate: {
      lat: 37.571607,
      lng: 126.991806,
    },
  },
  "330": {
    line_num: "3호선",
    station_cd: "0320",
    station_nm_eng: "Euljiro 3(sam)-ga",
    station_nm: "을지로3가",
    coordinate: {
      lat: 37.566295,
      lng: 126.99191,
    },
  },
  "331": {
    line_num: "3호선",
    station_cd: "0321",
    station_nm_eng: "Chungmuro",
    station_nm: "충무로",
    coordinate: {
      lat: 37.561243,
      lng: 126.99428,
    },
  },
  "332": {
    line_num: "3호선",
    station_cd: "0322",
    station_nm_eng: "Dongguk Univ.",
    station_nm: "동대입구",
    coordinate: {
      lat: 37.559052,
      lng: 127.005602,
    },
  },
  "333": {
    line_num: "3호선",
    station_cd: "0323",
    station_nm_eng: "Yaksu",
    station_nm: "약수",
    coordinate: {
      lat: 37.55434,
      lng: 127.010655,
    },
  },
  "334": {
    line_num: "3호선",
    station_cd: "0324",
    station_nm_eng: "Geumho",
    station_nm: "금호",
    coordinate: {
      lat: 37.548034,
      lng: 127.015872,
    },
  },
  "335": {
    line_num: "3호선",
    station_cd: "0325",
    station_nm_eng: "Oksu",
    station_nm: "옥수",
    coordinate: {
      lat: 37.540685,
      lng: 127.017965,
    },
  },
  "336": {
    line_num: "3호선",
    station_cd: "0326",
    station_nm_eng: "Apgujeong",
    station_nm: "압구정",
    coordinate: {
      lat: 37.527072,
      lng: 127.028461,
    },
  },
  "337": {
    line_num: "3호선",
    station_cd: "0327",
    station_nm_eng: "Sinsa",
    station_nm: "신사",
    coordinate: {
      lat: 37.516334,
      lng: 127.020114,
    },
  },
  "338": {
    line_num: "3호선",
    station_cd: "0328",
    station_nm_eng: "Jamwon",
    station_nm: "잠원",
    coordinate: {
      lat: 37.512759,
      lng: 127.01122,
    },
  },
  "339": {
    line_num: "3호선",
    station_cd: "0329",
    station_nm_eng: "Express Bus Terminal",
    station_nm: "고속터미널",
    coordinate: {
      lat: 37.50481,
      lng: 127.004943,
    },
  },
  "340": {
    line_num: "3호선",
    station_cd: "0330",
    station_nm_eng: "Seoul Nat`l Univ. of Education",
    station_nm: "교대",
    coordinate: {
      lat: 37.493415,
      lng: 127.01408,
    },
  },
  "341": {
    line_num: "3호선",
    station_cd: "0331",
    station_nm_eng: "Nambu Bus Terminal",
    station_nm: "남부터미널",
    coordinate: {
      lat: 37.485013,
      lng: 127.016189,
    },
  },
  "342": {
    line_num: "3호선",
    station_cd: "0332",
    station_nm_eng: "Yangjae",
    station_nm: "양재",
    coordinate: {
      lat: 37.484147,
      lng: 127.034631,
    },
  },
  "343": {
    line_num: "3호선",
    station_cd: "0333",
    station_nm_eng: "Maebong",
    station_nm: "매봉",
    coordinate: {
      lat: 37.486947,
      lng: 127.046769,
    },
  },
  "344": {
    line_num: "3호선",
    station_cd: "0334",
    station_nm_eng: "Dogok",
    station_nm: "도곡",
    coordinate: {
      lat: 37.490858,
      lng: 127.055381,
    },
  },
  "345": {
    line_num: "3호선",
    station_cd: "0335",
    station_nm_eng: "Daechi",
    station_nm: "대치",
    coordinate: {
      lat: 37.494612,
      lng: 127.063642,
    },
  },
  "346": {
    line_num: "3호선",
    station_cd: "0336",
    station_nm_eng: "Hangnyeoul",
    station_nm: "학여울",
    coordinate: {
      lat: 37.496663,
      lng: 127.070594,
    },
  },
  "347": {
    line_num: "3호선",
    station_cd: "0337",
    station_nm_eng: "Daecheong",
    station_nm: "대청",
    coordinate: {
      lat: 37.493514,
      lng: 127.079532,
    },
  },
  "348": {
    line_num: "3호선",
    station_cd: "0338",
    station_nm_eng: "Irwon",
    station_nm: "일원",
    coordinate: {
      lat: 37.483681,
      lng: 127.08439,
    },
  },
  "349": {
    line_num: "3호선",
    station_cd: "0339",
    station_nm_eng: "Suseo",
    station_nm: "수서",
    coordinate: {
      lat: 37.487371,
      lng: 127.10188,
    },
  },
  "350": {
    line_num: "3호선",
    station_cd: "0340",
    station_nm_eng: "Garak Market",
    station_nm: "가락시장",
    coordinate: {
      lat: 37.492522,
      lng: 127.118234,
    },
  },
  "351": {
    line_num: "3호선",
    station_cd: "0341",
    station_nm_eng: "National Police Hospital",
    station_nm: "경찰병원",
    coordinate: {
      lat: 37.495918,
      lng: 127.12454,
    },
  },
  "352": {
    line_num: "3호선",
    station_cd: "0342",
    station_nm_eng: "Ogeum",
    station_nm: "오금",
    coordinate: {
      lat: 37.502162,
      lng: 127.128111,
    },
  },
  "405": {
    line_num: "4호선",
    station_cd: "0405",
    station_nm_eng: "Jinjeop",
    station_nm: "진접",
    coordinate: {
      lat: 37.719858630462866,
      lng: 127.2033418352791,
    },
  },
  "406": {
    line_num: "4호선",
    station_cd: "0406",
    station_nm_eng: "Onam",
    station_nm: "오남",
    coordinate: {
      lat: 37.705138880415305,
      lng: 127.19129818156246,
    },
  },
  "408": {
    line_num: "4호선",
    station_cd: "0408",
    station_nm_eng: "Byeollae Byeolgaram",
    station_nm: "별내별가람",
    coordinate: {
      lat: 37.6676571789783,
      lng: 127.1160665843012,
    },
  },
  "409": {
    line_num: "4호선",
    station_cd: "0409",
    station_nm_eng: "Danggogae",
    station_nm: "당고개",
    coordinate: {
      lat: 37.670272,
      lng: 127.079066,
    },
  },
  "410": {
    line_num: "4호선",
    station_cd: "0410",
    station_nm_eng: "Sanggye",
    station_nm: "상계",
    coordinate: {
      lat: 37.660878,
      lng: 127.073572,
    },
  },
  "411": {
    line_num: "4호선",
    station_cd: "0411",
    station_nm_eng: "Nowon",
    station_nm: "노원",
    coordinate: {
      lat: 37.655128,
      lng: 127.061368,
    },
  },
  "412": {
    line_num: "4호선",
    station_cd: "0412",
    station_nm_eng: "Chang-dong",
    station_nm: "창동",
    coordinate: {
      lat: 37.653166,
      lng: 127.047731,
    },
  },
  "413": {
    line_num: "4호선",
    station_cd: "0413",
    station_nm_eng: "Ssangmun",
    station_nm: "쌍문",
    coordinate: {
      lat: 37.648627,
      lng: 127.034709,
    },
  },
  "414": {
    line_num: "4호선",
    station_cd: "0414",
    station_nm_eng: "Suyu",
    station_nm: "수유",
    coordinate: {
      lat: 37.638052,
      lng: 127.025732,
    },
  },
  "415": {
    line_num: "4호선",
    station_cd: "0415",
    station_nm_eng: "Mia",
    station_nm: "미아",
    coordinate: {
      lat: 37.62667,
      lng: 127.025983,
    },
  },
  "416": {
    line_num: "4호선",
    station_cd: "0416",
    station_nm_eng: "Miasageori",
    station_nm: "미아사거리",
    coordinate: {
      lat: 37.613292,
      lng: 127.030053,
    },
  },
  "417": {
    line_num: "4호선",
    station_cd: "0417",
    station_nm_eng: "Gireum",
    station_nm: "길음",
    coordinate: {
      lat: 37.603407,
      lng: 127.025053,
    },
  },
  "418": {
    line_num: "4호선",
    station_cd: "0418",
    station_nm_eng: "Sungshin Women`s Univ.",
    station_nm: "성신여대입구",
    coordinate: {
      lat: 37.592624,
      lng: 127.016403,
    },
  },
  "419": {
    line_num: "4호선",
    station_cd: "0419",
    station_nm_eng: "Hansung Univ.",
    station_nm: "한성대입구",
    coordinate: {
      lat: 37.588458,
      lng: 127.006221,
    },
  },
  "420": {
    line_num: "4호선",
    station_cd: "0420",
    station_nm_eng: "Hyehwa",
    station_nm: "혜화",
    coordinate: {
      lat: 37.582336,
      lng: 127.001844,
    },
  },
  "421": {
    line_num: "4호선",
    station_cd: "0421",
    station_nm_eng: "Dongdaemun",
    station_nm: "동대문",
    coordinate: {
      lat: 37.57142,
      lng: 127.009745,
    },
  },
  "422": {
    line_num: "4호선",
    station_cd: "0422",
    station_nm_eng: "Dongdaemun History  Culture Park",
    station_nm: "동대문역사문화공원",
    coordinate: {
      lat: 37.565138,
      lng: 127.007896,
    },
  },
  "423": {
    line_num: "4호선",
    station_cd: "0423",
    station_nm_eng: "Chungmuro",
    station_nm: "충무로",
    coordinate: {
      lat: 37.561243,
      lng: 126.99428,
    },
  },
  "424": {
    line_num: "4호선",
    station_cd: "0424",
    station_nm_eng: "Myeong-dong",
    station_nm: "명동",
    coordinate: {
      lat: 37.560989,
      lng: 126.986325,
    },
  },
  "425": {
    line_num: "4호선",
    station_cd: "0425",
    station_nm_eng: "Hoehyeon",
    station_nm: "회현",
    coordinate: {
      lat: 37.558514,
      lng: 126.978246,
    },
  },
  "426": {
    line_num: "4호선",
    station_cd: "0426",
    station_nm_eng: "Seoul Station",
    station_nm: "서울",
    coordinate: {
      lat: 37.55455089424185,
      lng: 126.97059508458507,
    },
  },
  "427": {
    line_num: "4호선",
    station_cd: "0427",
    station_nm_eng: "Sookmyung Women`s Univ.",
    station_nm: "숙대입구",
    coordinate: {
      lat: 37.54456,
      lng: 126.972106,
    },
  },
  "428": {
    line_num: "4호선",
    station_cd: "0428",
    station_nm_eng: "Samgakji",
    station_nm: "삼각지",
    coordinate: {
      lat: 37.534777,
      lng: 126.97311,
    },
  },
  "429": {
    line_num: "4호선",
    station_cd: "0429",
    station_nm_eng: "Sinyongsan",
    station_nm: "신용산",
    coordinate: {
      lat: 37.52917,
      lng: 126.967894,
    },
  },
  "430": {
    line_num: "4호선",
    station_cd: "0430",
    station_nm_eng: "Ichon",
    station_nm: "이촌",
    coordinate: {
      lat: 37.522272,
      lng: 126.974345,
    },
  },
  "431": {
    line_num: "4호선",
    station_cd: "0431",
    station_nm_eng: "Dongjak",
    station_nm: "동작",
    coordinate: {
      lat: 37.502971,
      lng: 126.979306,
    },
  },
  "432": {
    line_num: "4호선",
    station_cd: "0432",
    station_nm_eng: "Chongshin Univ.",
    station_nm: "총신대입구",
    coordinate: {
      lat: 37.486263,
      lng: 126.981989,
    },
  },
  "433": {
    line_num: "4호선",
    station_cd: "0433",
    station_nm_eng: "Sadang",
    station_nm: "사당",
    coordinate: {
      lat: 37.47653,
      lng: 126.981685,
    },
  },
  "434": {
    line_num: "4호선",
    station_cd: "0434",
    station_nm_eng: "Namtaeryeong",
    station_nm: "남태령",
    coordinate: {
      lat: 37.463873,
      lng: 126.989134,
    },
  },
  "435": {
    line_num: "4호선",
    station_cd: "1450",
    station_nm_eng: "Seonbawi",
    station_nm: "선바위",
    coordinate: {
      lat: 37.451673,
      lng: 127.002303,
    },
  },
  "436": {
    line_num: "4호선",
    station_cd: "1451",
    station_nm_eng: "Seoul Racecourse Park",
    station_nm: "경마공원",
    coordinate: {
      lat: 37.443885,
      lng: 127.007888,
    },
  },
  "437": {
    line_num: "4호선",
    station_cd: "1452",
    station_nm_eng: "Seoul Grand Park",
    station_nm: "대공원",
    coordinate: {
      lat: 37.435675,
      lng: 127.006523,
    },
  },
  "438": {
    line_num: "4호선",
    station_cd: "1453",
    station_nm_eng: "Gwacheon",
    station_nm: "과천",
    coordinate: {
      lat: 37.433021,
      lng: 126.996568,
    },
  },
  "439": {
    line_num: "4호선",
    station_cd: "1454",
    station_nm_eng: "Government Complex Gwacheon",
    station_nm: "정부과천청사",
    coordinate: {
      lat: 37.426513,
      lng: 126.98978,
    },
  },
  "440": {
    line_num: "4호선",
    station_cd: "1455",
    station_nm_eng: "Indeogwon",
    station_nm: "인덕원",
    coordinate: {
      lat: 37.401553,
      lng: 126.976715,
    },
  },
  "441": {
    line_num: "4호선",
    station_cd: "1456",
    station_nm_eng: "Pyeongchon",
    station_nm: "평촌",
    coordinate: {
      lat: 37.394287,
      lng: 126.963883,
    },
  },
  "442": {
    line_num: "4호선",
    station_cd: "1457",
    station_nm_eng: "Beomgye",
    station_nm: "범계",
    coordinate: {
      lat: 37.389793,
      lng: 126.950806,
    },
  },
  "443": {
    line_num: "4호선",
    station_cd: "1458",
    station_nm_eng: "Geumjeong",
    station_nm: "금정",
    coordinate: {
      lat: 37.372221,
      lng: 126.943429,
    },
  },
  "444": {
    line_num: "4호선",
    station_cd: "1751",
    station_nm_eng: "Sanbon",
    station_nm: "산본",
    coordinate: {
      lat: 37.358101,
      lng: 126.933274,
    },
  },
  "445": {
    line_num: "4호선",
    station_cd: "1763",
    station_nm_eng: "Surisan",
    station_nm: "수리산",
    coordinate: {
      lat: 37.349801,
      lng: 126.925365,
    },
  },
  "446": {
    line_num: "4호선",
    station_cd: "1752",
    station_nm_eng: "Daeyami",
    station_nm: "대야미",
    coordinate: {
      lat: 37.328467,
      lng: 126.917332,
    },
  },
  "447": {
    line_num: "4호선",
    station_cd: "1753",
    station_nm_eng: "Banwol",
    station_nm: "반월",
    coordinate: {
      lat: 37.312212,
      lng: 126.903524,
    },
  },
  "448": {
    line_num: "4호선",
    station_cd: "1754",
    station_nm_eng: "Sangnoksu",
    station_nm: "상록수",
    coordinate: {
      lat: 37.302795,
      lng: 126.866489,
    },
  },
  "449": {
    line_num: "4호선",
    station_cd: "1755",
    station_nm_eng: "Hanyang Univ. at Ansan",
    station_nm: "한대앞",
    coordinate: {
      lat: 37.309689,
      lng: 126.85344,
    },
  },
  "450": {
    line_num: "4호선",
    station_cd: "1756",
    station_nm_eng: "Jungang",
    station_nm: "중앙",
    coordinate: {
      lat: 37.315941,
      lng: 126.838573,
    },
  },
  "451": {
    line_num: "4호선",
    station_cd: "1757",
    station_nm_eng: "Gojan",
    station_nm: "고잔",
    coordinate: {
      lat: 37.316777,
      lng: 126.823249,
    },
  },
  "452": {
    line_num: "4호선",
    station_cd: "1758",
    station_nm_eng: "Choji",
    station_nm: "초지",
    coordinate: {
      lat: 37.320646,
      lng: 126.805913,
    },
  },
  "453": {
    line_num: "4호선",
    station_cd: "1759",
    station_nm_eng: "Ansan",
    station_nm: "안산",
    coordinate: {
      lat: 37.327082,
      lng: 126.788532,
    },
  },
  "454": {
    line_num: "4호선",
    station_cd: "1760",
    station_nm_eng: "Neunggil",
    station_nm: "신길온천",
    coordinate: {
      lat: 37.338212,
      lng: 126.765844,
    },
  },
  "455": {
    line_num: "4호선",
    station_cd: "1761",
    station_nm_eng: "Jeongwang",
    station_nm: "정왕",
    coordinate: {
      lat: 37.351735,
      lng: 126.742989,
    },
  },
  "456": {
    line_num: "4호선",
    station_cd: "1762",
    station_nm_eng: "Oido",
    station_nm: "오이도",
    coordinate: {
      lat: 37.362357,
      lng: 126.738714,
    },
  },
  "510": {
    line_num: "5호선",
    station_cd: "2511",
    station_nm_eng: "Banghwa",
    station_nm: "방화",
    coordinate: {
      lat: 37.577446,
      lng: 126.812741,
    },
  },
  "511": {
    line_num: "5호선",
    station_cd: "2512",
    station_nm_eng: "Gaehwasan",
    station_nm: "개화산",
    coordinate: {
      lat: 37.572399,
      lng: 126.806171,
    },
  },
  "512": {
    line_num: "5호선",
    station_cd: "2513",
    station_nm_eng: "Gimpo Intl. Airport",
    station_nm: "김포공항",
    coordinate: {
      lat: 37.562434,
      lng: 126.801058,
    },
  },
  "513": {
    line_num: "5호선",
    station_cd: "2514",
    station_nm_eng: "Songjeong",
    station_nm: "송정",
    coordinate: {
      lat: 37.561184,
      lng: 126.811973,
    },
  },
  "514": {
    line_num: "5호선",
    station_cd: "2515",
    station_nm_eng: "Magok",
    station_nm: "마곡",
    coordinate: {
      lat: 37.560183,
      lng: 126.825448,
    },
  },
  "515": {
    line_num: "5호선",
    station_cd: "2516",
    station_nm_eng: "Balsan",
    station_nm: "발산",
    coordinate: {
      lat: 37.558598,
      lng: 126.837668,
    },
  },
  "516": {
    line_num: "5호선",
    station_cd: "2517",
    station_nm_eng: "Ujangsan",
    station_nm: "우장산",
    coordinate: {
      lat: 37.548768,
      lng: 126.836318,
    },
  },
  "517": {
    line_num: "5호선",
    station_cd: "2518",
    station_nm_eng: "Hwagok",
    station_nm: "화곡",
    coordinate: {
      lat: 37.541513,
      lng: 126.840461,
    },
  },
  "518": {
    line_num: "5호선",
    station_cd: "2519",
    station_nm_eng: "Kkachisan",
    station_nm: "까치산",
    coordinate: {
      lat: 37.531768,
      lng: 126.846683,
    },
  },
  "519": {
    line_num: "5호선",
    station_cd: "2520",
    station_nm_eng: "Sinjeong",
    station_nm: "신정",
    coordinate: {
      lat: 37.524997,
      lng: 126.856191,
    },
  },
  "520": {
    line_num: "5호선",
    station_cd: "2521",
    station_nm_eng: "Mok-dong",
    station_nm: "목동",
    coordinate: {
      lat: 37.526065,
      lng: 126.864931,
    },
  },
  "521": {
    line_num: "5호선",
    station_cd: "2522",
    station_nm_eng: "Omokgyo",
    station_nm: "오목교",
    coordinate: {
      lat: 37.524496,
      lng: 126.875181,
    },
  },
  "522": {
    line_num: "5호선",
    station_cd: "2523",
    station_nm_eng: "Yangpyeong",
    station_nm: "양평",
    coordinate: {
      lat: 37.492832,
      lng: 127.491814,
    },
  },
  "523": {
    line_num: "5호선",
    station_cd: "2524",
    station_nm_eng: "Yeongdeungpo-gu Office",
    station_nm: "영등포구청",
    coordinate: {
      lat: 37.52497,
      lng: 126.895951,
    },
  },
  "524": {
    line_num: "5호선",
    station_cd: "2525",
    station_nm_eng: "Yeongdeungpo Market",
    station_nm: "영등포시장",
    coordinate: {
      lat: 37.522669,
      lng: 126.905139,
    },
  },
  "525": {
    line_num: "5호선",
    station_cd: "2526",
    station_nm_eng: "Singil",
    station_nm: "신길",
    coordinate: {
      lat: 37.517122,
      lng: 126.917169,
    },
  },
  "526": {
    line_num: "5호선",
    station_cd: "2527",
    station_nm_eng: "Yeouido",
    station_nm: "여의도",
    coordinate: {
      lat: 37.521624,
      lng: 126.924191,
    },
  },
  "527": {
    line_num: "5호선",
    station_cd: "2528",
    station_nm_eng: "Yeouinaru",
    station_nm: "여의나루",
    coordinate: {
      lat: 37.527098,
      lng: 126.932901,
    },
  },
  "528": {
    line_num: "5호선",
    station_cd: "2529",
    station_nm_eng: "Mapo",
    station_nm: "마포",
    coordinate: {
      lat: 37.539574,
      lng: 126.945932,
    },
  },
  "529": {
    line_num: "5호선",
    station_cd: "2530",
    station_nm_eng: "Gongdeok",
    station_nm: "공덕",
    coordinate: {
      lat: 37.544018,
      lng: 126.951592,
    },
  },
  "530": {
    line_num: "5호선",
    station_cd: "2531",
    station_nm_eng: "Aeogae",
    station_nm: "애오개",
    coordinate: {
      lat: 37.553736,
      lng: 126.95682,
    },
  },
  "531": {
    line_num: "5호선",
    station_cd: "2532",
    station_nm_eng: "Chungjeongno",
    station_nm: "충정로",
    coordinate: {
      lat: 37.559973,
      lng: 126.963672,
    },
  },
  "532": {
    line_num: "5호선",
    station_cd: "2533",
    station_nm_eng: "Seodaemun",
    station_nm: "서대문",
    coordinate: {
      lat: 37.565773,
      lng: 126.966641,
    },
  },
  "533": {
    line_num: "5호선",
    station_cd: "2534",
    station_nm_eng: "Gwanghwamun",
    station_nm: "광화문",
    coordinate: {
      lat: 37.571026,
      lng: 126.976669,
    },
  },
  "534": {
    line_num: "5호선",
    station_cd: "2535",
    station_nm_eng: "Jongno 3(sam)-ga",
    station_nm: "종로3가",
    coordinate: {
      lat: 37.571607,
      lng: 126.991806,
    },
  },
  "535": {
    line_num: "5호선",
    station_cd: "2536",
    station_nm_eng: "Euljiro 4(sa)-ga",
    station_nm: "을지로4가",
    coordinate: {
      lat: 37.566941,
      lng: 126.998079,
    },
  },
  "536": {
    line_num: "5호선",
    station_cd: "2537",
    station_nm_eng: "Dongdaemun History  Culture Park",
    station_nm: "동대문역사문화공원",
    coordinate: {
      lat: 37.565138,
      lng: 127.007896,
    },
  },
  "537": {
    line_num: "5호선",
    station_cd: "2538",
    station_nm_eng: "Cheonggu",
    station_nm: "청구",
    coordinate: {
      lat: 37.560245,
      lng: 127.013828,
    },
  },
  "538": {
    line_num: "5호선",
    station_cd: "2539",
    station_nm_eng: "Singeumho",
    station_nm: "신금호",
    coordinate: {
      lat: 37.554548,
      lng: 127.020331,
    },
  },
  "539": {
    line_num: "5호선",
    station_cd: "2540",
    station_nm_eng: "Haengdang",
    station_nm: "행당",
    coordinate: {
      lat: 37.557322,
      lng: 127.029476,
    },
  },
  "540": {
    line_num: "5호선",
    station_cd: "2541",
    station_nm_eng: "Wangsimni",
    station_nm: "왕십리",
    coordinate: {
      lat: 37.561533,
      lng: 127.037732,
    },
  },
  "541": {
    line_num: "5호선",
    station_cd: "2542",
    station_nm_eng: "Majang",
    station_nm: "마장",
    coordinate: {
      lat: 37.5661,
      lng: 127.042973,
    },
  },
  "542": {
    line_num: "5호선",
    station_cd: "2543",
    station_nm_eng: "Dapsimni",
    station_nm: "답십리",
    coordinate: {
      lat: 37.566747,
      lng: 127.052704,
    },
  },
  "543": {
    line_num: "5호선",
    station_cd: "2544",
    station_nm_eng: "Janghanpyeong",
    station_nm: "장한평",
    coordinate: {
      lat: 37.56144,
      lng: 127.064623,
    },
  },
  "544": {
    line_num: "5호선",
    station_cd: "2545",
    station_nm_eng: "Gunja",
    station_nm: "군자",
    coordinate: {
      lat: 37.557121,
      lng: 127.079542,
    },
  },
  "545": {
    line_num: "5호선",
    station_cd: "2546",
    station_nm_eng: "Achasan",
    station_nm: "아차산",
    coordinate: {
      lat: 37.551691,
      lng: 127.089761,
    },
  },
  "546": {
    line_num: "5호선",
    station_cd: "2547",
    station_nm_eng: "Gwangnaru",
    station_nm: "광나루",
    coordinate: {
      lat: 37.545303,
      lng: 127.10357,
    },
  },
  "547": {
    line_num: "5호선",
    station_cd: "2548",
    station_nm_eng: "Cheonho",
    station_nm: "천호",
    coordinate: {
      lat: 37.538397,
      lng: 127.123572,
    },
  },
  "548": {
    line_num: "5호선",
    station_cd: "2549",
    station_nm_eng: "Gangdong",
    station_nm: "강동",
    coordinate: {
      lat: 37.535804,
      lng: 127.132481,
    },
  },
  "549": {
    line_num: "5호선",
    station_cd: "2550",
    station_nm_eng: "Gil-dong",
    station_nm: "길동",
    coordinate: {
      lat: 37.537801,
      lng: 127.140004,
    },
  },
  "550": {
    line_num: "5호선",
    station_cd: "2551",
    station_nm_eng: "Gubeundari",
    station_nm: "굽은다리",
    coordinate: {
      lat: 37.545477,
      lng: 127.142853,
    },
  },
  "551": {
    line_num: "5호선",
    station_cd: "2552",
    station_nm_eng: "Myeongil",
    station_nm: "명일",
    coordinate: {
      lat: 37.55137,
      lng: 127.143999,
    },
  },
  "552": {
    line_num: "5호선",
    station_cd: "2553",
    station_nm_eng: "Godeok",
    station_nm: "고덕",
    coordinate: {
      lat: 37.555004,
      lng: 127.154151,
    },
  },
  "553": {
    line_num: "5호선",
    station_cd: "2554",
    station_nm_eng: "Sangil-dong",
    station_nm: "상일동",
    coordinate: {
      lat: 37.556712,
      lng: 127.166417,
    },
  },
  "554": {
    line_num: "5호선",
    station_cd: "2562",
    station_nm_eng: "Gangil",
    station_nm: "강일",
    coordinate: {
      lat: 37.55741496468324,
      lng: 127.1758165349433,
    },
  },
  "555": {
    line_num: "5호선",
    station_cd: "2563",
    station_nm_eng: "Misa",
    station_nm: "미사",
    coordinate: {
      lat: 37.56299294343455,
      lng: 127.19261775130444,
    },
  },
  "556": {
    line_num: "5호선",
    station_cd: "2564",
    station_nm_eng: "Hanam Pungsan",
    station_nm: "하남풍산",
    coordinate: {
      lat: 37.55238251527631,
      lng: 127.20406007330061,
    },
  },
  "557": {
    line_num: "5호선",
    station_cd: "2565",
    station_nm_eng: "Hanam City Hall",
    station_nm: "하남시청",
    coordinate: {
      lat: 37.541940439041305,
      lng: 127.20637387239448,
    },
  },
  "558": {
    line_num: "5호선",
    station_cd: "2566",
    station_nm_eng: "Hanam Geomdansan",
    station_nm: "하남검단산",
    coordinate: {
      lat: 37.539772378606514,
      lng: 127.22311401626526,
    },
  },
  "610": {
    line_num: "6호선",
    station_cd: "2611",
    station_nm_eng: "Eungam",
    station_nm: "응암",
    coordinate: {
      lat: 37.598605,
      lng: 126.915577,
    },
  },
  "611": {
    line_num: "6호선",
    station_cd: "2612",
    station_nm_eng: "Yeokchon",
    station_nm: "역촌",
    coordinate: {
      lat: 37.606021,
      lng: 126.922744,
    },
  },
  "612": {
    line_num: "6호선",
    station_cd: "2613",
    station_nm_eng: "Bulgwang",
    station_nm: "불광",
    coordinate: {
      lat: 37.610469,
      lng: 126.929887,
    },
  },
  "613": {
    line_num: "6호선",
    station_cd: "2614",
    station_nm_eng: "Dokbawi",
    station_nm: "독바위",
    coordinate: {
      lat: 37.618456,
      lng: 126.933031,
    },
  },
  "614": {
    line_num: "6호선",
    station_cd: "2615",
    station_nm_eng: "Yeonsinnae",
    station_nm: "연신내",
    coordinate: {
      lat: 37.619001,
      lng: 126.921008,
    },
  },
  "615": {
    line_num: "6호선",
    station_cd: "2616",
    station_nm_eng: "Gusan",
    station_nm: "구산",
    coordinate: {
      lat: 37.611377,
      lng: 126.91727,
    },
  },
  "616": {
    line_num: "6호선",
    station_cd: "2617",
    station_nm_eng: "Saejeol",
    station_nm: "새절",
    coordinate: {
      lat: 37.591148,
      lng: 126.913629,
    },
  },
  "617": {
    line_num: "6호선",
    station_cd: "2618",
    station_nm_eng: "Jeungsan",
    station_nm: "증산",
    coordinate: {
      lat: 37.583876,
      lng: 126.909645,
    },
  },
  "618": {
    line_num: "6호선",
    station_cd: "2619",
    station_nm_eng: "Digital Media City",
    station_nm: "디지털미디어시티",
    coordinate: {
      lat: 37.576646,
      lng: 126.900984,
    },
  },
  "619": {
    line_num: "6호선",
    station_cd: "2620",
    station_nm_eng: "World Cup Stadium",
    station_nm: "월드컵경기장",
    coordinate: {
      lat: 37.569532,
      lng: 126.899298,
    },
  },
  "620": {
    line_num: "6호선",
    station_cd: "2621",
    station_nm_eng: "Mapo-gu Office",
    station_nm: "마포구청",
    coordinate: {
      lat: 37.563515,
      lng: 126.903343,
    },
  },
  "621": {
    line_num: "6호선",
    station_cd: "2622",
    station_nm_eng: "Mangwon",
    station_nm: "망원",
    coordinate: {
      lat: 37.556094,
      lng: 126.910052,
    },
  },
  "622": {
    line_num: "6호선",
    station_cd: "2623",
    station_nm_eng: "Hapjeong",
    station_nm: "합정",
    coordinate: {
      lat: 37.549463,
      lng: 126.913739,
    },
  },
  "623": {
    line_num: "6호선",
    station_cd: "2624",
    station_nm_eng: "Sangsu",
    station_nm: "상수",
    coordinate: {
      lat: 37.547716,
      lng: 126.922852,
    },
  },
  "624": {
    line_num: "6호선",
    station_cd: "2625",
    station_nm_eng: "Gwangheungchang",
    station_nm: "광흥창",
    coordinate: {
      lat: 37.547456,
      lng: 126.931993,
    },
  },
  "625": {
    line_num: "6호선",
    station_cd: "2626",
    station_nm_eng: "Daeheung",
    station_nm: "대흥",
    coordinate: {
      lat: 37.547771,
      lng: 126.942069,
    },
  },
  "626": {
    line_num: "6호선",
    station_cd: "2627",
    station_nm_eng: "Gongdeok",
    station_nm: "공덕",
    coordinate: {
      lat: 37.544018,
      lng: 126.951592,
    },
  },
  "627": {
    line_num: "6호선",
    station_cd: "2628",
    station_nm_eng: "Hyochang park",
    station_nm: "효창공원앞",
    coordinate: {
      lat: 37.539261,
      lng: 126.961351,
    },
  },
  "628": {
    line_num: "6호선",
    station_cd: "2629",
    station_nm_eng: "Samgakji",
    station_nm: "삼각지",
    coordinate: {
      lat: 37.534777,
      lng: 126.97311,
    },
  },
  "629": {
    line_num: "6호선",
    station_cd: "2630",
    station_nm_eng: "Noksapyeong",
    station_nm: "녹사평",
    coordinate: {
      lat: 37.534675,
      lng: 126.986695,
    },
  },
  "630": {
    line_num: "6호선",
    station_cd: "2631",
    station_nm_eng: "Itaewon",
    station_nm: "이태원",
    coordinate: {
      lat: 37.534488,
      lng: 126.994302,
    },
  },
  "631": {
    line_num: "6호선",
    station_cd: "2632",
    station_nm_eng: "Hangangjin",
    station_nm: "한강진",
    coordinate: {
      lat: 37.539631,
      lng: 127.001725,
    },
  },
  "632": {
    line_num: "6호선",
    station_cd: "2633",
    station_nm_eng: "Beotigogae",
    station_nm: "버티고개",
    coordinate: {
      lat: 37.548013,
      lng: 127.007055,
    },
  },
  "633": {
    line_num: "6호선",
    station_cd: "2634",
    station_nm_eng: "Yaksu",
    station_nm: "약수",
    coordinate: {
      lat: 37.55434,
      lng: 127.010655,
    },
  },
  "634": {
    line_num: "6호선",
    station_cd: "2635",
    station_nm_eng: "Cheonggu",
    station_nm: "청구",
    coordinate: {
      lat: 37.560245,
      lng: 127.013828,
    },
  },
  "635": {
    line_num: "6호선",
    station_cd: "2636",
    station_nm_eng: "Sindang",
    station_nm: "신당",
    coordinate: {
      lat: 37.565972,
      lng: 127.01782,
    },
  },
  "636": {
    line_num: "6호선",
    station_cd: "2637",
    station_nm_eng: "Dongmyo",
    station_nm: "동묘앞",
    coordinate: {
      lat: 37.572627,
      lng: 127.016429,
    },
  },
  "637": {
    line_num: "6호선",
    station_cd: "2638",
    station_nm_eng: "Changsin",
    station_nm: "창신",
    coordinate: {
      lat: 37.579661,
      lng: 127.015241,
    },
  },
  "638": {
    line_num: "6호선",
    station_cd: "2639",
    station_nm_eng: "Bomun",
    station_nm: "보문",
    coordinate: {
      lat: 37.585286,
      lng: 127.019381,
    },
  },
  "639": {
    line_num: "6호선",
    station_cd: "2640",
    station_nm_eng: "Anam",
    station_nm: "안암",
    coordinate: {
      lat: 37.586272,
      lng: 127.029005,
    },
  },
  "640": {
    line_num: "6호선",
    station_cd: "2641",
    station_nm_eng: "Korea Univ.",
    station_nm: "고려대",
    coordinate: {
      lat: 37.590508,
      lng: 127.036296,
    },
  },
  "641": {
    line_num: "6호선",
    station_cd: "2642",
    station_nm_eng: "Wolgok",
    station_nm: "월곡",
    coordinate: {
      lat: 37.601948,
      lng: 127.041518,
    },
  },
  "642": {
    line_num: "6호선",
    station_cd: "2643",
    station_nm_eng: "Sangwolgok",
    station_nm: "상월곡",
    coordinate: {
      lat: 37.606377,
      lng: 127.048491,
    },
  },
  "643": {
    line_num: "6호선",
    station_cd: "2644",
    station_nm_eng: "Dolgoji",
    station_nm: "돌곶이",
    coordinate: {
      lat: 37.610537,
      lng: 127.056431,
    },
  },
  "644": {
    line_num: "6호선",
    station_cd: "2645",
    station_nm_eng: "Seokgye",
    station_nm: "석계",
    coordinate: {
      lat: 37.614805,
      lng: 127.065851,
    },
  },
  "645": {
    line_num: "6호선",
    station_cd: "2646",
    station_nm_eng: "Taereung",
    station_nm: "태릉입구",
    coordinate: {
      lat: 37.617983,
      lng: 127.07512,
    },
  },
  "646": {
    line_num: "6호선",
    station_cd: "2647",
    station_nm_eng: "Hwarangdae",
    station_nm: "화랑대",
    coordinate: {
      lat: 37.620064,
      lng: 127.084689,
    },
  },
  "647": {
    line_num: "6호선",
    station_cd: "2648",
    station_nm_eng: "Bonghwasan",
    station_nm: "봉화산",
    coordinate: {
      lat: 37.617283,
      lng: 127.091401,
    },
  },
  "648": {
    line_num: "6호선",
    station_cd: "2649",
    station_nm_eng: "Sinnae",
    station_nm: "신내",
    coordinate: {
      lat: 37.612887,
      lng: 127.103218,
    },
  },
  "690": {
    line_num: "김포골드라인",
    station_cd: "4920",
    station_nm_eng: "Yangchon",
    station_nm: "양촌",
    coordinate: {
      lat: 37.64172908797785,
      lng: 126.61465909205671,
    },
  },
  "691": {
    line_num: "김포골드라인",
    station_cd: "4921",
    station_nm_eng: "Gurae",
    station_nm: "구래",
    coordinate: {
      lat: 37.645393696073,
      lng: 126.62866782222149,
    },
  },
  "692": {
    line_num: "김포골드라인",
    station_cd: "4922",
    station_nm_eng: "Masan",
    station_nm: "마산",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  "693": {
    line_num: "김포골드라인",
    station_cd: "4923",
    station_nm_eng: "Janggi",
    station_nm: "장기",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  "694": {
    line_num: "김포골드라인",
    station_cd: "4924",
    station_nm_eng: "Unyang",
    station_nm: "운양",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  "695": {
    line_num: "김포골드라인",
    station_cd: "4925",
    station_nm_eng: "Geolpo Bukbyeon",
    station_nm: "걸포북변",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  "696": {
    line_num: "김포골드라인",
    station_cd: "4926",
    station_nm_eng: "Sau",
    station_nm: "사우",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  "697": {
    line_num: "김포골드라인",
    station_cd: "4927",
    station_nm_eng: "Pungmu",
    station_nm: "풍무",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  "698": {
    line_num: "김포골드라인",
    station_cd: "4928",
    station_nm_eng: "Gochon",
    station_nm: "고촌",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  "699": {
    line_num: "김포골드라인",
    station_cd: "4929",
    station_nm_eng: "Gimpo Int’l Airport",
    station_nm: "김포공항",
    coordinate: {
      lat: 37.562434,
      lng: 126.801058,
    },
  },
  "701": {
    line_num: "서해선",
    station_cd: "4814",
    station_nm_eng: "Siu",
    station_nm: "시우",
    coordinate: {
      lat: 37.31316752251141,
      lng: 126.79591425765936,
    },
  },
  "702": {
    line_num: "서해선",
    station_cd: "4815",
    station_nm_eng: "Wonsi",
    station_nm: "원시",
    coordinate: {
      lat: 37.302532675266804,
      lng: 126.78674754436027,
    },
  },
  "709": {
    line_num: "7호선",
    station_cd: "2711",
    station_nm_eng: "Jangam",
    station_nm: "장암",
    coordinate: {
      lat: 37.700109,
      lng: 127.053196,
    },
  },
  "710": {
    line_num: "7호선",
    station_cd: "2712",
    station_nm_eng: "Dobongsan",
    station_nm: "도봉산",
    coordinate: {
      lat: 37.689313,
      lng: 127.046222,
    },
  },
  "711": {
    line_num: "7호선",
    station_cd: "2713",
    station_nm_eng: "Suraksan",
    station_nm: "수락산",
    coordinate: {
      lat: 37.67785,
      lng: 127.055315,
    },
  },
  "712": {
    line_num: "7호선",
    station_cd: "2714",
    station_nm_eng: "Madeul",
    station_nm: "마들",
    coordinate: {
      lat: 37.66494,
      lng: 127.057675,
    },
  },
  "713": {
    line_num: "7호선",
    station_cd: "2715",
    station_nm_eng: "Nowon",
    station_nm: "노원",
    coordinate: {
      lat: 37.655128,
      lng: 127.061368,
    },
  },
  "714": {
    line_num: "7호선",
    station_cd: "2716",
    station_nm_eng: "Junggye",
    station_nm: "중계",
    coordinate: {
      lat: 37.644583,
      lng: 127.064303,
    },
  },
  "715": {
    line_num: "7호선",
    station_cd: "2717",
    station_nm_eng: "Hagye",
    station_nm: "하계",
    coordinate: {
      lat: 37.636352,
      lng: 127.06799,
    },
  },
  "716": {
    line_num: "7호선",
    station_cd: "2718",
    station_nm_eng: "Gongneung",
    station_nm: "공릉",
    coordinate: {
      lat: 37.625742,
      lng: 127.072896,
    },
  },
  "717": {
    line_num: "7호선",
    station_cd: "2719",
    station_nm_eng: "Taereung",
    station_nm: "태릉입구",
    coordinate: {
      lat: 37.617983,
      lng: 127.07512,
    },
  },
  "718": {
    line_num: "7호선",
    station_cd: "2720",
    station_nm_eng: "Meokgol",
    station_nm: "먹골",
    coordinate: {
      lat: 37.610637,
      lng: 127.077725,
    },
  },
  "719": {
    line_num: "7호선",
    station_cd: "2721",
    station_nm_eng: "Junghwa",
    station_nm: "중화",
    coordinate: {
      lat: 37.602545,
      lng: 127.079264,
    },
  },
  "720": {
    line_num: "7호선",
    station_cd: "2722",
    station_nm_eng: "Sangbong",
    station_nm: "상봉",
    coordinate: {
      lat: 37.596362,
      lng: 127.085032,
    },
  },
  "721": {
    line_num: "7호선",
    station_cd: "2723",
    station_nm_eng: "Myeonmok",
    station_nm: "면목",
    coordinate: {
      lat: 37.588579,
      lng: 127.087503,
    },
  },
  "722": {
    line_num: "7호선",
    station_cd: "2724",
    station_nm_eng: "Sagajeong",
    station_nm: "사가정",
    coordinate: {
      lat: 37.580894,
      lng: 127.088478,
    },
  },
  "723": {
    line_num: "7호선",
    station_cd: "2725",
    station_nm_eng: "Yongmasan",
    station_nm: "용마산",
    coordinate: {
      lat: 37.573647,
      lng: 127.086727,
    },
  },
  "724": {
    line_num: "7호선",
    station_cd: "2726",
    station_nm_eng: "Junggok",
    station_nm: "중곡",
    coordinate: {
      lat: 37.565923,
      lng: 127.08432,
    },
  },
  "725": {
    line_num: "7호선",
    station_cd: "2727",
    station_nm_eng: "Gunja",
    station_nm: "군자",
    coordinate: {
      lat: 37.557121,
      lng: 127.079542,
    },
  },
  "726": {
    line_num: "7호선",
    station_cd: "2728",
    station_nm_eng: "Children`s  Grand Park",
    station_nm: "어린이대공원",
    coordinate: {
      lat: 37.548014,
      lng: 127.074658,
    },
  },
  "727": {
    line_num: "7호선",
    station_cd: "2729",
    station_nm_eng: "Konkuk Univ.",
    station_nm: "건대입구",
    coordinate: {
      lat: 37.540693,
      lng: 127.07023,
    },
  },
  "728": {
    line_num: "7호선",
    station_cd: "2730",
    station_nm_eng: "Ttukseom Park",
    station_nm: "뚝섬유원지",
    coordinate: {
      lat: 37.53154,
      lng: 127.066704,
    },
  },
  "729": {
    line_num: "7호선",
    station_cd: "2731",
    station_nm_eng: "Cheongdam",
    station_nm: "청담",
    coordinate: {
      lat: 37.519365,
      lng: 127.05335,
    },
  },
  "730": {
    line_num: "7호선",
    station_cd: "2732",
    station_nm_eng: "Gangnam-gu Office",
    station_nm: "강남구청",
    coordinate: {
      lat: 37.517186,
      lng: 127.04128,
    },
  },
  "731": {
    line_num: "7호선",
    station_cd: "2733",
    station_nm_eng: "Hak-dong",
    station_nm: "학동",
    coordinate: {
      lat: 37.514229,
      lng: 127.031656,
    },
  },
  "732": {
    line_num: "7호선",
    station_cd: "2734",
    station_nm_eng: "Nonhyeon",
    station_nm: "논현",
    coordinate: {
      lat: 37.511093,
      lng: 127.021415,
    },
  },
  "733": {
    line_num: "7호선",
    station_cd: "2735",
    station_nm_eng: "Banpo",
    station_nm: "반포",
    coordinate: {
      lat: 37.508178,
      lng: 127.011727,
    },
  },
  "734": {
    line_num: "7호선",
    station_cd: "2736",
    station_nm_eng: "Express Bus Terminal",
    station_nm: "고속터미널",
    coordinate: {
      lat: 37.50481,
      lng: 127.004943,
    },
  },
  "735": {
    line_num: "7호선",
    station_cd: "2737",
    station_nm_eng: "Naebang",
    station_nm: "내방",
    coordinate: {
      lat: 37.487618,
      lng: 126.993513,
    },
  },
  "736": {
    line_num: "7호선",
    station_cd: "2738",
    station_nm_eng: "Isu",
    station_nm: "이수",
    coordinate: {
      lat: 37.48523442839498,
      lng: 126.98145695288629,
    },
  },
  "737": {
    line_num: "7호선",
    station_cd: "2739",
    station_nm_eng: "Namseong",
    station_nm: "남성",
    coordinate: {
      lat: 37.484596,
      lng: 126.971251,
    },
  },
  "738": {
    line_num: "7호선",
    station_cd: "2740",
    station_nm_eng: "Soongsil Univ.",
    station_nm: "숭실대입구",
    coordinate: {
      lat: 37.496029,
      lng: 126.953822,
    },
  },
  "739": {
    line_num: "7호선",
    station_cd: "2741",
    station_nm_eng: "Sangdo",
    station_nm: "상도",
    coordinate: {
      lat: 37.502834,
      lng: 126.94791,
    },
  },
  "740": {
    line_num: "7호선",
    station_cd: "2742",
    station_nm_eng: "Jangseungbaegi",
    station_nm: "장승배기",
    coordinate: {
      lat: 37.504898,
      lng: 126.93915,
    },
  },
  "741": {
    line_num: "7호선",
    station_cd: "2743",
    station_nm_eng: "Sindaebangsamgeori",
    station_nm: "신대방삼거리",
    coordinate: {
      lat: 37.499701,
      lng: 126.928276,
    },
  },
  "742": {
    line_num: "7호선",
    station_cd: "2744",
    station_nm_eng: "Boramae",
    station_nm: "보라매",
    coordinate: {
      lat: 37.499872,
      lng: 126.920428,
    },
  },
  "743": {
    line_num: "7호선",
    station_cd: "2745",
    station_nm_eng: "Sinpung",
    station_nm: "신풍",
    coordinate: {
      lat: 37.50008,
      lng: 126.90993,
    },
  },
  "744": {
    line_num: "7호선",
    station_cd: "2746",
    station_nm_eng: "Daerim",
    station_nm: "대림",
    coordinate: {
      lat: 37.49297,
      lng: 126.895801,
    },
  },
  "745": {
    line_num: "7호선",
    station_cd: "2747",
    station_nm_eng: "Namguro",
    station_nm: "남구로",
    coordinate: {
      lat: 37.486056,
      lng: 126.887249,
    },
  },
  "746": {
    line_num: "7호선",
    station_cd: "2748",
    station_nm_eng: "Gasan Digital Complex",
    station_nm: "가산디지털단지",
    coordinate: {
      lat: 37.481072,
      lng: 126.882343,
    },
  },
  "747": {
    line_num: "7호선",
    station_cd: "2749",
    station_nm_eng: "Cheolsan",
    station_nm: "철산",
    coordinate: {
      lat: 37.47605,
      lng: 126.867911,
    },
  },
  "748": {
    line_num: "7호선",
    station_cd: "2750",
    station_nm_eng: "Gwangmyeongsageori",
    station_nm: "광명사거리",
    coordinate: {
      lat: 37.479252,
      lng: 126.854876,
    },
  },
  "749": {
    line_num: "7호선",
    station_cd: "2751",
    station_nm_eng: "Cheonwang",
    station_nm: "천왕",
    coordinate: {
      lat: 37.486637,
      lng: 126.838713,
    },
  },
  "750": {
    line_num: "7호선",
    station_cd: "2752",
    station_nm_eng: "Onsu",
    station_nm: "온수",
    coordinate: {
      lat: 37.492258,
      lng: 126.823388,
    },
  },
  "751": {
    line_num: "7호선",
    station_cd: "3753",
    station_nm_eng: "Kkachiul",
    station_nm: "까치울",
    coordinate: {
      lat: 37.506207,
      lng: 126.810939,
    },
  },
  "752": {
    line_num: "7호선",
    station_cd: "3754",
    station_nm_eng: "Bucheon Stadium",
    station_nm: "부천종합운동장",
    coordinate: {
      lat: 37.50538,
      lng: 126.797337,
    },
  },
  "753": {
    line_num: "7호선",
    station_cd: "3755",
    station_nm_eng: "Chunui",
    station_nm: "춘의",
    coordinate: {
      lat: 37.503663,
      lng: 126.787036,
    },
  },
  "754": {
    line_num: "7호선",
    station_cd: "3756",
    station_nm_eng: "Sinjung-dong",
    station_nm: "신중동",
    coordinate: {
      lat: 37.503048,
      lng: 126.77596,
    },
  },
  "755": {
    line_num: "7호선",
    station_cd: "3757",
    station_nm_eng: "Bucheon City Hall",
    station_nm: "부천시청",
    coordinate: {
      lat: 37.504631,
      lng: 126.763538,
    },
  },
  "756": {
    line_num: "7호선",
    station_cd: "3758",
    station_nm_eng: "Sang-dong",
    station_nm: "상동",
    coordinate: {
      lat: 37.505781,
      lng: 126.753083,
    },
  },
  "757": {
    line_num: "7호선",
    station_cd: "3759",
    station_nm_eng: "Samsan Gymnasium",
    station_nm: "삼산체육관",
    coordinate: {
      lat: 37.506411,
      lng: 126.742153,
    },
  },
  "758": {
    line_num: "7호선",
    station_cd: "3760",
    station_nm_eng: "Gulpocheon",
    station_nm: "굴포천",
    coordinate: {
      lat: 37.506997,
      lng: 126.73128,
    },
  },
  "759": {
    line_num: "7호선",
    station_cd: "3761",
    station_nm_eng: "Bupyeong-gu Office",
    station_nm: "부평구청",
    coordinate: {
      lat: 37.508336,
      lng: 126.720548,
    },
  },
  "760": {
    line_num: "7호선",
    station_cd: "3762",
    station_nm_eng: "Sangok",
    station_nm: "산곡",
    coordinate: {
      lat: 37.508656300409385,
      lng: 126.70318498591645,
    },
  },
  "761": {
    line_num: "7호선",
    station_cd: "3763",
    station_nm_eng: "Seongnam",
    station_nm: "석남",
    coordinate: {
      lat: 37.506193,
      lng: 126.676203,
    },
  },
  "810": {
    line_num: "8호선",
    station_cd: "2811",
    station_nm_eng: "Amsa",
    station_nm: "암사",
    coordinate: {
      lat: 37.55021,
      lng: 127.127562,
    },
  },
  "811": {
    line_num: "8호선",
    station_cd: "2812",
    station_nm_eng: "Cheonho",
    station_nm: "천호",
    coordinate: {
      lat: 37.538397,
      lng: 127.123572,
    },
  },
  "812": {
    line_num: "8호선",
    station_cd: "2813",
    station_nm_eng: "Gangdong-gu Office",
    station_nm: "강동구청",
    coordinate: {
      lat: 37.530341,
      lng: 127.120508,
    },
  },
  "813": {
    line_num: "8호선",
    station_cd: "2814",
    station_nm_eng: "Mongchontoseong",
    station_nm: "몽촌토성",
    coordinate: {
      lat: 37.517409,
      lng: 127.112359,
    },
  },
  "814": {
    line_num: "8호선",
    station_cd: "2815",
    station_nm_eng: "Jamsil",
    station_nm: "잠실",
    coordinate: {
      lat: 37.51395,
      lng: 127.102234,
    },
  },
  "815": {
    line_num: "8호선",
    station_cd: "2816",
    station_nm_eng: "Seokchon",
    station_nm: "석촌",
    coordinate: {
      lat: 37.505431,
      lng: 127.106979,
    },
  },
  "816": {
    line_num: "8호선",
    station_cd: "2817",
    station_nm_eng: "Songpa",
    station_nm: "송파",
    coordinate: {
      lat: 37.499703,
      lng: 127.112183,
    },
  },
  "817": {
    line_num: "8호선",
    station_cd: "2818",
    station_nm_eng: "Garak Market",
    station_nm: "가락시장",
    coordinate: {
      lat: 37.492522,
      lng: 127.118234,
    },
  },
  "818": {
    line_num: "8호선",
    station_cd: "2819",
    station_nm_eng: "Munjeong",
    station_nm: "문정",
    coordinate: {
      lat: 37.485855,
      lng: 127.1225,
    },
  },
  "819": {
    line_num: "8호선",
    station_cd: "2820",
    station_nm_eng: "Jangji",
    station_nm: "장지",
    coordinate: {
      lat: 37.478703,
      lng: 127.126191,
    },
  },
  "820": {
    line_num: "8호선",
    station_cd: "2821",
    station_nm_eng: "Bokjeong",
    station_nm: "복정",
    coordinate: {
      lat: 37.470047,
      lng: 127.126662,
    },
  },
  "821": {
    line_num: "8호선",
    station_cd: "2828",
    station_nm_eng: "Namwirye",
    station_nm: "남위례",
    coordinate: {
      lat: 37.46268687222102,
      lng: 127.13948883097196,
    },
  },
  "822": {
    line_num: "8호선",
    station_cd: "2822",
    station_nm_eng: "Sanseong",
    station_nm: "산성",
    coordinate: {
      lat: 37.457122,
      lng: 127.149908,
    },
  },
  "823": {
    line_num: "8호선",
    station_cd: "2823",
    station_nm_eng: "Namhansanseong",
    station_nm: "남한산성입구",
    coordinate: {
      lat: 37.451535,
      lng: 127.159816,
    },
  },
  "824": {
    line_num: "8호선",
    station_cd: "2824",
    station_nm_eng: "Dandaeogeori",
    station_nm: "단대오거리",
    coordinate: {
      lat: 37.44521,
      lng: 127.156866,
    },
  },
  "825": {
    line_num: "8호선",
    station_cd: "2825",
    station_nm_eng: "Sinheung",
    station_nm: "신흥",
    coordinate: {
      lat: 37.440918,
      lng: 127.147564,
    },
  },
  "826": {
    line_num: "8호선",
    station_cd: "2826",
    station_nm_eng: "Sujin",
    station_nm: "수진",
    coordinate: {
      lat: 37.437428,
      lng: 127.140722,
    },
  },
  "827": {
    line_num: "8호선",
    station_cd: "2827",
    station_nm_eng: "Moran",
    station_nm: "모란",
    coordinate: {
      lat: 37.43213,
      lng: 127.129087,
    },
  },
  "832": {
    line_num: "서해선",
    station_cd: "108C",
    station_nm_eng: "Ilsan",
    station_nm: "일산",
    coordinate: {
      lat: 37.682077,
      lng: 126.769846,
    },
  },
  "833": {
    line_num: "서해선",
    station_cd: "107C",
    station_nm_eng: "Pungsan",
    station_nm: "풍산",
    coordinate: {
      lat: 37.672346,
      lng: 126.786243,
    },
  },
  "834": {
    line_num: "서해선",
    station_cd: "106C",
    station_nm_eng: "Baengma",
    station_nm: "백마",
    coordinate: {
      lat: 37.658239,
      lng: 126.794461,
    },
  },
  "835": {
    line_num: "서해선",
    station_cd: "105C",
    station_nm_eng: "Goksan",
    station_nm: "곡산",
    coordinate: {
      lat: 37.645676,
      lng: 126.801762,
    },
  },
  "836": {
    line_num: "서해선",
    station_cd: "103C",
    station_nm_eng: "Daegok",
    station_nm: "대곡",
    coordinate: {
      lat: 37.631626,
      lng: 126.811024,
    },
  },
  "837": {
    line_num: "서해선",
    station_cd: "104C",
    station_nm_eng: "Neunggok",
    station_nm: "능곡",
    coordinate: {
      lat: 37.618808,
      lng: 126.820783,
    },
  },
  "838": {
    line_num: "서해선",
    station_cd: "1980",
    station_nm_eng: "Gimpo Int'l Airport",
    station_nm: "김포공항",
    coordinate: {
      lat: 37.562434,
      lng: 126.801058,
    },
  },
  "839": {
    line_num: "서해선",
    station_cd: "1981",
    station_nm_eng: "Wonjong",
    station_nm: "원종",
    coordinate: {
      lat: 37.523989034108915,
      lng: 126.80482128991356,
    },
  },
  "840": {
    line_num: "서해선",
    station_cd: "1982",
    station_nm_eng: "Bucheon Stadium",
    station_nm: "부천종합운동장",
    coordinate: {
      lat: 37.50538,
      lng: 126.797337,
    },
  },
  "841": {
    line_num: "서해선",
    station_cd: "4804",
    station_nm_eng: "Sosa",
    station_nm: "소사",
    coordinate: {
      lat: 37.482753,
      lng: 126.79544,
    },
  },
  "842": {
    line_num: "서해선",
    station_cd: "4805",
    station_nm_eng: "Sosaeul",
    station_nm: "소새울",
    coordinate: {
      lat: 37.4687489321744,
      lng: 126.79711421020018,
    },
  },
  "843": {
    line_num: "서해선",
    station_cd: "4806",
    station_nm_eng: "Siheung Daeya",
    station_nm: "시흥대야",
    coordinate: {
      lat: 37.4687489321744,
      lng: 126.79711421020018,
    },
  },
  "844": {
    line_num: "서해선",
    station_cd: "4807",
    station_nm_eng: "Sincheon",
    station_nm: "신천",
    coordinate: {
      lat: 37.43940751230534,
      lng: 126.78688801646692,
    },
  },
  "845": {
    line_num: "서해선",
    station_cd: "4808",
    station_nm_eng: "Sinhyeon",
    station_nm: "신현",
    coordinate: {
      lat: 37.409486527199576,
      lng: 126.78786513380612,
    },
  },
  "846": {
    line_num: "서해선",
    station_cd: "4809",
    station_nm_eng: "Siheung City Hall",
    station_nm: "시흥시청",
    coordinate: {
      lat: 37.38121669487745,
      lng: 126.8060500409327,
    },
  },
  "847": {
    line_num: "서해선",
    station_cd: "4810",
    station_nm_eng: "Siheung Neunggok",
    station_nm: "시흥능곡",
    coordinate: {
      lat: 37.36976895964767,
      lng: 126.80867606931521,
    },
  },
  "848": {
    line_num: "서해선",
    station_cd: "4811",
    station_nm_eng: "Dalmi",
    station_nm: "달미",
    coordinate: {
      lat: 37.34867725889687,
      lng: 126.80949706477398,
    },
  },
  "849": {
    line_num: "서해선",
    station_cd: "4812",
    station_nm_eng: "Seonbu",
    station_nm: "선부",
    coordinate: {
      lat: 37.334230015843694,
      lng: 126.80996799012905,
    },
  },
  "850": {
    line_num: "서해선",
    station_cd: "4813",
    station_nm_eng: "Choji",
    station_nm: "초지",
    coordinate: {
      lat: 37.320646,
      lng: 126.805913,
    },
  },
  "901": {
    line_num: "9호선",
    station_cd: "4101",
    station_nm_eng: "Gaehwa",
    station_nm: "개화",
    coordinate: {
      lat: 37.578608,
      lng: 126.798153,
    },
  },
  "902": {
    line_num: "9호선",
    station_cd: "4102",
    station_nm_eng: "Gimpo Intl. Airport",
    station_nm: "김포공항",
    coordinate: {
      lat: 37.562434,
      lng: 126.801058,
    },
  },
  "903": {
    line_num: "9호선",
    station_cd: "4103",
    station_nm_eng: "Airport Market",
    station_nm: "공항시장",
    coordinate: {
      lat: 37.563726,
      lng: 126.810678,
    },
  },
  "904": {
    line_num: "9호선",
    station_cd: "4104",
    station_nm_eng: "Sinbanghwa",
    station_nm: "신방화",
    coordinate: {
      lat: 37.567532,
      lng: 126.816601,
    },
  },
  "905": {
    line_num: "9호선",
    station_cd: "4105",
    station_nm_eng: "Magongnaru",
    station_nm: "마곡나루",
    coordinate: {
      lat: 37.567336,
      lng: 126.829497,
    },
  },
  "906": {
    line_num: "9호선",
    station_cd: "4106",
    station_nm_eng: "Yangcheon Hyanggyo",
    station_nm: "양천향교",
    coordinate: {
      lat: 37.568381,
      lng: 126.841333,
    },
  },
  "907": {
    line_num: "9호선",
    station_cd: "4107",
    station_nm_eng: "Gayang",
    station_nm: "가양",
    coordinate: {
      lat: 37.561391,
      lng: 126.854456,
    },
  },
  "908": {
    line_num: "9호선",
    station_cd: "4108",
    station_nm_eng: "Jeungmi",
    station_nm: "증미",
    coordinate: {
      lat: 37.557402,
      lng: 126.861939,
    },
  },
  "909": {
    line_num: "9호선",
    station_cd: "4109",
    station_nm_eng: "Deungchon",
    station_nm: "등촌",
    coordinate: {
      lat: 37.550632,
      lng: 126.865689,
    },
  },
  "910": {
    line_num: "9호선",
    station_cd: "4110",
    station_nm_eng: "Yeomchang",
    station_nm: "염창",
    coordinate: {
      lat: 37.546936,
      lng: 126.874916,
    },
  },
  "911": {
    line_num: "9호선",
    station_cd: "4111",
    station_nm_eng: "Sinmokdong",
    station_nm: "신목동",
    coordinate: {
      lat: 37.544277,
      lng: 126.88308,
    },
  },
  "912": {
    line_num: "9호선",
    station_cd: "4112",
    station_nm_eng: "Seonyudo",
    station_nm: "선유도",
    coordinate: {
      lat: 37.53802,
      lng: 126.893525,
    },
  },
  "913": {
    line_num: "9호선",
    station_cd: "4113",
    station_nm_eng: "Dangsan",
    station_nm: "당산",
    coordinate: {
      lat: 37.53438,
      lng: 126.902281,
    },
  },
  "914": {
    line_num: "9호선",
    station_cd: "4114",
    station_nm_eng: "National Assembly",
    station_nm: "국회의사당",
    coordinate: {
      lat: 37.528105,
      lng: 126.917874,
    },
  },
  "915": {
    line_num: "9호선",
    station_cd: "4115",
    station_nm_eng: "Yeouido",
    station_nm: "여의도",
    coordinate: {
      lat: 37.521624,
      lng: 126.924191,
    },
  },
  "916": {
    line_num: "9호선",
    station_cd: "4116",
    station_nm_eng: "Saetgang",
    station_nm: "샛강",
    coordinate: {
      lat: 37.517274,
      lng: 126.928422,
    },
  },
  "917": {
    line_num: "9호선",
    station_cd: "4117",
    station_nm_eng: "Noryangjin",
    station_nm: "노량진",
    coordinate: {
      lat: 37.514219,
      lng: 126.942454,
    },
  },
  "918": {
    line_num: "9호선",
    station_cd: "4118",
    station_nm_eng: "Nodeul",
    station_nm: "노들",
    coordinate: {
      lat: 37.512887,
      lng: 126.953222,
    },
  },
  "919": {
    line_num: "9호선",
    station_cd: "4119",
    station_nm_eng: "Heukseok",
    station_nm: "흑석",
    coordinate: {
      lat: 37.50877,
      lng: 126.963708,
    },
  },
  "920": {
    line_num: "9호선",
    station_cd: "4120",
    station_nm_eng: "Dongjak",
    station_nm: "동작",
    coordinate: {
      lat: 37.502971,
      lng: 126.979306,
    },
  },
  "921": {
    line_num: "9호선",
    station_cd: "4121",
    station_nm_eng: "Gubanpo",
    station_nm: "구반포",
    coordinate: {
      lat: 37.501364,
      lng: 126.987332,
    },
  },
  "922": {
    line_num: "9호선",
    station_cd: "4122",
    station_nm_eng: "Sinbanpo",
    station_nm: "신반포",
    coordinate: {
      lat: 37.503415,
      lng: 126.995925,
    },
  },
  "923": {
    line_num: "9호선",
    station_cd: "4123",
    station_nm_eng: "Express Bus Terminal",
    station_nm: "고속터미널",
    coordinate: {
      lat: 37.50481,
      lng: 127.004943,
    },
  },
  "924": {
    line_num: "9호선",
    station_cd: "4124",
    station_nm_eng: "Sapyeong",
    station_nm: "사평",
    coordinate: {
      lat: 37.504206,
      lng: 127.015259,
    },
  },
  "925": {
    line_num: "9호선",
    station_cd: "4125",
    station_nm_eng: "Sinnonhyeon",
    station_nm: "신논현",
    coordinate: {
      lat: 37.504598,
      lng: 127.02506,
    },
  },
  "926": {
    line_num: "9호선",
    station_cd: "4126",
    station_nm_eng: "Eonju",
    station_nm: "언주",
    coordinate: {
      lat: 37.507287,
      lng: 127.033868,
    },
  },
  "927": {
    line_num: "9호선",
    station_cd: "4127",
    station_nm_eng: "Seonjeongneung",
    station_nm: "선정릉",
    coordinate: {
      lat: 37.51098,
      lng: 127.043593,
    },
  },
  "928": {
    line_num: "9호선",
    station_cd: "4128",
    station_nm_eng: "Samseong Jungang",
    station_nm: "삼성중앙",
    coordinate: {
      lat: 37.513011,
      lng: 127.053282,
    },
  },
  "929": {
    line_num: "9호선",
    station_cd: "4129",
    station_nm_eng: "Bongeunsa",
    station_nm: "봉은사",
    coordinate: {
      lat: 37.514219,
      lng: 127.060245,
    },
  },
  "930": {
    line_num: "9호선",
    station_cd: "4130",
    station_nm_eng: "Sports Complex",
    station_nm: "종합운동장",
    coordinate: {
      lat: 37.510997,
      lng: 127.073642,
    },
  },
  "931": {
    line_num: "9호선",
    station_cd: "4131",
    station_nm_eng: "Samjeon",
    station_nm: "삼전",
    coordinate: {
      lat: 37.50446241174666,
      lng: 127.08761856244945,
    },
  },
  "932": {
    line_num: "9호선",
    station_cd: "4132",
    station_nm_eng: "Seokchon Gobun",
    station_nm: "석촌고분",
    coordinate: {
      lat: 37.502464125554766,
      lng: 127.09667500055745,
    },
  },
  "933": {
    line_num: "9호선",
    station_cd: "4133",
    station_nm_eng: "Seokchon(Hansol Hospital)",
    station_nm: "석촌",
    coordinate: {
      lat: 37.505431,
      lng: 127.106979,
    },
  },
  "934": {
    line_num: "9호선",
    station_cd: "4134",
    station_nm_eng: "Songpanaru",
    station_nm: "송파나루",
    coordinate: {
      lat: 37.51077538363659,
      lng: 127.1125148794594,
    },
  },
  "935": {
    line_num: "9호선",
    station_cd: "4135",
    station_nm_eng: "Hanseong Baekje",
    station_nm: "한성백제",
    coordinate: {
      lat: 37.51640526045267,
      lng: 127.11628155453877,
    },
  },
  "936": {
    line_num: "9호선",
    station_cd: "4136",
    station_nm_eng: "Olympic Park",
    station_nm: "올림픽공원",
    coordinate: {
      lat: 37.516078,
      lng: 127.130848,
    },
  },
  "937": {
    line_num: "9호선",
    station_cd: "4137",
    station_nm_eng: "Dunchon Oryun",
    station_nm: "둔촌오륜",
    coordinate: {
      lat: 37.5193812876852,
      lng: 127.13879681216986,
    },
  },
  "938": {
    line_num: "9호선",
    station_cd: "4138",
    station_nm_eng: "VHS Medical Center",
    station_nm: "중앙보훈병원",
    coordinate: {
      lat: 37.528298526746134,
      lng: 127.14840977497975,
    },
  },
  "941": {
    line_num: "우이신설선",
    station_cd: "4701",
    station_nm_eng: "Bukhansan Ui",
    station_nm: "북한산우이",
    coordinate: {
      lat: 37.663146,
      lng: 127.012789,
    },
  },
  "942": {
    line_num: "우이신설선",
    station_cd: "4702",
    station_nm_eng: "Solbat Park",
    station_nm: "솔밭공원",
    coordinate: {
      lat: 37.656088,
      lng: 127.013252,
    },
  },
  "943": {
    line_num: "우이신설선",
    station_cd: "4703",
    station_nm_eng: "April 19th National Cemetery",
    station_nm: "4.19 민주묘지",
    coordinate: {
      lat: 37.649396519627174,
      lng: 127.01377069883338,
    },
  },
  "944": {
    line_num: "우이신설선",
    station_cd: "4704",
    station_nm_eng: "Gaori",
    station_nm: "가오리",
    coordinate: {
      lat: 37.641701,
      lng: 127.016792,
    },
  },
  "945": {
    line_num: "우이신설선",
    station_cd: "4705",
    station_nm_eng: "Hwagye",
    station_nm: "화계",
    coordinate: {
      lat: 37.634802,
      lng: 127.017519,
    },
  },
  "946": {
    line_num: "우이신설선",
    station_cd: "4706",
    station_nm_eng: "Samyang",
    station_nm: "삼양",
    coordinate: {
      lat: 37.627165,
      lng: 127.018152,
    },
  },
  "947": {
    line_num: "우이신설선",
    station_cd: "4707",
    station_nm_eng: "Samyang Sageori",
    station_nm: "삼양사거리",
    coordinate: {
      lat: 37.621512,
      lng: 127.02048,
    },
  },
  "948": {
    line_num: "우이신설선",
    station_cd: "4708",
    station_nm_eng: "Solsaem",
    station_nm: "솔샘",
    coordinate: {
      lat: 37.62124,
      lng: 127.013528,
    },
  },
  "949": {
    line_num: "우이신설선",
    station_cd: "4709",
    station_nm_eng: "Bukhansan Bogungmun",
    station_nm: "북한산보국문",
    coordinate: {
      lat: 37.612343,
      lng: 127.008009,
    },
  },
  "950": {
    line_num: "우이신설선",
    station_cd: "4710",
    station_nm_eng: "Jeongneung",
    station_nm: "정릉",
    coordinate: {
      lat: 37.602798,
      lng: 127.01349,
    },
  },
  "951": {
    line_num: "우이신설선",
    station_cd: "4711",
    station_nm_eng: "Sungshin Women`s Univ.",
    station_nm: "성신여대입구",
    coordinate: {
      lat: 37.592624,
      lng: 127.016403,
    },
  },
  "952": {
    line_num: "우이신설선",
    station_cd: "4712",
    station_nm_eng: "Bomun",
    station_nm: "보문",
    coordinate: {
      lat: 37.585286,
      lng: 127.019381,
    },
  },
  "953": {
    line_num: "우이신설선",
    station_cd: "4713",
    station_nm_eng: "Sinseol-dong",
    station_nm: "신설동",
    coordinate: {
      lat: 37.575297,
      lng: 127.025087,
    },
  },
  P157: {
    line_num: "1호선",
    station_cd: "1716",
    station_nm_eng: "Byeongjeom",
    station_nm: "병점",
    coordinate: {
      lat: 37.207503,
      lng: 127.032731,
    },
  },
  P156: {
    line_num: "1호선",
    station_cd: "1715",
    station_nm_eng: "Seryu",
    station_nm: "세류",
    coordinate: {
      lat: 37.245025,
      lng: 127.013222,
    },
  },
  P143: {
    line_num: "1호선",
    station_cd: "1714",
    station_nm_eng: "Doksan",
    station_nm: "독산",
    coordinate: {
      lat: 37.466613,
      lng: 126.889249,
    },
  },
  P155: {
    line_num: "1호선",
    station_cd: "1713",
    station_nm_eng: "Suwon",
    station_nm: "수원",
    coordinate: {
      lat: 37.265974,
      lng: 126.999874,
    },
  },
  P154: {
    line_num: "1호선",
    station_cd: "1712",
    station_nm_eng: "Hwaseo",
    station_nm: "화서",
    coordinate: {
      lat: 37.283862,
      lng: 126.989627,
    },
  },
  P153: {
    line_num: "1호선",
    station_cd: "1711",
    station_nm_eng: "Sungkyunkwan Univ.",
    station_nm: "성균관대",
    coordinate: {
      lat: 37.300349,
      lng: 126.97075,
    },
  },
  P152: {
    line_num: "1호선",
    station_cd: "1710",
    station_nm_eng: "Uiwang",
    station_nm: "의왕",
    coordinate: {
      lat: 37.320852,
      lng: 126.948217,
    },
  },
  P150: {
    line_num: "1호선",
    station_cd: "1709",
    station_nm_eng: "Gunpo",
    station_nm: "군포",
    coordinate: {
      lat: 37.35356,
      lng: 126.948462,
    },
  },
  P148: {
    line_num: "1호선",
    station_cd: "1707",
    station_nm_eng: "Myeonghak",
    station_nm: "명학",
    coordinate: {
      lat: 37.384653,
      lng: 126.935433,
    },
  },
  P147: {
    line_num: "1호선",
    station_cd: "1706",
    station_nm_eng: "Anyang",
    station_nm: "안양",
    coordinate: {
      lat: 37.401592,
      lng: 126.922874,
    },
  },
  P146: {
    line_num: "1호선",
    station_cd: "1705",
    station_nm_eng: "Gwanak",
    station_nm: "관악",
    coordinate: {
      lat: 37.419232,
      lng: 126.908706,
    },
  },
  P145: {
    line_num: "1호선",
    station_cd: "1704",
    station_nm_eng: "Seoksu",
    station_nm: "석수",
    coordinate: {
      lat: 37.435047,
      lng: 126.902295,
    },
  },
  P144: {
    line_num: "1호선",
    station_cd: "1703",
    station_nm_eng: "Geumcheon-Gu Office",
    station_nm: "금천구청",
    coordinate: {
      lat: 37.455626,
      lng: 126.89398,
    },
  },
  P142: {
    line_num: "1호선",
    station_cd: "1702",
    station_nm_eng: "Gasan Digital Complex",
    station_nm: "가산디지털단지",
    coordinate: {
      lat: 37.481072,
      lng: 126.882343,
    },
  },
  P161: {
    line_num: "1호선",
    station_cd: "1720",
    station_nm_eng: "Jinwi",
    station_nm: "진위",
    coordinate: {
      lat: 37.109447,
      lng: 127.062278,
    },
  },
  P149: {
    line_num: "1호선",
    station_cd: "1708",
    station_nm_eng: "Geumjeong",
    station_nm: "금정",
    coordinate: {
      lat: 37.372221,
      lng: 126.943429,
    },
  },
  P177: {
    line_num: "1호선",
    station_cd: "1408",
    station_nm_eng: "Sinchang",
    station_nm: "신창",
    coordinate: {
      lat: 36.769502,
      lng: 126.951108,
    },
  },
  P176: {
    line_num: "1호선",
    station_cd: "1407",
    station_nm_eng: "Onyang oncheon",
    station_nm: "온양온천",
    coordinate: {
      lat: 36.780483,
      lng: 127.003249,
    },
  },
  P174: {
    line_num: "1호선",
    station_cd: "1405",
    station_nm_eng: "Baebang",
    station_nm: "배방",
    coordinate: {
      lat: 36.777629,
      lng: 127.052991,
    },
  },
  P173: {
    line_num: "1호선",
    station_cd: "1404",
    station_nm_eng: "Tangjeong",
    station_nm: "탕정",
    coordinate: {
      lat: 36.78802346326296,
      lng: 127.08385227361,
    },
  },
  P172: {
    line_num: "1호선",
    station_cd: "1403",
    station_nm_eng: "Asan",
    station_nm: "아산",
    coordinate: {
      lat: 36.792053,
      lng: 127.104361,
    },
  },
  P171: {
    line_num: "1호선",
    station_cd: "1402",
    station_nm_eng: "Ssangyong",
    station_nm: "쌍용",
    coordinate: {
      lat: 36.793759,
      lng: 127.1214,
    },
  },
  P170: {
    line_num: "1호선",
    station_cd: "1401",
    station_nm_eng: "Bongmyeong",
    station_nm: "봉명",
    coordinate: {
      lat: 36.801215,
      lng: 127.135763,
    },
  },
  P164: {
    line_num: "1호선",
    station_cd: "1723",
    station_nm_eng: "PyeongtaekJije",
    station_nm: "평택지제",
    coordinate: {
      lat: 37.01869037405003,
      lng: 127.0705529611712,
    },
  },
  "P157-1": {
    line_num: "1호선",
    station_cd: "1749",
    station_nm_eng: "Seodongtan",
    station_nm: "서동탄",
    coordinate: {
      lat: 37.195504,
      lng: 127.051672,
    },
  },
  P160: {
    line_num: "1호선",
    station_cd: "1719",
    station_nm_eng: "Osan",
    station_nm: "오산",
    coordinate: {
      lat: 37.145885,
      lng: 127.06672,
    },
  },
  "P144-1": {
    line_num: "1호선",
    station_cd: "1750",
    station_nm_eng: "Gwangmyeong",
    station_nm: "광명",
    coordinate: {
      lat: 37.416182,
      lng: 126.884466,
    },
  },
  P151: {
    line_num: "1호선",
    station_cd: "1729",
    station_nm_eng: "Dangjeong",
    station_nm: "당정",
    coordinate: {
      lat: 37.344285,
      lng: 126.948345,
    },
  },
  P169: {
    line_num: "1호선",
    station_cd: "1728",
    station_nm_eng: "Cheonan",
    station_nm: "천안",
    coordinate: {
      lat: 36.810005,
      lng: 127.146826,
    },
  },
  P168: {
    line_num: "1호선",
    station_cd: "1727",
    station_nm_eng: "Dujeong",
    station_nm: "두정",
    coordinate: {
      lat: 36.833705,
      lng: 127.14896,
    },
  },
  P167: {
    line_num: "1호선",
    station_cd: "1726",
    station_nm_eng: "Jiksan",
    station_nm: "직산",
    coordinate: {
      lat: 36.870593,
      lng: 127.143904,
    },
  },
  P166: {
    line_num: "1호선",
    station_cd: "1725",
    station_nm_eng: "Seonghwan",
    station_nm: "성환",
    coordinate: {
      lat: 36.916076,
      lng: 127.126964,
    },
  },
  P165: {
    line_num: "1호선",
    station_cd: "1724",
    station_nm_eng: "Pyeongtaek",
    station_nm: "평택",
    coordinate: {
      lat: 36.990726,
      lng: 127.085159,
    },
  },
  P163: {
    line_num: "1호선",
    station_cd: "1722",
    station_nm_eng: "Seojeong-ri",
    station_nm: "서정리",
    coordinate: {
      lat: 37.056496,
      lng: 127.052819,
    },
  },
  P162: {
    line_num: "1호선",
    station_cd: "1721",
    station_nm_eng: "Songtan",
    station_nm: "송탄",
    coordinate: {
      lat: 37.075696,
      lng: 127.054301,
    },
  },
  P159: {
    line_num: "1호선",
    station_cd: "1718",
    station_nm_eng: "Osan College",
    station_nm: "오산대",
    coordinate: {
      lat: 37.168953,
      lng: 127.063197,
    },
  },
  P158: {
    line_num: "1호선",
    station_cd: "1717",
    station_nm_eng: "Sema",
    station_nm: "세마",
    coordinate: {
      lat: 37.187533,
      lng: 127.04318,
    },
  },
  "211-1": {
    line_num: "2호선",
    station_cd: "0244",
    station_nm_eng: "Yongdap",
    station_nm: "용답",
    coordinate: {
      lat: 37.561904,
      lng: 127.050899,
    },
  },
  "234-2": {
    line_num: "2호선",
    station_cd: "0248",
    station_nm_eng: "Yangcheon-gu Office",
    station_nm: "양천구청",
    coordinate: {
      lat: 37.512398,
      lng: 126.865819,
    },
  },
  "211-2": {
    line_num: "2호선",
    station_cd: "0245",
    station_nm_eng: "Sindap",
    station_nm: "신답",
    coordinate: {
      lat: 37.57004,
      lng: 127.046481,
    },
  },
  "234-3": {
    line_num: "2호선",
    station_cd: "0249",
    station_nm_eng: "Sinjeongnegeori",
    station_nm: "신정네거리",
    coordinate: {
      lat: 37.520074,
      lng: 126.852912,
    },
  },
  "211-3": {
    line_num: "2호선",
    station_cd: "0250",
    station_nm_eng: "Yongdu",
    station_nm: "용두",
    coordinate: {
      lat: 37.574028,
      lng: 127.038091,
    },
  },
  "211-4": {
    line_num: "2호선",
    station_cd: "0246",
    station_nm_eng: "Sinseol-dong",
    station_nm: "신설동",
    coordinate: {
      lat: 37.575297,
      lng: 127.025087,
    },
  },
  "234-1": {
    line_num: "2호선",
    station_cd: "0247",
    station_nm_eng: "Dorimcheon",
    station_nm: "도림천",
    coordinate: {
      lat: 37.514287,
      lng: 126.882768,
    },
  },
  "234-4": {
    line_num: "2호선",
    station_cd: "0200",
    station_nm_eng: "Kkachisan",
    station_nm: "까치산",
    coordinate: {
      lat: 37.531768,
      lng: 126.846683,
    },
  },
  P549: {
    line_num: "5호선",
    station_cd: "2555",
    station_nm_eng: "Dunchon-dong",
    station_nm: "둔촌동",
    coordinate: {
      lat: 37.527788,
      lng: 127.136248,
    },
  },
  P553: {
    line_num: "5호선",
    station_cd: "2559",
    station_nm_eng: "Gaerong",
    station_nm: "개롱",
    coordinate: {
      lat: 37.498079,
      lng: 127.13482,
    },
  },
  P552: {
    line_num: "5호선",
    station_cd: "2558",
    station_nm_eng: "Ogeum",
    station_nm: "오금",
    coordinate: {
      lat: 37.502162,
      lng: 127.128111,
    },
  },
  P554: {
    line_num: "5호선",
    station_cd: "2560",
    station_nm_eng: "Geoyeo",
    station_nm: "거여",
    coordinate: {
      lat: 37.493105,
      lng: 127.14415,
    },
  },
  P555: {
    line_num: "5호선",
    station_cd: "2561",
    station_nm_eng: "Macheon",
    station_nm: "마천",
    coordinate: {
      lat: 37.49499,
      lng: 127.152781,
    },
  },
  P551: {
    line_num: "5호선",
    station_cd: "2557",
    station_nm_eng: "Bangi",
    station_nm: "방이",
    coordinate: {
      lat: 37.508857,
      lng: 127.126133,
    },
  },
  P550: {
    line_num: "5호선",
    station_cd: "2556",
    station_nm_eng: "Olympic Park",
    station_nm: "올림픽공원",
    coordinate: {
      lat: 37.516078,
      lng: 127.130848,
    },
  },
  K413: {
    line_num: "경강선",
    station_cd: "1504",
    station_nm_eng: "GyeonggiGwangju",
    station_nm: "경기광주",
    coordinate: {
      lat: 37.399907,
      lng: 126.630347,
    },
  },
  K412: {
    line_num: "경강선",
    station_cd: "1503",
    station_nm_eng: "Samdong",
    station_nm: "삼동",
    coordinate: {
      lat: 37.409522,
      lng: 127.20336,
    },
  },
  K414: {
    line_num: "경강선",
    station_cd: "1505",
    station_nm_eng: "Chowol",
    station_nm: "초월",
    coordinate: {
      lat: 37.374419,
      lng: 127.299,
    },
  },
  K417: {
    line_num: "경강선",
    station_cd: "1508",
    station_nm_eng: "Icheon",
    station_nm: "이천",
    coordinate: {
      lat: 37.265579,
      lng: 127.44226,
    },
  },
  K410: {
    line_num: "경강선",
    station_cd: "1501",
    station_nm_eng: "Pangyo",
    station_nm: "판교",
    coordinate: {
      lat: 37.394761,
      lng: 127.111217,
    },
  },
  K415: {
    line_num: "경강선",
    station_cd: "1506",
    station_nm_eng: "Gonjiam",
    station_nm: "곤지암",
    coordinate: {
      lat: 37.351315,
      lng: 127.34674,
    },
  },
  K416: {
    line_num: "경강선",
    station_cd: "1507",
    station_nm_eng: "Sindundoyechon",
    station_nm: "신둔도예촌",
    coordinate: {
      lat: 37.317185,
      lng: 127.40476,
    },
  },
  K418: {
    line_num: "경강선",
    station_cd: "1509",
    station_nm_eng: "Bubal",
    station_nm: "부발",
    coordinate: {
      lat: 37.260192,
      lng: 127.490277,
    },
  },
  K419: {
    line_num: "경강선",
    station_cd: "1510",
    station_nm_eng: "Sejongdaewangneung",
    station_nm: "세종대왕릉",
    coordinate: {
      lat: 37.295309,
      lng: 127.570938,
    },
  },
  K420: {
    line_num: "경강선",
    station_cd: "1511",
    station_nm_eng: "Yeoju",
    station_nm: "여주",
    coordinate: {
      lat: 37.282701,
      lng: 127.628607,
    },
  },
  K411: {
    line_num: "경강선",
    station_cd: "1502",
    station_nm_eng: "Imae",
    station_nm: "이매",
    coordinate: {
      lat: 37.396104,
      lng: 127.12827,
    },
  },
  K826: {
    line_num: "경의중앙선",
    station_cd: "1261",
    station_nm_eng: "Hyochang Park",
    station_nm: "효창공원앞",
    coordinate: {
      lat: 37.539261,
      lng: 126.961351,
    },
  },
  K321: {
    line_num: "경의중앙선",
    station_cd: "1271",
    station_nm_eng: "Neunggok",
    station_nm: "능곡",
    coordinate: {
      lat: 37.618808,
      lng: 126.820783,
    },
  },
  K312: {
    line_num: "경의중앙선",
    station_cd: "1262",
    station_nm_eng: "Gongdeok",
    station_nm: "공덕",
    coordinate: {
      lat: 37.544018,
      lng: 126.951592,
    },
  },
  K336: {
    line_num: "경의중앙선",
    station_cd: "1286",
    station_nm_eng: "Uncheon",
    station_nm: "운천",
    coordinate: {
      lat: 37.87977029450131,
      lng: 126.76999904774976,
    },
  },
  K112: {
    line_num: "경의중앙선",
    station_cd: "1009",
    station_nm_eng: "Seobinggo",
    station_nm: "서빙고",
    coordinate: {
      lat: 37.519594,
      lng: 126.988537,
    },
  },
  K335: {
    line_num: "경의중앙선",
    station_cd: "1284",
    station_nm_eng: "Munsan",
    station_nm: "문산",
    coordinate: {
      lat: 37.854619,
      lng: 126.788047,
    },
  },
  K334: {
    line_num: "경의중앙선",
    station_cd: "1283",
    station_nm_eng: "Paju",
    station_nm: "파주",
    coordinate: {
      lat: 37.815298,
      lng: 126.792783,
    },
  },
  K333: {
    line_num: "경의중앙선",
    station_cd: "1282",
    station_nm_eng: "Wollong",
    station_nm: "월롱",
    coordinate: {
      lat: 37.796188,
      lng: 126.792587,
    },
  },
  K331: {
    line_num: "경의중앙선",
    station_cd: "1280",
    station_nm_eng: "Geumchon",
    station_nm: "금촌",
    coordinate: {
      lat: 37.766217,
      lng: 126.774644,
    },
  },
  K330: {
    line_num: "경의중앙선",
    station_cd: "1279",
    station_nm_eng: "Geumneung",
    station_nm: "금릉",
    coordinate: {
      lat: 37.751322,
      lng: 126.765347,
    },
  },
  K329: {
    line_num: "경의중앙선",
    station_cd: "1278",
    station_nm_eng: "Unjeong",
    station_nm: "운정",
    coordinate: {
      lat: 37.725826,
      lng: 126.767257,
    },
  },
  K328: {
    line_num: "경의중앙선",
    station_cd: "1277",
    station_nm_eng: "Yadang",
    station_nm: "야당",
    coordinate: {
      lat: 37.712327,
      lng: 126.761356,
    },
  },
  K327: {
    line_num: "경의중앙선",
    station_cd: "1276",
    station_nm_eng: "Tanhyeon",
    station_nm: "탄현",
    coordinate: {
      lat: 37.694023,
      lng: 126.761086,
    },
  },
  K326: {
    line_num: "경의중앙선",
    station_cd: "1275",
    station_nm_eng: "Ilsan",
    station_nm: "일산",
    coordinate: {
      lat: 37.682077,
      lng: 126.769846,
    },
  },
  K325: {
    line_num: "경의중앙선",
    station_cd: "1274",
    station_nm_eng: "Pungsan",
    station_nm: "풍산",
    coordinate: {
      lat: 37.672346,
      lng: 126.786243,
    },
  },
  K324: {
    line_num: "경의중앙선",
    station_cd: "1273",
    station_nm_eng: "Baengma",
    station_nm: "백마",
    coordinate: {
      lat: 37.658239,
      lng: 126.794461,
    },
  },
  K323: {
    line_num: "경의중앙선",
    station_cd: "1272",
    station_nm_eng: "Goksan",
    station_nm: "곡산",
    coordinate: {
      lat: 37.645676,
      lng: 126.801762,
    },
  },
  K320: {
    line_num: "경의중앙선",
    station_cd: "1270",
    station_nm_eng: "Haengsin",
    station_nm: "행신",
    coordinate: {
      lat: 37.612102,
      lng: 126.834146,
    },
  },
  K319: {
    line_num: "경의중앙선",
    station_cd: "1269",
    station_nm_eng: "Gangmae",
    station_nm: "강매",
    coordinate: {
      lat: 37.612314,
      lng: 126.843223,
    },
  },
  K317: {
    line_num: "경의중앙선",
    station_cd: "1267",
    station_nm_eng: "Susaek",
    station_nm: "수색",
    coordinate: {
      lat: 37.580842,
      lng: 126.895611,
    },
  },
  K316: {
    line_num: "경의중앙선",
    station_cd: "1266",
    station_nm_eng: "Digital Media City",
    station_nm: "디지털미디어시티",
    coordinate: {
      lat: 37.576646,
      lng: 126.900984,
    },
  },
  K315: {
    line_num: "경의중앙선",
    station_cd: "1265",
    station_nm_eng: "Gajwa",
    station_nm: "가좌",
    coordinate: {
      lat: 37.568491,
      lng: 126.915487,
    },
  },
  K314: {
    line_num: "경의중앙선",
    station_cd: "1264",
    station_nm_eng: "Hongik Univ.",
    station_nm: "홍대입구",
    coordinate: {
      lat: 37.557192,
      lng: 126.925381,
    },
  },
  K313: {
    line_num: "경의중앙선",
    station_cd: "1263",
    station_nm_eng: "Sogang Univ.",
    station_nm: "서강대",
    coordinate: {
      lat: 37.551881,
      lng: 126.935711,
    },
  },
  P312: {
    line_num: "경의중앙선",
    station_cd: "1252",
    station_nm_eng: "Sinchon",
    station_nm: "신촌",
    coordinate: {
      lat: 37.555134,
      lng: 126.936893,
    },
  },
  P313: {
    line_num: "경의중앙선",
    station_cd: "1251",
    station_nm_eng: "Seoul Station",
    station_nm: "서울",
    coordinate: {
      lat: 37.55455089424185,
      lng: 126.97059508458507,
    },
  },
  K138: {
    line_num: "경의중앙선",
    station_cd: "1220",
    station_nm_eng: "Jipyeong",
    station_nm: "지평",
    coordinate: {
      lat: 37.476444,
      lng: 127.629617,
    },
  },
  K137: {
    line_num: "경의중앙선",
    station_cd: "1219",
    station_nm_eng: "Yongmun",
    station_nm: "용문",
    coordinate: {
      lat: 37.48223,
      lng: 127.594647,
    },
  },
  K136: {
    line_num: "경의중앙선",
    station_cd: "1218",
    station_nm_eng: "Wondeok",
    station_nm: "원덕",
    coordinate: {
      lat: 37.468672,
      lng: 127.547076,
    },
  },
  K135: {
    line_num: "경의중앙선",
    station_cd: "1217",
    station_nm_eng: "Yangpyeong",
    station_nm: "양평",
    coordinate: {
      lat: 37.492832,
      lng: 127.491814,
    },
  },
  K134: {
    line_num: "경의중앙선",
    station_cd: "1216",
    station_nm_eng: "Obin",
    station_nm: "오빈",
    coordinate: {
      lat: 37.506062,
      lng: 127.473868,
    },
  },
  K133: {
    line_num: "경의중앙선",
    station_cd: "1215",
    station_nm_eng: "Asin",
    station_nm: "아신",
    coordinate: {
      lat: 37.51382,
      lng: 127.443173,
    },
  },
  K132: {
    line_num: "경의중앙선",
    station_cd: "1214",
    station_nm_eng: "Guksu",
    station_nm: "국수",
    coordinate: {
      lat: 37.516169,
      lng: 127.399367,
    },
  },
  K131: {
    line_num: "경의중앙선",
    station_cd: "1213",
    station_nm_eng: "Sinwon",
    station_nm: "신원",
    coordinate: {
      lat: 37.525545,
      lng: 127.372921,
    },
  },
  K130: {
    line_num: "경의중앙선",
    station_cd: "1212",
    station_nm_eng: "Yangsu",
    station_nm: "양수",
    coordinate: {
      lat: 37.545981,
      lng: 127.329098,
    },
  },
  K129: {
    line_num: "경의중앙선",
    station_cd: "1211",
    station_nm_eng: "Ungilsan",
    station_nm: "운길산",
    coordinate: {
      lat: 37.554669,
      lng: 127.310115,
    },
  },
  K128: {
    line_num: "경의중앙선",
    station_cd: "1210",
    station_nm_eng: "Paldang",
    station_nm: "팔당",
    coordinate: {
      lat: 37.547371,
      lng: 127.243939,
    },
  },
  K127: {
    line_num: "경의중앙선",
    station_cd: "1209",
    station_nm_eng: "Dosim",
    station_nm: "도심",
    coordinate: {
      lat: 37.579622,
      lng: 127.222672,
    },
  },
  K126: {
    line_num: "경의중앙선",
    station_cd: "1208",
    station_nm_eng: "Deokso",
    station_nm: "덕소",
    coordinate: {
      lat: 37.586781,
      lng: 127.208832,
    },
  },
  K116: {
    line_num: "경의중앙선",
    station_cd: "1013",
    station_nm_eng: "Wangsimni",
    station_nm: "왕십리",
    coordinate: {
      lat: 37.561533,
      lng: 127.037732,
    },
  },
  K125: {
    line_num: "경의중앙선",
    station_cd: "1207",
    station_nm_eng: "Yangjeong",
    station_nm: "양정",
    coordinate: {
      lat: 37.60533,
      lng: 127.19364,
    },
  },
  K124: {
    line_num: "경의중앙선",
    station_cd: "1206",
    station_nm_eng: "Donong",
    station_nm: "도농",
    coordinate: {
      lat: 37.608806,
      lng: 127.161153,
    },
  },
  K123: {
    line_num: "경의중앙선",
    station_cd: "1205",
    station_nm_eng: "Guri",
    station_nm: "구리",
    coordinate: {
      lat: 37.603392,
      lng: 127.143869,
    },
  },
  K122: {
    line_num: "경의중앙선",
    station_cd: "1204",
    station_nm_eng: "Yangwon",
    station_nm: "양원",
    coordinate: {
      lat: 37.606596,
      lng: 127.107906,
    },
  },
  K121: {
    line_num: "경의중앙선",
    station_cd: "1203",
    station_nm_eng: "Mangu",
    station_nm: "망우",
    coordinate: {
      lat: 37.59955,
      lng: 127.091909,
    },
  },
  K120: {
    line_num: "경의중앙선",
    station_cd: "1202",
    station_nm_eng: "Sangbong",
    station_nm: "상봉",
    coordinate: {
      lat: 37.596362,
      lng: 127.085032,
    },
  },
  K119: {
    line_num: "경의중앙선",
    station_cd: "1201",
    station_nm_eng: "Jungnang",
    station_nm: "중랑",
    coordinate: {
      lat: 37.594917,
      lng: 127.076116,
    },
  },
  K118: {
    line_num: "경의중앙선",
    station_cd: "101C",
    station_nm_eng: "Hoegi",
    station_nm: "회기",
    coordinate: {
      lat: 37.58946,
      lng: 127.057583,
    },
  },
  K117: {
    line_num: "경의중앙선",
    station_cd: "1014",
    station_nm_eng: "Cheongnyangni",
    station_nm: "청량리",
    coordinate: {
      lat: 37.580178,
      lng: 127.046835,
    },
  },
  K115: {
    line_num: "경의중앙선",
    station_cd: "1012",
    station_nm_eng: "Eungbong",
    station_nm: "응봉",
    coordinate: {
      lat: 37.549946,
      lng: 127.034538,
    },
  },
  K114: {
    line_num: "경의중앙선",
    station_cd: "1011",
    station_nm_eng: "Oksu",
    station_nm: "옥수",
    coordinate: {
      lat: 37.540685,
      lng: 127.017965,
    },
  },
  K113: {
    line_num: "경의중앙선",
    station_cd: "1010",
    station_nm_eng: "Hannam",
    station_nm: "한남",
    coordinate: {
      lat: 37.52943,
      lng: 127.009169,
    },
  },
  K110: {
    line_num: "경의중앙선",
    station_cd: "100C",
    station_nm_eng: "Yongsan",
    station_nm: "용산",
    coordinate: {
      lat: 37.529849,
      lng: 126.964561,
    },
  },
  K111: {
    line_num: "경의중앙선",
    station_cd: "1008",
    station_nm_eng: "Ichon",
    station_nm: "이촌",
    coordinate: {
      lat: 37.522272,
      lng: 126.974345,
    },
  },
  K318: {
    line_num: "경의중앙선",
    station_cd: "1268",
    station_nm_eng: "Hwajeon",
    station_nm: "화전",
    coordinate: {
      lat: 37.602888,
      lng: 126.868387,
    },
  },
  K322: {
    line_num: "경의중앙선",
    station_cd: "0300",
    station_nm_eng: "Daegok",
    station_nm: "대곡",
    coordinate: {
      lat: 37.631626,
      lng: 126.811024,
    },
  },
  P123: {
    line_num: "경춘선",
    station_cd: "1312",
    station_nm_eng: "Galmae",
    station_nm: "갈매",
    coordinate: {
      lat: 37.634118,
      lng: 127.114757,
    },
  },
  P124: {
    line_num: "경춘선",
    station_cd: "1313",
    station_nm_eng: "Byeollae",
    station_nm: "별내",
    coordinate: {
      lat: 37.64202,
      lng: 127.12684,
    },
  },
  P126: {
    line_num: "경춘선",
    station_cd: "1315",
    station_nm_eng: "Sareung",
    station_nm: "사릉",
    coordinate: {
      lat: 37.65108,
      lng: 127.176933,
    },
  },
  P127: {
    line_num: "경춘선",
    station_cd: "1316",
    station_nm_eng: "Geumgok",
    station_nm: "금곡",
    coordinate: {
      lat: 37.637382,
      lng: 127.207853,
    },
  },
  P128: {
    line_num: "경춘선",
    station_cd: "1317",
    station_nm_eng: "PyeongnaeHopyeong",
    station_nm: "평내호평",
    coordinate: {
      lat: 37.653225,
      lng: 127.244493,
    },
  },
  P129: {
    line_num: "경춘선",
    station_cd: "1318",
    station_nm_eng: "Cheonmasan",
    station_nm: "천마산",
    coordinate: {
      lat: 37.658978,
      lng: 127.285379,
    },
  },
  P131: {
    line_num: "경춘선",
    station_cd: "1320",
    station_nm_eng: "Daeseong-ri",
    station_nm: "대성리",
    coordinate: {
      lat: 37.684071,
      lng: 127.379319,
    },
  },
  P132: {
    line_num: "경춘선",
    station_cd: "1321",
    station_nm_eng: "Cheongpyeong",
    station_nm: "청평",
    coordinate: {
      lat: 37.735488,
      lng: 127.42661,
    },
  },
  P133: {
    line_num: "경춘선",
    station_cd: "1322",
    station_nm_eng: "Sangcheon",
    station_nm: "상천",
    coordinate: {
      lat: 37.770246,
      lng: 127.454821,
    },
  },
  P134: {
    line_num: "경춘선",
    station_cd: "1323",
    station_nm_eng: "Gapyeong",
    station_nm: "가평",
    coordinate: {
      lat: 37.814536,
      lng: 127.510739,
    },
  },
  P137: {
    line_num: "경춘선",
    station_cd: "1326",
    station_nm_eng: "Gangchon",
    station_nm: "강촌",
    coordinate: {
      lat: 37.805723,
      lng: 127.634146,
    },
  },
  P125: {
    line_num: "경춘선",
    station_cd: "1314",
    station_nm_eng: "Toegyewon",
    station_nm: "퇴계원",
    coordinate: {
      lat: 37.648311,
      lng: 127.143952,
    },
  },
  P130: {
    line_num: "경춘선",
    station_cd: "1319",
    station_nm_eng: "Maseok",
    station_nm: "마석",
    coordinate: {
      lat: 37.652782,
      lng: 127.311767,
    },
  },
  P139: {
    line_num: "경춘선",
    station_cd: "1328",
    station_nm_eng: "Namchuncheon",
    station_nm: "남춘천",
    coordinate: {
      lat: 37.864007,
      lng: 127.723792,
    },
  },
  P140: {
    line_num: "경춘선",
    station_cd: "1329",
    station_nm_eng: "Chuncheon",
    station_nm: "춘천",
    coordinate: {
      lat: 37.885054,
      lng: 127.717023,
    },
  },
  P135: {
    line_num: "경춘선",
    station_cd: "1324",
    station_nm_eng: "Gulbongsan",
    station_nm: "굴봉산",
    coordinate: {
      lat: 37.832067,
      lng: 127.557695,
    },
  },
  P138: {
    line_num: "경춘선",
    station_cd: "1327",
    station_nm_eng: "Gimyujeong",
    station_nm: "김유정",
    coordinate: {
      lat: 37.818466,
      lng: 127.71434,
    },
  },
  P136: {
    line_num: "경춘선",
    station_cd: "1325",
    station_nm_eng: "Baegyang-ri",
    station_nm: "백양리",
    coordinate: {
      lat: 37.830779,
      lng: 127.58933,
    },
  },
  // P116: {
  //   line_num: "경춘선",
  //
  //   station_cd: "1305",
  //   station_nm_eng: "Kwangwoon Univ.",
  //   station_nm: "광운대",
  //   coordinate: {
  //     lat: 37.623632,
  //     lng: 127.061835,
  //   },
  // },
  P117: {
    line_num: "경춘선",
    station_cd: "1306",
    station_nm_eng: "Cheongnyangni",
    station_nm: "청량리",
    coordinate: {
      lat: 37.580178,
      lng: 127.046835,
    },
  },
  P118: {
    line_num: "경춘선",
    station_cd: "1307",
    station_nm_eng: "Hoegi",
    station_nm: "회기",
    coordinate: {
      lat: 37.58946,
      lng: 127.057583,
    },
  },
  P119: {
    line_num: "경춘선",
    station_cd: "1308",
    station_nm_eng: "Jungnang",
    station_nm: "중랑",
    coordinate: {
      lat: 37.594917,
      lng: 127.076116,
    },
  },
  P120: {
    line_num: "경춘선",
    station_cd: "1309",
    station_nm_eng: "Sangbong",
    station_nm: "상봉",
    coordinate: {
      lat: 37.596362,
      lng: 127.085032,
    },
  },
  P121: {
    line_num: "경춘선",
    station_cd: "1310",
    station_nm_eng: "Mangu",
    station_nm: "망우",
    coordinate: {
      lat: 37.59955,
      lng: 127.091909,
    },
  },
  P122: {
    line_num: "경춘선",
    station_cd: "1311",
    station_nm_eng: "Sinnae",
    station_nm: "신내",
    coordinate: {
      lat: 37.612887,
      lng: 127.103218,
    },
  },
  A06: {
    line_num: "공항철도",
    station_cd: "4208",
    station_nm_eng: "Gyeyang",
    station_nm: "계양",
    coordinate: {
      lat: 37.571462,
      lng: 126.735637,
    },
  },
  A071: {
    line_num: "공항철도",
    station_cd: "4210",
    station_nm_eng: "Cheongna Int’l City Station",
    station_nm: "청라국제도시",
    coordinate: {
      lat: 37.555878,
      lng: 126.625327,
    },
  },
  A08: {
    line_num: "공항철도",
    station_cd: "4211",
    station_nm_eng: "Unseo",
    station_nm: "운서",
    coordinate: {
      lat: 37.492904,
      lng: 126.49379,
    },
  },
  A09: {
    line_num: "공항철도",
    station_cd: "4212",
    station_nm_eng: "Incheon Intl. Airport Cargo Terminal",
    station_nm: "공항화물청사",
    coordinate: {
      lat: 37.458366,
      lng: 126.476241,
    },
  },
  A02: {
    line_num: "공항철도",
    station_cd: "4202",
    station_nm_eng: "Gongdeok",
    station_nm: "공덕",
    coordinate: {
      lat: 37.544018,
      lng: 126.951592,
    },
  },
  A03: {
    line_num: "공항철도",
    station_cd: "4203",
    station_nm_eng: "Hongik Univ.",
    station_nm: "홍대입구",
    coordinate: {
      lat: 37.557192,
      lng: 126.925381,
    },
  },
  A04: {
    line_num: "공항철도",
    station_cd: "4204",
    station_nm_eng: "Digital Media City",
    station_nm: "디지털미디어시티",
    coordinate: {
      lat: 37.576646,
      lng: 126.900984,
    },
  },
  A05: {
    line_num: "공항철도",
    station_cd: "4207",
    station_nm_eng: "Gimpo Intl. Airport",
    station_nm: "김포공항",
    coordinate: {
      lat: 37.562434,
      lng: 126.801058,
    },
  },
  A10: {
    line_num: "공항철도",
    station_cd: "4213",
    station_nm_eng: "Incheon Intl. Airport",
    station_nm: "인천공항1터미널",
    coordinate: {
      lat: 37.44740430037279,
      lng: 126.4524102870883,
    },
  },
  A11: {
    line_num: "공항철도",
    station_cd: "4215",
    station_nm_eng: "Incheon Int’l Airport Terminal 2",
    station_nm: "인천공항2터미널",
    coordinate: {
      lat: 37.4684773681757,
      lng: 126.43301707863628,
    },
  },
  A072: {
    line_num: "공항철도",
    station_cd: "4217",
    station_nm_eng: "Yeongjong",
    station_nm: "영종",
    coordinate: {
      lat: 37.511466,
      lng: 126.5237,
    },
  },
  A042: {
    line_num: "공항철도",
    station_cd: "4206",
    station_nm_eng: "Magongnaru",
    station_nm: "마곡나루",
    coordinate: {
      lat: 37.567336,
      lng: 126.829497,
    },
  },
  A01: {
    line_num: "공항철도",
    station_cd: "4201",
    station_nm_eng: "Seoul Station",
    station_nm: "서울",
    coordinate: {
      lat: 37.55455089424185,
      lng: 126.97059508458507,
    },
  },
  A07: {
    line_num: "공항철도",
    station_cd: "4209",
    station_nm_eng: "Geomam",
    station_nm: "검암",
    coordinate: {
      lat: 37.569104,
      lng: 126.673728,
    },
  },
  K243: {
    line_num: "수인분당선",
    station_cd: "1871",
    station_nm_eng: "Suwon City Hall",
    station_nm: "수원시청",
    coordinate: {
      lat: 37.261911,
      lng: 127.030736,
    },
  },
  K254: {
    line_num: "수인분당선",
    station_cd: "1833",
    station_nm_eng: "Choji",
    station_nm: "초지",
    coordinate: {
      lat: 37.320646,
      lng: 126.805913,
    },
  },
  K215: {
    line_num: "수인분당선",
    station_cd: "1023",
    station_nm_eng: "Seolleung",
    station_nm: "선릉",
    coordinate: {
      lat: 37.504503,
      lng: 127.049008,
    },
  },
  K217: {
    line_num: "수인분당선",
    station_cd: "1025",
    station_nm_eng: "Dogok",
    station_nm: "도곡",
    coordinate: {
      lat: 37.490858,
      lng: 127.055381,
    },
  },
  K218: {
    line_num: "수인분당선",
    station_cd: "1026",
    station_nm_eng: "Guryong",
    station_nm: "구룡",
    coordinate: {
      lat: 37.486839,
      lng: 127.058856,
    },
  },
  K219: {
    line_num: "수인분당선",
    station_cd: "1027",
    station_nm_eng: "Gaepo-dong",
    station_nm: "개포동",
    coordinate: {
      lat: 37.489116,
      lng: 127.06614,
    },
  },
  K210: {
    line_num: "수인분당선",
    station_cd: "102C",
    station_nm_eng: "Wangsimni",
    station_nm: "왕십리",
    coordinate: {
      lat: 37.561533,
      lng: 127.037732,
    },
  },
  K221: {
    line_num: "수인분당선",
    station_cd: "1030",
    station_nm_eng: "Suseo",
    station_nm: "수서",
    coordinate: {
      lat: 37.487371,
      lng: 127.10188,
    },
  },
  K222: {
    line_num: "수인분당선",
    station_cd: "1031",
    station_nm_eng: "Bokjeong",
    station_nm: "복정",
    coordinate: {
      lat: 37.470047,
      lng: 127.126662,
    },
  },
  K250: {
    line_num: "수인분당선",
    station_cd: "1877",
    station_nm_eng: "Sari",
    station_nm: "사리",
    coordinate: {
      lat: 37.29093863598332,
      lng: 126.8571523757318,
    },
  },
  K220: {
    line_num: "수인분당선",
    station_cd: "1028",
    station_nm_eng: "Daemosan",
    station_nm: "대모산입구",
    coordinate: {
      lat: 37.491373,
      lng: 127.07272,
    },
  },
  K251: {
    line_num: "수인분당선",
    station_cd: "1830",
    station_nm_eng: "Hanyang Univ. at Ansan",
    station_nm: "한대앞",
    coordinate: {
      lat: 37.309689,
      lng: 126.85344,
    },
  },
  K216: {
    line_num: "수인분당선",
    station_cd: "1024",
    station_nm_eng: "Hanti",
    station_nm: "한티",
    coordinate: {
      lat: 37.496237,
      lng: 127.052873,
    },
  },
  K240: {
    line_num: "수인분당선",
    station_cd: "1868",
    station_nm_eng: "Yeongtong",
    station_nm: "영통",
    coordinate: {
      lat: 37.251568,
      lng: 127.071394,
    },
  },
  K258: {
    line_num: "수인분당선",
    station_cd: "1800",
    station_nm_eng: "Oido",
    station_nm: "오이도",
    coordinate: {
      lat: 37.362357,
      lng: 126.738714,
    },
  },
  K241: {
    line_num: "수인분당선",
    station_cd: "1869",
    station_nm_eng: "Mangpo",
    station_nm: "망포",
    coordinate: {
      lat: 37.245795,
      lng: 127.057353,
    },
  },
  K239: {
    line_num: "수인분당선",
    station_cd: "1867",
    station_nm_eng: "Cheongmyeong",
    station_nm: "청명",
    coordinate: {
      lat: 37.259489,
      lng: 127.078934,
    },
  },
  K238: {
    line_num: "수인분당선",
    station_cd: "1866",
    station_nm_eng: "Sanggal",
    station_nm: "상갈",
    coordinate: {
      lat: 37.26181,
      lng: 127.108847,
    },
  },
  K226: {
    line_num: "수인분당선",
    station_cd: "1854",
    station_nm_eng: "Yatap",
    station_nm: "야탑",
    coordinate: {
      lat: 37.411185,
      lng: 127.128715,
    },
  },
  K242: {
    line_num: "수인분당선",
    station_cd: "1870",
    station_nm_eng: "MaetanGwonseon",
    station_nm: "매탄권선",
    coordinate: {
      lat: 37.252759,
      lng: 127.040566,
    },
  },
  K244: {
    line_num: "수인분당선",
    station_cd: "1872",
    station_nm_eng: "Maegyo",
    station_nm: "매교",
    coordinate: {
      lat: 37.265481,
      lng: 127.015678,
    },
  },
  K246: {
    line_num: "수인분당선",
    station_cd: "1873",
    station_nm_eng: "Gosaek",
    station_nm: "고색",
    coordinate: {
      lat: 37.24967441448801,
      lng: 126.98030315385988,
    },
  },
  K247: {
    line_num: "수인분당선",
    station_cd: "1874",
    station_nm_eng: "Omokcheon",
    station_nm: "오목천",
    coordinate: {
      lat: 37.243255109306986,
      lng: 126.96389499637154,
    },
  },
  K248: {
    line_num: "수인분당선",
    station_cd: "1875",
    station_nm_eng: "Eocheon",
    station_nm: "어천",
    coordinate: {
      lat: 37.249969966377854,
      lng: 126.90899966167603,
    },
  },
  K249: {
    line_num: "수인분당선",
    station_cd: "1876",
    station_nm_eng: "Yamok",
    station_nm: "야목",
    coordinate: {
      lat: 37.2613102267425,
      lng: 126.88395957931152,
    },
  },
  K259: {
    line_num: "수인분당선",
    station_cd: "1878",
    station_nm_eng: "Dalwol",
    station_nm: "달월",
    coordinate: {
      lat: 37.379681,
      lng: 126.745177,
    },
  },
  K260: {
    line_num: "수인분당선",
    station_cd: "1879",
    station_nm_eng: "Wolgot",
    station_nm: "월곶",
    coordinate: {
      lat: 37.391769,
      lng: 126.742699,
    },
  },
  K261: {
    line_num: "수인분당선",
    station_cd: "1880",
    station_nm_eng: "Soraepogu",
    station_nm: "소래포구",
    coordinate: {
      lat: 37.40095,
      lng: 126.733522,
    },
  },
  K262: {
    line_num: "수인분당선",
    station_cd: "1881",
    station_nm_eng: "Incheon Nonhyeon",
    station_nm: "인천논현",
    coordinate: {
      lat: 37.400614,
      lng: 126.722478,
    },
  },
  K263: {
    line_num: "수인분당선",
    station_cd: "1882",
    station_nm_eng: "Hogupo",
    station_nm: "호구포",
    coordinate: {
      lat: 37.401637,
      lng: 126.708627,
    },
  },
  K264: {
    line_num: "수인분당선",
    station_cd: "1883",
    station_nm_eng: "Namdong Induspark",
    station_nm: "남동인더스파크",
    coordinate: {
      lat: 37.407722,
      lng: 126.695216,
    },
  },
  K265: {
    line_num: "수인분당선",
    station_cd: "1884",
    station_nm_eng: "Woninjae",
    station_nm: "원인재",
    coordinate: {
      lat: 37.412603,
      lng: 126.687389,
    },
  },
  K266: {
    line_num: "수인분당선",
    station_cd: "1885",
    station_nm_eng: "Yeonsu",
    station_nm: "연수",
    coordinate: {
      lat: 37.417804,
      lng: 126.67894,
    },
  },
  K267: {
    line_num: "수인분당선",
    station_cd: "1886",
    station_nm_eng: "Songdo",
    station_nm: "송도",
    coordinate: {
      lat: 37.428514,
      lng: 126.657772,
    },
  },
  K269: {
    line_num: "수인분당선",
    station_cd: "1888",
    station_nm_eng: "Inha Univ.",
    station_nm: "인하대",
    coordinate: {
      lat: 37.448493,
      lng: 126.649619,
    },
  },
  K271: {
    line_num: "수인분당선",
    station_cd: "1890",
    station_nm_eng: "Sinpo",
    station_nm: "신포",
    coordinate: {
      lat: 37.46874,
      lng: 126.623853,
    },
  },
  K272: {
    line_num: "수인분당선",
    station_cd: "1891",
    station_nm_eng: "Incheon",
    station_nm: "인천",
    coordinate: {
      lat: 37.476691,
      lng: 126.616936,
    },
  },
  K237: {
    line_num: "수인분당선",
    station_cd: "1865",
    station_nm_eng: "Giheung",
    station_nm: "기흥",
    coordinate: {
      lat: 37.275619,
      lng: 127.115936,
    },
  },
  K236: {
    line_num: "수인분당선",
    station_cd: "1864",
    station_nm_eng: "Singal",
    station_nm: "신갈",
    coordinate: {
      lat: 37.286102,
      lng: 127.111313,
    },
  },
  K235: {
    line_num: "수인분당선",
    station_cd: "1863",
    station_nm_eng: "Guseong",
    station_nm: "구성",
    coordinate: {
      lat: 37.298969,
      lng: 127.105664,
    },
  },
  K233: {
    line_num: "수인분당선",
    station_cd: "1862",
    station_nm_eng: "Jukjeon",
    station_nm: "죽전",
    coordinate: {
      lat: 37.324753,
      lng: 127.107395,
    },
  },
  K234: {
    line_num: "수인분당선",
    station_cd: "1861",
    station_nm_eng: "Bojeong",
    station_nm: "보정",
    coordinate: {
      lat: 37.312752,
      lng: 127.108196,
    },
  },
  K227: {
    line_num: "수인분당선",
    station_cd: "1860",
    station_nm_eng: "Imae",
    station_nm: "이매",
    coordinate: {
      lat: 37.396104,
      lng: 127.12827,
    },
  },
  K232: {
    line_num: "수인분당선",
    station_cd: "1859",
    station_nm_eng: "Ori",
    station_nm: "오리",
    coordinate: {
      lat: 37.339824,
      lng: 127.108942,
    },
  },
  K231: {
    line_num: "수인분당선",
    station_cd: "1858",
    station_nm_eng: "Migeum",
    station_nm: "미금",
    coordinate: {
      lat: 37.350077,
      lng: 127.10891,
    },
  },
  K230: {
    line_num: "수인분당선",
    station_cd: "1857",
    station_nm_eng: "Jeongja",
    station_nm: "정자",
    coordinate: {
      lat: 37.36706,
      lng: 127.108105,
    },
  },
  K229: {
    line_num: "수인분당선",
    station_cd: "1856",
    station_nm_eng: "Sunae",
    station_nm: "수내",
    coordinate: {
      lat: 37.378455,
      lng: 127.114322,
    },
  },
  K228: {
    line_num: "수인분당선",
    station_cd: "1855",
    station_nm_eng: "Seohyeon",
    station_nm: "서현",
    coordinate: {
      lat: 37.385126,
      lng: 127.123592,
    },
  },
  K225: {
    line_num: "수인분당선",
    station_cd: "1853",
    station_nm_eng: "Moran",
    station_nm: "모란",
    coordinate: {
      lat: 37.43213,
      lng: 127.129087,
    },
  },
  K270: {
    line_num: "수인분당선",
    station_cd: "1889",
    station_nm_eng: "Sungui",
    station_nm: "숭의",
    coordinate: {
      lat: 37.460789,
      lng: 126.638297,
    },
  },
  K224: {
    line_num: "수인분당선",
    station_cd: "1852",
    station_nm_eng: "Taepyeong",
    station_nm: "태평",
    coordinate: {
      lat: 37.440019,
      lng: 127.127709,
    },
  },
  K223: {
    line_num: "수인분당선",
    station_cd: "1851",
    station_nm_eng: "Gachon Univ.",
    station_nm: "가천대",
    coordinate: {
      lat: 37.448605,
      lng: 127.126697,
    },
  },
  K214: {
    line_num: "수인분당선",
    station_cd: "1850",
    station_nm_eng: "Seonjeongneung",
    station_nm: "선정릉",
    coordinate: {
      lat: 37.51098,
      lng: 127.043593,
    },
  },
  K213: {
    line_num: "수인분당선",
    station_cd: "1849",
    station_nm_eng: "Gangnam-gu Office",
    station_nm: "강남구청",
    coordinate: {
      lat: 37.517186,
      lng: 127.04128,
    },
  },
  K212: {
    line_num: "수인분당선",
    station_cd: "1848",
    station_nm_eng: "Apgujeongrodeo",
    station_nm: "압구정로데오",
    coordinate: {
      lat: 37.527381,
      lng: 127.040534,
    },
  },
  K211: {
    line_num: "수인분당선",
    station_cd: "1847",
    station_nm_eng: "Seoul-forest",
    station_nm: "서울숲",
    coordinate: {
      lat: 37.543617,
      lng: 127.044707,
    },
  },
  K245: {
    line_num: "수인분당선",
    station_cd: "1846",
    station_nm_eng: "Suwon",
    station_nm: "수원",
    coordinate: {
      lat: 37.265974,
      lng: 126.999874,
    },
  },
  K209: {
    line_num: "수인분당선",
    station_cd: "1845",
    station_nm_eng: "Cheongnyangni",
    station_nm: "청량리",
    coordinate: {
      lat: 37.580178,
      lng: 127.046835,
    },
  },
  K257: {
    line_num: "수인분당선",
    station_cd: "1836",
    station_nm_eng: "Jeongwang",
    station_nm: "정왕",
    coordinate: {
      lat: 37.351735,
      lng: 126.742989,
    },
  },
  K256: {
    line_num: "수인분당선",
    station_cd: "1835",
    station_nm_eng: "Neunggil",
    station_nm: "신길온천",
    coordinate: {
      lat: 37.338212,
      lng: 126.765844,
    },
  },
  K253: {
    line_num: "수인분당선",
    station_cd: "1832",
    station_nm_eng: "Gojan",
    station_nm: "고잔",
    coordinate: {
      lat: 37.316777,
      lng: 126.823249,
    },
  },
  K252: {
    line_num: "수인분당선",
    station_cd: "1831",
    station_nm_eng: "Jungang",
    station_nm: "중앙",
    coordinate: {
      lat: 37.315941,
      lng: 126.838573,
    },
  },
  K255: {
    line_num: "수인분당선",
    station_cd: "1834",
    station_nm_eng: "Ansan",
    station_nm: "안산",
    coordinate: {
      lat: 37.327082,
      lng: 126.788532,
    },
  },
  S409: {
    line_num: "신림선",
    station_cd: "4409",
    station_nm_eng: "Sutgogae",
    station_nm: "서원",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  S404: {
    line_num: "신림선",
    station_cd: "4404",
    station_nm_eng: "Boramae",
    station_nm: "보라매",
    coordinate: {
      lat: 37.499872,
      lng: 126.920428,
    },
  },
  S401: {
    line_num: "신림선",
    station_cd: "4401",
    station_nm_eng: "Saetgang",
    station_nm: "샛강",
    coordinate: {
      lat: 37.517274,
      lng: 126.928422,
    },
  },
  S407: {
    line_num: "신림선",
    station_cd: "4407",
    station_nm_eng: "Danggok",
    station_nm: "당곡",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  S405: {
    line_num: "신림선",
    station_cd: "4405",
    station_nm_eng: "Boramae Park",
    station_nm: "보라매공원",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  S406: {
    line_num: "신림선",
    station_cd: "4406",
    station_nm_eng: "Boramae Medical Center",
    station_nm: "보라매병원",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  S408: {
    line_num: "신림선",
    station_cd: "4408",
    station_nm_eng: "Sillim",
    station_nm: "신림",
    coordinate: {
      lat: 37.484201,
      lng: 126.929715,
    },
  },
  S403: {
    line_num: "신림선",
    station_cd: "4403",
    station_nm_eng: "Seoul Regional Office of Military Manpower",
    station_nm: "서울지방병무청",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  S410: {
    line_num: "신림선",
    station_cd: "4410",
    station_nm_eng: "Seoul National Univ. Venture Town",
    station_nm: "서울대벤처타운",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  S411: {
    line_num: "신림선",
    station_cd: "4411",
    station_nm_eng: "Gwanaksan",
    station_nm: "관악산",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  S402: {
    line_num: "신림선",
    station_cd: "4402",
    station_nm_eng: "Daebang",
    station_nm: "대방",
    coordinate: {
      lat: 37.513342,
      lng: 126.926382,
    },
  },
  D6: {
    line_num: "신분당선",
    station_cd: "4306",
    station_nm_eng: "Sinnonhyeon",
    station_nm: "신논현",
    coordinate: {
      lat: 37.504598,
      lng: 127.02506,
    },
  },
  D13: {
    line_num: "신분당선",
    station_cd: "4313",
    station_nm_eng: "Migeum",
    station_nm: "미금",
    coordinate: {
      lat: 37.350077,
      lng: 127.10891,
    },
  },
  D19: {
    line_num: "신분당선",
    station_cd: "4319",
    station_nm_eng: "Gwanggyo",
    station_nm: "광교",
    coordinate: {
      lat: 37.30211,
      lng: 127.044483,
    },
  },
  D18: {
    line_num: "신분당선",
    station_cd: "4318",
    station_nm_eng: "GwanggyoJungang",
    station_nm: "광교중앙",
    coordinate: {
      lat: 37.288617,
      lng: 127.051478,
    },
  },
  D15: {
    line_num: "신분당선",
    station_cd: "4315",
    station_nm_eng: "Suji-gu office",
    station_nm: "수지구청",
    coordinate: {
      lat: 37.322702,
      lng: 127.095026,
    },
  },
  D4: {
    line_num: "신분당선",
    station_cd: "4304",
    station_nm_eng: "Sinsa",
    station_nm: "신사",
    coordinate: {
      lat: 37.516334,
      lng: 127.020114,
    },
  },
  D14: {
    line_num: "신분당선",
    station_cd: "4314",
    station_nm_eng: "Dongcheon",
    station_nm: "동천",
    coordinate: {
      lat: 37.337928,
      lng: 127.102976,
    },
  },
  D7: {
    line_num: "신분당선",
    station_cd: "4307",
    station_nm_eng: "Gangnam",
    station_nm: "강남",
    coordinate: {
      lat: 37.497175,
      lng: 127.027926,
    },
  },
  D11: {
    line_num: "신분당선",
    station_cd: "4311",
    station_nm_eng: "Pangyo",
    station_nm: "판교",
    coordinate: {
      lat: 37.394761,
      lng: 127.111217,
    },
  },
  D12: {
    line_num: "신분당선",
    station_cd: "4312",
    station_nm_eng: "Jeongja",
    station_nm: "정자",
    coordinate: {
      lat: 37.36706,
      lng: 127.108105,
    },
  },
  D17: {
    line_num: "신분당선",
    station_cd: "4317",
    station_nm_eng: "Sanghyeon",
    station_nm: "상현",
    coordinate: {
      lat: 37.297664,
      lng: 127.069342,
    },
  },
  D16: {
    line_num: "신분당선",
    station_cd: "4316",
    station_nm_eng: "Seongbok",
    station_nm: "성복",
    coordinate: {
      lat: 37.313335,
      lng: 127.0801,
    },
  },
  D5: {
    line_num: "신분당선",
    station_cd: "4305",
    station_nm_eng: "Nonhyeon",
    station_nm: "논현",
    coordinate: {
      lat: 37.511093,
      lng: 127.021415,
    },
  },
  D8: {
    line_num: "신분당선",
    station_cd: "4308",
    station_nm_eng: "Yangjae",
    station_nm: "양재",
    coordinate: {
      lat: 37.484147,
      lng: 127.034631,
    },
  },
  D9: {
    line_num: "신분당선",
    station_cd: "4309",
    station_nm_eng: "Yangjae Citizen's Forest",
    station_nm: "양재시민의숲",
    coordinate: {
      lat: 37.470023,
      lng: 127.03842,
    },
  },
  D10: {
    line_num: "신분당선",
    station_cd: "4310",
    station_nm_eng: "Cheonggyesan",
    station_nm: "청계산입구",
    coordinate: {
      lat: 37.447211,
      lng: 127.055664,
    },
  },
  Y118: {
    line_num: "용인경전철",
    station_cd: "4510",
    station_nm_eng: "Myongji Univ.",
    station_nm: "명지대",
    coordinate: {
      lat: 37.237964,
      lng: 127.190294,
    },
  },
  Y110: {
    line_num: "용인경전철",
    station_cd: "4501",
    station_nm_eng: "Giheung",
    station_nm: "기흥",
    coordinate: {
      lat: 37.275619,
      lng: 127.115936,
    },
  },
  Y120: {
    line_num: "용인경전철",
    station_cd: "4512",
    station_nm_eng: "Stadium, Songdam College",
    station_nm: "운동장.송담대",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  Y123: {
    line_num: "용인경전철",
    station_cd: "4514",
    station_nm_eng: "Bopyeong",
    station_nm: "보평",
    coordinate: {
      lat: 37.258965,
      lng: 127.218457,
    },
  },
  Y125: {
    line_num: "용인경전철",
    station_cd: "4515",
    station_nm_eng: "Dunjeon",
    station_nm: "둔전",
    coordinate: {
      lat: 37.267051,
      lng: 127.21364,
    },
  },
  Y126: {
    line_num: "용인경전철",
    station_cd: "4517",
    station_nm_eng: "Jeondae, Everland",
    station_nm: "전대.에버랜드",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  Y113: {
    line_num: "용인경전철",
    station_cd: "4504",
    station_nm_eng: "Eojeong",
    station_nm: "어정",
    coordinate: {
      lat: 37.274917,
      lng: 127.143714,
    },
  },
  Y114: {
    line_num: "용인경전철",
    station_cd: "4505",
    station_nm_eng: "Dongbaek",
    station_nm: "동백",
    coordinate: {
      lat: 37.269043,
      lng: 127.152716,
    },
  },
  Y115: {
    line_num: "용인경전철",
    station_cd: "4506",
    station_nm_eng: "Chodang",
    station_nm: "초당",
    coordinate: {
      lat: 37.260752,
      lng: 127.159443,
    },
  },
  Y116: {
    line_num: "용인경전철",
    station_cd: "4508",
    station_nm_eng: "Samga",
    station_nm: "삼가",
    coordinate: {
      lat: 37.242115,
      lng: 127.168075,
    },
  },
  Y121: {
    line_num: "용인경전철",
    station_cd: "4513",
    station_nm_eng: "Gojin",
    station_nm: "고진",
    coordinate: {
      lat: 37.24484,
      lng: 127.214251,
    },
  },
  Y111: {
    line_num: "용인경전철",
    station_cd: "4502",
    station_nm_eng: "Kangnam Univ.",
    station_nm: "강남대",
    coordinate: {
      lat: 37.270161,
      lng: 127.126033,
    },
  },
  Y112: {
    line_num: "용인경전철",
    station_cd: "4503",
    station_nm_eng: "Jiseok",
    station_nm: "지석",
    coordinate: {
      lat: 37.269606,
      lng: 127.136515,
    },
  },
  Y117: {
    line_num: "용인경전철",
    station_cd: "4509",
    station_nm_eng: "City Hall, Yongin Univ.",
    station_nm: "시청.용인대",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  Y119: {
    line_num: "용인경전철",
    station_cd: "4511",
    station_nm_eng: "Gimnyangjang",
    station_nm: "김량장",
    coordinate: {
      lat: 37.237247,
      lng: 127.198781,
    },
  },
  U112: {
    line_num: "의정부경전철",
    station_cd: "4603",
    station_nm_eng: "Beomgol",
    station_nm: "범골",
    coordinate: {
      lat: 37.728755,
      lng: 127.04353,
    },
  },
  U113: {
    line_num: "의정부경전철",
    station_cd: "4604",
    station_nm_eng: "Lrt Uijeongbu",
    station_nm: "경전철의정부",
    coordinate: {
      lat: 37.737202,
      lng: 127.043257,
    },
  },
  U114: {
    line_num: "의정부경전철",
    station_cd: "4605",
    station_nm_eng: "Uijeongbu City Hall",
    station_nm: "의정부시청",
    coordinate: {
      lat: 37.739256,
      lng: 127.034781,
    },
  },
  U122: {
    line_num: "의정부경전철",
    station_cd: "4612",
    station_nm_eng: "gonjae",
    station_nm: "곤제",
    coordinate: {
      lat: 37.750471,
      lng: 127.083715,
    },
  },
  U123: {
    line_num: "의정부경전철",
    station_cd: "4613",
    station_nm_eng: "eoryong",
    station_nm: "어룡",
    coordinate: {
      lat: 37.742802,
      lng: 127.085035,
    },
  },
  U124: {
    line_num: "의정부경전철",
    station_cd: "4614",
    station_nm_eng: "Songsan",
    station_nm: "송산",
    coordinate: {
      lat: 37.737279,
      lng: 127.087159,
    },
  },
  U125: {
    line_num: "의정부경전철",
    station_cd: "4615",
    station_nm_eng: "Tapseok",
    station_nm: "탑석",
    coordinate: {
      lat: 37.733579,
      lng: 127.088704,
    },
  },
  U117: {
    line_num: "의정부경전철",
    station_cd: "4607",
    station_nm_eng: "Uijeongbu Jung-ang",
    station_nm: "의정부중앙",
    coordinate: {
      lat: 37.743676,
      lng: 127.049565,
    },
  },
  U118: {
    line_num: "의정부경전철",
    station_cd: "4608",
    station_nm_eng: "Dong-o",
    station_nm: "동오",
    coordinate: {
      lat: 37.745271,
      lng: 127.056947,
    },
  },
  U119: {
    line_num: "의정부경전철",
    station_cd: "4609",
    station_nm_eng: "sae-mal",
    station_nm: "새말",
    coordinate: {
      lat: 37.748885,
      lng: 127.06362,
    },
  },
  U120: {
    line_num: "의정부경전철",
    station_cd: "4610",
    station_nm_eng: "Gyeonggi Provincial Government Northern Office",
    station_nm: "경기도청북부청사",
    coordinate: {
      lat: 37.75059,
      lng: 127.071495,
    },
  },
  U121: {
    line_num: "의정부경전철",
    station_cd: "4611",
    station_nm_eng: "hyoja",
    station_nm: "효자",
    coordinate: {
      lat: 37.754025,
      lng: 127.076902,
    },
  },
  U110: {
    line_num: "의정부경전철",
    station_cd: "4601",
    station_nm_eng: "Balgok",
    station_nm: "발곡",
    coordinate: {
      lat: 37.727048,
      lng: 127.052803,
    },
  },
  U115: {
    line_num: "의정부경전철",
    station_cd: "4606",
    station_nm_eng: "Heungseon",
    station_nm: "흥선",
    coordinate: {
      lat: 37.743302,
      lng: 127.037023,
    },
  },
  U111: {
    line_num: "의정부경전철",
    station_cd: "4602",
    station_nm_eng: "Hoeryong",
    station_nm: "회룡",
    coordinate: {
      lat: 37.724846,
      lng: 127.046895,
    },
  },
  I203: {
    line_num: "인천2호선",
    station_cd: "3203",
    station_nm_eng: "Geomdan Sageori",
    station_nm: "검단사거리",
    coordinate: {
      lat: 37.60185,
      lng: 126.657108,
    },
  },
  I226: {
    line_num: "인천2호선",
    station_cd: "3226",
    station_nm_eng: "Incheon Grand Park",
    station_nm: "인천대공원",
    coordinate: {
      lat: 37.448769,
      lng: 126.752618,
    },
  },
  I227: {
    line_num: "인천2호선",
    station_cd: "3227",
    station_nm_eng: "Unyeon",
    station_nm: "운연",
    coordinate: {
      lat: 37.440127,
      lng: 126.75997,
    },
  },
  I213: {
    line_num: "인천2호선",
    station_cd: "3213",
    station_nm_eng: "Seongnam",
    station_nm: "석남",
    coordinate: {
      lat: 37.506193,
      lng: 126.676203,
    },
  },
  I202: {
    line_num: "인천2호선",
    station_cd: "3202",
    station_nm_eng: "Wanggil",
    station_nm: "왕길",
    coordinate: {
      lat: 37.59518,
      lng: 126.642696,
    },
  },
  I204: {
    line_num: "인천2호선",
    station_cd: "3204",
    station_nm_eng: "Majeon",
    station_nm: "마전",
    coordinate: {
      lat: 37.597566,
      lng: 126.666998,
    },
  },
  I212: {
    line_num: "인천2호선",
    station_cd: "3212",
    station_nm_eng: "Gajeong Jungang Market",
    station_nm: "가정중앙시장",
    coordinate: {
      lat: 37.517054,
      lng: 126.676672,
    },
  },
  I211: {
    line_num: "인천2호선",
    station_cd: "3211",
    station_nm_eng: "Gajeong",
    station_nm: "가정",
    coordinate: {
      lat: 37.524649,
      lng: 126.675539,
    },
  },
  I209: {
    line_num: "인천2호선",
    station_cd: "3209",
    station_nm_eng: "Asiad Stadium",
    station_nm: "아시아드경기장",
    coordinate: {
      lat: 37.5517,
      lng: 126.677122,
    },
  },
  I208: {
    line_num: "인천2호선",
    station_cd: "3208",
    station_nm_eng: "Geombawi",
    station_nm: "검바위",
    coordinate: {
      lat: 37.561405,
      lng: 126.677566,
    },
  },
  I207: {
    line_num: "인천2호선",
    station_cd: "3207",
    station_nm_eng: "Geomam",
    station_nm: "검암",
    coordinate: {
      lat: 37.569104,
      lng: 126.673728,
    },
  },
  I206: {
    line_num: "인천2호선",
    station_cd: "3206",
    station_nm_eng: "Dokjeong",
    station_nm: "독정",
    coordinate: {
      lat: 37.585212,
      lng: 126.675844,
    },
  },
  I205: {
    line_num: "인천2호선",
    station_cd: "3205",
    station_nm_eng: "Wanjeong",
    station_nm: "완정",
    coordinate: {
      lat: 37.592928,
      lng: 126.673203,
    },
  },
  I225: {
    line_num: "인천2호선",
    station_cd: "3225",
    station_nm_eng: "Namdong-gu Office",
    station_nm: "남동구청",
    coordinate: {
      lat: 37.448161,
      lng: 126.736939,
    },
  },
  I210: {
    line_num: "인천2호선",
    station_cd: "3210",
    station_nm_eng: "Seo-gu Office",
    station_nm: "서구청",
    coordinate: {
      lat: 37.543742,
      lng: 126.676787,
    },
  },
  I218: {
    line_num: "인천2호선",
    station_cd: "3218",
    station_nm_eng: "Juan",
    station_nm: "주안",
    coordinate: {
      lat: 37.464941,
      lng: 126.679923,
    },
  },
  I224: {
    line_num: "인천2호선",
    station_cd: "3224",
    station_nm_eng: "Mansu",
    station_nm: "만수",
    coordinate: {
      lat: 37.454911,
      lng: 126.732094,
    },
  },
  I220: {
    line_num: "인천2호선",
    station_cd: "3220",
    station_nm_eng: "Seokbawi Market",
    station_nm: "석바위시장",
    coordinate: {
      lat: 37.457611,
      lng: 126.692575,
    },
  },
  I219: {
    line_num: "인천2호선",
    station_cd: "3219",
    station_nm_eng: "Citizens Park",
    station_nm: "시민공원",
    coordinate: {
      lat: 37.458335,
      lng: 126.681192,
    },
  },
  I214: {
    line_num: "인천2호선",
    station_cd: "3214",
    station_nm_eng: "West Woman's Community Center",
    station_nm: "서부여성회관",
    coordinate: {
      lat: 37.506193,
      lng: 126.676203,
    },
  },
  I216: {
    line_num: "인천2호선",
    station_cd: "3216",
    station_nm_eng: "Gajaeul",
    station_nm: "가재울",
    coordinate: {
      lat: 37.484192,
      lng: 126.683673,
    },
  },
  I217: {
    line_num: "인천2호선",
    station_cd: "3217",
    station_nm_eng: "Juan National Industrial Complex",
    station_nm: "주안국가산단",
    coordinate: {
      lat: 37.473703,
      lng: 126.68113,
    },
  },
  I215: {
    line_num: "인천2호선",
    station_cd: "3215",
    station_nm_eng: "Incheon Gajwa",
    station_nm: "인천가좌",
    coordinate: {
      lat: 37.4897,
      lng: 126.675208,
    },
  },
  I201: {
    line_num: "인천2호선",
    station_cd: "3201",
    station_nm_eng: "Geomdan Oryu",
    station_nm: "검단오류",
    coordinate: {
      lat: 37.594877,
      lng: 126.627178,
    },
  },
  I221: {
    line_num: "인천2호선",
    station_cd: "3221",
    station_nm_eng: "Inchon City Hall",
    station_nm: "인천시청",
    coordinate: {
      lat: 37.457405,
      lng: 126.702221,
    },
  },
  I222: {
    line_num: "인천2호선",
    station_cd: "3222",
    station_nm_eng: "Seokcheon Sageori",
    station_nm: "석천사거리",
    coordinate: {
      lat: 37.456805,
      lng: 126.709986,
    },
  },
  I223: {
    line_num: "인천2호선",
    station_cd: "3223",
    station_nm_eng: "Moraenae Market",
    station_nm: "모래내시장",
    coordinate: {
      lat: 37.45583,
      lng: 126.719298,
    },
  },
  I126: {
    line_num: "인천선",
    station_cd: "3126",
    station_nm_eng: "Incheon Bus Terminal",
    station_nm: "인천터미널",
    coordinate: {
      lat: 37.442383,
      lng: 126.699706,
    },
  },
  I125: {
    line_num: "인천선",
    station_cd: "3125",
    station_nm_eng: "Arts Center",
    station_nm: "예술회관",
    coordinate: {
      lat: 37.449396,
      lng: 126.701012,
    },
  },
  I124: {
    line_num: "인천선",
    station_cd: "3124",
    station_nm_eng: "Incheon City Hall",
    station_nm: "인천시청",
    coordinate: {
      lat: 37.457405,
      lng: 126.702221,
    },
  },
  I123: {
    line_num: "인천선",
    station_cd: "3123",
    station_nm_eng: "Ganseogogeori",
    station_nm: "간석오거리",
    coordinate: {
      lat: 37.467048,
      lng: 126.707938,
    },
  },
  I122: {
    line_num: "인천선",
    station_cd: "3122",
    station_nm_eng: "Bupyeongsamgeori",
    station_nm: "부평삼거리",
    coordinate: {
      lat: 37.477679,
      lng: 126.710208,
    },
  },
  I121: {
    line_num: "인천선",
    station_cd: "3121",
    station_nm_eng: "Dongsu",
    station_nm: "동수",
    coordinate: {
      lat: 37.485312,
      lng: 126.718247,
    },
  },
  I120: {
    line_num: "인천선",
    station_cd: "3120",
    station_nm_eng: "Bupyeong",
    station_nm: "부평",
    coordinate: {
      lat: 37.489493,
      lng: 126.724805,
    },
  },
  I134: {
    line_num: "인천선",
    station_cd: "3134",
    station_nm_eng: "Technopark",
    station_nm: "테크노파크",
    coordinate: {
      lat: 37.382268,
      lng: 126.656365,
    },
  },
  I119: {
    line_num: "인천선",
    station_cd: "3119",
    station_nm_eng: "Bupyeong Market",
    station_nm: "부평시장",
    coordinate: {
      lat: 37.498383,
      lng: 126.722244,
    },
  },
  I112: {
    line_num: "인천선",
    station_cd: "3112",
    station_nm_eng: "Bakchon",
    station_nm: "박촌",
    coordinate: {
      lat: 37.553703,
      lng: 126.745077,
    },
  },
  I111: {
    line_num: "인천선",
    station_cd: "3111",
    station_nm_eng: "Gyulhyeon",
    station_nm: "귤현",
    coordinate: {
      lat: 37.566379,
      lng: 126.742654,
    },
  },
  I110: {
    line_num: "인천선",
    station_cd: "3110",
    station_nm_eng: "Gyeyang",
    station_nm: "계양",
    coordinate: {
      lat: 37.571462,
      lng: 126.735637,
    },
  },
  I118: {
    line_num: "인천선",
    station_cd: "3118",
    station_nm_eng: "Bupyeong-gu Office",
    station_nm: "부평구청",
    coordinate: {
      lat: 37.508336,
      lng: 126.720548,
    },
  },
  I117: {
    line_num: "인천선",
    station_cd: "3117",
    station_nm_eng: "Galsan",
    station_nm: "갈산",
    coordinate: {
      lat: 37.517268,
      lng: 126.721514,
    },
  },
  I116: {
    line_num: "인천선",
    station_cd: "3116",
    station_nm_eng: "Jakjeon",
    station_nm: "작전",
    coordinate: {
      lat: 37.530415,
      lng: 126.722527,
    },
  },
  I115: {
    line_num: "인천선",
    station_cd: "3115",
    station_nm_eng: "Gyeong-in Nat`l Univ. of Education",
    station_nm: "경인교대입구",
    coordinate: {
      lat: 37.538157,
      lng: 126.722597,
    },
  },
  I114: {
    line_num: "인천선",
    station_cd: "3114",
    station_nm_eng: "Gyesan",
    station_nm: "계산",
    coordinate: {
      lat: 37.543238,
      lng: 126.728128,
    },
  },
  I113: {
    line_num: "인천선",
    station_cd: "3113",
    station_nm_eng: "Imhak",
    station_nm: "임학",
    coordinate: {
      lat: 37.545059,
      lng: 126.738665,
    },
  },
  I139: {
    line_num: "인천선",
    station_cd: "3139",
    station_nm_eng: "Songdo Moonlight Festival Park",
    station_nm: "송도달빛축제공원",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  },
  I138: {
    line_num: "인천선",
    station_cd: "3138",
    station_nm_eng: "Intl. Business District",
    station_nm: "국제업무지구",
    coordinate: {
      lat: 37.399907,
      lng: 126.630347,
    },
  },
  I137: {
    line_num: "인천선",
    station_cd: "3137",
    station_nm_eng: "Central Park",
    station_nm: "센트럴파크",
    coordinate: {
      lat: 37.393054,
      lng: 126.634729,
    },
  },
  I136: {
    line_num: "인천선",
    station_cd: "3136",
    station_nm_eng: "Incheon Nat'l Univ.",
    station_nm: "인천대입구",
    coordinate: {
      lat: 37.386007,
      lng: 126.639484,
    },
  },
  I135: {
    line_num: "인천선",
    station_cd: "3135",
    station_nm_eng: "BIT Zone",
    station_nm: "지식정보단지",
    coordinate: {
      lat: 37.378384,
      lng: 126.645168,
    },
  },
  I133: {
    line_num: "인천선",
    station_cd: "3133",
    station_nm_eng: "Campus Town",
    station_nm: "캠퍼스타운",
    coordinate: {
      lat: 37.387855,
      lng: 126.661673,
    },
  },
  I132: {
    line_num: "인천선",
    station_cd: "3132",
    station_nm_eng: "Dongmak",
    station_nm: "동막",
    coordinate: {
      lat: 37.397878,
      lng: 126.674005,
    },
  },
  I131: {
    line_num: "인천선",
    station_cd: "3131",
    station_nm_eng: "Dongchun",
    station_nm: "동춘",
    coordinate: {
      lat: 37.404737,
      lng: 126.681015,
    },
  },
  I130: {
    line_num: "인천선",
    station_cd: "3130",
    station_nm_eng: "Woninjae",
    station_nm: "원인재",
    coordinate: {
      lat: 37.412603,
      lng: 126.687389,
    },
  },
  I129: {
    line_num: "인천선",
    station_cd: "3129",
    station_nm_eng: "Sinyeonsu",
    station_nm: "신연수",
    coordinate: {
      lat: 37.41804,
      lng: 126.693863,
    },
  },
  I128: {
    line_num: "인천선",
    station_cd: "3128",
    station_nm_eng: "Seonhak",
    station_nm: "선학",
    coordinate: {
      lat: 37.426684,
      lng: 126.698863,
    },
  },
  I127: {
    line_num: "인천선",
    station_cd: "3127",
    station_nm_eng: "Munhak Sports Complex",
    station_nm: "문학경기장",
    coordinate: {
      lat: 37.434935,
      lng: 126.698579,
    },
  },
};
