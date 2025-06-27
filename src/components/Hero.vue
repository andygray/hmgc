<template>
  <div class="relative bg-gradient-to-r from-golf-green-800 to-golf-green-600 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="text-center">
        <!-- Club Logo -->
        <div class="mb-8">
          <img 
            src="/images/club-assets/logo.webp" 
            alt="Heaton Moor Golf Club Logo" 
            class="mx-auto h-24 md:h-32 w-auto object-contain"
          />
        </div>
        
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Heaton Moor Golf Club
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-golf-green-100">
          Established 1892 • Championship Golf • Member-Owned Excellence
        </p>
        <p class="text-lg mb-12 max-w-3xl mx-auto text-golf-green-200">
          Experience over 130 years of golfing tradition at our beautiful parkland course in Stockport. 
          From championship golf to exceptional hospitality, discover why Heaton Moor Golf Club is Greater Manchester's premier golf destination.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            @click="scrollToSection('membership')"
            class="bg-white text-golf-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-golf-green-50 transition-colors"
          >
            Join Our Club
          </button>
          <button 
            @click="scrollToSection('visitors')"
            class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-golf-green-800 transition-colors"
          >
            Book a Round
          </button>
        </div>
      </div>
    </div>
    
    <!-- Stats Section -->
    <div class="bg-white/10 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl font-bold">{{ stats.founded }}</div>
            <div class="text-golf-green-200">Established</div>
          </div>
          <div>
            <div class="text-3xl font-bold">{{ stats.holes }}</div>
            <div class="text-golf-green-200">Championship Holes</div>
          </div>
          <div>
            <div class="text-3xl font-bold">{{ stats.yards }}</div>
            <div class="text-golf-green-200">Yards</div>
          </div>
          <div>
            <div class="text-3xl font-bold">Par {{ stats.par }}</div>
            <div class="text-golf-green-200">Course Rating</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const stats = reactive({
  founded: 1892,
  holes: 18,
  yards: 6000,
  par: 70
})

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  } else {
    // If section doesn't exist on current page, navigate to appropriate page
    window.location.href = `/${sectionId}`
  }
}
</script> 