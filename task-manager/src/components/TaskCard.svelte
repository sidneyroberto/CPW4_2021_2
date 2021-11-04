<script lang="ts">
    import { PriorityLevel, Task } from "../models/Task";

    export let task: Task;

    const taskColor = (priorityLevel: PriorityLevel) => {
        switch (priorityLevel) {
            case PriorityLevel.BAIXA:
                return "low";
            case PriorityLevel.MEDIA:
                return "medium";
            case PriorityLevel.ALTA:
                return "high";
        }
    };
</script>

<div class="taskCard">
    <div class="description">
        <span>{task.description}</span>
    </div>

    <div class="deadline">
        <span>{task.deadline.toLocaleDateString()}</span>
    </div>

    <div class="priorityLevel">
        <span class={taskColor(task.priorityLevel)}
            >{PriorityLevel[task.priorityLevel]}</span
        >
    </div>
</div>

<style lang="scss">
    .taskCard {
        border: none;
        border-radius: 15px;
        width: 60%;
        margin: auto auto 10px auto;
        padding: 20px;
        display: flex;
        background: linear-gradient(45deg, #8c14fc, #bf55ec);

        * {
            width: 33%;
        }

        .deadline {
            text-align: center;
        }

        .priorityLevel {
            text-align: right;
        }

        span {
            color: white;
            font-family: "title";
        }
    }

    .low,
    .medium,
    .high {
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
    }

    .low {
        background-color: #23cba7;
    }

    .medium {
        background-color: #f5ab35;
    }

    .high {
        background-color: #d64541;
    }
</style>
