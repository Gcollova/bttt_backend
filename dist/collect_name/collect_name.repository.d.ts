import { User } from "./interfaces/user_interface";
export declare class CollectUserRepository {
    create(user: User): Promise<void>;
}
