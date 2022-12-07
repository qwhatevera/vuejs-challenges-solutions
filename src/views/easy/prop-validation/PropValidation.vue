<script setup lang="ts">
// 请验证Button组件的Prop类型 ，使它只接收: primary | ghost | dashed | link | text | default ，且默认值为default。
defineProps({
  type: {
    type: String,
    default: 'default',
    validator(value: string) {
      return ['primary','ghost','dashed','link','text','default'].includes(value)
    }
  },
})
</script>

<template>
  <button>Button</button>
</template>
