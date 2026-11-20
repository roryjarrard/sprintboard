<script lang="ts">
  import type { Project } from "#lib/data/projects.ts";

  type Props = {
    projects: Project[];
  };

  let { projects }: Props = $props();
</script>

<div class="table-wrapper">
  <table>
    <caption class="visually-hidden">
      SprintBoard projects and current status
    </caption>

    <thead>
      <tr>
        <th scope="col">Project</th>
        <th scope="col">Status</th>
      </tr>
    </thead>

    <tbody>
      {#each projects as project (project.id)}
        <tr>
          <td>
            <a href="/projects/{project.id}">{project.name}</a>
          </td>
          <td>
            {project.status}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .table-wrapper {
    overflow-x: auto;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background: var(--color-surface);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: var(--space-3);
    text-align: left;
    border-bottom: 1px solid var(--color-border);
  }

  th {
    font-size: 0.9rem;
    color: var(--color-muted);
  }

  tbody tr:last-child td {
    border-bottom: 0;
  }
</style>
