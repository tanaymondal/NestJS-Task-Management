export interface Task{
    id : String,
    title : String,
    description : String,
    status : Status
}

export enum Status{
    OPEN = "OPEN",
    IN_PROGESS = "IN_PROGRESS",
    CLOSE = "CLOSE"
}