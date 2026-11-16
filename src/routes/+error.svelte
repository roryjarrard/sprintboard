<script lang="ts">
  import { page } from "$app/state";
</script>

<svelte:head>
  <title>{page.status} | SprintBoard</title>
</svelte:head>

<main class="error-page">
  <p class="status">{page.status}</p>
  <h1>{page.error?.message}</h1>
  <p>The requested page could not be found.</p>
  <a href="/dashboard">Return to dashboard</a>
</main>

<style>
  .error-page {
    max-width: 640px;
    margin: 4rem auto;
    padding: 1.5rem;
  }

  .status {
    font-weight: 800;
    font-size: x-large;
  }
</style>
