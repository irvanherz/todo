import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // ...pluginVue.configs["flat/essential"],
  ...pluginVue.configs["flat/strongly-recommended"],
  {
    files: ["**/*.vue"], 
    languageOptions: {parserOptions: {parser: tseslint.parser}},
    rules: {
      "vue/max-attributes-per-line": ["error", {singleline: 3 }],
      "vue/script-indent": ["error", 2, { "baseIndent": 0 }],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],
      "vue/no-unused-vars": ["error", {
        "ignorePattern": "^_"
      }],
    }
  },
];