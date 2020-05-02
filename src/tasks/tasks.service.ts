import { Injectable } from '@nestjs/common';
import { Task, Status } from './task.module';
import * as uuid from 'uuidv1'

@Injectable()
export class TasksService {
    private tasks = []


    getAllTasks(){

        
        const result = {
            "task" : this.tasks
        }
        const data = {
            "status" : "0",
            "message" : "Fetched all tasks successfully.",
            "count" : this.tasks.length,
            "result" : result
        }

        return data
    }

    createTask(title : string, description: string){

        const task : Task = {
            id : uuid(),
            status : Status.OPEN,
            title,
            description
        } 

        this.tasks.push(task)


        const result = {
            "task" : task
        }
        const data = {
            "status" : "0",
            "message" : "Task created successfully.",
            "result" : result
        }
        return data
    }

}
