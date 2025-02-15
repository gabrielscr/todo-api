import { Injectable } from '@nestjs/common';
import { PrismaService } from '../config/prima.service';
import { Todo } from '../domain/todo.entity';

@Injectable()
export class TodoPrismaRepository {
    constructor(private prisma: PrismaService) { }

    async create(title: string): Promise<Todo> {
        return this.prisma.todo.create({ data: { title } });
    }

    async findAll(): Promise<Todo[]> {
        return this.prisma.todo.findMany();
    }

    async findById(id: number): Promise<Todo | null> {
        return this.prisma.todo.findUnique({ where: { id } });
    }

    async update(id: number, completed: boolean): Promise<Todo> {
        return this.prisma.todo.update({ where: { id }, data: { completed } });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.todo.delete({ where: { id } });
    }
}