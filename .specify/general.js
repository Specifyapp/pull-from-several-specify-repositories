const publicPath = './output';
const fontFormats = ['woff', 'woff2'];
const fontsFolderName = 'fonts';
const vectorsFolderName = 'vectors';

const measurementRules = [
  {
    name: 'Design Tokens / Measurements',
    path: `${publicPath}/styles/measurements.css`,
    filter: {
      types: ['measurement'],
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

const textStyleRules = [
  {
    name: 'Design Tokens / Text Styles',
    path: `${publicPath}/styles/text-styles.css`,
    filter: {
      types: ['textStyle'],
    },
    parsers: [
      {
        name: 'to-css-text-style',
        options: {
          exclude: ['color', 'text-indent', 'vertical-align', 'text-align'],
          relativeLineHeight: true,
          genericFamily: 'serif',
        },
      },
    ],
  },
];

const fontRules = [
  {
    name: 'Design Tokens / Import font files in CSS',
    path: `${publicPath}/styles/fonts.css`,
    filter: {
      types: ['font'],
    },
    parsers: [
      {
        name: 'to-css-font-import',
        options: {
          formats: fontFormats,
          fontsPath: `../${fontsFolderName}`,
        },
      },
    ],
  },
  {
    name: 'Design Tokens / Import font files',
    path: `${publicPath}/${fontsFolderName}`,
    filter: {
      types: ['font'],
    },
    parsers: [
      {
        name: 'convert-font',
        options: {
          formats: fontFormats,
        },
      },
    ],
  },
];

const vectorRules = [
  {
    name: 'Design Tokens / Vectors',
    path: `${publicPath}/${vectorsFolderName}`,
    filter: {
      types: ['vector'],
    },
    parsers: [
      {
        'name': 'kebabcasify',
      },
      {
        name: 'svgo',
        options: {
          svgo: {
            js2svg: {
              pretty: true,
            },
          },
        },
      },
    ],
  },
];

const depthRules = [
  {
    name: 'Design Tokens / Z-index',
    path: `${publicPath}/styles/z-index.css`,
    filter: {
      types: ['depth'],
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

const durationRules = [
  {
    name: 'Design Tokens / Durations',
    path: `${publicPath}/styles/durations.css`,
    filter: {
      types: ['duration'],
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
  rules: [...measurementRules, ...textStyleRules, ...fontRules, ...vectorRules, ...depthRules, ...durationRules],
};
