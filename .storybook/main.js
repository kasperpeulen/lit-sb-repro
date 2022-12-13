module.exports = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": {
    "name": "@storybook/web-components-vite",
    "options": {}
  },
  "docs": {
    "docsPage": true
  }
}