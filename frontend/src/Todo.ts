export type Todo = {
    id: string
    description: string
    status: Status
}
type Status = "TODO" | "DOING" | "DONE"