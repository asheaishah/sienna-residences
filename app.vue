<template>
  <NuxtLayout>
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useHead({
  title: config.title,
  // It will insert the class to the body element
  // bodyAttrs: {
  //   class: 'test'
  // },
  // It will insert the script
  // script: [{ innerHTML: 'console.log(\'Hello world123\')' }]
})
</script>

<style>
html {
  overflow-x: hidden;
}
</style>