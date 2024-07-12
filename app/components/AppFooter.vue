<script setup lang="ts">
const revision = useRevision()
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </template>

    <template #right>
      <UColorModeButton size="sm" />
      <UButton
        to="https://github.com/presentium"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="gray"
        variant="ghost"
      >
        <b>Version:</b>
        {{ revision }}
      </UButton>
    </template>
  </UFooter>
</template>
