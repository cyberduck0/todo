import cn.playscala.mongo.Mongo
import com.google.inject.AbstractModule
import mongo.model.UserCodecRegistry

class Module extends AbstractModule {

  override def configure(): Unit = {
      Mongo.addCodecRegistry(UserCodecRegistry)
  }

}