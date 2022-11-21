const publicPath = './output';

const colorRules = [
  {
    name: 'Light Theme / Colors',
    path: `${publicPath}/styles/colors/light-theme.css`,
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
    name: 'Light Theme / Gradients',
    path: `${publicPath}/styles/gradients/light-theme.css`,
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
  repository: '@acme-inc/Light-Theme',
  personalAccessToken: '84db71c10be61e267a03c5881dd347e14ae2111aff92433d9cce06a688eb198d',
  rules: [...colorRules, ...gradientRules],
};
