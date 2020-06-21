module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-unused-vars": [
      2,
      {
        // 允许声明未使用变量
        vars: "local",
        // 参数不检查
        args: "none"
      }
    ],
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      "error"
      // {
      //   singleQuote: true,
      //   trailingComma: "none",
      //   bracketSpacing: true,
      //   jsxBracketSameLine: true,
      //   parser: "flow"
      // }
    ]
  }
};
//"plugin:vue/essential", "eslint:recommended", "@vue/prettier"
