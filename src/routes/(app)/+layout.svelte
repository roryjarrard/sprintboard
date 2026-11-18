<script lang="ts">
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();
</script>

<div class="container app-shell">
  <aside class="sidebar">
    <p class="sidebar-label">Workspace</p>

    <nav aria-label="Workspace navigation">
      <a href="/dashboard">Overview</a>
      <a href="/projects">Projects</a>
      <a href="/my-tasks">My Tasks</a>
    </nav>
  </aside>

  <main class="content">
    {@render children()}
  </main>
</div>

<style>
  .app-shell {
    display: grid;
    grid-template-columns: 200px minmax(0, 1fr);
    gap: var(--space-5);
    padding-block: var(--space-5);
  }

  .sidebar {
    align-self: start;
  }

  .sidebar-label {
    margin-top: 0;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--color-muted);
  }

  .sidebar nav {
    display: grid;
    gap: var(--space-1);
  }

  .sidebar a {
    padding: var(--space-2);
    border-radius: var(--radius-sm);
    text-decoration: none;
  }

  .sidebar a:hover {
    background: var(--color-surface);
  }

  .content {
    min-width: 0;
  }

  @media (max-width: 760px) {
    .app-shell {
      grid-template-columns: 1fr;
      gap: var(--space-3);
      padding-block: var(--space-4);
    }

    .sidebar nav {
      display: flex;
      gap: var(--space-1);
      overflow-x: auto;
      padding-bottom: var(--space-1);
    }

    .sidebar a {
      white-space: nowrap;
    }
  }
</style>
