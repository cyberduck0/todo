package com.fevo.user.service


import java.util.UUID

import akka.actor.ActorSystem
import akka.stream.Materializer
import cn.playscala.mongo.Mongo
import com.fevo.user.grpc
import com.fevo.user.model.Implicits._
import com.fevo.user.grpc.{AbstractUserServiceRouter, Empty, ListUsersResponse}
import config.MongoConfig
import javax.inject.Inject
import javax.inject.Singleton
import mongo.model.DbUser
import play.api.Configuration
import play.api.mvc.ControllerComponents

import scala.async.Async._
import scala.concurrent.{ExecutionContext, Future}

@Singleton
class UserServiceImpl @Inject()(val mongo: Mongo)(implicit mat: Materializer, actorSystem: ActorSystem, ec: ExecutionContext)
  extends AbstractUserServiceRouter(mat, actorSystem) {

  override def listUsers(in: Empty): Future[ListUsersResponse] = async {
    val dbUsers = await(mongo.find[DbUser].list())
    val grpcUsers = dbUsers map (u => userCompanionToFactory(grpc.User).formUser(u.toUser))
    ListUsersResponse(grpcUsers)
  }

}
