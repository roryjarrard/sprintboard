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
    gap: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a[aria-current="page"] {
    font-weight: 800;
    text-decoration: underline;
  }
</style>
