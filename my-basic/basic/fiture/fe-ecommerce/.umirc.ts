/* eslint-disable */
import { resolve } from 'path';
import Dotenv from 'dotenv-webpack';
import theme from './theme.config';

const DEFAULT_ENV = 'dev';

const PROD_FAVICON = 'https://pages.fiture.com/public/brand/favicon.png';

const { DEVTOOL = 'source-map', DEPLOY_ENV = DEFAULT_ENV, PUBLIC_PATH, PORT } = process.env;

const development = process.env.NODE_ENV !== 'production';

const publicPath = development ? '/' : PUBLIC_PATH;

const faviconIco = DEPLOY_ENV === 'prod' ? PROD_FAVICON : `${publicPath}favicon.ico`;

export default {
  title: 'FITURE-订单中心',
  extraBabelPlugins: [
    '@babel/plugin-proposal-optional-chaining',
    [
      '@fiture/babel-plugin-import',
      {
        libraryName: '@kant',
        libraryDirectory: 'es',
        style: true,
      },
      'kant',
    ],
    [
      '@fiture/babel-plugin-import',
      {
        libraryName: '@rousseau',
        libraryDirectory: 'es',
        style: true,
      },
      'rousseau',
    ],
    [
      'import',
      {
        libraryName: '@ant-design/icons',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      '@ant-design/icons',
    ],
  ],
  cssLoader: {
    localsConvention: 'camelCase',
  },
  devtool: ['dev', 'qa'].includes(DEPLOY_ENV) ? DEVTOOL : undefined,
  plugins: ['@alitajs/routes'],
  devServer: {
    open: false,
  },
  dva: {
    skipModelValidate: true,
  },
  antd: {},
  routesExtend: {
    exclude: [
      /model\.(j|t)sx?$/,
      /service\.(j|t)sx?$/,
      /fields\.(j|t)sx?$/,
      /constants\.(j|t)sx?$/,
      /models\//,
      /components\//,
      /services\//,
    ],
  },
  chainWebpack(config) {
    config.plugin('dot-env').use(Dotenv, [{ path: resolve(__dirname, `./.env.${DEPLOY_ENV}`) }]);
  },
  hash: true,
  history: { type: 'browser' },
  theme: theme(),
  alias: {
    '@': resolve(__dirname, '../src'),
  },
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  publicPath,
  define: {
    'process.env.PUBLIC_PATH': publicPath,
    'process.env.DEPLOY_ENV': DEPLOY_ENV,
    'process.env.PORT': PORT,
    'process.env.FAVICON_ICO': faviconIco,
  },
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  targets: {
    chrome: 79,
    firefox: 80,
    safari: 10,
    edge: false,
    ios: false,
  },
};
