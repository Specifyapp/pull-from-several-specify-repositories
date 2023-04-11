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
          formatConfig: {
            selector: ":root[data-theme='light']"
          }
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
          formatConfig: {
            selector: ":root[data-theme='light']"
          }
        },
      },
    ],
  },
];

const shadowRules = [
  {
    name: 'Light Theme / Shadow',
    path: `${publicPath}/styles/shadows/light-theme.css`,
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
          formatConfig: {
            selector: ":root[data-theme='light']"
          }
        },
      },
    ],
  },
];

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
          formatConfig: {
            selector: ":root[data-theme='light']"
          }
        },
      },
    ],
  },
];

/*
 * Finally, export the configuration
 */
module.exports = {
  // Find more about how to target a Specify repository at: https://docs.specifyapp.com/concepts/configuration#rules
  rules: [...colorRules, ...gradientRules, ...shadowRules, ...borderRules],
};
