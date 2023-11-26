const lineHeight = (fontSize: number) => {
  return `${fontSize * 1.5}px`;
};

export const font = {
  headline: `
      font-family: Pretendard;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: ${lineHeight(20)};
    `,
  subhead_1: `
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: ${lineHeight(16)};
    `,
  subhead_2: `
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: ${lineHeight(14)};
    `,
  subhead_3: `
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: ${lineHeight(12)};
    `,
  subhead_4: `
      font-family: Pretendard;
      font-size: 10px;
      font-style: normal;
      font-weight: 600;
      line-height: ${lineHeight(10)};
    `,
  body_1: `
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: ${lineHeight(16)};
    `,
  body_2: `
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: ${lineHeight(14)};
    `,
  body_3: `
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: ${lineHeight(12)};
    `,
  caption: `
      font-family: Pretendard;
      font-size: 8px;
      font-style: normal;
      font-weight: 600;
      line-height: ${lineHeight(8)};
    `,
};

//어디 역인지는 주어짐

{
  구로: [
    {
      line: "1호선",
      nextStation: "남영",
      direction: "인천",
      bookmark: false,
      arrivalTime: "3분",
      subwayInfoList: [
        { position: "온수", arrivalStation: "도봉산", subwayId: "1111" },
        { position: "까치산", arrivalStation: "도봉산", subwayId: "1112" },
      ],
    },
    {
      line: "1호선",
      nextStation: "남영",
      direction: "신창",
      bookmark: false,
      arrivalTime: "3분",
      subwayInfoList: [
        { position: "온수", arrivalStation: "도봉산", subwayId: "1111" },
        { position: "까치산", arrivalStation: "도봉산", subwayId: "1112" },
      ],
    },
    {
      line: "1호선",
      nextStation: "남영",
      direction: "인천, 신창",
      bookmark: false,
      arrivalTime: "3분",
      subwayInfoList: [
        { position: "온수", arrivalStation: "도봉산", subwayId: "1111" },
        { position: "까치산", arrivalStation: "도봉산", subwayId: "1112" },
      ],
    },
  ];
}
