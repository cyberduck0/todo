package com.fevo.todo.api

import akka.actor.ActorSystem
import akka.http.scaladsl.{Http, HttpConnectionContext}
import akka.http.scaladsl.model._
import akka.stream.Materializer
import com.fevo.todo.grpc.TodoServiceHandler
import com.fevo.todo.service.InMemoryTodoService
import com.typesafe.scalalogging.StrictLogging

import scala.concurrent.{ExecutionContext, Future}

class Api(
  implicit executionContext: ExecutionContext,
  system: ActorSystem,
  materializer: Materializer
) extends StrictLogging {

  val service: HttpRequest => Future[HttpResponse] =
    TodoServiceHandler(new InMemoryTodoService())

  Http()
    .bindAndHandleAsync(
      service,
      interface = "127.0.0.1",
      port = 8081,
      connectionContext = HttpConnectionContext()
    )
    .foreach(binding =>
      logger.info(s"gRPC server bound to: ${binding.localAddress}")
    )

}

object Api {

  def apply()(
    implicit executionContext: ExecutionContext,
    system: ActorSystem,
    materializer: Materializer
  ): Api =
    new Api()

}
