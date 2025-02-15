import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoService } from '../todo/todo.service';

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @Get()
    getTodos() {
        return this.todoService.getTodos();
    }

    @Post()
    addTodo(@Body('title') title: string) {
        return this.todoService.addTodo(title);
    }

    @Patch(':id')
    updateTodo(@Param('id') id: number, @Body('completed') completed: boolean) {
        return this.todoService.updateTodo(Number(id), completed);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: number) {
        return this.todoService.deleteTodo(Number(id));
    }
}