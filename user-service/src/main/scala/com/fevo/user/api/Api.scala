package com.fevo.user.api

import akka.actor.ActorSystem
import akka.http.scaladsl.{Http, HttpConnectionContext}
import akka.http.scaladsl.model._
import akka.stream.Materializer
import com.fevo.user.grpc.UserServiceHandler
import com.fevo.user.service.InMemoryUserService
import com.typesafe.scalalogging.StrictLogging

import scala.concurrent.{ExecutionContext, Future}

class Api(
  implicit executionContext: ExecutionContext,
  system: ActorSystem,
  materializer: Materializer
) extends StrictLogging {

  val service: HttpRequest => Future[HttpResponse] =
    UserServiceHandler(new InMemoryUserService())

  Http()
    .bindAndHandleAsync(
      service,
      interface = "127.0.0.1",
      port = 8082,
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
