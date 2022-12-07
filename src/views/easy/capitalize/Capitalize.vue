<script setup lang="ts">
// 请创建一个自定义的修饰符 capitalize，它会自动将 v-model 绑定输入的字符串值首字母转为大写
import { ref,vModelText } from "vue"

const msg = ref('')
vModelText.beforeUpdate = function(el, {value, modifiers}) {
  if(modifiers.capitalize && value) {
    el.value = value.charAt(0).toUpperCase() + value.slice(1)
  }
}



</script>

<template>
  <input type="text" v-model.capitalize="msg" />
</template>
