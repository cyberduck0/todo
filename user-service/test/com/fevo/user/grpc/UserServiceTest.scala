package com.fevo.user.grpc

import scala.concurrent.Await
import scala.concurrent.duration._
import scala.language.postfixOps
import akka.actor.ActorSystem
import akka.stream.{ActorMaterializer, Materializer}
import com.fevo.user.service.UserServiceImpl
import com.typesafe.config.ConfigFactory
import org.scalatest.BeforeAndAfterAll
import org.scalatest.Matchers
import org.scalatest.WordSpecLike
import org.scalatest.concurrent.ScalaFutures
import org.scalatest.time.Span
import org.scalatest.time.Millis
import play.api.{Configuration, Mode}
import play.inject.guice.GuiceApplicationBuilder

import scala.concurrent.ExecutionContext.Implicits.global

class UserServiceSpec extends Matchers
  with WordSpecLike
  with BeforeAndAfterAll
  with ScalaFutures {

//  implicit val patience = PatienceConfig(5 seconds, Span(100, Millis))
//
//  implicit val system = ActorSystem("TestSystem")
//  implicit val mat = Materializer(system)
//
//  override def afterAll: Unit = Await.ready(system.terminate(), 5 seconds)
//
//  val app = new GuiceApplicationBuilder().build()
//
//  val userService = new UserServiceImpl()
//
//  "User service" should {
//    "return user info" in {
//      val expected = ListUsersResponse(Seq(User("YD", "Hovno")))
//      val actual = userService.listUsers(Empty())
//      actual.futureValue should ===(expected)
//    }
//  }

}