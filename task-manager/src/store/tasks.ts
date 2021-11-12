import axios from "axios"
import { writable } from "svelte/store";
import { API_URL } from "../config"
import { Task } from "../models/Task"

const http = axios.create({
    baseURL: API_URL,
})

const loadTasks = async (): Promise<Task[]> => {
    const response = await http.get('/tasks')
    const data = response.data
    let tasks: Task[] = []
    if (data) {
        tasks = data.map((result: any) => {
            const { description, priorityLevel, deadline, id } = result
            return new Task(description, priorityLevel, new Date(deadline), id)
        })
    }

    return tasks
}

export const updateTasks = async () => {
    const tasks = await loadTasks();
    currentTasks.update(value => value = tasks);
}

export let currentTasks = writable<Task[]>(await loadTasks())