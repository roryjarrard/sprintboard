<script lang="ts">
  import "../app.css";
  import AppNavigation from "#lib/components/AppNavigation.svelte";

  import type { LayoutProps } from "./$types";
  let { children }: LayoutProps = $props();
</script>

<a href="#main-content" class="skip-link">Skip to main content -&gt;</a>

<header class="site-header">
  <div class="container header-inner">
    <a href="/" class="brand">SprintBoard</a>

    <AppNavigation />
  </div>
</header>

<div id="main-content" tabindex="-1">
  {@render children()}
</div>

<style lang="scss">
  .site-header {
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-3);
    min-height: 64px;
  }

  .brand {
    font-size: 1.1rem;
    font-weight: 800;
    text-decoration: none;
  }

  .skip-link {
    position: fixed;
    top: var(--space-2);
    left: var(--space-2);
    z-index: 100;
    padding: var(--space-2) var(--space-3);
    background: var(--color-text);
    color: white;
    border-radius: var(--radius-sm);
    transform: translateY(-200%);

    &:focus {
      transform: translateY(0);
    }
  }
</style>
