module.exports = {
  // assets: ["./assets/font/"],
  dependencies: {
    "local-rn-library": {
      root: "/root/libraries",
    },
    "react-native-sqlite-storage": {
      platforms: {
        android: {
          sourceDir:
            "../node_modules/react-native-sqlite-storage/platforms/android-native",
          packageImportPath: "import io.liteglue.SQLitePluginPackage;",
          packageInstance: "new SQLitePluginPackage()",
        },
      },
    },
  },
};
