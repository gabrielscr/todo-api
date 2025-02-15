import { Injectable } from '@nestjs/common';
import { BadRequestException, NotFoundException } from 'src/common/exceptions/exceptions';
import { Todo } from '../domain/todo.entity';
import { TodoPrismaRepository } from '../infra/todo.prisma.repository';

@Injectable()
export class TodoService {
    constructor(private todoRepository: TodoPrismaRepository) { }

    async getTodos(): Promise<Todo[]> {
        return this.todoRepository.findAll();
    }

    async addTodo(title: string): Promise<Todo> {
        if (!title) {
            throw new BadRequestException('Title is required');
        }

        return this.todoRepository.create(title);
    }

    async updateTodo(id: number, completed: boolean): Promise<Todo> {
        const todo = await this.todoRepository.findById(id);

        if (!todo) {
            throw new NotFoundException('Todo not found');
        }

        return this.todoRepository.update(id, completed);
    }

    async deleteTodo(id: number): Promise<void> {
        const todo = await this.todoRepository.findById(id);
        if (!todo) {
            throw new NotFoundException('Todo not found');
        }

        return this.todoRepository.delete(id);
    }
}