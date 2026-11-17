<script lang="ts">
  import { page } from "$app/state";

  let view = $derived(page.url.searchParams.get("view"));
</script>

<h1>Tasks</h1>

<p>view: {view ?? "all"}</p>

<nav aria-label="Filter tasks">
  <a href="/my-tasks?view=all">All</a>
  <a href="/my-tasks?view=open">Open</a>
  <a href="/my-tasks?view=completed">Completed</a>
</nav>
