<script setup lang="ts">
import { onMounted, onUnmounted, inject, Ref } from "vue"

const timer = inject("timer") as Ref
const count = inject("count") as Ref

onMounted(() => {
  timer.value = window.setInterval(() => {
    count.value++
  }, 1000)
})

onUnmounted(() => {
  window.clearInterval(timer.value)
})

</script>

<template>
  <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>
