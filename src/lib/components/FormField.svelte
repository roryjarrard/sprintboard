<script lang="ts">
  type Props = {
    id: string;
    name: string;
    label: string;
    type?: "text" | "email" | "search" | "password";
    value?: string;
    required?: boolean;
    hint?: string;
  };

  let {
    id,
    name,
    label,
    type = "text",
    value = $bindable(""),
    required = false,
    hint,
  }: Props = $props();
</script>

<div class="field">
  <label for={id}>{label}</label>

  <input
    {id}
    {name}
    {type}
    {required}
    bind:value
    aria-describedby={hint ? `${id}-hint` : undefined}
  />

  {#if hint}
    <p class="hint" id={`${id}-hint`}>{hint}</p>
  {/if}
</div>

<style lang="scss">
  .field {
    display: grid;
    gap: 0.4rem;
  }

  label {
    font-weight: 700;
  }

  input {
    width: 100%;
    min-height: 2.75rem;
    padding: 0.65rem 0.75rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    background: var(--color-surface);
    color: var(--color-text);
  }

  .hint {
    margin: 0;
    font-size: 0.9rem;
    color: var(--color-muted);
  }
</style>
