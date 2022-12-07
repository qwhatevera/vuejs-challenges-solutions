<script setup lang="ts">
import { ref, nextTick, Ref } from "vue"

const count = ref(0)
const counter = ref(null) as Ref

function increment() {
  count.value++

  nextTick(() => {
    console.log(+counter.value.textContent === 1)
  })
}

</script>

<template>
  <button ref="counter" @click="increment">
    {{ count }}
  </button>
</template>
