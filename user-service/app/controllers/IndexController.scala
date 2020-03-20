package com.fevo.user.controller

import play.api.mvc.InjectedController

import scala.concurrent.Future

class IndexController extends InjectedController {



  def index = Action.async {
    Future.successful(Ok(""))
  }

}
