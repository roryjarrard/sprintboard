<script lang="ts">
    type Props = {
        value?: string;
    };

    let { value = $bindable("") }: Props = $props();
</script>

<label>
    Search tasks
    <input type="search" bind:value />
</label>
