<script>
  let show = true,
    list = [1, 2, 3]
</script>

<main>
  <button on:click={() => show = !show}>Toggle List</button>
  <button on:click={() => list = [...list, list.length + 1]}>Push Number</button>
  <button on:click={() => (list.pop(), list = list)}>Pop Number</button>
  <button on:click={() => list = list.reverse()}>Reverse List</button>
  
  {#if show && list.length}
    <ul>
      {#each list as item}
        <li> {item} </li>
      {/each}
    </ul>
  {:else if list.length}
    <p>List is not empty, but hidden.</p>
  {:else}
    <p>List is empty.</p>
  {/if}
</main>