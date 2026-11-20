<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "danger";
    disabled?: boolean;
    onclick?: (event: MouseEvent) => void;
  };

  let {
    children,
    type = "button",
    variant = "primary",
    disabled = false,
    onclick,
  }: Props = $props();
</script>

<button
  {type}
  {disabled}
  {onclick}
  class:primary={variant === "primary"}
  class:secondary={variant === "secondary"}
  class:danger={variant === "danger"}>{@render children()}</button
>

<style>
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.75rem;
    padding: 0.65rem 1rem;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    font-weight: 700;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  .primary {
    background: var(--color-primary);
    color: white;
  }

  .primary:hover:not(:disabled) {
    background: var(--color-primary-dark);
  }

  .secondary {
    background: var(--color-surface);
    color: var(--color-text);
    border-color: var(--color-border);
  }

  .danger {
    background: var(--color-danger);
    color: white;
  }
</style>
