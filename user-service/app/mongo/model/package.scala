package mongo

import java.util.UUID

import cn.playscala.mongo.annotations.Entity
import com.fevo.user.model._

package object model {

  @Entity("users")
  case class DbUser(_id: UUID, name: String) {
    def toUser = User(_id, name)
  }

}
