import { CollectUserRepository } from './collect_user.repository';
import { User } from './interfaces/user_interface';
export declare class CollectUserService {
    collectUserRepo: CollectUserRepository;
    constructor(collectUserRepo: CollectUserRepository);
    create(user: User): Promise<void>;
}
