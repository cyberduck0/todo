import { User } from "../model/user";

export interface UserService {

    listUsers(): Promise<User[]>

}
