const publicPath = './output';

const colorRules = [
  {
    name: 'Dark Theme / Colors',
    path: `${publicPath}/styles/colors/dark-theme.css`,
    filter: {
      types: ['color'],
    },
    parsers: [
      {
        name: 'sort-by',
        options: {
          keys: ['name'],
        },
      },
      {
        name: 'to-css-custom-properties',
        options: {
          formatName: 'kebabCase',
        },
      },
    ],
  },
];

const gradientRules = [
  {
    name: 'Dark Theme / Gradients',
    path: `${publicPath}/styles/gradients/dark-theme.css`,
    filter: {
      types: ['gradient'],
    },
    parsers: [
      {
        name: 'sort-by',
        options: {
          keys: ['name'],
        },
      },
      {
        name: 'to-css-custom-properties',
        options: {
          formatName: 'kebabCase',
        },
      },
    ],
  },
];

/*
 * Finally exports the configuration
 */
module.exports = {
  // Find more about how to target a Specify repository at: https://specifyapp.com/developers/api#heading-parameters
  rules: [...colorRules, ...gradientRules],
};
