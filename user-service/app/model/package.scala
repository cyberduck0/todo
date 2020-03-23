package com.fevo.user

import java.util.UUID

package object model {

  case class User(id: UUID, name: String)

  object Implicits {

    implicit def userCompanionToFactory(comp: grpc.User.type): GrpcUserFactory.type = GrpcUserFactory

    object GrpcUserFactory {
      def formUser(user: User): grpc.User = grpc.User(user.id.toString, user.name)
    }

  }

}
