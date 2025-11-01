<script setup lang="ts"></script>

<template>
  <div id="app">
    <nav
      style="padding: 15px; background: #f8f9fa; margin-bottom: 20px; border-bottom: 1px solid #ddd"
    >
      <router-link to="/" style="margin-right: 20px; text-decoration: none; color: #007bff">
        Лауреаты
      </router-link>
      <router-link to="/page2" style="text-decoration: none; color: #007bff">
        Премии
      </router-link>
    </nav>

    <main style="flex: 1; padding: 0 20px;">
      <router-view />
    </main>

    <footer
      style="
        padding: 15px;
        background: #f1f1f1;
        border-top: 1px solid #ddd;
        text-align: center;
        margin-top: auto;
      "
    >
      <p>
        <address style="display: inline; font-style: normal;">ОмГТУ, </address>
        <time datetime="2025">2025</time>
      </p>
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>