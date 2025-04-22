<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  export let className = '';
  export let text = 'Start writing now';
  export let href = '#';
  export let onClick = () => {};
  export let period = 2000;

  let displayText = '';
  let isDeleting = false;
  let loopNum = 0;
  let delta = 100;
  let ticker: ReturnType<typeof setInterval> | null = null;

  function tick() {
    let fullTextCurrent = text;
    let updatedText = isDeleting
      ? fullTextCurrent.substring(0, displayText.length - 1)
      : fullTextCurrent.substring(0, displayText.length + 1);

    displayText = updatedText;

    if (isDeleting) {
      delta = delta / 2;
    }

    if (!isDeleting && updatedText === fullTextCurrent) {
      delta = period;
    } else if (isDeleting && updatedText === '') {
      isDeleting = false;
      loopNum += 1;
      delta = 100;
    }
  }

  function startTicker() {
    if (ticker) clearInterval(ticker);
    ticker = setInterval(tick, delta);
  }

  onMount(() => {
    startTicker();
  });

  onDestroy(() => {
    if (ticker) clearInterval(ticker);
  });

  $: {
    // This reactive statement restarts the interval when delta changes
    if (ticker) {
      clearInterval(ticker);
      ticker = setInterval(tick, delta);
    }
  }
</script>

<a {href} on:click|preventDefault={onClick}>
  <button 
    class="font-semibold text-white hover:border-[#18c5fe] max-[400px]:w-[calc(100vw-4rem)] bg-gradient-to-br from-[#2af498] to-[#009ffd] btn btn-lg {className}"
  >
    {displayText}
    <span class="animate-[blink_1s_ease-in-out_infinite]">|</span>
  </button>
</a> 