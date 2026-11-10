<script lang="ts">
  import TaskCard from "./TaskCard.svelte";
  import type { Task } from "#lib/types/task.ts";

  type Props = {
    tasks: Task[];
    onToggle: (id: number) => void;
  };

  let { tasks, onToggle }: Props = $props();
</script>

{#if tasks.length === 0}
  <p class="empty">No tasks match this view.</p>
{:else}
  <div class="task-list">
    {#each tasks as task (task.id)}
      <TaskCard {task} {onToggle} />
    {/each}
  </div>
{/if}

<style>
  .task-list {
    display: grid;
    gap: 0.75rem;
  }

  .empty {
    padding: 1rem;
    background: white;
    border-radius: 0.75rem;
  }
</style>
