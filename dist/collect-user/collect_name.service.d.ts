import { CollectUserRepository } from './collect_name.repository';
import { User } from './interfaces/user_interface';
export declare class CollectUserService {
    collectUserRepo: CollectUserRepository;
    constructor();
    create(user: User): Promise<void>;
}
