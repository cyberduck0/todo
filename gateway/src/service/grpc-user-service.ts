import { UserService } from "./user-service";
import { UserServiceClient } from "../generated/pb/user_grpc_pb";
import { User } from "../model/user";
import { Empty } from "../generated/pb/user_pb";

export class GrpcUserService implements UserService {

    constructor(private client: UserServiceClient) { }

    listUsers(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            this.client.listUsers(new Empty, (err, res) => {
                if (err) reject(err);
                else {
                    const users: User[] = res.getUsersList().map(u => ({
                        id: u.getId(),
                        username: u.getUsername()
                    }));

                    resolve(users);
                }
            });
        })
    }

}