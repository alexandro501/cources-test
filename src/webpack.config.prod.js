const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'img', to: 'img' },
        { from: 'css', to: 'css' },
        { from: 'js/vendor', to: 'js/vendor' },
        { from: 'icon.svg', to: 'icon.svg' },
        { from: 'favicon.ico', to: 'favicon.ico' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: 'icon.png', to: 'icon.png' },
        {
          from: 'course-business-development.png',
          to: 'course-business-development.png',
        },
        {
          from: 'course-graphic-design.png',
          to: 'course-graphic-design.png',
        },
        {
          from: 'course-business-development.png',
          to: 'course-business-development.png',
        },
        {
          from: 'course-graphic-design.png',
          to: 'course-graphic-design.png',
        },
        {
          from: 'course-highload.png',
          to: 'course-highload.png',
        },
        {
          from: 'course-hr-analytics.png',
          to: 'course-hr-analytics.png',
        },
        {
          from: 'course-pr-management.png',
          to: 'course-pr-management.png',
        },
        {
          from: 'course-protact-management.png',
          to: 'course-protact-management.png',
        },
        {
          from: 'course-recruitment.png',
          to: 'course-recruitment.png',
        },
        {
          from: 'course-ux-design.png',
          to: 'course-ux-design.png',
        },
        {
          from: 'dots.png',
          to: 'dots.png',
        },
        {
          from: 'first-card.png',
          to: 'first-card.png',
        },
        {
          from: 'icon.svg',
          to: 'icon.svg',
        },
        {
          from: 'load-more.svg',
          to: 'load-more.svg',
        },
        {
          from: 'search-icon.svg',
          to: 'search-icon.svg',
        },
        {
          from: 'shapes-1.png',
          to: 'shapes-1.png',
        },
        {
          from: 'shapes.png',
          to: 'shapes.png',
        },
        { from: '404.html', to: '404.html' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
      ],
    }),
  ],
});
