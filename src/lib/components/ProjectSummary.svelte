<script lang="ts">
    import TaskWorkspace from "#lib/components/TaskWorkspace.svelte";
    const projectName = "SprintBoard Launch";
    const description =
        "Prepare the first production-ready version of SprintBoard.";
</script>

<section class="project-summary">
    <p class="label">Current project</p>
    <h2>{projectName}</h2>
    <p>{description}</p>
    <TaskWorkspace />
</section>

<style>
    .project-summary {
        padding: 1.5rem;
        background: #fff;
        border-radius: 0.75rem;
    }

    .label {
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
    }

    h2 {
        margin: 0.4rem 0;
    }
</style>
