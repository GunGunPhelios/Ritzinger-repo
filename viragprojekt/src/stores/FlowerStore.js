import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useFlowerStore = defineStore('flower', () => {
  const flowers = ref([])
  
  // Adatok lekérése a szerverről
  const fetchFlowers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/flowers')
      flowers.value = response.data
    } catch (error) {
      console.error('Hiba az adatok lekérésekor:', error)
    }
  }

  return { flowers, fetchFlowers }
})