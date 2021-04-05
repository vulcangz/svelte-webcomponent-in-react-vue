<svelte:options tag="my-counter" />

<script>
  import { createEventDispatcher } from 'svelte';
  
  // Event handling
  const dispatch = createEventDispatcher();

  export let title = '?';
  
	let count = 0;
  let ref;
 
  function dispatchClick(e) {
    // dispatch("customOnClick", { text: "Sir, I don't understand your command, I only know that the current count value is: " + count });
    
    const event = new CustomEvent("customOnClick", {
      detail: { text: "Hi, I'm custom event from Svelte web component! My own count value is: " + count },
      bubbles: true,
      cancelable: true,
      composed: true, // this line allows the event to leave the Shadow DOM
    });
    // console.log(event)
    ref.dispatchEvent(event);
  }

	function inc() {
		count++;
	}

	function dec() {
		count--;
	}
</script>

<style>
	* {
		font-size: 200%;
	}

	span {
		width: 4rem;
		display: inline-block;
		text-align: center;
	}

	button {
		width: 64px;
		height: 64px;
		border: none;
		border-radius: 10px;
		background-color: seagreen;
		color: white;
	}
</style>

<button on:click={dec}>
	-
</button>
<span>{count}</span>
<button on:click={inc}>
	+
</button>
<button on:click={dispatchClick} bind:this={ref}>
	{title}
</button>