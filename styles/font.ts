const lineHeight = (fontSize: number) => {
  return `${fontSize * 1.5}px`;
};

export const font = {
  // font-family: Pretendard;
  headline: `
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: ${lineHeight(20)};
    `,
  // font-family: Pretendard;
  subhead_1: `
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: ${lineHeight(16)};
    `,
  // font-family: Pretendard;
  subhead_2: `
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: ${lineHeight(14)};
    `,
  // font-family: Pretendard;
  subhead_3: `
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: ${lineHeight(12)};
    `,
  // font-family: Pretendard;
  subhead_4: `
      font-size: 10px;
      font-style: normal;
      font-weight: 600;
      line-height: ${lineHeight(10)};
    `,
  // font-family: Pretendard;
  body_1: `
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: ${lineHeight(16)};
    `,
  // font-family: Pretendard;
  body_2: `
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: ${lineHeight(14)};
    `,
  // font-family: Pretendard;
  body_3: `
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: ${lineHeight(12)};
    `,
  // font-family: Pretendard;
  caption: `
      font-size: 8px;
      font-style: normal;
      font-weight: 600;
      line-height: ${lineHeight(8)};
    `,
};
