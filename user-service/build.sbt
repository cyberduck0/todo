name := "user-service"

version := "1.0-SNAPSHOT"

scalaVersion := "2.12.10"

enablePlugins(PlayScala)
enablePlugins(AkkaGrpcPlugin)
enablePlugins(PlayAkkaHttp2Support)

import play.grpc.gen.scaladsl._
akkaGrpcGeneratedLanguages := Seq(AkkaGrpc.Scala)
akkaGrpcExtraGenerators ++= Seq(PlayScalaServerCodeGenerator, PlayScalaClientCodeGenerator)

libraryDependencies ++= Seq(
  guice,
  "com.typesafe.scala-logging" % "scala-logging_2.12" % "3.5.0",
  "org.scala-lang.modules" % "scala-async_2.12" % "0.9.7",
  "ch.qos.logback" % "logback-classic" % "1.1.3",
  "com.typesafe.akka" %% "akka-discovery" % "2.6.3", // avoiding eviction
  "com.lightbend.play" %% "play-grpc-runtime" % "0.8.1",
  "cn.playscala" % "play-mongo_2.12" % "0.3.1",
  "cn.playscala" %% "codecs" % "0.3.1",
  "org.mongodb" % "bson" % "3.7.0",
  "org.mongodb.scala" %% "mongo-scala-driver" % "2.7.0",
  "org.scalatest" % "scalatest_2.12" % "3.0.1" % "test",
  "org.scalamock" % "scalamock_2.12" % "4.1.0" % "test",
  "junit" % "junit" % "4.11" % "test",
)

addCompilerPlugin("org.scalamacros" % "paradise" % "2.1.1" cross CrossVersion.full)