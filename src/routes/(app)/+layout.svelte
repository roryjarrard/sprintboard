<script lang="ts">
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();
</script>

<div class="app-shell">
  <aside>
    <p class="label">Workspace</p>
    <a href="/dashboard">Overview</a>
    <a href="/projects">Projects</a>
  </aside>

  <main>
    {@render children()}
  </main>
</div>

<style lang="scss">
  .app-shell {
    display: grid;
    grid-template-columns: 180px minmax(0, 1fr);
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
  }

  aside {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    a {
      color: inherit;
      text-decoration: none;
    }

    .label {
      font-weight: 700;
    }
  }
</style>
