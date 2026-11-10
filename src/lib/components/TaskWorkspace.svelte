<script lang="ts">
    import TaskCard from "#lib/components/TaskCard.svelte";
    import SearchField from "#lib/components/SearchField.svelte";
    import type { Task } from "#lib/types/task.ts";

    let tasks = $state<Task[]>([
        { id: 1, title: "Design the UI", completed: false },
        { id: 2, title: "Implement the backend", completed: false },
        { id: 3, title: "Write tests", completed: false },
    ]);

    let remainingTasks = $derived(
        tasks.filter((task) => !task.completed).length,
    );

    let completionPercentage = $derived.by(() => {
        if (tasks.length === 0) return 0;
        return Math.round(
            (tasks.filter((task) => task.completed).length / tasks.length) *
                100,
        );
    });

    let compactView = $state(false);

    $effect(() => {
        localStorage.setItem("sprintboaard:compact-view", String(compactView));
    });

    function toggleTask(id: number) {
        const task = tasks.find((item) => item.id === id);
        if (task) {
            task.completed = !task.completed;
        }
    }

    let newTaskTitle = $state("");

    function addTask() {
        const title = newTaskTitle.trim();

        if (!title) return;

        tasks.push({
            id: Date.now(),
            title,
            completed: false,
        });
        newTaskTitle = "";
    }

    let search = $state("");
</script>

<SearchField bind:value={search} />

{#each tasks.filter((task) => task.title
        .toLowerCase()
        .includes(search.toLowerCase())) as task (task.id)}
    <div class="space-1"></div>
    <TaskCard {task} onToggle={toggleTask} />
{/each}

<div class="space-1">
    <p>
        {remainingTasks} of {tasks.length} tasks remaining (
        {completionPercentage}% complete)
    </p>
</div>

<section class="add-task space-2">
    <h2>Add a new task</h2>
    <label>
        Task title
        <input
            type="text"
            bind:value={newTaskTitle}
            placeholder="Enter task title"
        />
    </label>
    <button type="button" onclick={addTask}>Add task</button>
</section>

<label
    ><input type="checkbox" bind:checked={compactView} /> Compact task view</label
>

<style>
    .space-1 {
        margin-bottom: 1rem;
    }

    .space-2 {
        margin-bottom: 2rem;
    }
</style>
