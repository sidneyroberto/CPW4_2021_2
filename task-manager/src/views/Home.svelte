<script lang="ts">
    import { currentTasks } from "../store/tasks";

    import type { Task } from "../models/Task";
    import TaskCard from "../components/TaskCard.svelte";

    let tasks: Task[];
    currentTasks.subscribe((value) => (tasks = value));
</script>

<div class="container">
    <h1>Suas tarefas</h1>

    {#each tasks as t}
        <TaskCard task={t} />
    {/each}
</div>

<style lang="scss">
    .container {
        h1 {
            font-family: "title";
            text-align: center;
        }
    }
</style>
