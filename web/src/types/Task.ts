export interface Task {
    id: number
    workspaceId: number
    title: string
    description: string
    starred: boolean
    status: string
    committedAt: Date
    completedAt: Date
    dueAt: Date
    createdAt: string
    updatedAt: string
}