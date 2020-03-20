// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_user_Empty(arg) {
  if (!(arg instanceof user_pb.Empty)) {
    throw new Error('Expected argument of type user.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_Empty(buffer_arg) {
  return user_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ListUsersResponse(arg) {
  if (!(arg instanceof user_pb.ListUsersResponse)) {
    throw new Error('Expected argument of type user.ListUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ListUsersResponse(buffer_arg) {
  return user_pb.ListUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// #services
var UserServiceService = exports.UserServiceService = {
  listUsers: {
    path: '/user.UserService/listUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.Empty,
    responseType: user_pb.ListUsersResponse,
    requestSerialize: serialize_user_Empty,
    requestDeserialize: deserialize_user_Empty,
    responseSerialize: serialize_user_ListUsersResponse,
    responseDeserialize: deserialize_user_ListUsersResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
