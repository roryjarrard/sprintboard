<script lang="ts">
    import ProjectSummary from "#lib/components/ProjectSummary.svelte";
    import TaskWorkspace from "#lib/components/TaskWorkspace.svelte";

    const appName = "SprintBoard";
    const tagline = "Plan projects, organize tasks, and keep work moving.";
</script>

<svelte:head>
    <title>{appName}</title>
    <meta
        name="description"
        content="A practical project management tool for planning and organizing tasks."
    />
</svelte:head>

<main class="page">
    <section class="hero">
        <p class="eyebrow">Project and task management.</p>
        <h1>{appName}</h1>
        <p class="lead">{tagline}</p>

        <a href="#features" class="button">Explore SprintBoard</a>
    </section>

    <section class="features" id="features">
        <article>
            <h2>Organize projects</h2>
            <p>Keep related work grouped in clear project workspaces.</p>
        </article>

        <article>
            <h2>Manage tasks</h2>
            <p>
                Track priorities, progress, and the work that needs attention.
            </p>
        </article>

        <article>
            <h2>Work securely</h2>
            <p>Protect application data with authenticated user accounts.</p>
        </article>
    </section>

    <ProjectSummary />
</main>

<style>
    :global(body) {
        margin: 0;
        font-family: system-ui, sans-serif;
        background: #f5f7fb;
        color: #182033;
    }

    .page {
        max-width: 960px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
    }

    .hero {
        padding: 4rem 0;
    }

    .eyebrow {
        font-weight: 700;
        text-transform: uppercase;
    }

    h1 {
        font-size: clamp(2.5rem, 8vw, 5rem);
        margin: 0.5rem 0;
    }

    .lead {
        max-width: 600px;
        font-size: 1.2rem;
        line-height: 1.6;
    }

    .button {
        display: inline-block;
        margin-top: 1rem;
        padding: 0.8rem 1.1rem;
        background: #182033;
        color: #fff;
        text-decoration: none;
        border-radius: 0.5rem;
    }

    .features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
    }

    article {
        padding: 1.25rem;
        background: #fff;
        border-radius: 0.75rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
</style>
