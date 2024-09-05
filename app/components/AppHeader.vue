<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const links = computed(() => [{
  label: 'Features',
  to: '/#features',
  icon: 'i-heroicons-cube-transparent',
  active: nuxtApp.$router.currentRoute.value.path === '/' && activeHeadings.value.includes('features') && !activeHeadings.value.includes('pricing'),
}, {
  label: 'FAQ',
  to: '/#faq',
  icon: 'i-heroicons-question-mark-circle',
  active: nuxtApp.$router.currentRoute.value.path === '/' && activeHeadings.value.includes('faq'),
}])

nuxtApp.hooks.hookOnce('page:loading:end', () => {
  if (nuxtApp.$router.currentRoute.value.path === '/') {
    updateHeadings([
      document.querySelector('#features'),
      document.querySelector('#faq'),
    ])
  }
  else {
    updateHeadings([])
  }
})
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <PresentiumLogo />
    </template>

    <template #right>
      <UButton
        label="Sign in"
        color="white"
        variant="ghost"
        trailing-icon="i-heroicons-arrow-right-20-solid"
        class="hidden lg:flex"
        to="https://app.presentium.ch"
        target="_blank"
      />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton
        label="Sign in"
        color="white"
        block
        class="mb-3"
        to="https://app.presentium.ch"
        target="_blank"
      />
    </template>
  </UHeader>
</template>
