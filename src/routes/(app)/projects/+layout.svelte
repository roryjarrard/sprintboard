<script lang="ts">
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();
</script>

<section class="projects-section">
  <nav aria-label="Project navigation">
    <a href="/projects">Current</a>
    <a href="/projects/archive">Archived</a>
  </nav>

  {@render children()}
</section>

<style>
  .projects-section {
    display: grid;
    gap: 1.5rem;
  }

  nav {
    display: flex;
    gap: 1rem;
  }
</style>
