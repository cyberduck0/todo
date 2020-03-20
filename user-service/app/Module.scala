import cn.playscala.mongo.Mongo
import com.google.inject.AbstractModule

class Module extends AbstractModule {

  override def configure(): Unit = {
      Mongo.setModelsPackage("models")
  }

}