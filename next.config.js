/**
 * Next Config
 */
const withCSS = require('@zeit/next-css')
const withTM = require('next-transpile-modules')
const withSass = require('@zeit/next-sass')

const nextConfig = {
  transpileModules: ['industry-ui'],
  pageExtensions: ['js']
}

module.exports = withSass(withCSS(withTM(nextConfig)))
