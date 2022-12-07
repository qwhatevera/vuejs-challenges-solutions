<template>
  <router-view></router-view>
  <hr>
  <div>
    <h2>热身</h2>
    <router-link to="/hello-world">你好!</router-link>
  </div>
  <div>
    <h2>简单</h2>
    <router-link to="/lifecycle-hooks">生命周期钩子</router-link> |
    <router-link to="/next-dom-update-flush">下一次DOM更新</router-link> |
    <router-link to="/dom-portal">DOM传送门</router-link> |
    <router-link to="/dynamic-css-values">动态CSS</router-link> |
    <router-link to="/ref-family">ref 全家桶</router-link> |
    <router-link to="/prevent-event-propagation">阻止事件冒泡</router-link> |
    <router-link to="/losing-reactivity">响应性丢失</router-link> |
    <router-link to="/capitalize">大写</router-link> |
    <router-link to="/prop-validation">Prop验证</router-link> |
  </div>
</template>
