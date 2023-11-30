/**
 * object를 hash key로 변환
 * 순서가 바뀔 수 있어서 처리해야 함
 */
export const hashKey = (object: Record<string, any>) => {
  return JSON.stringify(
    Object.keys(object)
      .sort()
      .reduce((acc, key) => {
        return acc + object[key];
      }, "")
  );
};
