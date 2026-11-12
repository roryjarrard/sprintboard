<script lang="ts">
  import type { LayoutProps } from "./$types";
  import AppNavigation from "#lib/components/AppNavigation.svelte";

  let { children }: LayoutProps = $props();
</script>

<header>
  <a href="/" class="brand">SprintBoard</a>

  <AppNavigation />
</header>

{@render children()}

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background: white;
    border-bottom: 1px solid #d8deea;
  }

  .brand {
    font-weight: 800;
  }
</style>
