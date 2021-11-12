export enum PriorityLevel {
    BAIXA, MEDIA, ALTA
}

export class Task {
    id: number
    description: string
    priorityLevel: PriorityLevel
    deadline: Date

    constructor(
        description: string,
        priorityLevel: PriorityLevel,
        deadline: Date,
        id?: number) {
        this.description = description
        this.priorityLevel = priorityLevel
        this.deadline = deadline
        this.id = id
    }
}