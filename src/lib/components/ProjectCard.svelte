<script lang="ts">
  import type { Project } from "#lib/data/projects.ts";

  type Props = {
    project: Project;
  };

  let { project }: Props = $props();
</script>

<article class="project-card">
  <div>
    <p class="status">
      {project.status}
    </p>
    <h2>
      <a href="/projects/{project.id}">{project.name}</a>
    </h2>

    <p>{project.description}</p>
  </div>
</article>

<style lang="scss">
  .project-card {
    display: grid;
    gap: var(--space-2);
    padding: var(--space-4);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    margin-bottom: 0.5rem;
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    margin-top: var(--space-1);

    a {
      text-decoration-thickness: 1px;
      text-underline-offset: 3px;
    }
  }

  .status {
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: capitalize;
    color: var(--color-muted);
  }
</style>
