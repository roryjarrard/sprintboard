<script lang="ts">
  import { page } from "$app/state";
  import { projects } from "#lib/data/projects.ts";

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
  <div class="project-list">
    {#each visibleProjects as project (project.id)}
      <article>
        <h2>
          <a href="/projects/{project.id}">{project.name}</a>
        </h2>

        <p>{project.description}</p>
        <p>Status: {project.status}</p>
      </article>
    {/each}
  </div>
{/if}
