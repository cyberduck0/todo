package config

import play.api.Configuration

trait MongoConfig {

  protected val appConfig: Configuration

  object mongoConfig {

    val uri = appConfig.underlying.getString("fevo.user.mongodb.uri")

  }

}
