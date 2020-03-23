package com.fevo.user.service

import java.util.UUID

import com.fevo.user.grpc.{Empty, ListUsersResponse, User, UserService}

import scala.concurrent.Future

class InMemoryUserService extends UserService {

  private val users = List(
    User(UUID.fromString("506cade2-dbd3-49b1-8eb2-1c13266cfdb6").toString, "john.doe@example.com"),
    User(UUID.fromString("a0d08d1d-4406-4868-88d2-ac792ca7cf1a").toString, "mary.ann@example.com"),
  )

  override def listUsers(in: Empty): Future[ListUsersResponse] = {
    Future.successful(ListUsersResponse(users))
  }

}
