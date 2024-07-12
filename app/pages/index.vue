<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

const videoModalOpen = ref(false)

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})
</script>

<template>
  <div class="dark:bg-gray-900">
    <ULandingHero
      :links="page.hero.links"
      class="dark:bg-gradient-to-b from-gray-950 to-gray-900"
    >
      <template #headline>
        <UButton v-bind="page.hero.headline" />
      </template>

      <template #title>
        <span v-html="page.hero.title" />
      </template>

      <template #description>
        <span v-html="page.hero.description" />
      </template>

      <template #links>
        <UButton
          to="#features"
          icon="i-solar-rocket-2-line-duotone"
          size="xl"
        >
          Get Started
        </UButton>
        <UButton
          size="xl"
          color="white"
          icon="i-solar-video-frame-play-horizontal-line-duotone"
          @click="videoModalOpen = true"
        >
          What is Presentium?
        </UButton>

        <UModal
          v-model="videoModalOpen"
          class="sm:max-w-xl"
        >
          <div class="p-3">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
              title="Presentium video trailer"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </UModal>
      </template>

      <ImagePlaceholder />
    </ULandingHero>

    <ULandingSection
      :title="page.features.title"
      :headline="page.features.headline"
    >
      <template #description>
        <span v-html="page.features.description" />
      </template>

      <UPageGrid
        id="features"
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <ULandingCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10">
      <ULandingCTA
        v-bind="page.cta"
        :card="false"
      />
    </ULandingSection>

    <ULandingSection
      id="faq"
      :title="page.faq.title"
      :description="page.faq.description"
      class="scroll-mt-[var(--header-height)]"
    >
      <ULandingFAQ
        multiple
        :items="page.faq.items"
        :ui="{
          button: {
            label: 'font-semibold',
            trailingIcon: {
              base: 'w-6 h-6',
            },
          },
        }"
        class="max-w-4xl mx-auto"
      />
    </ULandingSection>
  </div>
</template>
