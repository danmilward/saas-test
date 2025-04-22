<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export let text = 'Write interactive stories without code.';
  export let period = 2000;
  export let className = '';

  let displayText = '';
  let isDeleting = false;
  let loopNum = 0;
  let delta = 100;
  let ticker: ReturnType<typeof setInterval> | null = null;

  function tick() {
    let i = loopNum % text.length;
    let fullTextCurrent = text;
    let updatedText = isDeleting
      ? fullTextCurrent.substring(0, displayText.length - 1)
      : fullTextCurrent.substring(0, displayText.length + 1);

    displayText = updatedText;

    if (isDeleting) {
      delta = delta / 2;
    }

    if (!isDeleting && updatedText === fullTextCurrent) {
      // setIsDeleting(true); // Uncomment to enable deletion
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

<h2 class="font-source-code-pro text-xl font-normal text-gray-800 leading-tight tracking-wide max-w-[30ch] h-14 {className}">
  {displayText}
  <span class="animate-[blink_1s_ease-in-out_infinite]">|</span>
</h2>
