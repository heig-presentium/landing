import { execSync } from 'node:child_process'

function getRevision() {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim()
  }
  catch (e) {
    console.error('Unexpected error fetching revision', e)
    return 'unknown'
  }
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
  ],

  ui: {
    icons: ['heroicons', 'simple-icons', 'solar'],
  },

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    '/': { prerender: true },
  },

  runtimeConfig: {
    public: {
      revision: getRevision(),
    },
  },

  devtools: {
    enabled: true,
  },

  typescript: {
    strict: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-11',
})
