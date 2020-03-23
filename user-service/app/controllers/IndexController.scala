package com.fevo.user.controller


import akka.actor.ActorSystem
import akka.stream.Materializer
import cn.playscala.mongo.Mongo
import com.fevo.user.grpc
import com.fevo.user.model.Implicits._
import javax.inject.Inject
import mongo.model._
import play.api.mvc.InjectedController

import scala.async.Async._
import scala.concurrent.ExecutionContext

class IndexController @Inject()(val mongo: Mongo)(implicit mat: Materializer, actorSystem: ActorSystem, ec: ExecutionContext)  extends InjectedController {

  def index = Action.async {
    async {
      val dbUsers = await(mongo.find[DbUser].list())
      val grpcUsers = dbUsers map (_.toUser) map grpc.User.formUser
      Ok(grpcUsers mkString "\n")
    }
  }

}