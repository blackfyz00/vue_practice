<script setup lang="ts"></script>

<template>
  <div id="app">
    <nav
      style="padding: 15px; background: #f8f9fa; margin-bottom: 20px; border-bottom: 1px solid #ddd"
    >
      <router-link to="/" style="margin-right: 20px; text-decoration: none; color: #007bff"
        >Страница 1</router-link
      >
      <router-link to="/page2" style="text-decoration: none; color: #007bff"
        >Страница 2</router-link
      >
    </nav>

    <router-view />
  </div>
</template>
