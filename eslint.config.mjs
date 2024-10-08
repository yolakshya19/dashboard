import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    ...pluginJs.configs.recommended,
    ...pluginReact.configs.flat.recommended,
    rules: {
      "no-unused-vars": "warn", // Set unused-vars to warning
      "no-undef": "off", // Set no-undef to warning
      // Add other rules as needed
    },
    ignores: ["src/pages/Ecommerce.jsx", "src/pages/Orders.jsx"], // Use ignores to specify files to ignore
  },
];
