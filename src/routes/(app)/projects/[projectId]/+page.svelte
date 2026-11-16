<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>{data.project?.name ?? "Unknown Project"} | SprintBoard</title>
</svelte:head>

{#if data.project}
  <h1>{data.project.name}</h1>
  <p>{data.project.description}</p>
  <p>Status: {data.project.status}</p>
{:else}
  <h1>Project not found</h1>
  <p>No project matches this URL.</p>
{/if}
