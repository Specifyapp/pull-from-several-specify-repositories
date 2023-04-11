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

const shadowRules = [
  {
    name: 'Dark Theme / Shadow',
    path: `${publicPath}/styles/shadows/dark-theme.css`,
    filter: {
      types: ['shadow'],
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
];$

const borderRules = [
  {
    name: 'Dark Theme / Border',
    path: `${publicPath}/styles/borders/dark-theme.css`,
    filter: {
      types: ['border'],
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
  // Find more about how to target a Specify repository at: https://docs.specifyapp.com/concepts/configuration#rules
  rules: [...colorRules, ...gradientRules, ...shadowRules, ...borderRules],
};
