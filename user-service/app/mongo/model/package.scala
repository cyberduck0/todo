package mongo

import java.util.UUID

import cn.playscala.mongo.annotations.Entity
import com.fevo.user.model._
import org.bson.codecs.configuration.CodecRegistries._
import org.bson.codecs.Codec
import org.mongodb.scala.bson.codecs.Macros

package object model {

  @Entity("users")
  case class DbUser(_id: String, name: String) {
    def toUser = User(UUID.fromString(_id), name)
  }

  val UserCodecRegistry = fromCodecs(
    Macros.createCodec[DbUser]
  )

}
