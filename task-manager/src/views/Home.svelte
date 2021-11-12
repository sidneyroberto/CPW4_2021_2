<script lang="ts">
    import { currentTasks, updateTasks } from "../store/tasks";

    import { PriorityLevel, Task } from "../models/Task";
    import TaskCard from "../components/TaskCard.svelte";
    import axios from "axios";
    import { API_URL } from "../config";

    const setCurrentDate = () => {
        let date = new Date();
        let day = date.getDate();
        let dayStr = day < 10 ? `0${day}` : day;
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return `${year}-${month}-${dayStr}`;
    };

    let tasks: Task[];
    let description: string = "";
    let deadline: string = "";
    let priorityLevel: string = PriorityLevel[0];
    let currentDate = setCurrentDate();
    currentTasks.subscribe((value) => (tasks = value));

    const saveTask = (event) => {
        event.preventDefault();
        console.log(deadline);
        const task = new Task(
            description,
            PriorityLevel[priorityLevel],
            new Date(`${deadline}T00:00:00`)
        );

        console.log(task);

        const http = axios.create({
            baseURL: API_URL,
        });

        http.post("/tasks", task)
            .then((result) => updateTasks())
            .catch((error) => {
                const { status, data } = error.response;
                console.log({ status, data });
            })
            .finally(() => {
                description = "";
                deadline = "";
                priorityLevel = PriorityLevel[0];
            });
    };
</script>

<div class="container">
    <h1>Suas tarefas</h1>

    <div class="taskForm">
        <form on:submit={saveTask}>
            <div class="formInput">
                <div>
                    <label for="description">Descrição</label>
                </div>
                <div>
                    <input
                        required
                        type="text"
                        name="description"
                        bind:value={description}
                    />
                </div>
            </div>
            <div class="formInput">
                <div>
                    <label for="deadline">Prazo final</label>
                </div>
                <div>
                    <input
                        required
                        min={currentDate}
                        type="date"
                        name="deadline"
                        bind:value={deadline}
                    />
                </div>
            </div>
            <div class="formInput">
                <div>
                    <label for="priorityLevel">Nível de prioridade</label>
                </div>
                <div>
                    <select name="priorityLevel" bind:value={priorityLevel}>
                        {#each Object.values(PriorityLevel) as p}
                            {#if typeof p == "string"}
                                <option value={p}>{p}</option>
                            {/if}
                        {/each}
                    </select>
                </div>
            </div>

            <input type="submit" value="Salvar" />
        </form>
    </div>

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

    .taskForm {
        margin: 20px auto;
        width: 60%;
        border: 2px solid #ccc;
        border-radius: 15px;
        padding: 10px;
        text-align: center;

        .formInput {
            display: flex;

            * {
                width: 50%;

                &:first-child {
                    text-align: right;
                    padding-right: 5px;
                }

                &:last-child {
                    padding-left: 5px;
                    text-align: left;
                }
            }

            input,
            select,
            option {
                font-family: "standard";
            }

            input[type="text"] {
                width: 90%;
            }

            select,
            option {
                text-align: center !important;
            }
        }

        input[type="submit"] {
            margin-top: 20px;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            font-family: "title";
            color: white;
            background: linear-gradient(45deg, #8c14fc, #bf55ec);
        }
    }
</style>
