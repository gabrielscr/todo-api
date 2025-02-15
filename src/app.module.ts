import { Module } from '@nestjs/common';
import { PrismaService } from './app/config/prima.service';
import { TodoPrismaRepository } from './app/infra/todo.prisma.repository';
import { TodoController } from './app/presentation/todo.controller';
import { TodoService } from './app/todo/todo.service';


@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService, TodoPrismaRepository, PrismaService],
})
export class AppModule { }