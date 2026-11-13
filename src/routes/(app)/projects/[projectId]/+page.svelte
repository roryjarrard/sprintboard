<script lang="ts">
  import type { PageProps } from "./$types";
  import { projects, type Project } from "#lib/data/projects.ts";

  let { params }: PageProps = $props();

  let project: Project | undefined = $derived(
    projects.find((item) => item.id === params.projectId),
  );
</script>

<svelte:head>
  <title>{project?.name ?? "Unknown Project"} | SprintBoard</title>
</svelte:head>

{#if project}
  <h1>{project.name}</h1>
  <p>{project.description}</p>
  <p>Status: {project.status}</p>
{:else}
  <h1>Project not found</h1>
  <p>No project matches this URL.</p>
{/if}
