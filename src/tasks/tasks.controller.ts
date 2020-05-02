import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Get()
    getAllTasks(){
        return this.taskService.getAllTasks()
    }

    @Post()
    createTask(@Body("title") title: string, @Body("description") description: string){
        return this.taskService.createTask(title, description)
    }
}
