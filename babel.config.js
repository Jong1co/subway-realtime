module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          // envName: "APP_ENV", //.env 파일에서 로드할 환경변수 이름
          moduleName: "@env", //앱에서 process.env를 통해 접근할 수 있는 모듈 이름
          path: ".env", //env 파일의 경로
          blocklist: null, //블랙리스트: blacklist에 등록된 변수는 로드하지 않음
          allowlist: null, //화이트리스트: whitelist에 등록된 변수만 로드
          blacklist: null,
          whitelist: null,
          safe: false, //
          allowUndefined: true,
          verbose: false,
        },
      ],
    ],
  };
};
