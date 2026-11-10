<script lang="ts">
    import type { Task } from "#lib/types/task.ts";

    type Props = {
        task: Task;
        onToggle: (id: number) => void;
    };

    let { task, onToggle }: Props = $props();
</script>

<article class:completed={task.completed}>
    <h3>{task.title}</h3>
    <p>{task.completed ? "Completed" : "Open"}</p>

    <button type="button" onclick={() => onToggle(task.id)}>
        {task.completed ? "Reopen task" : "Complete task"}
    </button>
</article>

<style>
    article {
        padding: 1rem;
        border: 1px solid #d8deea;
        border-radius: 0.75rem;
        background: white;
    }

    article.completed {
        opacity: 0.7;
    }

    h3 {
        margin: 0 0 0.4rem;
    }
</style>
