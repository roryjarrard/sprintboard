<script lang="ts">
  import { navigating, page } from "$app/state";
</script>

{#if navigating.to}
  <span class="navigation-status">Loading...</span>
{/if}

<nav aria-label="Main navigation">
  <a href="/" aria-current={page.url.pathname === "/" ? "page" : undefined}
    >Home</a
  >
  <a
    href="/dashboard"
    aria-current={page.url.pathname.startsWith("/dashboard")
      ? "page"
      : undefined}>Dashboard</a
  >
  <a
    href="/projects"
    aria-current={page.url.pathname.startsWith("/projects")
      ? "page"
      : undefined}>Projects</a
  >
  <a
    href="/my-tasks"
    aria-current={page.url.pathname.startsWith("/my-tasks")
      ? "page"
      : undefined}>My Tasks</a
  >
</nav>

<style>
  nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }

  a {
    padding: 0.35rem 0.5rem;
    color: inherit;
    text-decoration: none;
    border-radius: var(--radius-sm);
  }

  a:hover {
    background: var(--color-bg);
  }

  a[aria-current="page"] {
    font-weight: 800;
    background: var(--color-bg);
  }
</style>
