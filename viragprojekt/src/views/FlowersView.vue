<script setup>
import { onMounted } from 'vue'
import { useFlowerStore } from '../stores/flowerStore'

// Store beolvasása
const flowerStore = useFlowerStore()

// Amikor az oldal betöltődik, lekérjük a virágokat
onMounted(() => {
  flowerStore.fetchFlowers()
})
</script>

<template>
  <div class="container mt-4">
    <h1 class="text-center mb-5">Virágkínálatunk</h1>
    
    <div class="row">
      <div v-for="flower in flowerStore.flowers" :key="flower.id" class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img :src="flower.image" class="card-img-top" :alt="flower.name" style="height: 200px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title">{{ flower.name }}</h5>
            <p class="card-text text-muted">{{ flower.description }}</p>
            <button class="btn btn-primary w-100 mt-2">Részletek</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>