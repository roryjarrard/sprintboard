<script lang="ts">
  import { page } from "$app/state";
  import { projects } from "#lib/data/projects.ts";
  import ProjectCard from "#lib/components/ProjectCard.svelte";

  let status = $derived(page.url.searchParams.get("status") ?? "all");

  let visibleProjects = $derived(
    status === "all"
      ? projects
      : projects.filter((project) => project.status === status),
  );
</script>

<svelte:head>
  <title>Projects | SprintBoard</title>
</svelte:head>

<h1>Projects</h1>

<nav aria-label="Filter projects">
  <a href="/projects">All</a>
  <a href="/projects?status=active">Active</a>
  <a href="/projects?status=paused">Paused</a>
  <a href="/projects?status=completed">Completed</a>
</nav>

{#if visibleProjects.length === 0}
  <p>No projects match this filter.</p>
{:else}
  <div class="card-grid">
    {#each visibleProjects as project (project.id)}
      <ProjectCard {project} />
    {/each}
  </div>
{/if}

<style>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: var(--space-3);
  }
</style>
