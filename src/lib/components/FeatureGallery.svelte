<script lang="ts">
  import { onMount } from 'svelte';

  interface Feature {
    id: number;
    image: string;
    title: string;
    description: string;
  }

  const features: Feature[] = [
    {
      id: 1,
      image: "/images/features-carousel/distraction-free-writer.webp",
      title: "Distraction-Free Writing",
      description: "A clean, focused interface to keep you in the zone."
    },
    {
      id: 2,
      image: "/images/features-carousel/planning-tools.webp",
      title: "Visual Story Planning",
      description: "Plan your story structure with our intuitive visual interface"
    },
    {
      id: 3,
      image: "/images/features-carousel/customization-3.webp",
      title: "Customization",
      description: "Tailor the look and feel of your stories."
    },
    {
      id: 4,
      image: "/images/features-carousel/conditional.webp",
      title: "Testing & Switching",
      description: "Use conditional logic to create unique interactive fiction paths."
    },
    {
      id: 5,
      image: "/images/features-carousel/publishing-2.webp",
      title: "Publishing",
      description: "Share online or export with a single click."
    },
  ];

  let currentFeature = 0;

  function nextFeature() {
    currentFeature = (currentFeature + 1) % features.length;
  }

  function previousFeature() {
    currentFeature = (currentFeature - 1 + features.length) % features.length;
  }

  // Optional: Auto-advance the carousel
  let intervalId: ReturnType<typeof setInterval>;
  
  onMount(() => {
    // Auto-advance every 5 seconds
    intervalId = setInterval(() => {
      nextFeature();
    }, 5000);
    
    return () => {
      clearInterval(intervalId);
    };
  });
</script>

<div class="relative mt-8">
  <!-- Main Image Container -->
  <div class="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-gray-300">
    {#each features as feature, index}
      <img
        src={feature.image}
        alt={feature.title}
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        style="opacity: {currentFeature === index ? '1' : '0'};"
      />
    {/each}

    <!-- Navigation Arrows -->
    <div class="absolute inset-0 flex items-center justify-between p-4">
      <button
        on:click={previousFeature}
        class="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all"
        aria-label="Previous feature"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        on:click={nextFeature}
        class="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all"
        aria-label="Next feature"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </div>

  <!-- Feature Navigation Dots -->
  <div class="flex justify-center gap-2 mt-4">
    {#each features as feature, index}
      <button
        on:click={() => (currentFeature = index)}
        class="w-2 h-2 rounded-full transition-all {currentFeature === index ? 'bg-[#18c5fe] w-4' : 'bg-gray-300'}"
        aria-label="Go to feature {feature.title}"
      ></button>
    {/each}
  </div>

  <!-- Feature Info -->
  <div class="text-center mt-8">
    <h3 class="text-2xl font-bold text-gray-900">
      {features[currentFeature].title}
    </h3>
  </div>
</div> 