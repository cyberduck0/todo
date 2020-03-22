package com.fevo.todo.service

import java.time.Instant
import java.util.UUID

import com.fevo.todo.grpc._

import scala.concurrent.Future

class InMemoryTodoService extends TodoService {

  private var todos = List.empty[Todo]

  private var todoItems = Map.empty[String, List[TodoItem]]

  override def listTodos(in: ListTodosRequest): Future[ListTodosResponse] = {
    Future.successful(ListTodosResponse(todos))
  }

  override def listTodoItems(in: ListTodoItemsRequest): Future[ListTodoItemsResponse] = {
    Future.successful(ListTodoItemsResponse(todoItems(in.id)))
  }

  override def addTodo(in: AddTodoRequest): Future[Id] = {
    val id = UUID.randomUUID().toString
    todos = todos :+ Todo(id, title = in.title)
    Future.successful(Id(id))
  }

  override def removeTodo(in: Id): Future[Empty] = {
    todos = todos.filter(_.id != in.id)
    Future.successful(Empty())
  }

  override def editTodoTitle(in: EditTodoTitleRequest): Future[Empty] = {
    todos = mapTodos(in.id, _.withTitle(in.title))
    Future.successful(Empty())
  }

  override def editTodoDescription(in: EditTodoDescriptionRequest): Future[Empty] = {
    todos = mapTodos(in.id, _.withDescription(in.description))
    Future.successful(Empty())
  }

  override def addTodoItem(in: AddTodoItemRequest): Future[Id] = {
    val id = UUID.randomUUID().toString
    val newItem = TodoItem(id, in.content, created = Instant.now().getEpochSecond)

    val todoId = in.todoId
    val currentItems = todoItems.getOrElse(todoId, Nil)
    todoItems = todoItems.updated(todoId, currentItems :+ newItem)

    Future.successful(Id(id))
  }

  override def removeTodoItem(in: RemoveTodoItemRequest): Future[Empty] = {
    val currentItems = todoItems.getOrElse(in.todoId, Nil)
    todoItems = todoItems.updated(in.todoId, currentItems.filter(ti => ti.id != in.id))
    Future.successful(Empty())
  }

  override def toggleTodoItem(in: ToggleTodoItemRequest): Future[Empty] = {
    todoItems = mapTodoItem(in.todoId, in.id, _.withDone(in.done))
    Future.successful(Empty())
  }

  override def editTodoItem(in: EditTodoItemContentRequest): Future[Empty] = {
    todoItems = mapTodoItem(in.todoId, in.id, _.withContent(in.content))
    Future.successful(Empty())
  }

  private def mapTodos(id: String, map: Todo => Todo): List[Todo] = {
    todos.map {
      case t : Todo if t.id == id => map(t)
      case other => other
    }
  }

  private def mapTodoItem(todoId: String, id: String, map: TodoItem => TodoItem): Map[String, List[TodoItem]] = {
    mapTodoItems(todoId, _.map {
      case t : TodoItem if t.id == id => map(t)
      case other => other
    })
  }

  private def mapTodoItems(todoId: String, map: List[TodoItem] => List[TodoItem]): Map[String, List[TodoItem]] = {
    val currentItems = todoItems.getOrElse(todoId, Nil)
    todoItems.updated(todoId, map(currentItems))
  }

}
