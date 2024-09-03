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

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton'].includes(c.pascalName))
      globals.forEach(c => c.global = true)
    },
  },

  ui: {
    icons: ['heroicons', 'simple-icons', 'solar'],
  },

  colorMode: {
    preference: 'light',
  },

  routeRules: {
    '/api/search.json': { prerender: true },
    '/docs': { redirect: '/docs/getting-started', prerender: false },
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
