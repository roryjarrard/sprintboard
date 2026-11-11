<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    title: string;
    children: Snippet;
  };

  let { title, children }: Props = $props();
</script>

<section class="panel">
  <h2>{title}</h2>
  <div class="content">
    {@render children()}
  </div>
</section>

<style>
  .panel {
    padding: 1.5rem;
    background: white;
    border-radius: 0.75rem;
  }

  h2 {
    margin-top: 0;
  }

  .content {
    display: grid;
    gap: 1rem;
  }
</style>
