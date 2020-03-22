package com.fevo.todo

import akka.actor.ActorSystem
import akka.stream.{ActorMaterializer, Materializer}
import com.fevo.todo.api.Api
import com.typesafe.config.{Config, ConfigFactory}

import scala.concurrent.ExecutionContext

object Runner extends App {

  val conf: Config = ConfigFactory
    .parseString("akka.http.server.preview.enable-http2 = on")

  implicit val ec: ExecutionContext = ExecutionContext.global
  implicit val system: ActorSystem = ActorSystem("HelloWorld", conf)
  implicit val materializer: Materializer = ActorMaterializer()

  Api()

}
