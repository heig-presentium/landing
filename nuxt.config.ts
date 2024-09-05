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

  colorMode: {
    preference: 'light',
  },

  runtimeConfig: {
    public: {
      revision: getRevision(),
    },
  },

  typescript: { strict: false },
  eslint: { config: { standalone: false } },
  devtools: { enabled: true },

  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-11',
})
