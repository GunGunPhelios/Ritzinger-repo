<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">Virágbolt</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Kezdőlap</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/flowers">Virágok</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>